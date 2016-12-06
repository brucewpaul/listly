var List = require('./listModel');

module.exports = {
  save: function(req, res, next) {
    var nlist = new List(req.body);
    nlist.save().then(function(newList) {
      res.json(newList);
    })
  },
  getAll: function (req, res, next) {
    List.find({}, function(err, lists){
      if ( err ) {
        next(err)
      } else {
        res.json(lists);
      }
    });
  },
  getOne: function (req, res, next) {
    List.find({_id: req.params.id}, function(err, lists){
      if ( err ) {
        next(err)
      } else {
        res.json(lists);
      }
    });
  },
  updateOne: function (req, res, next) {
    console.log(req.body)
    List.findOneAndUpdate({_id: req.params.id}, req.body, function(err, list){
      if ( err ) {
        next(err)
      } else {
        console.log(list)
        res.json(list);
      }
    });
  }
}