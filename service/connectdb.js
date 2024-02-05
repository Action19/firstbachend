const mongoose = require('mongoose');
module.exports =  function () {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect('mongodb+srv://admin:S9xnnh1ILVJfhv5d@19-maktab.3dnrvyu.mongodb.net/19-maktab?retryWrites=true&w=majority');
        console.log('Mongo connected');
    }
    catch (error) {
        console.log(error)
        process.exit()
    }
}


// S9xnnh1ILVJfhv5d
// mongodb+srv://admin:OHsemcB1mBK7fGjL@19-maktab.cyplx94.mongodb.net/?retryWrites=true&w=majority