import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config();
const app: express.Application = express();
const PORT = process.env.PORT || 5000;
app.use(express());

const start = (): void => {
  const prisma = new PrismaClient()
  prisma.anime.count();
  app.listen(PORT, () => console.log("Сервер запущен"));
};
start();
