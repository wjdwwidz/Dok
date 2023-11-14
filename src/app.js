const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');
const mongoose = require('mongoose');
require("dotenv").config();
// const cors = require('cors');

const taskRouter = require('./routers/TaskRouter');
// const communityRouter = require('./routers/communityRouter');
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose
    .connect (process.env.MONGO_DB_URL)
    .then(() => {
        console.log('MongoDB에 연결되었습니다.');
    })
    .catch((error) => {
        console.error('MongoDB 연결 실패: ', error);
    });

// app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/community', (req, res) => {
    //#swagger.summary = 산책 매칭글 리스트 페이지'
    //#swagger.tags = ['community']
    /* #swagger.parameters['community_name'] = {
        in: 'header',                            
        description: 'params desc',                                 
        type: 'boolean',                         
} */
});

// app.use("/", communityRouter);

app.get("/ping", (req, res) => {
    //#swagger.summary = '어디에 무슨 설명을 쓰겠다는 거에요 이거에요 (summary)?'
    //#swagger.tags = ['ping-pong']
    //#swagger.description = '이거에요? (desc)'
    /* #swagger.parameters['category_name'] = {
        in: 'header',                            
        description: 'params desc',                                 
        type: 'boolean',                         
} */
    res.send("pong");
});

app.use("/tasks", taskRouter);

app.listen(3000);
