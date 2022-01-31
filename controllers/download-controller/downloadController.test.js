const { downloadController, dependencies } = require('./downloadController');

describe('downloadController', () => {
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

    dependencies.downloadService = serviceMock;

    downloadController(reqStub, resMock, nextStub);
  });

  it('calls the service', () => {
    expect(serviceMock).toHaveBeenCalled();
  });

  it('given request params, when called, calls the service with correct parameters', () => {
    reqStub = {
      params: {
        fileId: 'some-file-id',
      },
    };

    downloadController(reqStub, resMock, nextStub);

    expect(serviceMock).toHaveBeenCalledWith('some-file-id');
  });

  it('calls status with 200', () => {
    expect(resMock.status).toHaveBeenCalledWith(200);
  });

  it('given send mock, when called, is correct', () => {
    expect(resMock.send).toHaveBeenCalledWith('some-json');
  });
});
