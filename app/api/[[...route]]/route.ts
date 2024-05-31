import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import authors from "./authors";
import books from "./books";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/authors", authors);
app.route("/books", books);

app
  .get("/hello", clerkMiddleware(), (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "未授权" });
    }

    return c.json({
      message: "Hello Next.js!",
      userId: auth.userId,
    });
  })
  .get("/test/:id", zValidator("param", z.object({ id: z.string() })), (c) => {
    const { id } = c.req.valid("param");

    return c.json({
      message: "hi",
      id: id,
    });
  });

export const GET = handle(app);
export const POST = handle(app);
