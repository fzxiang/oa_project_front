import { createApp } from 'vue';
import App from './AppMobile.vue';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  app.mount('#app');
}
bootstrap();
