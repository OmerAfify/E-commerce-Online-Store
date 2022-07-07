import { Injectable } from "@angular/core";

@Injectable()
export class Message{

    Success(message:string):void{
        alert("Successed to "+message)
    }

    Fail(message:string):void{
        alert("Failed to "+message)
    }


}