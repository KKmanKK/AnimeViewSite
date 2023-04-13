import { Router } from "express";

export const animeRouter: Router = Router();

animeRouter.get("/anime");
animeRouter.get("/anime/id?");
animeRouter.post("/anime");
animeRouter.delete("/anime/:id");
