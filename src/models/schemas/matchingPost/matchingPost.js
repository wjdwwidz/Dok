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

    matchingHandlerRequest: {
      type: Schema.Types.ObjectId,
      ref: 'MatchingHandlerRequest',
    },

    matching_post_comment: {
      type: Schema.Types.ObjectId,
      ref: 'MatchingPostComment',
    },

    price: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    locationDetail: {
      type: String,
      required: true,
    },

    walkingDate: {
      type: String,
      required: true,
    },

    walkingDuration: {
      type: Number,
      required: true,
    },

    matchingStatus: {
      type: String,
      default: '매칭중',
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
