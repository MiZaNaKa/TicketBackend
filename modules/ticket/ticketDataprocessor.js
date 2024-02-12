const Response = require('../../responseData/responseData')
var mongoDbService= require('../../service/mongodb')
const { MongoClient,  ObjectId } = require("mongodb");

var winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'ticketDataprocessor' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'success.log' }),
  ],
});

const error = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'error.log' }),
  ],
});

class ticketDataprocessor{
    async insertTicket(request){
        var responseData = new Response()
        try{
            var result=await mongoDbService.db.collection('ticket').insertOne(request)
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
        var responseData = new Response()
        try{
            
            if(role=='2'){
                var result=await mongoDbService.db.collection('ticket').find({status:1}).toArray()
            }
            else if(role=='3'){
                var result=await mongoDbService.db.collection('ticket').find({status:2}).toArray()
            }
            else{
                var result=await mongoDbService.db.collection('ticket').find({status:3}).toArray()
            }
            
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
        var responseData = new Response()
        try{           
            var result=await mongoDbService.db.collection("ticket").findOne({"_id":new ObjectId(id)})
            responseData.getSuccessResponseData(result)
            logger.info(`getTicketDetail -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`getTicketDetail -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    async getTicketByStatus(status){
        var responseData = new Response()
        try{          
            console.log(status) 
            var result=await mongoDbService.db.collection("ticket").find({"status":parseInt(status)}).toArray()
            responseData.getSuccessResponseData(result)
            logger.info(`getTicketByStatus -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`getTicketByStatus -  ${JSON.stringify(e)}`)
        }
        return responseData
    }

    

    
    async needInformation(id){
        var responseData = new Response()
        try{     
            var result=await mongoDbService.db.collection("ticket").updateOne(
                { "_id": new ObjectId(id)},
                {
                    $set: {
                        "status": 3,
                    }
                }
            );
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
        var responseData = new Response()
        try{     
            var result=await mongoDbService.db.collection("ticket").updateOne(
                { "_id": new ObjectId(id)},
                {
                    $set: {
                        "status": 2,
                    }
                }
            );
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
        var responseData = new Response()
        try{     
            var result=await mongoDbService.db.collection("ticket").updateOne(
                { "_id": new ObjectId(id)},
                {
                    $set: {
                        "status": 4,
                    }
                }
            );
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
        var responseData = new Response()
        try{     
            var result=await mongoDbService.db.collection("ticket").updateOne(
                { "_id": new ObjectId(id)},
                {
                    $set: {
                        "status": 1,
                        "name":request.name,
                        "description":request.description,
                        "price":request.price,
                        "ticketNo":request.ticketNo
                    }
                }
            );
            responseData.getSuccessResponseData(result)
            logger.info(`edit -  ${JSON.stringify(result)}`)
        }
        catch(e){
            responseData.getServerErrorResponseData(e)
            error.info(`edit -  ${JSON.stringify(e)}`)
        }
        return responseData
    }
    

    

}

module.exports=new ticketDataprocessor()