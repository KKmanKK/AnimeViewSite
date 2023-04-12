import express, {Request,Response} from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express();

const PORT =  process.env.PORT || 5000 ;


const start =():void =>{
    app.listen(PORT, ()=>console.log("Сервер запущен"))
}
start();