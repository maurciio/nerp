import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  mostrarChat = true;
  mensajeNuevo: string = '';
  user: string = 'franko';
  mensajes: { emisor: string, texto: string, hora: string }[] = [
    { emisor: 'franko', texto: 'Hola que tal', hora: '' },
    { emisor: 'nose', texto: 'Hola que tal!!', hora: '' }
  ];

  sendMessage() {
    if (this.mensajeNuevo.trim()) {

      let now = new Date();
      let currentTime = now.toLocaleTimeString(); // Ejemplo de salida: "13:47:35"

      this.mensajes.push({
        emisor: this.user,
        texto: this.mensajeNuevo,
        hora: currentTime
      });
      this.mensajeNuevo = '';

      setTimeout(() => {
        this.scrollToTheLastElementByClassName();
      }, 1);
    }
  }

  scrollToTheLastElementByClassName() {
    const messagesContainer = document.getElementById('mensajes');
    if (messagesContainer) {
      const elements = messagesContainer.getElementsByClassName('msj');
      if (elements.length > 0) {
        const lastElement = elements[elements.length - 1] as HTMLElement;
        messagesContainer.scrollTop = lastElement.offsetTop;
      }
    }
  }
}
