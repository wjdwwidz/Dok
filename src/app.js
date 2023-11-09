const express = require('express');

const taskRouter = require('./routers/TaskRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
    res.send("pong")
} )

app.use("/tasks", taskRouter);
  
app.listen(8080);