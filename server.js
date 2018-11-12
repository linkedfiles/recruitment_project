// --------------------------------------------------------
// SNS 서버
// --------------------------------------------------------
// 데이터베이스에 접속

// 웹 서버를 실행
const express = require('express')
const fs = require('fs')
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express()
const portNo = 3001

app.use(cors());
app.use(bodyParser());
app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})

//API 정의 //
  // 기존 사용자 확인
    // 사용자 추가
  // 로그인 전용 API - 로그인하면 토큰 응답
    // 로그인에 성공했을 때의 토큰 응답
//로그인 시 가입 여부 판별
app.post('/api/v1/users/login', (req, res) => {
  if(req.body.email && req.body.password){
      if(req.body.email == "jupsu@stdioh.com" && req.body.password == "jupsu123"){
          fs.readFile(__dirname + '/client/src/json/' + 'Login.json', 'utf8', (err, data) => {
              if (err) res.status(500).json({"status": 500, "error": err, "response" : null});
              else res.status(200).json(JSON.parse(data));
          });
      }
      else res.status(500).json({"status": 500, "error": "email & password is wrong", "response" : null});
  }
  else res.status(500).json({"status": 500, "error": "no input", "response" : null});
});


//로그인 시 관련 회사 정보 판별
app.get('/api/v1/users/:_id/Companies', (req, res) => {
  fs.readFile(__dirname + '/client/src/json/' + 'User-Companies.json', 'utf8', (err, data) => {
      if (err) res.status(500).json({"status" : 500, "error": err, "response": null});
      else res.status(200).json(JSON.parse(data));
  });
});