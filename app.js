const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/whoami", function (req, res) {
  let { ip } = req;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  res.send({ ipaddress: ip, language, software });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
