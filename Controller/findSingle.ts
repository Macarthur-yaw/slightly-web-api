import express, { Request, Response, Router } from 'express';
import { blogmodel } from '../Model/blogsSchema';

const router = Router();

/**
 * @swagger
 * /api/v1/{id}:
 *   get:
 *     summary: Get a single blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to retrieve
 *         example: "60d2b8f79b7b9d7a33b12b45"  # Example ID for a blog document in the database
 *     responses:
 *       200:
 *         description: Blog found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The blog data
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Understanding Node.js"
 *                     content:
 *                       type: string
 *                       example: "kevin"
 *                     author:
 *                       type: string
 *                       example: "kekeke"
 *                     imgUrl:
 *                       type: string
 *                       example: "https://example.com/kevin.png"
 *                     date:
 *                       type: string
 *                       example: "2023-08-15"
 *       400:
 *         description: No ID provided or no matching blog found
 *       500:
 *         description: Internal server error
 */
export const getSingle = router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send({ message: 'No ID is found' });
        return;
    }

    try {
        console.log(id);
        const results = await blogmodel.findById(id);
        if (results) {
            res.status(200).send({ data: results });
        } else {
            res.status(400).send({ message: 'Cannot find matching ID' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});
