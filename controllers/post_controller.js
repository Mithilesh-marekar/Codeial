module.exports.post = (req,res) =>{
   // return res.end('<h1>Post Controller</h1>');
    
   //rendering post.ejs
   return res.render('post', {
    title: "POst"  // this title will appear in <%= title %> of home.ejs
});
}