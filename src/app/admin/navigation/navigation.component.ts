import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  @ViewChild('offcanvasMenu', { static: false }) offcanvasMenu!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    // Accede al elemento offcanvas una vez que la vista ha sido inicializada
    const offcanvasElement = this.offcanvasMenu.nativeElement;

    // Escucha el evento `hidden.bs.offcanvas`
    offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        // backdrop.remove(); // Elimina el fondo si existe
      }
    });
  }
}
