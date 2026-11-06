
const openapi = {
  openapi: "3.0.0",

  info: {
    title: "Express API",
    version: "1.0.0",
    description: "User Management REST API"
  },

  servers: [
    {
      url: "http://localhost:3000",
      description: "Development Server"
    }
  ],

  tags: [
    {
      name: "Users",
      description: "User management endpoints"
    }
  ],

  paths: {
    "/api/users": {
      get: {
        tags: ["Users"],
        summary: "Get all users",
        responses: {
          200: {
            description: "Successfully retrieved users"
          }
        }
      },

      post: {
        tags: ["Users"],
        summary: "Create a new user",

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "email"],
                properties: {
                  name: {
                    type: "string",
                    example: "Fathan"
                  },
                  email: {
                    type: "string",
                    example: "fathan@example.com"
                  }
                }
              }
            }
          }
        },

        responses: {
          201: {
            description: "User created successfully"
          },
          400: {
            description: "Invalid request"
          }
        }
      }
    },

    "/api/users/{id}": {
      get: {
        tags: ["Users"],
        summary: "Get user by ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],

        responses: {
          200: {
            description: "User found"
          },
          404: {
            description: "User not found"
          }
        }
      },

      put: {
        tags: ["Users"],
        summary: "Update user",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    example: "Fathan Updated"
                  },
                  email: {
                    type: "string",
                    example: "updated@example.com"
                  }
                }
              }
            }
          }
        },

        responses: {
          200: {
            description: "User updated successfully"
          },
          404: {
            description: "User not found"
          }
        }
      },

      delete: {
        tags: ["Users"],
        summary: "Delete user",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],

        responses: {
          200: {
            description: "User deleted successfully"
          },
          404: {
            description: "User not found"
          }
        }
      }
    }
  }
};

export default openapi;
