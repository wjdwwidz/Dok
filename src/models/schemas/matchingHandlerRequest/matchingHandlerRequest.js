const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MatchingHandlerRequestSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    matching_post_id: {
      type: Schema.Types.ObjectId,
      ref: 'MatchingPost',
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

// 모델 생성
const MatchingHandlerRequest = mongoose.model(
  'MatchingHandlerRequest',
  MatchingHandlerRequestSchema,
);

module.exports = MatchingHandlerRequest;
