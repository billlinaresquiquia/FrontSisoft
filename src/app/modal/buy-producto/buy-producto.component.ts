import { Component,Input,Output,EventEmitter,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ProductoService } from 'src/app/services/producto.service';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import html2canvas from 'html2canvas';




@Component({
  selector: 'app-buy-producto',
  templateUrl: './buy-producto.component.html',
  styleUrls: ['./buy-producto.component.css']
})
export class BuyProductoComponent  {
  @Output() loginSuccessful = new EventEmitter<void>();
  productosEnCarrito: Product[] = [];
  pdfBytes: Uint8Array | undefined;





  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private modalService: NgbModal,
    private productoservice: ProductoService,
    private authService: AuthServiceService,
    private sanitizer: DomSanitizer
  ) { }



  ngOnInit(): void {

    this.productosEnCarrito = this.productoservice.obtenerProductosEnCarrito();
  }



  agregarAlCarrito(producto: any) {
    producto.cantidad = 1;
    this.productoservice.agregarAlCarrito(producto);
    console.log('Producto agregado al carrito:', producto);
    console.log("producto agregado")
  }



  eliminarDelCarrito(producto: Product) {
    //this.productoservice.eliminarDelCarrito(producto);
  }

  calcularTotal() {
    let total = 0;
    for (const producto of this.productosEnCarrito) {
      total += producto.precio * producto.cantidad;
    }
    return total;
  }


  enviarPedidoPorWhatsApp() {
    const numeroWhatsApp = '952868973'; // Reemplaza con el número de WhatsApp al que deseas enviar el PDF

    // Construye el mensaje personalizado
    let mensaje = `¡Hola! 🌟 Aquí está mi pedido:\n\n`;

    for (const producto of this.productosEnCarrito) {
      mensaje += `🛍️ ${producto.nombre}\n`;
      mensaje += `  Descripción: ${producto.descripcion}\n`;
      mensaje += `  Cantidad: ${producto.cantidad}\n`;
      mensaje += `  Precio Unitario: $${producto.precio}\n\n`;
    }

    // Agrega el total al mensaje
    mensaje += `💸 Total: $${this.calcularTotal()}\n\n`;

    // Mensaje de agradecimiento
    mensaje += `¡Gracias por tu pedido! 🙌`;

    // Codifica el mensaje para que sea una URL válida
    const mensajeCodificado = encodeURI(mensaje);

    // Construye el enlace de WhatsApp con el mensaje personalizado
    const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abre la ventana de WhatsApp
    window.open(whatsappLink, '_blank');
  }




}
