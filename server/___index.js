const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { body } = require("express-validator");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: "Scafe",
});


app.use(cors());
app.use(express.json());



// Table customer// 
app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const psw = req.body.psw;

    db.query("INSERT INTO customer (username, password, email) VALUES (?, ?, ?)", [email, username, psw],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT ASKED DETAILS!" })
            }
        }
    )
})
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM customer WHERE username = ? AND password = ? ",
        [username, password],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT ASKED DETAILS!" })
            }
        }
    );
});

///Table Menu///
app.get("/getMenu", (req, res) => {
    db.query("SELECT * FROM menu", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/createMenu", (req, res) => {
    const id_menu = req.body.id_menu;
    const n_menu = req.body.n_menu;
    const type = req.body.type;
    const price = req.body.price;
    const details = req.body.details;

    db.query(
        "INSERT INTO menu (id_menu, n_menu, type, price, details) VALUES (?,?,?,?,?)",
        [id_menu, n_menu, type, price, details],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Add Menu Complete!");
            }
        }
    );
});
app.put("/updateMenu", (req, res) => {
    const id = req.body.id_menu;
    const wage = req.body.n_menu;
    db.query(
        "UPDATE menu SET n_menu = ? WHERE id_menu = ?",
        [wage, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/delete/:id_menu", (req, res) => {
    const id_menu = req.params.id_menu;
    db.query("DELETE FROM menu WHERE id_menu = ?", id_menu, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//table Order//
app.post("/createOrder", (req, res) => {
    const id_order = req.body.id_order;
    const id_po = req.body;
    const username = req.body.username;
    const id_customer = req.body.id_customer;
    const num_table = req.body.num_table;
    const total = req.body.total;
    const date = req.body.date;

    db.query(
        "INSERT INTO order_str (id_order, id_po,id_costomer, username ,num_table, total, date) VALUES (?,?,?,?,?,NOW())",
        [id_order, id_po, id_customer, username, num_table, total, date],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Order Successful!");
            }
        }
    );
});

app.get("/getOrder", (req, res) => {
    db.query("SELECT * FROM order_str", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//Table Payment//
app.get("/getPay", (req, res) => {
    db.query("SELECT * FROM payment", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/createPay", (req, res) => {
    const id_payment = req.body.id_payment;
    const id_order = req.body.id_order;
    const date = req.body.date;

    db.query(
        "INSERT INTO payment (id_payment, id_order, date) VALUES (?,?,NOW())",
        [id_payment, id_order, date],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Next Payment!");
            }
        }
    );
});

//Table PO //
app.get("/getPO", (req, res) => {
    db.query("SELECT * FROM po", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/createPO", (req, res) => {
    const id_po = req.body.id_po;
    const id_menu = req.body.id_menu;
    const username = req.body.username;
    const s_req = req.body.s_req;
    const quanity = req.body.quanity;
    const total = req.body.total;
    db.query(
        "INSERT INTO po (id_po, id_menu, username, s_req, quanity,total) VALUES (?,?,?,?,?,?)",
        [id_po, id_menu, username, s_req, quanity, total],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Add Order Successful!");
            }
        }
    );
});


//ที่เก็บข้อมูลชั่วคราวของ Po
app.post("/postmOder", (req, res) => {
    const username = req.body.username;
    const s_req = req.body.s_req;
    const quanity = req.body.quanity;
    const id_menu = req.body.id_menu;
    const total = req.body.total;
    db.query(
        "INSERT INTO m_order ( id_menu, username, s_req, quanity, total) VALUES (?,?,?,?,?)",
        [id_menu, username, s_req, quanity, total],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Add Order Temporary Successful!");
            }
        }
    );
});
app.delete("/delete/:id_po", (req, res) => {
    const id_po = req.params.id_po;
    db.query("DELETE FROM m_order WHERE id_po = ?", id_po, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


// เรียกใช้ session ที่มี username เพื่อใช้งานในส่วนอื่น ๆ
app.get("/profile", (req, res) => {
    const username = req.body.username; // เรียกใช้ username จาก session
    if (username) {
        // ตรวจสอบว่ามี username ใน session หรือไม่
        db.query("SELECT * FROM customer WHERE username = ?", [username], (err, result) => {
            if (err) {
                res.status(500).send({ err: err });
            } else {
                res.send(result[0]);
            }
        });
    } else {
        res.send({ message: "Please login first" });
    }
});
//Forget Password//
app.post("/forget", (req, res) => {
    const email = req.body.email;
    db.query("SELECT * FROM customer WHERE email = ? ", [email],
        (err, result) => {
            if (result.length > 0) {
                res.send({ message: "Please enter a new password." })
            } else {
                res.send({ message: "You are not a member.Please Rigister" })
            }
        }
    )
})
app.post("/resetPassword", (req, res) => {
    const email = req.body.email;
    const newPassword = req.body.psw;
    db.query("UPDATE customer SET psw = ? WHERE email = ?", [newPassword, email], (err, result) => {
        if (err) {
            console.log(err);
            res.send({ message: "Error occurred while resetting password!" });
        } else {
            res.send({ message: "Password reset successful!" });
        }
    });
});

app.put("/updatePsw", (req, res) => {
    const email = req.body.email;
    const newPassword = req.body.psw;
    db.query(
        "UPDATE customer SET psw = ? WHERE email = ?",
        [newPassword, email],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});




// const omiseConfig = {
//   publicKey: 'pkey_test_5v9bwamtgizbc63buhj',
//   secretKey: 'skey_test_5sam73velcbnkrc92r1',
// };

// app.get('/createToken', (req, res) => {
//   const { publicKey } = omiseConfig;
//   const apiEndpoint = 'https://api.omise.co/sources';
//   const requestData = {
//     type: 'promptpay',
//     amount: 10,
//     currency: 'THB',
//     phone_number: '0832421872',
//     phone_number_country_code: 'TH',
//     metadata: {
//       order_id: 'ORD_1234',
//     },
//     card: {
//       name: 'CARDHOLDER NAME',
//       number: '4242424242424242',
//       expiration_month: '09',
//       expiration_year: '2025',
//       security_code: '123',
//     },
//     return_uri: 'https://yourwebsite.com/success',
//   };

//   axios({
//     method: 'post',
//     url: apiEndpoint,
//     auth: {
//       username: publicKey,
//       password: omiseConfig.secretKey,
//     },
//     data: requestData,
//   })
//     .then((response) => {
//       console.log(response.data);
//       res.send('Omise payment success!');
//     })
//     .catch((error) => {
//       console.log(error);
//       res.send('Omise payment failed!');
//     });
// });

app.listen(3111, () => {
    console.log("Yey, your server is running on port 3111");
});