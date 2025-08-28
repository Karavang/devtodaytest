import { Router } from "express";
import { addHolidays } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/:userId/calendar/holidays", addHolidays);

export default userRouter;
