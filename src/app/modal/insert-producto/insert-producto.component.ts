import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
@Component({
  selector: 'app-insert-producto',
  templateUrl: './insert-producto.component.html',
  styleUrls: ['./insert-producto.component.css']
})
export class InsertProductoComponent  {
  productForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', [Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/)]),
    descripcion: new FormControl(''),
    descuento: new FormControl(''),
    categoriaId: new FormControl('', Validators.required),
    valoracion: new FormControl(''),
    imagen: new FormControl(null, Validators.required),
    imagen2: new FormControl(null, Validators.required)
  });

  constructor(private productoService: ProductoService) { }

  onSubmit() {
    const formData = new FormData();

    // Utiliza el operador de encadenamiento opcional y el operador '??' para manejar valores nulos o indefinidos
    formData.append('nombre', this.productForm.value.nombre ?? '');
    formData.append('precio', this.productForm.value.precio?.toString() ?? '');
    formData.append('descripcion', this.productForm.value.descripcion ?? '');
    formData.append('descuento', this.productForm.value.descuento?.toString() ?? '');
    formData.append('categoriaId', this.productForm.value.categoriaId?.toString() ?? '');
    formData.append('valoracion', this.productForm.value.valoracion?.toString() ?? '');

    // Añade las imágenes si no son null
    const imagenFile = this.productForm.get('imagen')?.value;
    if (imagenFile) {
      formData.append('imagen', imagenFile);
    }

    const imagen2File = this.productForm.get('imagen2')?.value;
    if (imagen2File) {
      formData.append('imagen2', imagen2File);
    }

    // Realizar la llamada al servicio para subir el producto
    this.productoService.uploadProduct(formData).subscribe(
      response => console.log('Producto cargado con éxito', response),
      error => console.error('Error al cargar el producto', error)
    );
  }

  onFileChange(event: Event, controlName: string) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.productForm.patchValue({ [controlName]: fileList[0] });
    }
  }


  rowData: Product[] = [];
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID',filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'nombre', headerName: 'Nombre',filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'precio', headerName: 'Precio',filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'descripcion', headerName: 'Descripcion' ,filter: 'agTextColumnFilter', floatingFilter: true},
    { field: 'categoriaId', headerName: 'Categoria',filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'descuento', headerName: 'Descuento',filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'valoracion', headerName: 'Valoracion',filter: 'agTextColumnFilter', floatingFilter: true }
  ];
  ngOnInit(): void {
    this.productoService.getProducts().subscribe(
      (products) => {
        this.rowData = products;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);

  }
}
