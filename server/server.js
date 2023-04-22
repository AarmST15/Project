const bodyParser = require("body-parser");
let express = require("express");
let app = express();
// let mysql = require('mysql2/promise')

var cors = require("cors");
const ip = require("ip");
const port = 3111;

// sensitive info
const mysqldump = require("mysqldump");

const cron = require("node-cron");
const moment = require("moment");
const {
  hostDB,
  portDB,
  userDB,
  passwordDB,
  database,
} = require("./config/varible");

// ---------------------------------

const user = require("./api/user");
const po = require("./api/po");

// ---------------------------------
const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");

const env = process.env.NODE_ENV || "development";
const logDir = "log";
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, "results.log");

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === "production" ? "info" : "debug",
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          (info) =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
    }),
    new transports.File({
      filename,
      // filename: path.join(__dirname, 'logs', 'results.log'),
      format: format.combine(
        format.printf(
          (info) =>
            `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
        )
      ),
    }),
  ],
});

// logger.error();
// logger.warn('warn message');
// logger.info('info message');
// logger.verbose('verbose message');
// logger.debug('debug message');
// logger.silly('silly message');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));
// app.set('trust proxy', true)

// home page round
app.get("/", (req, res) => {
  return res.send({
    error: false,
    message: "Welcome to Restful API with NodeJS for TJ-SUPPLY",
    written_by: "_________________________________________",
    contract: "_________________________________________",
  });
});

// TODO: INSIDE
app.use("/user", user);
app.use("/po",po);



cron.schedule("59 23 * * *", async () => {
  logger.info("[ schedule   ] IT IS TIME TO BACKUP!");

  // TODO: search old back up old than 7 day and delete
  const dirFolder = "BackUp";
  try {
    if (!fs.existsSync("BackUp")) {
      fs.mkdirSync("BackUp");
      logger.info("[ schedule   ] FOLDER NOT EXIST CREATE ONE!");
    }
    fs.readdir(dirFolder, (err, files) => {
      files.forEach((file) => {
        try {
          let now = new Date();
          let dateFile = new Date(
            String(file.split(".")[0].split("___")[1]).replaceAll("_", "-")
          );
          // console.log( dateFile );
          let timeDifference = Math.abs(now.getTime() - dateFile.getTime());
          let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
          console.log(path.join(dirFolder, file), "\t", differentDays);
          // diff time date for store backupDB
          if (differentDays > 7) {
            logger.info(
              `[ FILE  ]` +
                " => " +
                `DELETE OLD BACKUP FILE ${path.join(dirFolder, file)}`
            );
            fs.unlink(path.join(dirFolder, file), (err) => {
              if (err) {
                logger.error(`[ FILE DELETE BACKUP  ]` + " => " + err.message);
              }
            });
          }
        } catch {
          logger.error(
            `[ schedule   ] SOME THING WENT WRONG IN BACKUP FOLDER AT -> ${file} !`
          );
        }
      });
    });
  } catch {
    logger.error("[ schedule   ] SOME THING WENT WRONG TO ANALYZE OLD BACKUP!");
  }

  // TODO: sql that new to run every new date

  // TODO: BACKUP DB
  // Use moment.js or any other way to dynamically generate file name
  const fileName = `${database}___${moment().format("YYYY_MM_DD")}.sql`; //.sql
  mysqldump({
    connection: {
      host: hostDB,
      user: userDB,
      password: passwordDB,
      database: database,
    },
    dumpToFile: `./BackUp/${fileName}`,
  });

  logger.info(`[ schedule   ] BACKUP FINISH :) filename ${fileName}`);
});

app.listen(port, "0.0.0.0", () => {
  console.dir(ip.address());
  // logger.info(`server start at ${ip.address()}:${port}`);

  console.log(`Node App is running on ${ip.address()}:${port}`);
});

module.exports = app;
