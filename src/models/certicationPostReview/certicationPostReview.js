const Schema = require("mongoose");

const certificationReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
  },
  review_text: {
    type: String,
  },
  // 인증글 작성시간
  created_at: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});
// 모델 생성
const CertificationReview = mongoose.model(
  "CertificationReview",
  certificationReviewSchema
);
// 모델 export
module.exports = CertificationReview;
