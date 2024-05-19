
import { Component,ElementRef,Input,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewProductoComponent } from 'src/app/modal/view-producto/view-producto.component';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  productos: Product[] = [];
  selectedProduct: Product | null = null; // Inicialmente, no hay ningún producto seleccionado
  productosEnCarrito: any[];
  productosPorCategoria: Product[] = [];
  productosPorCategorialaptop: Product[] = [];
  productosPorCategoriamonitor: Product[] = [];
  productosPorCategoriaaccessorios: Product[] = [];
  mostrarVentanaXP: boolean = false;


  constructor(
    private productService: ProductoService,
    private router : Router,
    private el: ElementRef

    ) { this.productosEnCarrito = this.productService.obtenerProductosEnCarrito();}

    

    ngOnInit(): void {
      this.getAllProducts();
    }
  
    getAllProducts() {
      this.productService.getAllProducts().subscribe(
        (data: Product[]) => {
          this.productos = data;
          console.log('Productos obtenidos con éxito', data);
        },
        (error) => {
          console.error('Error fetching products', error);
        }
      );
    }

    abrirview(){
      this.router.navigate(['/home/view']);
    
    }
}
