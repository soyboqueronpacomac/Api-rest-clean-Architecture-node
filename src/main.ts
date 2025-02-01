import { envsAdapter } from "./adapters/envs.adapter";
import { AppModule } from "./presentation/app.module";

(async () => {
  main();
})();

function main() {
  const app = new AppModule({
    port: envsAdapter.PORT,
  });
  app.start();
}

