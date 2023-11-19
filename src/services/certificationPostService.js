const {
  CertificationPost,
} = require('../models/certificationPost/certificationPost');
const {} = require('../models/certificationPostReview/certificationPostReview');

class CertificationPostService {
  // 모든 인증글 조회
  getCertificationPosts() {
    const findCertificationPost = CertificationPost.find({})
      .populate('user')
      .populate('matchingPost')
      .populate('review');

    return findCertificationPost;
  }

  // 상세 인증글 조회 ( find부분 수정 필요 )
  getCertificationPostDetail() {
    const findCertificationPostDetail = CertificationPost.find({
      user_id: _id,
    }).populate('review');

    return findCertificationPostDetail;
  }

  // 인증글 생성 (아직 이미지 받아오는 방식이 정해지지 않아서 certificationImg는 작성x)
  postCertificationPost() {
    const { user, matchingPost, sublocation, review, deletedAt } = req.body;

    const newCertificationPost = CertificationPost.create({
      user,
      matchingPost,
      sublocation,
      review,
      deletedAt,
    });

    return newCertificationPost;
  }

  // 리뷰 생성
  postCertificationPostReview() {
    const { reviewText } = req.body.review;
    const { name } = req.body.user;
    const newReview = CertificationPost.create({
      name,
      reviewText,
      // 별점(score) 추가 예정
    });

    return newReview;
  }

  // 리뷰 수정
  putCertificationPostReview() {
    const { certificationId } = req.params;
    const { reviewText } = req.body.review;

    const updatedReview = CertificationPost.updateOne(
      {
        _id: certificationId,
      },
      {
        reviewText,
      },
    );

    return updatedReview;
  }

  // 검색기능(지역, 날짜, 시간 순으로 sort)
}

module.exports = CertificationPostService;
