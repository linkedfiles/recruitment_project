// --------------------------------------------------------
// SNS 서버
// --------------------------------------------------------
// 데이터베이스에 접속
const db = require('./server/database')
// 웹 서버를 실행
const express = require('express')
const fs = require('fs')
var cors = require('cors');
const app = express()
const portNo = 3001

app.use(cors());

app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})

//API 정의 //
app.get('/api/adduser', (req, res) => {
  const userid = req.query.userid
  const passwd = req.query.passwd
  if (userid === '' || passwd === '') {
    return res.json({status: false, msg: '필요한 요소를 입력하지 않았습니다.'})
  }
  // 기존 사용자 확인
  db.getUser(userid, (user) => {
    if (user) { // 이미 존재하는 사용자인 경우
      return res.json({status: false, msg: '이미 존재하는 사용자입니다.'})
    }
    // 사용자 추가
    db.addUser(userid, passwd, (token) => {
      if (!token) {
        res.json({status: false, msg: 'DB 오류'})
      }
      res.json({status: true, token})
    })
  })
  // 로그인 전용 API - 로그인하면 토큰 응답
app.get('/api/login', (req, res) => {
  const userid = req.query.userid
  const passwd = req.query.passwd
  db.login(userid, passwd, (err, token) => {
    if (err) {
      res.json({status: false, msg: '인증 오류'})
      return
    }
    // 로그인에 성공했을 때의 토큰 응답
    res.json({status: true, token})
  })
 })
})
//로그인 시 가입 여부 판별
app.post('/api/v1/users/login', (req, res) => {
  fs.readFile(__dirname + '/client/src/json/' + 'Login.json', 'utf8', (err, data) => {
      if (err) res.status(500).json({"status" : 500, "error": err, "response": null});
      else res.status(200).json(JSON.parse(data));
  });
});