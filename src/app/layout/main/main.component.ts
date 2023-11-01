import { Component,ElementRef} from '@angular/core';
import { Product } from 'src/app/Interfaces/product'
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewProductoComponent } from 'src/app/modal/view-producto/view-producto.component';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import 'owl.carousel';


declare var mifuncion: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  productos: Product[] = [];
  selectedProduct: Product | null = null; // Inicialmente, no hay ningún producto seleccionado
  productosEnCarrito: any[];
  productosPorCategoria: Product[] = [];

  constructor(
    private productService: ProductoService,
    private router : Router,
    private modalService: NgbModal,
    private el: ElementRef

    ) { this.productosEnCarrito = this.productService.obtenerProductosEnCarrito();}

  ngOnInit(): void {
    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      responsiveClass:true,
          dots: false,
          lazyLoad : true,
      responsive:{
          0:{
              items:2,
              nav:false,
                          dots:true
          },
          600:{
              items:3,
              nav:false
          },
                  900:{
              items:4,
              nav:false
          },
          1200:{
              items:5,
              nav:false,
          },
      }
  })

    this.getProducts();
    this.getProductosPorCategoria(1);
  }

  getProducts() {
    this.productService.getProducts().subscribe(
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

  getProductosPorCategoria(categoriaId: number) {
    this.productService.getProductsByCategory(categoriaId).subscribe(
      (data: Product[]) => {
        this.productosPorCategoria = data;
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
    const modalRef = this.modalService.open(ViewProductoComponent, { size: 'lg' });
    modalRef.componentInstance.producto = producto;
  }
  agregarAlCarrito(producto: any) {
    producto.cantidad = 1;
    // Agregamos el producto al carrito
    this.productService.agregarAlCarrito(producto);

    // Imprimimos el producto en la consola
    console.log('Producto agregado al carrito:', producto);
    Swal.fire({
      title: 'Carrito',
      text: 'Producto agregado con exito',
      imageUrl:producto.imagen ,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }




}

