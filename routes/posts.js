import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

// Route to get all posts
router.get('/', getPosts);

// Route to create a new post
router.post('/', createPost);

// Route to update a post
router.patch('/:id', updatePost);

// Route to delete a post
router.delete('/:id', deletePost); // Corrected the route


export default router;
