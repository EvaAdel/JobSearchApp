import express from "express";
import { config } from "dotenv";

import {db_connection} from "./DB/connection.js";
import { errorHandlerResponse } from "./src/middlewares/error-handling-middleware.js";
 import companyRouter from "./src/modules/company/company.router.js";
import jobRouter from "./src/modules/job/job.router.js";
import userRouter from "./src/modules/user/user.router.js";

const app = express();

config();

const port = process.env.PORT ; //3000

app.use(express.json());

app.use("/user", userRouter); 
app.use("/company", companyRouter);
app.use("/job", jobRouter);

app.use(errorHandlerResponse);

db_connection()

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



//IN THE END WE MUST DELETE THE NODE_MODULES BEFORE SENDING THE project OR TO GITHUB 
//IN THE END WE MUST DELETE ALL CONSOLE.LOG() FROM ANY FILE ma3da SERVER & DATABASE BEFORE SENDING THE PROJECT OR TO GITHUB