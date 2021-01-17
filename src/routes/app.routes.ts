import Router from "../router";

import IndexController from "../controllers/index";

import apiRoutes from './api.routes';

export default new Router()

.get('/alive', IndexController.getAlive)

.use('/api/v1', apiRoutes.routes());
