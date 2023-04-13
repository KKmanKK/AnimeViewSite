import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config();
const app: express.Application = express();
const PORT = process.env.PORT || 5000;

const start = (): void => {
  const prisma = new PrismaClient();
  prisma.user.findFirst();
  app.listen(PORT, () => console.log("Сервер запущен"));
};
start();
