import express, { Request, Response, Router } from 'express';
import { blogmodel } from '../Model/blogsSchema';

const router = Router();

/**
 * @swagger
 * /api/v1/create-blog:
 *   post:
 *     summary: Create a new blog
 *     description: This endpoint allows you to create a new blog post. You need to provide the title, content, author, imgUrl, and date of the blog post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Welcome to this page"
 *               content:
 *                 type: string
 *                 example: "Making it the best to change the view of things"
 *               author:
 *                 type: string
 *                 example: "Kevin"
 *               imgUrl:
 *                 type: string
 *                 example: "https://google.com/kevin.png"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2003-04-24"
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "created"
 *       400:
 *         description: Request body is empty or fields are missing
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "all fields must be filled"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "internal server error"
 */

export const postrouter = router.post('/create-blog', async (req: Request, res: Response) => {
    const { title, content, author, imgUrl, date } = req.body;
    
    if (!title || !content || !author || !imgUrl || !date) {
        res.status(400).send({ message: 'all fields must be filled' });
        return;
    }

    try {
        const newblog = new blogmodel({
            title: title,
            content: content,
            author: author,
            imgUrl: imgUrl,              
            date: date       
        });

        await newblog.save();
        res.status(201).send({ message: 'created' });
    } catch (error) {
        res.status(500).send({ message: 'internal server error' });
    }
});
