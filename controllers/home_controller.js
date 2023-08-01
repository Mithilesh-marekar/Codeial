module.exports.home = (req, res) =>{
    //this line is responding directly to browser
    // return res.end('<h1>Express is up for codial !!!</h1>');
    
    //rendering the home.ejs file
    return res.render('home', {
        title: "Home"  // this title will appear in <%= title %> of home.ejs
    });
}



//creating Controller.
//module.exports.actionName = function(req,res){}