import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { InsertProductoComponent } from './modal/insert-producto/insert-producto.component';
import { CarritoComponent } from './modal/carrito/carrito.component';
import { ViewProductoComponent } from './modal/view-producto/view-producto.component';
import { ContactComponent } from './component/contact/contact.component';
import { ImpresorasComponent } from './component/impresoras/impresoras.component';
import { LaptopComponent } from './component/laptop/laptop.component';
import { PcComponent } from './component/pc/pc.component';
import { CamarasSeguridadComponent } from './component/camaras-seguridad/camaras-seguridad.component';
import { MonitoresComponent } from './component/monitores/monitores.component';
import { BuyProductoComponent } from './modal/buy-producto/buy-producto.component';
import { SoporteComponent } from './component/soporte/soporte.component';
const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'home/shopping-cart', component: CarritoComponent },
  { path: 'home/insert-product', component: InsertProductoComponent },
  {path:'home/view-producto',component:ViewProductoComponent},
  {path:'home/contacto',component:ContactComponent},
  {path:'home/impresoras',component:ImpresorasComponent},
  {path:'home/laptop',component:LaptopComponent},
  {path:'home/monitores',component:MonitoresComponent},
  {path:'home/camaras-seguridad',component:CamarasSeguridadComponent},
  {path:'home/pc',component:PcComponent},
  {path:"home/buy-producto",component:BuyProductoComponent},
  {path:"home/soporte",component:SoporteComponent},
  // Otras rutas si las tienes
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
