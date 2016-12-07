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
  },
  addStar: function (req, res, next) {
    console.log('users addstar', req.params)
    var email = req.params.id;
    var star = req.params.star
    console.log(star)
    User.findOneAndUpdate({email: email}, { $push: { stars: star } }, { new: true }, function(err, user){
      if ( err ) {
        next(err)
      } else {
        console.log('users update success', user)
        res.json(user);
      }
    });
  }
}