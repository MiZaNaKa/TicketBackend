var tickStatus=require("./ticketStatus")
class ticket{
    constructor(
        name='',
        description='',
        price='',
        date=new Date(),
        status=tickStatus.obj.waitingSupervisorApprove,
        ticketNo=0,
        createdID=""        
    ){
        this.name=name,
        this.description=description,
        this.price=price,
        this.date=date,
        this.status=status,
        this.ticketNo=ticketNo,
        this.createdID=createdID        
    }
    
}

module.exports=ticket

