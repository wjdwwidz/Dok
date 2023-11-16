const { Schema } = require('mongoose');

const MatchingPostCommentSchema = new Schema(
  {
    matchingPostId: {
      type: Schema.Types.ObjectId,
      ref: 'MatchingPost',
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

    parentCommentId: {
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

// 모델 생성
const MatchingPostComment = mongoose.model(
  'matchingPostComment',
  matchingPostCommentSchema,
);

module.exports = MatchingPostComment;
