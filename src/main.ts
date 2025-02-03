import { envsAdapter } from "./adapters/envs.adapter";
import { AppModule } from "./presentation/app.module";
import { AppRoutes } from "./presentation/app.routes";

(async () => {
  main();
})();

function main() {
  const app = new AppModule({
    port: envsAdapter.PORT,
    routes: AppRoutes.routes,
  });
  app.start();
}
