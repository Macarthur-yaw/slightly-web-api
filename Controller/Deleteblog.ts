import express, { Request, Response, Router } from 'express';
import { blogmodel } from '../Model/blogsSchema';

const router = Router();

/**
 * @swagger
 * /api/v1/{id}:
 *   delete:
 *     summary: Delete a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to delete
 *     responses:
 *       200:
 *         description: Blog item has been deleted successfully
 *       400:
 *         description: No ID provided or no matching ID found
 *       500:
 *         description: Internal server error
 */
export const deleteBlog = router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send({ message: 'No ID is found' });
        return;
    }

    try {
        const results = await blogmodel.findByIdAndDelete(id);
        if (results) {
            res.status(200).send({ message: 'Item has been deleted' });
        } else {
            res.status(400).send({ message: 'No matching ID' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});
