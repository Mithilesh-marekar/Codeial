module.exports.profile = (req, res) =>{
  // return  res.end('<h1>User Profile Controller</h1>');
  
  //rendering user.ejs
  return res.render('user', {
    title: "USER"  // this title will appear in <%= title %> of home.ejs
});
}