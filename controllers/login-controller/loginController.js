const { get } = require('lodash/fp');
const { loginService: loginServiceRequired } = require('../../services/login-service/loginService');

exports.dependencies = {
  loginService: loginServiceRequired,
};

exports.loginController = async (req, res, next) => {
  const loginService = get('loginService', this.dependencies);
  const username = get('username', req.body);
  const password = get('password', req.body);

  try {
    const result = await loginService(username, password);

    res.status(200);
    res.send(result);
  } catch (e) {
    next(e);
  }
};
