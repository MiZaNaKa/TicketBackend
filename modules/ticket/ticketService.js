var ticketDataprocessor = require("./ticketDataprocessor")
var Ticket = require("../../models/ticket")
var ResponseData=require("../../responseData/responseData")

var winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'ticketService' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'success.log' }),
  ],
});

const error = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'ticketService' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'error.log' }),
  ],
});


class ticketService{
    async insertTicket(request){
        var responseData=new ResponseData()
        try{
            var ticketInfo=new Ticket()
            ticketInfo.name=request.name
            ticketInfo.description=request.description
            ticketInfo.price=request.price
            ticketInfo.ticketNo=request.ticketNo
            ticketInfo.createdID=request.createdID
            var result=await ticketDataprocessor.insertTicket(ticketInfo)
            responseData.getSuccessResponseData(result)
            logger.info(`insertTicket -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`insertTicket -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    async getTicket(role){
        var responseData=new ResponseData()
        try{
            var result=await ticketDataprocessor.getTicket(role)
            responseData.getSuccessResponseData(result)
            logger.info(`getTicket -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`getTicket -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    async getTicketDetail(id){
        var responseData=new ResponseData()
        try{
            var result=await ticketDataprocessor.getTicketDetail(id)
            responseData.getSuccessResponseData(result)
            logger.info(`getTicketDetail -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`getTicketDetail -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    
    async needInformation(id){
        var responseData=new ResponseData()
        try{
            var result=await ticketDataprocessor.needInformation(id)
            responseData.getSuccessResponseData(result)
            logger.info(`needInformation -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`needInformation -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    
    async sentToLeader(id){
        var responseData=new ResponseData()
        try{
            var result=await ticketDataprocessor.sentToLeader(id)
            responseData.getSuccessResponseData(result)
            logger.info(`sentToLeader -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`sentToLeader -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    
    async approveTicket(id){
        var responseData=new ResponseData()
        try{
            var result=await ticketDataprocessor.approveTicket(id)
            responseData.getSuccessResponseData(result)
            logger.info(`approveTicket -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`approveTicket -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    
    async edit(id,request){
        var responseData=new ResponseData()
        try{
            var result=await ticketDataprocessor.edit(id,request)
            responseData.getSuccessResponseData(result)
            logger.info(`edit -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`edit -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    async getTicketByStatus(id){
        var responseData=new ResponseData()
        try{
            var result=await ticketDataprocessor.getTicketByStatus(id)
            responseData.getSuccessResponseData(result)
            logger.info(`getTicketByStatus -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`getTicketByStatus -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    
    
}
module.exports=new ticketService()

