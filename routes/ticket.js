var express = require('express');
var ticketService = require('../modules/ticket/ticketService')
var withAuth = require("../util/headerAuth")
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getTicket',withAuth, async(req, res, next)=> {
  var request=req.user.data.roleId
  var result =await ticketService.getTicket(request)
  res.send(result);
});


router.post('/create',withAuth, async(req, res, next)=> {
  var request=req.body
  request.createdID=req.user.data.email
  var result =await ticketService.insertTicket(request)
  res.send(result);
});

router.get('/getTicketDetail/:id',withAuth, async(req, res, next)=> {
  var id=req.params.id
  var result =await ticketService.getTicketDetail(id)
  res.send(result);
});

router.get('/getTicketByStatus/:status',withAuth, async(req, res, next)=> {
  var status=req.params.status
  var result =await ticketService.getTicketByStatus(status)
  res.send(result);
});



router.get('/needInformation/:id',withAuth, async(req, res, next)=> {
  var id=req.params.id
  var result =await ticketService.needInformation(id)
  res.send(result);
});


router.get('/sentToLeader/:id',withAuth, async(req, res, next)=> {
  var id=req.params.id
  var result =await ticketService.sentToLeader(id)
  res.send(result);
});



router.get('/approveTicket/:id', async(req, res, next)=> {
  var id=req.params.id
  var result =await ticketService.approveTicket(id)
  res.send(result);
});


router.post('/edit/:id',withAuth, async(req, res, next)=> {
  var id=req.params.id
  var request=req.body
  var result =await ticketService.edit(id,request)
  res.send(result);
});

module.exports = router;
