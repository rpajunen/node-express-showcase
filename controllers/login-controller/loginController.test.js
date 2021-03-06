const { loginController, dependencies } = require('./loginController');

describe('loginController', () => {
  let reqStub;
  let resMock;
  let nextStub;

  let serviceMock;

  beforeEach(() => {
    reqStub = {};
    resMock = {
      status: jest.fn(),
      send: jest.fn(),
    };

    nextStub = {};

    serviceMock = jest.fn().mockReturnValue('some-json');

    dependencies.loginService = serviceMock;

    loginController(reqStub, resMock, nextStub);
  });

  it('calls the service', () => {
    expect(serviceMock).toHaveBeenCalled();
  });

  it('given request body, when called, calls the service with correct parameters', () => {
    reqStub = {
      body: {
        username: 'some-user',
        password: 'some-password',
      },
    };

    loginController(reqStub, resMock, nextStub);

    expect(serviceMock).toHaveBeenCalledWith('some-user', 'some-password');
  });

  it('calls status with 200', () => {
    expect(resMock.status).toHaveBeenCalledWith(200);
  });

  it('given send mock, when called, is correct', () => {
    expect(resMock.send).toHaveBeenCalledWith('some-json');
  });
});
