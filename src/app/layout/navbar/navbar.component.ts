import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/Interfaces/user';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() loginSuccessful = new EventEmitter<void>();
  @Input() productosEnCarrito: Product[] = [];
  productosEnCarritos: Product[] = [];
  isPasswordVisible: boolean = false;
  passwordValue: string = 'TuContraseñaSecreta';
  userEmail?: string;
  usuarioLogueado: User | null = null;
  userAddedItem: boolean = false;

  correo: string = '';
  contrasena: string = '';
  userCorreo: string = '';
  userConstrasena: string = '';
  userNombre: string = '';
  userApellido: string = '';

  registroExitoso = false;
registroFallido = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private modalService: NgbModal,
    private productoservice: ProductoService,
    private authService: AuthServiceService,

  ) { }

  ngOnInit(): void {
    this.authService.userEmail$.subscribe(email => {
      this.userEmail = email;
    });
    this.productosEnCarrito = this.productoservice.obtenerProductosEnCarrito();
  }

/*
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }


  login() {
    const loginData = { correo: this.correo, contrasena: this.contrasena };
    this.usuarioService.loginUser(loginData).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        this.loginSuccessful.emit();
        this.authService.setUserEmail(this.correo);

        if (this.correo === 'saulledesma@sifoft.pe' && this.contrasena === 'saul123') {
          this.authService.setUserAddedItem(true);
        }

        console.log("usuario exitoso navbar")
      },
      error => {
        console.log("error usuario navbar")
      }
    );
  }



  registro() {
    const user: User = {
      idUsuario: 0,
      nombre: this.userNombre,
      apellido: this.userApellido,
      correo: this.userCorreo,
      contrasena: this.userConstrasena
    };

    this.usuarioService.createUser(user).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        console.log("registro exitoso")
      },
      (error) => {
        console.log("error de registro")
      }
    );
  }

  abrircontacto(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'contacto']);
  }

  abrirlogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'login']);
  }


  abrirlaptop(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'laptop']);
  }

  abririmpresora(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'impresoras']);
  }

  abrirpc(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'pc']);
  }

  abrircamaras(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'camaras-seguridad']);
  }

  abrirmonitores(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'monitores']);
  }

  abriraccesorio(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'accesorios']);
  }
/*  abrirbuyproducto(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'buy-producto']);
  }*/
/*
  abririnsert(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'insert-product']);
  }





  calcularTotal() {
    let total = 0;
    for (const producto of this.productosEnCarrito) {
      total += producto.precio * producto.cantidad;
    }
    return total;
  }

  abrirbuyproducto(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'buy-producto']);
  }

  abrirperfil(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'perfil']);
  }



  // En tu componente NavbarComponent
eliminarProducto(producto: Product) {
  // Encuentra el índice del producto en el array de productosEnCarrito
  const index = this.productosEnCarrito.findIndex(p => p.id === producto.id);

  // Si el producto está en el carrito, elimínalo
  if (index !== -1) {
    this.productosEnCarrito.splice(index, 1);

    // Actualiza el total después de eliminar el producto
    this.calcularTotal();

    // Puedes emitir un evento para notificar a otros componentes sobre el cambio en el carrito
    // this.carritoActualizado.emit(this.productosEnCarrito);
  }
}*/



}
