// chat.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket$: WebSocketSubject<Message> | any;
  private messagesSubject = new Subject<Message>();
  public messages$: Observable<Message> = this.messagesSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect(): void {
    this.socket$ = webSocket<Message>('ws://tu-backend-url/chat');

    this.socket$.subscribe(
      (message: any) => this.messagesSubject.next(message),
      (error: any) => console.error(error),
      () => console.warn('WebSocket cerrado')
    );
  }

  enviarMensaje(message: Message): void {
    this.socket$.next(message);
  }

  cerrarConexion(): void {
    this.socket$.complete();
  }
}
