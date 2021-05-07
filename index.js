const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({extended:true}));

const routs = require('./router');
app.use('/',routs);


let port = 9696;

app.listen(port,()=>{
    console.log("Server is listening in port:",port);
}).on('error',(err)=>{
    console.log("cannot host at port:",port);
})