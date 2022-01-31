const { downloadService } = require('./downloadService');

describe('downloadService', () => {
  it('when called, returns correct value', () => {
    const result = downloadService();

    expect(result).toEqual({ result: 'some-result' });
  });
});
