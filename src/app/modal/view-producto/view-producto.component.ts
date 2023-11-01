import { Component ,OnInit,AfterViewInit,ElementRef,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent implements OnInit {
  @Input() producto: any; // Debes proporcionar una entrada para pasar los datos del producto al modal
  backgroundImageStyle: string = '';
  constructor(public activeModal: NgbActiveModal,
    private productService: ProductoService,
    private elementRef: ElementRef) {}

    cambiarImagen() {
      // Aquí puedes definir la lógica para cambiar la imagen de fondo en base al producto.imagen
      this.backgroundImageStyle = `url('${this.producto.imagen}')`;
    }

  ngOnInit() {
    //$('.sampleimage').zoomio();

    // Angular recomienda utilizar eventos en lugar de window.onload

  }


   initializeZoom() {
    // ...

    const previewEl = this.elementRef.nativeElement.querySelector('.image-preview');
    const previewWidth = previewEl.offsetWidth;
    const previewHeight = previewEl.offsetHeight;

    this.elementRef.nativeElement
      .querySelector('.left-column')
      .addEventListener('click', (e: MouseEvent) => {
        const curClassList = (e.target as HTMLElement).classList;
        if (
          !curClassList.contains('small-image') ||
          (curClassList.contains('small-image') && curClassList.contains('active'))
        ) {
          return;
        }

        const imgIndex = (e.target as HTMLElement).getAttribute('data-index');
        previewEl.dataset.index = imgIndex;

      });

    previewEl.addEventListener('mousemove', (e: MouseEvent) => {
      const offsetXPercent = Math.round((e.offsetX * 100) / previewWidth);
      const offsetYPercent = Math.round((e.offsetY * 100) / previewHeight);
      previewEl.style.backgroundPosition = `${offsetXPercent}% ${offsetYPercent}%`;
    });

    previewEl.addEventListener('mouseleave', () => {
      previewEl.style.removeProperty('background-position');
    });
  }




  closeModal() {
    this.activeModal.close();
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
