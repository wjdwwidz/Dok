const Schema = require("mongoose");

const certificationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  matching_post: {
    type: Schema.Types.ObjectId,
    ref: "MatchingPost",
  },
  certification_img: [],
  sublocation: {
    type: String,
  },
  review: {
    type: Schema.Types.ObjectId,
    ref: "CertificationPostReview",
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
const Certification = mongoose.model("Certification", certificationSchema);
// 모델 export
module.exports = Certification;
