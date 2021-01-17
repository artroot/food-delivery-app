import router from "../router";

import IndexController from "../controllers/index";

router.get('/', IndexController.getIndex);

export default router.routes();