import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  @Input() producto: any; // Debes proporcionar una entrada para pasar los datos del producto al modal

  constructor(public activeModal: NgbActiveModal,
    private router:Router) {}

  closeModal() {
    this.activeModal.close();
  }
}
