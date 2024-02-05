const express = require('express');
require('./service/connectdb')();
const studentRoutes = require('./routes/studentsRoute');
const usersRoutes = require('./routes/usersRoutes'); 


const app = express();
require('./startup/prod')(app);

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(usersRoutes);
app.use(studentRoutes);




app.listen(5000, () =>{
    console.log('5000 port eshitilmoqda');
})