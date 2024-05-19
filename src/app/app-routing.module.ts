import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { InsertProductoComponent } from './modal/insert-producto/insert-producto.component';


import { ContactoComponent } from './component/pages/contacto/contacto.component';

import { PcComponent } from './component/pc/pc.component';

import { BuyProductoComponent } from './modal/buy-producto/buy-producto.component';

import { PerfilComponent } from './component/perfil/perfil.component';
import { RegisterComponent } from './component/usuario/register/register.component';
import { LoginComponent } from './component/usuario/login/login.component';
import { CheckoutComponent } from './component/pages/checkout/checkout.component';
import { NotfundComponent } from './component/pages/notfund/notfund.component';
import { CollectionComponent } from './component/pages/collection/collection.component';
import { ViewComponent } from './component/pages/view/view.component';

import { ViewProductoComponent } from './modal/view-producto/view-producto.component';
const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'home/insert-product', component: InsertProductoComponent },
  {path:'home/view-producto',component:ViewProductoComponent},
  

  {path:'home/pc',component:PcComponent},
  {path:"home/buy-producto",component:BuyProductoComponent},
  {path:"home/perfil",component:PerfilComponent},


  {path:"home/registro",component:RegisterComponent},
  {path:"home/login",component:LoginComponent},
  {path:'home/contacto',component:ContactoComponent},
  {path:'home/checkout',component:CheckoutComponent},
  {path:'home/notfund',component:NotfundComponent},
  {path:'home/collection',component:CollectionComponent},
  {path:'home/view',component:ViewComponent},

  {path:'home/ver',component:ViewProductoComponent},

  // Otras rutas si las tienes
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
