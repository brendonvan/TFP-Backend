const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");

require("dotenv").config();
require('./config/db.connection.js');

const PORT = process.env.PORT;
const testController = require('./controllers/testController');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use('/test', testController);

app.get("/", (req, res) => {
    res.send("Hello TFP /");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));