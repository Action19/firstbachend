const express = require('express');
require('./service/connectdb')();
// const cors = require('cors');
const studentRoutes = require('./routes/studentsRoute');
const usersRoutes = require('./routes/usersRoutes'); 
const gradeRoutes = require('./routes/gradeRoutes');
const teacherRoutes = require('./routes/teachersRoute');


const app = express();
// app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Bu qatorda * o'rniga ma'lum bir domen yoki domenlar qatorini belgilashingiz mumkin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./startup/prod')(app);

app.use(express.urlencoded({extended: true}))
app.use(express.json({limit: "2mb"}));
app.use(usersRoutes);
app.use(studentRoutes);
app.use(teacherRoutes);
app.use(gradeRoutes);


const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log( PORT + ' port eshitilmoqda');
})