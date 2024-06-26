const express = require ("express");
const app = express();
const bcrypt = require("bcrypt");
const cookies = require("cookie-parser")
const path = require("path");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const indexRouter = require("./routes/indexRouter")
const db = require("./config/mongoose-connect")
const User = require("./models/userModel");
const hisaab = require("./models/hisaabModel")


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}))
app.use(cookies());
app.use(express.json());

app.use("/", indexRouter);

app.listen(3000);