const { BadRequestError } = require('../errors/badReqestError');
const uploadService = require('../services/uploadService');
const Img = require('../models/image/image');

const uploadImage = async (req, res, next) => {
  try {
    const file = req.file;
    console.log('File: ', file);

    if (!file) {
      throw new BadRequestError('No file uploaded.');
    }

    const imageUrl = await uploadService.uploadImage(file);

    if (!imageUrl) throw new InternalServerError('Error uploading image.');
    const newImage = new Img({ imageURL: imageUrl });
    const savedImage = await newImage.save();
    return res.status(200).send(savedImage);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = { uploadImage };
