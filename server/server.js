import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Database from "./database/index.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const NodeServer = async () => {
  Database();
  app.use(cors());
  app.use(express.json({ limit: "60mb", extended: true }));
  app.use(router());
  try {
    app.listen(PORT, () => {
      console.log(`Server is live on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("error in server connection", error.message);
  }
};

NodeServer();
