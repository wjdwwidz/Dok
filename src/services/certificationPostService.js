const {
  CertificationPost,
} = require('../models/certificationPost/certificationPost');
const {
  CertificationPostReview,
} = require('../models/certificationPostReview/certificationPostReview');

class CertificationPostService {
  // 모든 인증글 조회
  getCertificationPosts() {
    const findCertificationPost = CertificationPost.find({})
      .populate('user')
      .populate('matchingPost')
      .populate('review')
      .sort({ createdAt: -1 }); // 인증글을 createdAt 기준으로 내림차순으로 정렬

    return findCertificationPost;
  }

  // 상세 인증글 조회
  getCertificationPostDetail() {
    const { userId } = req.body;
    const findCertificationPostDetail = CertificationPost.find({
      _id: userId,
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
  // req.body에서 _id값을 받아서 그 값이 일치하는 인증글의 review가 처음에는 null값이니깐 그 값을 update해줘야한다.
  // 리뷰 생성
  postCertificationPostReview() {
    const { postId } = req.params;
    const nnewReview = CertificationPost.updateOne(
      {
        _id: postId,
      },
      {
        reviewText,
      },
    );
    const { reviewText } = req.body.review;
    const { name } = req.body.user;
    const newReview = CertificationPost.find({ _id: postId }).create({
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

  // 검색기능
  // 지역 선택
  locationCertificationPost() {
    const { location } = req.body;

    const locationCertificationPost = CertificationPost.find({
      location: location,
    })
      .populate('user')
      .populate('matchingPost')
      .populate('review');

    return locationCertificationPost;
  }
  // 날짜 선택
}

module.exports = CertificationPostService;
