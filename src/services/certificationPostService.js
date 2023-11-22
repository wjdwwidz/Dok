const CertificationPost = require('../models/certificationPost/certificationPost');
const CertificationPostReview = require('../models/certificationPostReview/certificationPostReview');

class CertificationPostService {
  // 모든 인증글 조회
  getCertificationPosts() {
    const findCertificationPost = CertificationPost.find({})
      .populate('user')
      .populate('matchingPost')
      .sort({ deletedAt: null })
      .sort({ createdAt: -1 }); // 인증글을 createdAt 기준으로 내림차순으로 정렬

    return findCertificationPost;
  }

  // 상세 인증글 조회
  getCertificationPostDetail() {
    const { userId } = req.params;
    const findCertificationPostDetail = CertificationPost.find({
      _id: userId,
    }).populate('review');

    return findCertificationPostDetail;
  }

  // 인증글 생성 (아직 이미지 받아오는 방식이 정해지지 않아서 certificationImg는 작성x)
  postCertificationPost() {
    const { user, matchingPost, sublocation, postText, review, deletedAt } =
      req.body;

    const newCertificationPost = CertificationPost.create({
      user,
      matchingPost,
      sublocation,
      postText,
      review,
      deletedAt,
    });

    return newCertificationPost;
  }

  // 인증글 삭제
  deleteCertificationPost() {
    const { certificationPostId } = req.body;
    const removePost = CertificationPost.updateOne(
      {
        _id: certificationPostId,
      },
      {
        deletedAt: Date.now(),
      },
    );

    return removePost;
  }

  // req.params에서 _id값을 받아서 그 값이 일치하는 인증글의 review가 처음에는 null값이니깐 그 값을 update해줘야한다.
  // 리뷰 생성
  postCertificationPostReview() {
    const { certificationPostId } = req.params;
    const newReview = CertificationPost.updateOne(
      {
        _id: certificationPostId,
      },
      {
        reviewText,
      },
    );
    // const { reviewText } = req.body.review;
    // const { name } = req.body.user;
    // const newReview = CertificationPost.find({ _id: postId }).create({
    //   name,
    //   reviewText,
    //   // 별점(score) 추가 예정
    // });

    return newReview;
  }

  // 리뷰 수정
  // 생성 과정과 동일
  putCertificationPostReview() {
    const { certificationPostId } = req.params;
    const { reviewText } = req.body.review;

    const updatedReview = CertificationPost.updateOne(
      {
        _id: certificationPostId,
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
      .populate('review')
      .sort({ deletedAt: null });

    return locationCertificationPost;
  }
  // 날짜 선택
  // certificationPost의 createdAt 데이터에서 년/월/일 만 find를 해줘야한다.
  // 내 추측
  // split("-") - 이렇게 년/월/일 분리 후, 반복문으로 각각 비교?
  // 그런데 이렇게하면 req.body에서 받아온 createdAt 값도 분리하고 찾고자하는 날짜도 분리.. 각각 비교..? 더 고민 필요.
  dateCertificationPost() {}
}

module.exports = CertificationPostService;
