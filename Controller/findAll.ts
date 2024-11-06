import express,{Request,Response, Router} from 'express'
import { blogmodel } from '../Model/blogsSchema'
const router=Router()


/** 
 * @swagger
 * /api/v1/ :
 *   get:
 *     summary: gets all the blogs
 *      
 *     responses:
 *        
 *        content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *        200:
 *          description: done
 *        500:
 *         description: Internal server error
*/



export const getAll=router.get('/',async(req:Request,res:Response)=>{


   

    try {
      
        const results =await blogmodel.find()
if(results){
res.status(200).send({results})

}
       
       
    } catch (error) {
        res.status(500).send({message:'internal server error'})
    }


})

