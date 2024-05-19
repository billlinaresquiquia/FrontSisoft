import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import { Product } from 'src/app/Interfaces/product'; // Adjust the path as necessary

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html', 
  

  styleUrls: ['./view.component.css'] // Adjust the path as necessary
})
export class ViewComponent implements OnInit {

  productos: any[] = [];
  productosEnCarrito: any[];
  responsiveOptions: any[] | undefined;

  constructor(
    private productService: ProductoService,
    private router: Router,
    private el: ElementRef
  ) {
    this.productosEnCarrito = this.productService.obtenerProductosEnCarrito();
  }

  async ngOnInit(): Promise<void> {
    await this.getAllProducts();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  async getAllProducts(): Promise<void> {
    try {
      const data: Product[] = await this.productService.getAllProducts().toPromise() || [];
      // Ensure products have the correct image properties
      this.productos = data.map(product => ({
        itemImageSrc: product.imagen1,
        thumbnailImageSrc: product.imagen2 // Use one of the thumbnails as the main one
      }));
      console.log('Productos obtenidos con éxito', this.productos);
    } catch (error) {
      console.error('Error al obtener productos', error);
    }
  }
}
