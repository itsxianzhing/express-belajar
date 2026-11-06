import * as userService from "../services/user.service.js";

// GET /api/users
export const index = (req, res) => {
  const users = userService.getAllUsers();

  res.status(200).json({
    success: true,
    data: users
  });
};

// GET /api/users/:id
export const show = (req, res) => {
  const id = Number(req.params.id);

  const user = userService.getUserById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
};

// POST /api/users
export const store = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
  }

  const user = userService.createUser({ name, email });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user
  });
};

// PUT /api/users/:id
export const update = (req, res) => {
  const id = Number(req.params.id);

  const user = userService.updateUser(id, req.body);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user
  });
};

// DELETE /api/users/:id
export const destroy = (req, res) => {
  const id = Number(req.params.id);

  const user = userService.deleteUser(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
};