/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  // Disable Sail's default routing for controller
  _config: {actions: false, shorcuts: false, rest: false},

  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  }
};

