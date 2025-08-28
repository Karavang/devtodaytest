import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongo.js";
import routerCountry from "./router/routerCountry.js";
import userRouter from "./router/userRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/countries", routerCountry);
app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
