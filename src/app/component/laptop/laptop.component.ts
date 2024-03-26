import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product'
import { Router } from '@angular/router';
import { ViewProductoComponent } from 'src/app/modal/view-producto/view-producto.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent {
  productosPorCategorialaptop: Product[] = [];
  selectedProduct: Product | null = null; // Inicialmente, no hay ningún producto seleccionado
  productosEnCarrito: any[];

  constructor(private productService: ProductoService,private router:Router,
    private modalService: NgbModal) {
    this.productosEnCarrito = this.productService.obtenerProductosEnCarrito();
  }

  ngOnInit(): void {
    // Llama al método para obtener productos por categoría
    this.getProductosPorCategoria(2); // Reemplaza 1 con el ID de la categoría deseada
  }

  getProductosPorCategoria(categoriaId: number) {
    this.productService.getProductsByCategory(categoriaId).subscribe(
      (data: Product[]) => {
        this.productosPorCategorialaptop = data;
        console.log('Productos por categoría obtenidos con éxito', data);
      },
      (error) => {
        console.error('Error al obtener productos por categoría', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }
  getStarRating(valoracion: number): string {
    const roundedRating = Math.round(valoracion); // Redondea la valoración
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars += '<i class="fa fa-star"></i>'; // Si la estrella está llena
      } else {
        stars += '<i class="fa fa-star-o"></i>'; // Si la estrella está vacía
      }
    }
    return stars;
  }
  abrirviewcart(producto: any){
    this.router.navigate(['/home/view-producto'], { queryParams: { producto: JSON.stringify(producto) } });

  }

  seleccionarProducto(producto: Product) {
    this.selectedProduct = producto;
    this.agregarAlCarrito(producto)
  }

  agregarAlCarrito(producto: any) {
    producto.cantidad = 1;
    // Agregamos el producto al carrito
    this.productService.agregarAlCarrito(producto);

    // Imprimimos el producto en la consola
    console.log('Producto agregado al carrito:', producto);
    console.log("producto agregado")
  }
}
