import { Router } from "express";

export function createBaseRouter() {
  const router = Router();

  router.get("/", (_, res) => {
    res.json({
      message: "andré martel aides nous stp",
    });
  });

  return router;
}
