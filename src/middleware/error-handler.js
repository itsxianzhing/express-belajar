export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Prisma unique constraint violation
  if (err.code === "P2002") {
    return res.status(409).json({
      success: false,
      message: "Email already registered"
    });
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500
      ? "Internal server error"
      : err.message
  });
};