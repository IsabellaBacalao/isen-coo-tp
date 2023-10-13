import { Router } from "express";

export const createBaseRouter = () => {
  const router = Router();

  router.get("/", (_, res) => {
    res.json({
      message: "Hello World !",
    });
  });

  return router;
};
