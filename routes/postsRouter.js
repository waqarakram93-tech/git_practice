import { Router } from 'express';
import {
  createPost,

  getAllPosts,
  getSinglePost,

} from '../controllers/posts.js';

const postsRouter = Router();

postsRouter.get('/', getAllPosts);
postsRouter.get('/:id', getSinglePost);
postsRouter.post('/', createPost);
// postsRouter.put('/:id', updatePost);
// postsRouter.delete('/:id', deletePost);

export default postsRouter;
