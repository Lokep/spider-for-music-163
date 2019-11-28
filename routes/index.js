const express = require('express')
const router = express.Router()
const request = require('superagent')
const fs = require('fs')

router.get('/', function(req, res, next) {
  res.send('各位同学，加油！');
});

router.get('/get-music-playlist', (req, res, next) => {
  let { id } = req.query;
  let target = `https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=songlist&id=${id}`

  request.get(target)
    .then(response => {
      let { Code, Body } = JSON.parse(response.req.res.text)
      if(Code == 'OK') {
        if(!!Body && Body.length > 0) {
          clearDocs().then(() => {
            fs.writeFile('./public/index.md', JSON.stringify(Body), err => {
              if(err) {
                res.send({
                  success:false,
                  data:[],
                  message:'id可能有误'
                })
              }else {
                res.send({
                  success:true,
                  data:Body
                });
              }
            })
          },() => {
            handleErr(res)
          })
        }else {
          handleErr(res)
        }
      }else {
        handleErr(res)
      }
    })
})

function clearDocs() {
  return new Promise(resolve => {
    fs.unlink('./public/index.md',err => {
      if(err) {
        return
      }else {
        resolve()
      }
    })
  })
  
}

function handleErr(res) {
  res.send({
    success:false,
    data:[],
    message:'id可能有误'
  })
}

module.exports = router;
