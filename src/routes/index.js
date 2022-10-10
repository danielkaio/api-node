import express from 'express'
import livros from '../routes/livroRoutes.js'
import autores from '../routes/autoresRoutes.js'


const routes = (app)=>{

    

    app.use(
        express.json(),
        livros,
        autores
    )

}

export default routes
