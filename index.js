const express = require('express');
const bodyParser = require('body-parser');
require('./db');
const memberRouter = require('./api/Member');

const app = express();

// request body parser
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/member', memberRouter);
// app.get('/',(req,res)=>{
//     res.json('hello world')
// })

// app.get('/todo',(req, res)=>{
//     res.json({
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//       })
// })

// app.post('/todo',(req, res)=>{
//     const payload = req.body; 
//     console.log('req.body',payload);
//     res.status(200).json({
//         message: 'New Todo created',
//         data: payload 
//     })
// })

app.listen(3001,()=>{
    console.log('myo backend is listening on 3001')
})