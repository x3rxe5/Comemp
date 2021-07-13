import userRoute from "./userRoutes";
import companyRoute from "./companyRoutes";
import authRoute from "./authRoutes";
import employeeRoute from "./employeeRoutes";
import express from "express";

const app = express();

app.use(userRoute);
app.use(employeeRoute);
app.use(authRoute);
app.use(companyRoute);

export default app;

