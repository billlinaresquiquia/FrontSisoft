import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insert-producto',
  templateUrl: './insert-producto.component.html',
  styleUrls: ['./insert-producto.component.css']
})
export class InsertProductoComponent  {
  productos: Product[] = [];
    // Crear un objeto para almacenar los datos del producto
    productData: {
      nombre: string;
      precio: number;
      descripcion: string;
      descuento: number;
      categoriaId: number;
      valoracion: number;

    } = {
      nombre: '',
      precio: 0,
      descripcion: '',
      descuento: 0,
      categoriaId: 1, // Valor predeterminado
      valoracion: 1, // Valor predeterminado
    };
    
    files: File[] = [];
    currentRate: number = 0; 
    currentDropzone: string | null = null;
    image1: File | null = null;
    image2: File | null = null;
    
    onSelect(event: NgxDropzoneChangeEvent) {
      console.log('Evento:', event);
      console.log('Archivos seleccionados:', event.addedFiles);
    
      if (event.addedFiles.length >= 2) {
        // Asignar la primera imagen a image1 y la segunda imagen a image2
        this.image1 = event.addedFiles[0];
        this.image2 = event.addedFiles[1];
      } else {
        console.error('Debes seleccionar al menos dos imágenes.');
      }
    }
  

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


    constructor(private productoService: ProductoService) { }

    ngOnInit(): void {
      // Llama al servicio para obtener la lista de productos y asigna los datos a la propiedad 'productos'
      this.productoService.getProducts().subscribe(
        (data) => {
          this.productos = data;
          console.log('Datos de productos:', this.productos);
        },
        (error) => {
          console.error('Error al obtener la lista de productos:', error);
        }
      );
    }
  
    cargarProducto() {
      console.log('Datos del producto a cargar:', this.productData);

      const productFormData = new FormData();
      productFormData.append('nombre', this.productData.nombre);
      productFormData.append('precio', this.productData.precio.toString());
      productFormData.append('descripcion', this.productData.descripcion);
      productFormData.append('descuento', this.productData.descuento.toString());
      productFormData.append('categoriaId', this.productData.categoriaId.toString());
      productFormData.append('valoracion', this.productData.valoracion.toString());

    // Verificar si image1 e image2 no son nulos y agregar al FormData
    if (this.image1) {
      productFormData.append('imagen1', this.image1);
    }
    if (this.image2) {
      productFormData.append('imagen2', this.image2);
    }

    this.productoService.uploadProduct(productFormData).subscribe(
      (response) => {
        Swal.fire({
          title: 'Producto',
          text: 'cargado exitosamente:',
          icon: 'success',
          confirmButtonColor: '#3085d6', 
          confirmButtonText: 'OK'
        });
        console.log('Producto cargado exitosamente:', response);
        // Puedes hacer lo que necesites con la respuesta aquí
      },
      (error) => {
        console.error('Error al cargar el producto:', error);
        // Puedes mostrar un mensaje de error en tu interfaz o realizar otra acción en caso de error.
      }
    );
    }

    deleteProduct(id: number) {
      this.productoService.deleteProduct(id).subscribe(
        (response) => {
          Swal.fire({
            title: 'Producto eliminado exitosamente',
            text: 'El producto se ha eliminado con éxito.',
            icon: 'success', // Icono de éxito (marca de verificación verde)
            confirmButtonColor: '#3085d6', // Color del botón de confirmación
            confirmButtonText: 'OK', // Texto del botón de confirmación
          });
          
          console.log('Producto eliminado exitosamente:', response);
          // Puedes realizar cualquier acción adicional aquí si es necesario.
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
          // Puedes mostrar un mensaje de error en tu interfaz o realizar otra acción en caso de error.
        }
      );
    }
    
}

  
