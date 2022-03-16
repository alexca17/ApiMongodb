const express = require("express");
const initDB = require("./config/db");
const bodyParser = require("body-parser");
const userRoutes = require("./app/routers/users");
const cors = require('cors');

const app = express();
const port = 8000;

//for parsing json
app.use(
  bodyParser.json({
    limit: "30mb",
  })
);

//for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

//using cors
app.use(cors())

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello from Express"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

initDB();
