import express, { Request, Response, Router } from 'express';
import { blogmodel } from '../Model/blogsSchema';

const router = Router();

/**
 * @swagger
 * /api/v1/{id}:
 *   put:
 *     summary: Update an existing blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to update
 *         example: "60d2b8f79b7b9d7a33b12b45"  # Example blog ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "book1"
 *               content:
 *                 type: string
 *                 example: "welcome to the capital city of Ghana "
 *               author:
 *                 type: string
 *                 example: "Jane Doe"
 *               imgUrl:
 *                 type: string
 *                 example: "https://example.com/images/kevin.png"
 *               date:
 *                 type: string
 *                 example: "2023-08-15"
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The updated blog data
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "kevin"
 *                     content:
 *                       type: string
 *                       example: "welcome to the capital city of Ghana."
 *                     author:
 *                       type: string
 *                       example: "Jane Doe"
 *                     imgUrl:
 *                       type: string
 *                       example: "https://example.com/kevin.png"
 *                     date:
 *                       type: string
 *                       example: "2023-08-15"
 *       400:
 *         description: No ID found, request body not defined, or no matching ID found
 *       500:
 *         description: Internal server error
 */
export const updateRouter = router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send({ message: 'No ID is found' });
        return;
    }
    if (!req.body) {
        res.status(400).send({ message: 'Request body is not defined' });
        return;
    }

    const { title, content, author, imgUrl, date } = req.body;
    try {
        const results = await blogmodel.findByIdAndUpdate(id, {
            title: title,
            content: content,
            author: author,
            imgUrl: imgUrl,
            date: date
        }, {
            new: true
        });
        if (results) {
            res.status(200).send({ data: results });
        } else {
            res.status(400).send({ message: 'Cannot find matching ID' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});
