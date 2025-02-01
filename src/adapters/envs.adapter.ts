import "dotenv/config";
import { get } from "env-var";

export const envsAdapter = {
  PORT: get("PORT").default(8080).asPortNumber(),
};
