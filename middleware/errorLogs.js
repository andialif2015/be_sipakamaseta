const winston = require("winston");

// Create a winston logger for error logging
const logger = winston.createLogger({
  level: "error", // Log only errors
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log" }), // Logs to a file
  ],
});

// Error handling middleware
const errorMiddleware = (err, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    // Log errors to the console in the local environment
    const logger = winston.createLogger({
      level: "error", // Log only errors
      format: winston.format.json(),
      transports: [
        new winston.transports.File({ filename: "error.log" }), // Logs to a file
      ],
    });

    // Log the error
    logger.error(err.stack);
  } else {
    // Create a winston logger for error logging in production
    console.error(err.stack);
  }

  // Customize the error response
  const errorMessage = "Something went wrong"; // Customize the error message as needed
  const statusCode = err.status || 500; // Use the error status code or a default of 500

  // Respond with the error message and status code
  return res.status(statusCode).json({
    status: false,
    msg: "Internal Server Error",
  });
};

module.exports = {
  errorMiddleware,
};
