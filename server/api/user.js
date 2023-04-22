const express = require("express");
const router = express.Router();

let mysql = require("mysql2/promise");
// sensitive info
const {
  hostDB,
  portDB,
  userDB,
  passwordDB,
  database,
  saltDB,
} = require("../config/varible");

// ---------------------------------
const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const moment = require('moment');

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

// ------------------------------------------------------------

// connection to my sql database
async function connectToDB() {
  // สร้างการเชื่อมต่อกับฐานข้อมูล

  const dbCon = await mysql.createConnection({
    host: hostDB, //'localhost',
    user: userDB, //'root',
    password: passwordDB, //'',
    port: portDB,
    database: database,
  });
  dbCon.connect((err) => {
    if (err) {
      logger.error(err.message);
      console.error("[ ERROR   ]dbCon.connect: " + err.message);
      return err;
    }
    console.log("Connected to the MySQL server.");
  });

  return dbCon;
}

// generate token
function createToken() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
}


function withoutProperty(obj, property) {
  const { [property]: unused, ...rest } = obj;

  return rest;
}

// ------------------------------------------------------------

// TODO: user
// create new user
router.post("/", async (req, res) => {
  console.log(req.originalUrl);

  let input = {
    username: null,
    psw: null,
    email: null,
  };

  //validation
  for (const [key, value] of Object.entries(input)) {
    const valueCanNull = [];

    if (req.body[key] === undefined) {
      if (valueCanNull.includes(key)) {
        continue;
      }
      return res.status(400).send({
        error: true,
        message: `please provide data according to format for KEY = ${key}.`,
      });
    }
    input[key] = req.body[key];
  }


  // // เข้ารหัส sha256 ของรหัสผู้ใช้
  let hashPassword = crypto
    .pbkdf2Sync(input.psw, saltDB, 1000, 64, `sha512`)
    .toString(`hex`);

  const dbCon = await connectToDB();

  try {
    const results = await dbCon.query(
      `
      INSERT INTO customer (username, psw, email) VALUES(?, ?, ?);
      `,
      [input.username, hashPassword, input.email,
      ]
    );
    if (!results.length) throw new Error("province not found");


    dbCon.end();

    return res.send({
      error: false,
      data: null,
      message: "register new user complete.",
    });
  } catch (error) {
    dbCon.end();
    // throw error;
    logger.error(req.originalUrl + " => " + error.message);

    return res
      .status(400)
      .send({ error: true, message: error.message, data: null });
  }
});

// get user list
router.get("/", async (req, res) => {
  console.log(req.originalUrl);

  let input = {
  };

  //validation
  for (const [key, value] of Object.entries(input)) {
    const valueCanNull = [];

    if (req.body[key] === undefined) {
      if (valueCanNull.includes(key)) {
        continue;
      }
      return res.status(400).send({
        error: true,
        message: `please provide data according to format for KEY = ${key}.`,
      });
    }
    input[key] = req.body[key];
  }



  const dbCon = await connectToDB();

  try {
    const results = await dbCon.query(
      `
      SELECT
        id_customer, username, email, point
      FROM
        customer ;
      `,
      []
    );
    if (!results.length) throw new Error("province not found");


    dbCon.end();

    return res.send({
      error: false,
      data: results[0],
      message: "get user list complete.",
    });
  } catch (error) {
    dbCon.end();
    // throw error;
    logger.error(req.originalUrl + " => " + error.message);

    return res
      .status(400)
      .send({ error: true, message: error.message, data: null });
  }
});

// delete user list
router.delete("/", async (req, res) => {
  console.log(req.originalUrl);

  let input = {
    id_customer: null,
  };

  //validation
  for (const [key, value] of Object.entries(input)) {
    const valueCanNull = [];

    if (req.body[key] === undefined) {
      if (valueCanNull.includes(key)) {
        continue;
      }
      return res.status(400).send({
        error: true,
        message: `please provide data according to format for KEY = ${key}.`,
      });
    }
    input[key] = req.body[key];
  }



  const dbCon = await connectToDB();

  try {
    const results = await dbCon.query(
      `
      DELETE FROM customer WHERE id_customer = ? ;
      `,
      [input.id_customer]
    );
    if (!results.length) throw new Error("province not found");


    dbCon.end();

    return res.send({
      error: false,
      data: null,
      message: "delete select user complete.",
    });
  } catch (error) {
    dbCon.end();
    // throw error;
    logger.error(req.originalUrl + " => " + error.message);

    return res
      .status(400)
      .send({ error: true, message: error.message, data: null });
  }
});

// edit user data name and email
router.put("/", async (req, res) => {
  console.log(req.originalUrl);

  let input = {
    id_customer: null,
    NEWusername: null,
    NEWemail: null,

  };

  //validation
  for (const [key, value] of Object.entries(input)) {
    const valueCanNull = [];

    if (req.body[key] === undefined) {
      if (valueCanNull.includes(key)) {
        continue;
      }
      return res.status(400).send({
        error: true,
        message: `please provide data according to format for KEY = ${key}.`,
      });
    }
    input[key] = req.body[key];
  }



  const dbCon = await connectToDB();

  try {
    const results = await dbCon.query(
      `
      UPDATE customer SET username = ?, email =? WHERE id_customer = ? ;
      `,
      [input.NEWusername, input.NEWemail, input.id_customer]
    );
    if (!results.length) throw new Error("province not found");


    dbCon.end();

    return res.send({
      error: false,
      data: null,
      message: "update select user data complete.",
    });
  } catch (error) {
    dbCon.end();
    // throw error;
    logger.error(req.originalUrl + " => " + error.message);

    return res
      .status(400)
      .send({ error: true, message: error.message, data: null });
  }
});


// authn user
router.post("/authn", async (req, res) => {
  console.log(req.originalUrl);

  let input = {
    username: null,
    psw: null,
  };

  //validation
  for (const [key, value] of Object.entries(input)) {
    const valueCanNull = [];

    if (req.body[key] === undefined) {
      if (valueCanNull.includes(key)) {
        continue;
      }
      return res.status(400).send({
        error: true,
        message: `please provide data according to format for KEY = ${key}.`,
      });
    }
    input[key] = req.body[key];
  }


  // // เข้ารหัส sha256 ของรหัสผู้ใช้
  let hashPassword = crypto
    .pbkdf2Sync(input.psw, saltDB, 1000, 64, `sha512`)
    .toString(`hex`);

  const dbCon = await connectToDB();

  try {
    const results = await dbCon.query(
      `
      SELECT
        *
      FROM
        customer
      WHERE
        username=?
      `,
      [input.username]
    );
    if (!results.length) throw new Error("province not found");

    console.log(results[0][0])

    if (!results[0][0]) {
      throw new Error("User not found")
    }

    if (results[0][0].psw != hashPassword) {
      throw new Error("Password incorrect.")
    }

    const data = withoutProperty(results[0][0], "psw");


    dbCon.end();

    return res.send({
      error: false,
      data: data,
      message: "authn user complete.",
    });
  } catch (error) {
    dbCon.end();
    // throw error;
    logger.error(req.originalUrl + " => " + error.message);

    return res
      .status(400)
      .send({ error: true, message: error.message, data: null });
  }
});



module.exports = router;
