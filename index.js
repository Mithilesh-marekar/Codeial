//Requiring Express
const express = require('express');
const app = express();
//Port No
const port = 8000;

// Setting up Ststic Files
app.use(express.static ('./assets'));


// Requireng the "express-ejs-layouts" library for layouts in views.
const expressLayouts = require('express-ejs-layouts');
// using Express Layouts.
app.use(expressLayouts);

//use express router
 app.use('/', require('./routes')); // goes to routes folder to access routes


//Using ejs as my view engine
//Setting up view engine

app.set('view engine', 'ejs');
app.set('views', './views');




//binding to port no and listning for any connections .
app.listen(port, function(err){
    // if error in connection , print this on console.
    if (err) {  
        // using `  ` to print on console. it is called INTERPOLATION Method.
      console.log(`Error in Running Server :${err}`);
    }
    //if Connection successfull, print this on console.
    console.log(`Server is Running on Port : ${port}`);
});