import { Component,ElementRef,Input,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewProductoComponent } from 'src/app/modal/view-producto/view-producto.component';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product';
import 'slick-carousel';
import 'owl.carousel';
declare var $: any; 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit{


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

    slides = [
      { img: '../assets/images/electronics/categories/audi.png' },
      { img: '../assets/images/electronics/categories/fuente.png' },
      { img: '../assets/images/electronics/categories/camara-de-seguridad.png' },
      { img: '../assets/images/electronics/categories/impresora.png' },
      { img: '../assets/images/electronics/categories/LAPTOPS.png' },
      { img: '../assets/images/electronics/categories/monitores.png' },
      { img: '../assets/images/electronics/categories/mousesss.png' },
      { img: '../assets/images/electronics/categories/parla.png' },
      { img: '../assets/images/electronics/categories/pc.png' },
      { img: '../assets/images/electronics/categories/teclados.png' },
      // Agrega más imágenes aquí según necesites
    ];
    otherSlides = [
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/toshiba.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/kingston.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/gigabyte.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/redragon.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/razer.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/msi.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/dell.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/intel.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/amd.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/lenovo.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/logitech.jpg' },
      { img: 'https://www.yamoshi.com.pe/img/cms/Marcas/Nuevor/corsair.jpg' },
      
      // Agrega más imágenes aquí según necesites
    ];
    ngAfterViewInit(): void {

      $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
      autoplaySpeed: 6000
      });


      $(document).ready(() => {
        $('.slick-carousel').slick({
          lazyLoad: 'ondemand',
          slidesToShow: 6,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true
        });
      });

      $(document).ready(() => {
      $('.slick-carousel-other').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
      });
    });
  
    }

    ngOnInit(): void {
      this.getAllProducts();
    }
    ngOnDestroy() {
      $('.slick-carousel').slick('unslick');
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
  /*ngOnInit(): void {

    this.getProducts();
    this.getProductosPorCategoria(1);
    this.getProductosPorCategorialaptop(2);
    this.getProductosPorCategoriamonitor(3);
    this.getProductosPorCategoriaaccessorios(6);
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
  getProductosPorCategorialaptop(categoriaId: number) {
    this.productService.getProductsByCategory(categoriaId).subscribe(
        (data: Product[]) => {
            this.productosPorCategorialaptop = data;
            console.log('Productos por categoría laptop obtenidos con éxito', data);
        },
        (error) => {
            console.error('Error al obtener productos por categoría laptop', error);
            // Maneja el error según tus necesidades
        }
    );
}

  getProductosPorCategoriamonitor(categoriaId: number) {
    this.productService.getProductsByCategory(categoriaId).subscribe(
        (data: Product[]) => {
            this.productosPorCategoriamonitor = data;
            console.log('Productos por categoría laptop obtenidos con éxito', data);
        },
        (error) => {
            console.error('Error al obtener productos por categoría laptop', error);
            // Maneja el error según tus necesidades
        }
    );
  }

  getProductosPorCategoriaaccessorios(categoriaId: number) {
    this.productService.getProductsByCategory(categoriaId).subscribe(
        (data: Product[]) => {
            this.productosPorCategoriaaccessorios = data;
            console.log('Productos por categoría laptop obtenidos con éxito', data);
        },
        (error) => {
            console.error('Error al obtener productos por categoría laptop', error);
            // Maneja el error según tus necesidades
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
  abrirlaptop(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'laptop']);
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

  }

*/


}

