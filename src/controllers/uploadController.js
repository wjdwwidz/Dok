const { BadRequestError } = require('../errors/badReqestError');

const uploadService = require('../services/uploadService');

const uploadImage = async (req, res, next) => {
  try {
    const file = req.file;
    console.log('File: ', file);

    if (!file) {
      throw new BadRequestError('No file uploaded.');
    }

    const imageUrl = await uploadService.uploadImage(file);

    if (!imageUrl) throw new InternalServerError('Error uploading image.');

    return res.status(200).send(imageUrl);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = { uploadImage };
