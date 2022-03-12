import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

interface CreateMessageDTO{
    to: String;
    text: String;
    roomId: String;
}


@injectable()
class CreateMessageService{
    
    async execute({to,text,roomId}:CreateMessageDTO){
        const message = await Message.create({to,text,roomId});

        return message;
    }

}

export{CreateMessageService}