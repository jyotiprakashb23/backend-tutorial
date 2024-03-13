import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
})) // cors stands for cross origin ....
// it basically defines from which ports our backend can be accessed

app.use(express.json({
    limit:'16kb'
})) // json data that will be coming from backend cannot exceed 14kb

app.use(express.urlencoded({extended:true , limit:true})) // nested objects

app.use(express.static("public"))// a folder to keep files

app.use(cookieParser()) // a secure way to store and retrive cookies in the client device
export {app}