import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';


import { SplitterModule } from 'primeng/splitter';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { PcComponent } from './component/pc/pc.component';
import { LaptopComponent } from './component/laptop/laptop.component';
import { MonitoresComponent } from './component/monitores/monitores.component';
import { ImpresorasComponent } from './component/impresoras/impresoras.component';
import { CamarasSeguridadComponent } from './component/camaras-seguridad/camaras-seguridad.component';
import { CarritoComponent } from './modal/carrito/carrito.component';
import { InsertProductoComponent } from './modal/insert-producto/insert-producto.component';

import { FileUploadModule } from "primeng/fileupload";
import { CheckboxModule } from 'primeng/checkbox';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ViewProductoComponent } from './modal/view-producto/view-producto.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//ZOMM
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ContactComponent } from './component/contact/contact.component';
import { BuyProductoComponent } from './modal/buy-producto/buy-producto.component';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { SoporteComponent } from './component/soporte/soporte.component';

import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    PcComponent,
    LaptopComponent,
    MonitoresComponent,
    ImpresorasComponent,
    CamarasSeguridadComponent,
    CarritoComponent,
    InsertProductoComponent,
    ViewProductoComponent,
    ContactComponent,
    BuyProductoComponent,
    SoporteComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SplitterModule,
    BadgeModule,
    ButtonModule,
    BrowserAnimationsModule,
    FileUploadModule,
    CheckboxModule,
    InplaceModule,
    RatingModule,
    NgxImageZoomModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NgbModule,
    NgxDropzoneModule,
    ImageModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega esta línea
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
