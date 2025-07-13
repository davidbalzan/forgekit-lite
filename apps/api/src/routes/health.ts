import { Hono } from "hono";
import type { HealthResponse } from "@forgekit/shared";
import { APP_NAME, APP_VERSION } from "@forgekit/shared";

export const healthRoutes = new Hono();

healthRoutes.get("/health", (c) => {
  c.header("Cache-Control", "no-cache, no-store, must-revalidate");
  const response: HealthResponse = {
    status: "ok",
    timestamp: new Date().toISOString(),
    version: APP_VERSION,
    name: APP_NAME,
  };
  return c.json(response);
});
