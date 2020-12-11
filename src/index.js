import { Router } from 'apinion';
import routerCore from './core/routerCore';

function execute() {
  const router = new Router();

  router.enableCors();
  router.get('/', {}, () => {
    return router.getRoutes();
  });
  router.applyRoutes(routerCore);

  router.listen(9883);
}

execute();
