import express from "express";
import db from "./config/db.js";
import routes from './routes/index.js';


db.on("erro", console.log.bind(console, "erro de conexao"))
db.once("open", () => {
    console.log("conexao realizada com sucesso")
})



const app = express()
app.use(express.json())
routes(app)













export default app