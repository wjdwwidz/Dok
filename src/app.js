const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')


const taskRouter = require('./routers/TaskRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.get("/ping", (req, res) => {
    res.send("pong")
} )

app.use("/tasks", taskRouter);
  
app.listen(3000);