# 🐾DOK(도크)
![image](https://github.com/pado0711/DokProject-backend/assets/109504714/e421edf2-e741-4445-8b36-b9eaeb985b2c)

> **Find Best Local Dog Walker!**
<br/> Dok는 반려동물 산책 서비스를 제공하는 반려인들의 커뮤니티 입니다.

## 서비스 소개

- 견주는 자신의 강아지들을 등록하여, 등록한 강아지에 대한 산책을 의뢰할 수 있습니다.

- 구인 게시글에 대하여 핸들러(회원에 한함)는 댓글을 통해 산책 의사를 표현하고, 게시자(견주)와 조율하여 산책 아르바이트를 진행 할 수 있습니다.

- 핸들러는 진행한 산책에 대하여 산책 인증글을 작성할 수 있으며 해당 인증글에 견주가 다시 코멘트를 달 수 있습니다.



<br/>
<br/>

## 기술 스택
**Backend**

- Node.js
- Express.js

**DB**
- MongoDB
<br/>
<br/>

## Figma
<img width="925" alt="image" src="https://github.com/wjdwwidz/Dok-Mirroring/assets/88189246/f2d28357-efdc-4227-9067-b024b0257c2e">

[Figma Link](https://www.figma.com/file/QISBhhxPuj1rMK7CMggSUS/%EC%97%98%EB%A6%AC%EC%8A%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2%EC%B0%A8?type=design&mode=design)

<br/>
<br/>

## 스키마 및 기능 명세서


[ERD]

![image](https://github.com/pado0711/DokProject-backend/assets/109504714/d6f9242a-e695-4159-af1d-6abb7d66e69f)

[ERD Link](https://dbdiagram.io/d/DokProject-6550982a7d8bbd6465019f02)

<br/>
<br/>

## API 명세서

[API Document Link](https://documenter.getpostman.com/view/30238247/2s9YeEbBkH)

<br/>
<br/>

## 기능


### 로그인/회원가입 기능

[회원가입]

- 회원가입 - 회원가입 폼의 입력 값이 조건에 안 맞을 시 (이메일 형식, 비밀번호와 비밀번호확인의 일치 여부 등) 이를 사용자에게 알려준다.
- 회원가입 - 조건에 맞게 입력 후 제출 버튼을 누를 시, 백엔드 서버와 연결되어 회원가입 정보가 db에 저장된다. 이때, 사용자의 비밀번호는 db에 암호화되어 저장된다.

![1_1online-video-cutter com-ezgif com-video-speed](https://github.com/pado0711/DokProject-backend/assets/109504714/2a2afef3-db1f-4b19-90c9-3cbf35611ca6)

<br/>

[로그인]

- 로그인 폼의 입력 값이 조건에 안 맞을 시 (이메일 형식이 안 맞거나, 비밀번호가 틀리거나 등) 이를 사용자에게 알려준다.
- db에 저장된 정보로 로그인 성공 시, JWT 토큰이 프론트 단에 저장되고, 다른 페이지로 이동한다.
  
![1_1online-video-cutter com-ezgif com-video-speed-_1_](https://github.com/pado0711/DokProject-backend/assets/109504714/cc470c38-27e8-4b12-a20d-0ca46a1f297d)

<br/><br>

### 매칭 글 확인 및 작성


[매칭 페이지]

- 모든 사용자는 매칭 글 리스트를 볼 수 있다.
- 매칭 글 리스트는 지역 별, 산책 날짜 별로 필터링하여 확인할 수 있다.
  
![필터링 검색](https://github.com/pado0711/DokProject-backend/assets/109504714/62a726e8-cc75-4df8-b32e-e7cef55568a6)



<br/>

[매칭 글 작성]

- 로그인한 사용자는 자신이 등록한 강아지의 핸들러 매칭 신청 글을 작성할 수 있다.
- 하나의 신청 글에는 1마리의 강아지만 선택할 수 있다.
- 산책시간은 최소 30분, 최대 2시간이며, 가격은 최저시급(2024년 기준 9,860원) 이상이어야 한다.
- 지도를 통해 산책 장소를 지정할 수 있고, 상세 주소는 선택으로 작성할 수 있다.
- 요청 메세지는 필수로 작성해야 하며, 세부적인 사항을 요청할 수 있다.

![87cf4f6cee571224](https://github.com/pado0711/DokProject-backend/assets/109504714/3ef16160-9bbe-411c-8a5d-2fd2233d415a)


<br/>

[매칭 상세 페이지]

- 모든 사용자는 매칭 글 리스트에서 하나의 매칭 글을 선택하면 해당 매칭 글의 상세 정보를 확인할 수 있다.
- 핸들러 신청 기능과 댓글 기능은 로그인한 사용자만 이용할 수 있으며, 매칭 완료나 매칭 실패된 글일 경우 모든 사용자가 이용할 수 없다.
- 사용자는 다른 사용자가 작성한 매칭 글이 현재 매칭 중 상태라면 핸들러로 신청할 수 있다.
- 사용자는 본인이 작성한 글이 매칭중인 상태라면 해당 글에 핸들러로 신청한 다른 사용자들을 확인할 수 있고 프로필 버튼으로 프로필을 확인할 수도 있다.
- 사용자는 본인이 작성한 글의 핸들러를 직접 선택하여 매칭할 수 있다.
- 사용자는 매칭 중 상태인 글일 경우 댓글을 작성하여 다른 사용자와 소통할 수 있다.
- 다른 사용자의 댓글에는 대댓글을 작성할 수 있고, 본인이 작성한 댓글일 경우 수정과 삭제를 할 수 있다.

![핸들러 신청](https://github.com/pado0711/DokProject-backend/assets/109504714/7424b448-8868-46a4-b1a7-fe03964f517a)
![핸들러 매칭 확정](https://github.com/pado0711/DokProject-backend/assets/109504714/f6cb63e2-867a-42a4-b1d3-67c27c7bf32a)

<br/>

[매칭 글 상태]

- 매칭 글의 상태는 매칭 중, 매칭 완료, 매칭 실패 3가지로 표시된다.
- 매칭 중 : 매칭 글을 작성하면 핸들러가 매칭되기 전까지 매칭 중 상태로 유지된다.
- 매칭 완료 : 매칭 글의 산책 날짜와 시간이 지나기 전에 작성자가 신청한 핸들러들 중에서 원하는 핸들러를 선택하고 매칭하기 버튼을 누를 경우, 매칭 완료 상태로 변경된다.
- 매칭 실패 : 매칭 글의 산책 날짜와 시간이 지날 때까지 핸들러 매칭이 완료되지 못했을 경우, 매칭 실패 상태로 변경된다.

![98356cdb060692f8](https://github.com/pado0711/DokProject-backend/assets/109504714/790af8d6-a0e6-432c-a3f3-4232562da260)

<br/>

[북마크]

- 로그인 후 로그아웃 옆 북마크 아이콘을 클릭하여 작성한 매칭글의 핸들러 지원횟수를 확인 및 해당 매칭글로 들어갈 수 있다.
(작성한 매칭글에 대하여 매칭 카테고리를 선택 후 자신이 작성한 글을 찾아서 들어가지 않고 상단 카테고리에서 쉽고 빠르게 확인이 가능)

![북마크](https://github.com/pado0711/DokProject-backend/assets/109504714/1ef21200-3de4-4571-8390-cf531c2058bb)

<br/><br/>

### 인증 글 확인 및 작성

[리스트 & 상세 페이지]

- 모든 사용자는 인증 글 페이지에서 작성된 산책 인증 글 리스트를 볼 수 있다.
- 인증 글 리스트는 지역 별, 산책일 별로 필터링해서 볼 수 있다.

![리스트& 상세 페이지](https://github.com/pado0711/DokProject-backend/assets/109504714/d988c6f0-0ecc-481f-9ead-780142ff7dbc)

<br/>

[인증 글 작성]


- 핸들러로 확정되어 산책하고 난 후 인증 글을 작성할 수 있고, 헤더에 있는 알림을 통해 작성 페이지로 이동할 수 있다.
- 해당 산책 글을 링크를 통해 확인할 수 있다.
- 산책 장소와 글을 작성할 수 있고, 사진을 등록할 수 있다.

![DOK__](https://github.com/pado0711/DokProject-backend/assets/109504714/a142842c-4f1b-45f7-bda9-0855393a14fd)

<br/>

[후기 글 작성]

- 작성된 인증 글에 해당하는 산책 글 작성자(견주)라면, 해당 인증 글에 별점(5점 만점)과 댓글을 작성 및 수정할 수 있다.

![DOK___](https://github.com/pado0711/DokProject-backend/assets/109504714/8c3dfa4c-80cc-434f-bc37-03c349e6d114)

<br/><br/>

### 마이페이지

- 로그인한 사용자에 한하여 마이페이지에 접속할 수 있다.
- 기본적으로 로그인한 사용자의 프로필 정보를 볼 수 있으며 반려견, 매칭, 인증, 개인정보 수정 카테고리에 따라 다른 정보를 볼 수 있다.

<br/>

[반려견]

- 로그인 사용자의 프로필 정보를 볼 수 있다.
- 다른 회원이 본인의 프로필 선택 시(댓글이나, 매칭,인증 글 등에 보여지는 프로필을 클릭 시) 해당 카테고리에서 작성한 정보가 보여진다.
- 소개글을 수정 및 확인 할 수 있다. 
- 반려견을 등록할 수 있다.

![마이페이지소개글수정](https://github.com/pado0711/DokProject-backend/assets/109504714/3d2d79a4-a7f4-4eb7-a176-41ac59fc7284)
 
![마이페이지반려견등록](https://github.com/pado0711/DokProject-backend/assets/109504714/7e192b8e-511e-44ac-82ad-0db2a8b22636)

<br/>

[매칭]

- 지금까지 작성 한 매칭 글을 모두 확인 할 수 있다.
- 작성한 매칭글에 대한 수정, 삭제가 가능하다.
- 매칭 글 클릭 시 해당 매칭 페이지로 넘어간다

![마이페이지 매칭](https://github.com/pado0711/DokProject-backend/assets/109504714/98975b35-f3f4-4f9c-a5af-5eae293d3efe)

<br/>

[인증]

- 지금까지 인증 한 인증글을 모두 확인 할 수 있다.
- 클릭 시 해당 인증글로 넘어간다.

![마이페이지 인증](https://github.com/pado0711/DokProject-backend/assets/109504714/b85121c1-53e0-479c-a71c-7042cc450c1a)

<br/>

[개인정보 수정]

- 회원가입 시 입력한 개인정보와 비밀번호 수정이 가능하다.
- 프로필 사진, 주소, 전화번호, 닉네임 변경이 가능하다.
- 단, 비밀번호 변경의 경우 현재 비밀번호를 입력하여야만 가능하다.


![마이페이지개인정보수정](https://github.com/pado0711/DokProject-backend/assets/109504714/b9449c0a-ab36-4b3c-aae4-65e22a116c9f)

<br/><br/>

## 팀원 소개 및 역할 (Backend) 

| 이름 | 역할 | 담당 부분 |
| --- | --- | --- | 
| 진미나 | 팀장, 백엔드 | 북마크 기능<br/>메인페이지 <br/>매칭글 / 매칭글 상세 페이지 <br/>마이페이지 <br/>사용자 조회  | 
| 방준하 | 백엔드 | 매칭글 신청 <br/>인증글 신청 <br/>인증글 페이지/인증글 상세 페이지 | 
| 이정혜 | 백엔드 | 로그인, 회원가입 기능 <br/>마이페이지 - 매칭, 인증<br/> 마이페이지 - 회원정보 수정 <br/>이미지 업로드 기능 ( Amazon S3, Mutler-s3)<br/>VM 인프라 세팅 및 배포(nginx, proxy) | 