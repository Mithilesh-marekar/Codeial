
// Controller Action's for Rendering Pages

module.exports.profile = (req, res) =>{
  // return  res.end('<h1>User Profile Controller</h1>');
  
  //rendering user.ejs
  return res.render('user', {
    title: "USER"  // this title will appear in <%= title %> of home.ejs
});
}

//render the sign up page
module.exports.signUp =(req, res) =>{
  return res.render('user_sign_up',{
    title: " Codeial | Sign Up",
  })
}
//render the sign in page
module.exports.signIn = (req, res) =>{
  return res.render('user_sign_In',{
    title: "Coedeial | Sign In",
  })
}

