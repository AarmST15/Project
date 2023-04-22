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
  //NOT DONE
router.post("/",async(req,res) =>{
  console.log(req.originalUrl);

  let input = {
    id_menu: null,
    id_order: null,
    s_req: null,
    quanity: null,
    total: null
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
      INSERT INTO po (id_menu, id_order, s_req , quanity, total) VALUES(?, ?, ?, ?, ?);
      `,
      [input.id_menu, input.id_order, input.s_req, input.quanity, input.total,
      ]
    );
    if (!results.length) throw new Error("province not found");

    dbCon.end();

    return res.send({
      error: false,
      data: null,
      message: "Add PO complete.",
    });
  } catch (error) {
    dbCon.end();
    // throw error;
    logger.error(req.originalUrl + " => " + error.message);

    return res
      .status(400)
      .send({ error: true, message: error.message, data: null });
  }
})

//get PO List
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
        id_menu, id_order, s_req, quanity, total
      FROM
        po ;
      `,
      []
    );
    if (!results.length) throw new Error("province not found");


    dbCon.end();

    return res.send({
      error: false,
      data: results[0],
      message: "get PO list complete.",
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

//edit PO
router.put("/", async (req, res) => {
console.log(req.originalUrl);

  let input = {
    id_po: null,
    id_menu:null,
    NEWs_req: null,
    NEWquanity: null,
    NEWtotal : null,
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
      UPDATE po SET id_menu = ?, s_req = ?, quanity = ?, total = ? WHERE id_po = ? ;
      `,
      [input.id_menu,input.NEWs_req, input.NEWquanity, input.NEWtotal]
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

//delete PO
router.delete("/", async (req, res) => {
  console.log(req.originalUrl);

  let input = {
    id_po: null,
    id_menu:null,
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
      DELETE FROM po WHERE id_po = ? AND id_memu;
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

module.exports = router;
