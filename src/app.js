import express  from "express";

const app = express()

app.use(express.json())

const livros = [
   {id:1, "titulo":"senhor dos aneis"},
   {id:2,"titulo":"harry-potter",}       
]
    

app.get("/",(req,res)=>{
    res.status(200).send("curso de node")

})

app.get("/livros",(req,res)=>{
    res.status(200).json(livros)
})


app.get("/livros/:id",(req,res)=>{
    let index = BuscaLivro(req.params.id)

    res.json(livros[index])

})


app.post('/livros',(req,res)=>{
    livros.push(req.body)
    res.status(201).send("livro cadastrado com sucesso")
})

app.put("/livros/:id",(req,res)=>{
    let index = BuscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)

})

function BuscaLivro(id){
    return livros.findIndex(livros => livros.id == id)
}



app.delete("/livros/:id",(req,res)=>{
    let {id} = req.params
    let index = BuscaLivro(id)
    livros.splice(index,1)
    res.send(`livro ${id} removido com sucesso` )

})


export default app