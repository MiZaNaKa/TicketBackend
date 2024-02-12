var express = require('express');
var jwtHelper = require('../util/jwtHelper')

var router = express.Router();






/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('respond with a resource');
});


router.post('/login', async(req, res, next)=> {
  var request=req.body
  if(request.email==="staff@gmail.com"){
    if(request.password==='staff123'){
    const obj11={email:"staff@gmail.com",name:"Staff",roleId:'1',roleName:"staff"}
    var jwt  = await jwtHelper.generateJWT(obj11);
    console.log(jwt)
    console.log(jwt)
      var obj={
        status:1,
        message:"",
        body:{email:"staff@gmail.com",name:"Staff",roleId:'1',roleName:"staff",jwt:jwt}
      }
      res.send(obj);
    }
    else{
      var obj={
        status:0,
        message:"password is wrong"
      }
      res.send(obj);
    }
  }
  else if(request.email==="supervisor@gmail.com"){
    if(request.password==='supervisor123'){
      const obj11={email:"supervisor@gmail.com",name:"Supervisor",roleId:'2',roleName:"supervisor"}
      var jwt  = await jwtHelper.generateJWT(obj11);
      var obj={
        status:1,
        message:"",
        body:{email:"supervisor@gmail.com",name:"Supervisor",roleId:'2',roleName:"supervisor",jwt:jwt}
      }
      res.send(obj);
    }
    else{
      var obj={
        status:0,
        message:"password is wrong"
      }
      res.send(obj);
    }
  }
  else if(request.email==="leader@gmail.com"){
    if(request.password==='leader123'){
      const obj11={email:"leader@gmail.com",name:"Leader",roleId:'3',roleName:"leader"}
      var jwt  = await jwtHelper.generateJWT(obj11);
      var obj={
        status:1,
        message:"",
        body:{email:"leader@gmail.com",name:"Leader",roleId:'3',roleName:"leader",jwt:jwt}
      }
      res.send(obj);
    }
    else{
      var obj={
        status:0,
        message:"password is wrong"
      }
      res.send(obj);
    }
  }
  else{
    var obj={
      status:0,
      message:"email is not exist"
    }
    res.send(obj);
  }
});

module.exports = router;
