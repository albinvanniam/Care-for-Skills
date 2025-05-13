const { createLogger, format, transports } = require("winston");
const path = require("path");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message, ...metadata }) => {
      let log = `${timestamp} [${level}]: ${message}`;
      if (Object.keys(metadata).length > 0) {
        log += ` ${JSON.stringify(metadata)}`;
      }
      return log;
    })
  ),
  transports: [
    new transports.File({
      filename: path.join(__dirname, "../logs/combined.log"),
      level: "info",
    }),
    new transports.Console(),
  ],
});

module.exports = logger;
