const { img } = require('../models/multer');
const mongoose = require('mongoose');
const { Schema } = mongoose;
//save file from frontend to s3 and save the url to db
//compare this snippet from src/models/images.js:

module.exports = {
  post: async (req, res) => {
    img.imageURL = req.file.location;
    await img.save();
    res.status(200).json({ img: req.file.location });
  },
};
