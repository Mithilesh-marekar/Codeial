module.exports.home = (req, res) =>{
    //requesting cookies of home page
    console.log(req.cookies);
    // if we want to change the cookie from the server side.
             // name , value
    res.cookie('user_id', 25);
    //this line is responding directly to browser
    // return res.end('<h1>Express is up for codial !!!</h1>');
    
    //rendering the home.ejs file
    return res.render('home', {
        title: "Home"  // this title will appear in <%= title %> of home.ejs
    });
}



//creating Controller.
//module.exports.actionName = function(req,res){}