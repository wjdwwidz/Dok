const { Router } = require("express");
const {
  CertificationPost,
} = require("../models/certicationPost/certicationPost");

const certificationPost = Router();

// 인증글 생성
certificationPost.post("/", async (req, res, next) => {});
