const { loginService } = require('./loginService');

describe('loginService', () => {
  it('when called, returns correct value', async () => {
    const result = await loginService();

    expect(result)
      .toEqual({ jwt: 'some-jwt-token' });
  });
});
