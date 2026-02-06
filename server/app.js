const express = require("express");
const app = express(); // 웹서버 설정을 가지고 있는 인스턴스 생성
// 미들 웨어 등록 영역
// 1. body parser
app.use(express.json()); // content-type : application/json
app.use(express.urlencoded({ extended: false })); // content-type : application/x-www-form-urlencoded

// 라우팅 등록 영역
app.get("/", (req, res) => {
  res.send("Welcome!");
});
const bookRouter = require("./router/book_router.js");

app.use("/", bookRouter);

// 서버 실행
const port = 3000;
app.listen(port, () => console.log(`서버 실행 http://localhost:${port}`));