var User = require('./userModel');

module.exports = {
  updateOne: function (req, res, next) {
    console.log('users updateOne', req.body)
    User.findOneAndUpdate({email: req.body.email}, req.body, {upsert: true, new: true}, function(err, user){
      if ( err ) {
        next(err)
      } else {
        console.log('users success', user)
        res.json(user);
      }
    });
  },
  getOne: function(req, res, next) {
    var user = req.params.id
    console.log('users getOne',user);
    User.findOne({email: user}, function(err, user) {
      if ( err ) {
        next(err)
      } else {
        console.log('users success', user)
        res.json(user);
      }
    });
  }
}