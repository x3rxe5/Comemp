import express,{ Request,Response } from "express";
import cors from "cors";
import  morgan from "morgan";
import dotenv from "dotenv";
import chalk from "chalk";
import emoji from "node-emoji";
import { connect } from "mongoose";
import route from "./routes/index";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config({ path: "./src/config.env"});
const PORT:number = 5000 || Number(process.env.PORT);
const DB_URL:string = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.05fi8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type'],
	credentials: true
}));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.get('/cookie', (req, res) => {

	console.log('Cookies: ', req.cookies)



	console.log('Signed Cookies: ', req.signedCookies)
	res.status(200).json({
		cookies:req.cookies
	})
})

connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(():void => console.log(chalk.green(`${emoji.get('champagne')} DB CONNECTION SUCCESSFUL ✅`)))
.catch((err:any) => console.log(chalk.red(`${emoji.get("exclamation")} ERROR OCCURED -> ${err}`)));

const server = app.listen(PORT,() => {
	console.log(chalk.green(`App is listening on 👉 ${chalk.black.bgWhite.bold(String(PORT))}`));
});

app.all("*",(req:Request,res:Response):any => {
	const message:string = `Dont find [ ${req.params[0]} ] on this server`
	res.status(400).json({
		status:"FAILURE",
		body:message
	});
});

process.on("unhandledRejection", (err:any)=> {
	console.log(chalk.red(`[${emoji.get('wrong')}] UNHANDLE REJECTION ${emoji.get('fire')}`));
	console.log(err.name,err.message);
	server.close(() => {
		process.exit(1);
	})
})


