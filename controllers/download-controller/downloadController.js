const { get } = require('lodash/fp');
const { downloadService: downloadServiceRequired } = require('../../services/download-service/downloadService');

exports.dependencies = {
  downloadService: downloadServiceRequired,
};

exports.downloadController = (req, res, next) => {
  const downloadService = get('downloadService', this.dependencies);
  const fileId = get('fileId', req.params);

  try {
    const result = downloadService(fileId);

    res.status(200);
    res.send(result);
  } catch (e) {
    next(e);
  }
};
