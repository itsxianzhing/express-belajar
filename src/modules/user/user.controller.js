import * as userService from "./user.service.js";

import { userResponseDto } from "./dtos/user-response.dto.js";

export const store = async (req, res) => {
  const user = await userService.createUser(req.validatedBody);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: userResponseDto(user)
  });
};