import express from 'express'
import dotenv from 'dotenv'
import './Model/Connection'
import { postrouter } from './Controller/createBlog'
import { getSingle } from './Controller/findSingle'
import { getAll } from './Controller/findAll'
import { deleteBlog } from './Controller/Deleteblog'
import swaggerjsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './swaggerConfig'
import { updateRouter } from './Controller/updateBlog'
dotenv.config()
const{PORT_NUMBER}=process.env

const app=express()


app.use(express.json());
const swaggerDocs = swaggerjsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/v1',postrouter)
app.use('/api/v1',getSingle)
app.use('/api/v1',getAll)
app.use('/api/v1',deleteBlog)
app.use('/api/v1',updateRouter)
app.listen(PORT_NUMBER,()=>{
    console.log(`listening to port ${PORT_NUMBER}`)
})




