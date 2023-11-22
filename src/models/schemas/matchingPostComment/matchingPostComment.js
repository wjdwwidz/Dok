const { model, Schema } = require('mongoose');

const MatchingPostCommentSchema = new Schema(
  {
    matching_post_id: {
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
    parent_comment_id: {
      type: String,
      default: null,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);
const MatchingPostComment = model(
  'MatchingPostComment',
  MatchingPostCommentSchema,
);
console.log(MatchingPostComment);
console.log(MatchingPostCommentSchema.timestamps);

module.exports = MatchingPostComment;
