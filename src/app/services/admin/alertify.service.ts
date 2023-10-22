import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

    message(message: string, options: Partial<AlertifyOptions>){
      alertify.set('notifier', 'delay', options.delay)
      alertify.set('notifier', 'position', options.position);
      alertify[options.messageType](message);
    }

}

export class AlertifyOptions{
messageType: MessageType = MessageType.Message;
position: Position = Position.BottomLeft;
delay: number = 3;


}

export enum MessageType {
  Eror = "error",
  Message ="message",
  Notify = "notfiy",
  Succes = "succes",
  Warning = "warning"
}

export enum Position {
TopCenter = "top-center",
TopRight = "top-right",
TopLeft = "top-left",
BottomRight ="bottom-right",
BottomLeft = "bottom-left"

}
