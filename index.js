//Requiring Express
const express = require('express');
// Requiring Cookie-parser
const cookieParser = require('cookie-parser');
const app = express();
//Port No
const port = 8000;
// requiring Database.
const db = require('./config/mongoose');

//middleware function for parsing incomming requets with url.
app.use(express.urlencoded());
// Setting up  Cookie-parser
app.use(cookieParser());

// Setting up Static Files
app.use(express.static ('./assets'));


// Requireng the "express-ejs-layouts" library for layouts in views.
const expressLayouts = require('express-ejs-layouts');
// using Express Layouts.
app.use(expressLayouts);

// extract styles and scripts from the sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

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