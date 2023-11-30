const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
});

const Img = mongoose.model('Img', imgSchema);

module.exports = Img;
