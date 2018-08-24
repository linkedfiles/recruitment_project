// 데이터베이스와 관련된 처리
const path = require('path')
const NeDB = require('nedb')

//DB에 접속
const userDB = new NeDB({
  filename: path.join(__dirname, 'user.db'),
  autoload: true
})

// 해시(sha512) 추출하기
function getHash (pw) {
  const salt = '::EVuCM0QwfI48Krpr'
  const crypto = require('crypto')
  const hashsum = crypto.createHash('sha512')
  hashsum.update(pw + salt)
  return hashsum.digest('hex')
}
//인증 토큰 생성
function getAuthToken (useremail) {
  const time = (new Date()).getTime()
  return getHash(`${useremail}:${time}`)
}
// API에서 사용하는 DB 조작 함수
// 사용자 검색하기
function getUser (useremail, callback) {
  userDB.findOne({useremail}, (err, user) => {
    if (err || user === null) return callback(null)
    callback(user)
  })
}
// 사용자 추가하기
function addUser (useremail, password, callback) {
  const hash = getHash(password)
  const token = getAuthToken(useremail)
  const regDoc = {useremail, hash, token, friends: {}}
  userDB.insert(regDoc, (err, newdoc) => {
    if (err) return callback(null)
    callback(token)
  })
}
// 로그인 처리
function login (useremail, password, callback) {
  const hash = getHash(password)
  const token = getAuthToken(useremail)
  // 사용자 정보 추출
  getUser(useremail, (user) => {
    if (!user || user.hash !== hash) {
      return callback(new Error('인증 오류'), null)
    }
    // 인증 토큰 변경
    user.token = token
    updateUser(user, (err) => {
      if (err) return callback(err, null)
      callback(null, token)
    })
  })
}
// 인증 토큰 확인하기 
function checkToken (useremail, token, callback) {
  // 사용자 정보 추출하기
  getUser(useremail, (user) => {
    if (!user || user.token !== token) {
      return callback(new Error('인증 실패'), null)
    }
    callback(null, user)
  })
}
// 사용자 정보 변경하기
function updateUser (user, callback) {
  userDB.update({useremail: user.useremail}, user, {}, (err, n) => {
    if (err) return callback(err, null)
    callback(null)
  })
}

   
module.exports = {
  userDB, getUser, addUser, login, checkToken, updateUser
}