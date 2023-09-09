const User = require('../models/user');
// Controller Action's for Rendering Pages

module.exports.profile = (req, res) => {
  // return  res.end('<h1>User Profile Controller</h1>');

  //rendering user.ejs
  return res.render('user', {
    title: "USER"  // this title will appear in <%= title %> of home.ejs
  });
}

//render the sign up page
module.exports.signUp = (req, res) => {
  return res.render('user_sign_up', {
    title: " Codeial | Sign Up",
  })
}
//render the sign in page
module.exports.signIn = (req, res) => {
  return res.render('user_sign_in', {
    title: "Coedeial | Sign In",
  })
}

// To get the Sign uP Data
module.exports.create = async (req, res) => {
  // Checking password and Confirm Password
  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back');
  }
  try {
    const existing_user = await User.findOne({ email: req.body.email });
    if (!existing_user) {
      await User.create(req.body);
      return res.redirect('/users/sign-in');

    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.log('error in creating users', err);
    return res.redirect('back');
  }


  // Using .then Method, Creating a user.
//   User.findOne({ email: req.body.email }).then((existing_user)=>{
//     if(!existing_user){
//       User.create(req.body).then((user)=>{
//         return res.redirect('/users/sign-in');
//       })
//       .catch((err)=>{
//         console.log('error in creating users', err);
//         return res.redirect('back');
//       })
//     }else{
//       return res.redirect('/users/sign-in');
//     }
  
//   }).catch((err)=>{
//     console.log('error in creating users', err);
//     return res.redirect('back');
//   })

}

// To get the Sign In Data and create a session for the user
module.exports.createSession = async (req, res) => {
  // try {
  //   const user = await User.findOne({email: req.body.email});
  //   if(user){
  //     if(user.password != req.body.password){
  //       return res.redirect('back');
  //     }
  //     return res.redirect('/');
  //   }
  //   else{
  //     return res.redirect('back');
  //   }
  // }
  // catch (err) {
  //   console.log('error in creating session', err);
  //   return res.redirect('back');
  // }
  
}
