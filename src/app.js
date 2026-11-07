import express from "express";
import { apiReference } from "@scalar/express-api-reference";

import express from "express";

import userRoutes from "./modules/user/user.routes.js";
import openapi from "./config/openapi.js";

const app = express();

app.use(express.json());

// OpenAPI JSON
app.get("/openapi.json", (req, res) => {
  res.json(openapi);
});

// Scalar
app.use(
  "/api-docs",
  apiReference({
    content: openapi,
    theme: "purple"
  })
);

// Routes
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "Express API is running"
  });
});

export default app;