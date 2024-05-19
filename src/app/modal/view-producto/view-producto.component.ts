import { Component ,OnInit,AfterViewInit,ElementRef,Input } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent implements OnInit {
  @Input() producto: any;
  selectedProduct: Product | null = null;
  productos: Product[] = [];
  backgroundImageStyle: string = '';
  constructor(
    private productService: ProductoService,
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private router:Router
) {}


  // En ViewProductoComponent
// En ViewProductoComponent
ngOnInit(): void {

  this.route.queryParams.subscribe(params => {
    if (params['producto']) {
      this.producto = JSON.parse(params['producto']);
      console.log('Producto recibido:', this.producto);
    }
  });
  this.getProducts();
}
getProducts() {
  this.productService.getAllProducts().subscribe(
    (data: Product[]) => {
      this.productos = data;
      console.log('Productos obtenidos con éxito', data);
    },
    (error) => {
      console.error('Error al obtener productos', error);
      // Maneja el error de acuerdo a tus necesidades
    }
  );
}
/*
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

  abrirmain(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home']);
  }*/

}
