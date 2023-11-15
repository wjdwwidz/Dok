const { Schema } = require('mongoose');
const User = require('./user');
const Matching_post = require('./matchingPost');

const matchingPostCommentSchema = new Schema(
  {
    matching_post_id: {
      type: Schema.Types.ObjectId,
      ref: 'Matching_post',
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    comment: {
      type: String,
      required: true,
    },

    parent_comment_id: {
      type: String,
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

module.exports = matchingPostCommentSchema;
