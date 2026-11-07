import express from "express";

import * as userController from "./user.controller.js";

import { validate } from "../../middlewares/validate.js";
import { createUserSchema } from "./dtos/create-user.dto.js";

const router = express.Router();

router.post(    
  "/",
  validate(createUserSchema),
  userController.store
);

export default router;