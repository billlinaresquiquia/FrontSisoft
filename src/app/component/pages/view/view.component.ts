import { Component, AfterViewInit,ElementRef,ChangeDetectorRef,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewProductoComponent } from 'src/app/modal/view-producto/view-producto.component';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product';

declare var $: any;
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit  {

  productos: Product[] = [];

  constructor(
    private productService: ProductoService,
    private router: Router,
    private el: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges(); // Asegurarnos de que los cambios se hayan detectado antes de inicializar LightSlider
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.productos = data;
        console.log('Productos obtenidos con éxito', this.productos);
        this.initializeLightSlider();
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  initializeLightSlider() {
    setTimeout(() => {
      $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
      });
    }, 0);
  }
}
