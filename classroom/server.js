const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

const sessionOption = ({
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
  });

app.use(session(sessionOption));
app.use(flash());

app.get("/registor", (req, res) => {
    let {name = "anonymos"} = req.query;
    res.send(name);
})

app.get("/hello", (req, res) => {
    let {name = "anonymos"} = req.query;
    res.send(`Hello, ${name}`)

})

app.get("/test", (req, res) => {
  res.send("test successfull");
});

app.listen(3000, () => {
  console.log("server is ready");
});
