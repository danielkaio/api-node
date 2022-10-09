import express from "express";
import db from "./config/db.js";
import livros from "./models/livro.js";
import routes from './routes/index.js';


db.on("erro", console.log.bind(console, "erro de conexao"))
db.once("open", () => {
    console.log("conexao realizada com sucesso")
})



const app = express()
app.use(express.json())
routes(app)





app.get("/livros/:id", (req, res) => {
    let index = BuscaLivro(req.params.id)

    res.json(livros[index])

})




app.put("/livros/:id", (req, res) => {
    let index = BuscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)

})

function BuscaLivro(id) {
    return livros.findIndex(livros => livros.id == id)
}



app.delete("/livros/:id", (req, res) => {
    let { id } = req.params
    let index = BuscaLivro(id)
    livros.splice(index, 1)
    res.send(`livro ${id} removido com sucesso`)

})


export default app