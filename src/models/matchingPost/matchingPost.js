const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MatchingPostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    userDog: {
      type: Schema.Types.ObjectId,
      ref: 'UserDog',
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    location: {
      type: {
        requestText: String,
        code: String,
      },
      required: true,
    },

    locationDetail: {
      type: String,
    },

    walkingDate: {
      type: String,
      required: true,
    },

    walkingDuration: {
      type: Number,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    matchingStatus: {
      type: String,
      default: '매칭중',
    },

    matchingHandler: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },

    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const MatchingPost = mongoose.model('MatchingPost', MatchingPostSchema);

module.exports = MatchingPost;
