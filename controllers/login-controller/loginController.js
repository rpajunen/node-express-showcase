const { get } = require('lodash/fp');
const { loginService: loginServiceRequired } = require('../../services/login-service/loginService');

exports.dependencies = {
  loginService: loginServiceRequired,
};

exports.loginController = (req, res, next) => {
  const loginService = get('loginService', this.dependencies);

  try {
    const result = loginService();

    res.status(200);
    res.send(result);
  } catch (e) {
    next(e);
  }
};
