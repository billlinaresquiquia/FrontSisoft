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

import { InsertProductoComponent } from './modal/insert-producto/insert-producto.component';

import { FileUploadModule } from "primeng/fileupload";
import { CheckboxModule } from 'primeng/checkbox';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ViewProductoComponent } from './modal/view-producto/view-producto.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//ZOMM
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { BuyProductoComponent } from './modal/buy-producto/buy-producto.component';

import { NgxDropzoneModule } from 'ngx-dropzone';


import { ImageModule } from 'primeng/image';

import { DomSanitizer } from '@angular/platform-browser';

import { AgGridModule } from 'ag-grid-angular';
import { PerfilComponent } from './component/perfil/perfil.component';

import { UsuarioComponent } from './component/usuario/usuario.component';
import { LoginComponent } from './component/usuario/login/login.component';
import { RegisterComponent } from './component/usuario/register/register.component';
import { PagesComponent } from './component/pages/pages.component';
import { ContactoComponent } from './component/pages/contacto/contacto.component';
import { CheckoutComponent } from './component/pages/checkout/checkout.component';
import { NotfundComponent } from './component/pages/notfund/notfund.component';
import { TabViewModule } from 'primeng/tabview';
import { CollectionComponent } from './component/pages/collection/collection.component';
import { ViewComponent } from './component/pages/view/view.component';
import { GalleriaModule } from 'primeng/galleria';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    PcComponent,
    InsertProductoComponent,
    ViewProductoComponent,

    BuyProductoComponent,
    PerfilComponent,

    UsuarioComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    ContactoComponent,
    CheckoutComponent,
    NotfundComponent,
    CollectionComponent,
    ViewComponent,



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
    NgbModule,
    NgxDropzoneModule,
    ImageModule,
    NgbModalModule,
    AgGridModule,
    TabViewModule,
    GalleriaModule




  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega esta línea
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
