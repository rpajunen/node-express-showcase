const { loginService } = require('./loginService');

describe('loginService', () => {
  it('when called, returns correct value', () => {
    const result = loginService();

    expect(result).toEqual({ result: 'some-result' });
  });
});
