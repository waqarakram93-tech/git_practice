import { Router } from 'express';
import {
    createUser,

    getAllUser,
    getSingleUser,

} from '../controllers/users.js';

const usersRouter = Router();

usersRouter.get('/', getAllUser);
usersRouter.get('/:id', getSingleUser);
usersRouter.post('/', createUser);


export default usersRouter;