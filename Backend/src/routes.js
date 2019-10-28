import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;

// rota teste
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Cristiane Faria',
//     email: 'cristiane@bitup.com.br',
//     password_hash: '20934839048',
//   });
//   return res.json(user);
// });
