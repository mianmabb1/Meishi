const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const cors = require("cors");
var pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'cook',
  connectionLimit: 15,
});
var app = express();
app.use(
  cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
    credentials: true
  })
);
//配置session
app.use(session({
  secret: "128位字符串",
  resave: true,
  saveUninitialized: true
}))

//托管
app.use(express.static("public"));
app.listen(5050);