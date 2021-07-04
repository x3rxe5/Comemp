import express,{ Errback } from "express";
import cors from "cors";
import  morgan from "morgan";
import dotenv from "dotenv";
import chalk from "chalk";
import emoji from "node-emoji";
import { connect } from "mongoose";
import route from "./routes/index";

const app = express();
dotenv.config({ path:"./src/config.env"});
const PORT:number = 5000 || Number(process.env.PORT);
const DB_URL:string = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.05fi8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(route);

connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(():void => console.log(chalk.green(`${emoji.get('champagne')} DB CONNECTION SUCCESSFUL ✅`)))
.catch((err) => console.log(chalk.red(`${emoji.get("exclamation")} ERROR OCCURED -> ${err}`)));

const server = app.listen(PORT,() => {
	console.log(chalk.green(`App is listening on 👉 ${chalk.black.bgWhite.bold(String(PORT))}`));
});

process.on("unhandledRejection", (err:any)=> {
	console.log(chalk.red(`[${emoji.get('wrong')}] UNHANDLE REJECTION ${emoji.get('fire')}`));
	console.log(err.name,err.message);
	server.close(() => {
		process.exit(1);
	})
})


