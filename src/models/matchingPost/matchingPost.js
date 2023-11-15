const { Schema } = require('mongoose');
const User = require('./user');
const User_dog = require('./user_dog');
const Matching_handler_request = require('./matchingHandlerRequest');
const Matching_post_comment = require('./MatchingPostComment');

const ProductSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    user_dog: {
      type: Schema.Types.ObjectId,
      ref: 'User_dog',
      required: true,
    },

    matching_handler_request: {
      type: Schema.Types.ObjectId,
      ref: 'Matching_handler_request',
      required: true,
    },

    matching_post_comment: {
      type: Schema.Types.ObjectId,
      ref: 'Matching_post_comment',
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    location: {
      type: char,
      required: true,
    },

    location_detail: {
      type: String,
      required: true,
    },

    walking_date: {
      type: String,
      required: true,
    },

    walking_duration: {
      type: Number,
      required: true,
    },

    deleted_at: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = matchingPostSchema;
