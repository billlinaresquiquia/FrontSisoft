import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front_Sisoft';

  /*constructor(private router: Router) {}

  isShoppingCartRoute(): boolean {
    return this.router.url.includes('/home/shopping-cart');
  }*/

}

