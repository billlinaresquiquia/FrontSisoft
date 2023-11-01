import { Component , HostListener} from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isAnimated: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isAnimated = true; // Activar la animación cuando se desplaza al final
    }
  }
  constructor(private viewportScroller: ViewportScroller) {}

  // Esta función se llama cuando se hace clic en el botón "Volver arriba" o cualquier otro evento que desees
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
