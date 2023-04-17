import { Injectable } from '@angular/core';
import { chatMessageDTO } from '../Models/chatMessageDTO.models';
//import { webSocket } from 'rxjs/webSocket';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  chatMessages: chatMessageDTO[] =[];

  constructor() {


  }
}
