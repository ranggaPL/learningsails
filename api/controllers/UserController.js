/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Promise = require('bluebird');
var BCrypt = Promise.promisifyAll(require('bcrypt'));

module.exports = {
	create: function (req, res) {
    var params = req.params.all();

    BCrypt.genSaltAsync(10)

     // use generated salt to hash password with variability
    .then(function (salt) {
      return BCrypt.hashAsync(params.password, salt);
    })
    .then(function (hash) {
      return res.json({hash:hash});
    })

    // handle errors
    .catch(function (e) {
      return res.json({error: e});
    });

    // BCrypt.genSalt(10, function (err, salt) {
    //   if(err)
    //     return res.json({error:err});
    //   BCrypt.hash(params.password, salt, function (err, hash) {
    //     if(err)
    //       return res.json({error: err});
    //     return res.json({
    //       hash: hash
    //     });
    //   });
    // });
  }
};

