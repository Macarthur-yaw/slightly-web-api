import {Schema,model} from 'mongoose'

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - author
 *         - Date 
 *         - imgUrl   
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the blog post
 *         content:
 *           type: string
 *           description: The content or body of the blog post
 *         author:
 *           type: string
 *           description: The author of the blog post
 *       example:
 *         title: "Blog Post Title"
 *         content: "This is the content of the blog post."
 *         author: "Author Name"
 */

type blog={
    title:string ,
    content:string ,
    author:string,
    date:string ,
    imgurl:string  
}
const newblog = new Schema<blog>({
title:{
    type:String,
    required:true
},
content:{
    type:String ,
    required:true
},
author:{
    type:String,
    required:true 
},
date:{
    type:String,
    required:true
},imgurl:{
    type:String,
    required:true
}
})
export const blogmodel=model("newblog",newblog)