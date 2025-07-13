import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import "dotenv/config";
import { env } from "./env.js";
import { healthRoutes } from "./routes/health.js";

const app = new Hono();

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: env.CORS_ORIGIN,
  })
);

app.onError((err, c) => {
  console.error(`[Error] ${err.stack}`);
  return c.json({ error: "Internal Server Error" }, 500);
});

app.notFound((c) => {
  return c.json({ error: "Not Found" }, 404);
});

app.route("/api", healthRoutes);

serve({ fetch: app.fetch, port: env.API_PORT }, () => {
  console.log(`Server running on http://localhost:${env.API_PORT}`);
});

export default app;
