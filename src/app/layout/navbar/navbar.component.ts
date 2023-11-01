import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/Interfaces/user';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from 'src/app/modal/carrito/carrito.component';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/app/Interfaces/product';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() loginSuccessful = new EventEmitter<void>();
  productosEnCarrito: Product[] = []; // Agrega esta línea
  isPasswordVisible: boolean = false;
  passwordValue: string = 'TuContraseñaSecreta';
  userEmail?: string;
  usuarioLogueado: User | null = null;
  userAddedItem: boolean = false;


  //registroExitoso = false;
  //loginExitoso = false
  //loginError = false
  correo : string='';
  contrasena :string= '';

  userCorreo: string = '';
  userConstrasena: string = '';
  userNombre:string='';
  userApellido:string=''

  constructor(
    private usuarioService: UsuarioService,
    private router : Router,
    private modalService: NgbModal,
    private productoservice: ProductoService, private authService: AuthServiceService,
    ) {this.productosEnCarrito = this.productoservice.obtenerProductosEnCarrito(); }

    agregarAlCarrito(producto: any) {
      producto.cantidad = 1;
      // Agregamos el producto al carrito
      this.productoservice.agregarAlCarrito(producto);

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

    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
    ngOnInit(): void {
      this.authService.userEmail$.subscribe(email => {
        this.userEmail = email;
      });
    }


    // Agrega el método eliminarDelCarrito para eliminar un producto del carrito
  eliminarDelCarrito(producto: Product) {
    // Aquí debes implementar la lógica para eliminar el producto del carrito
  }

  // Agrega el método calcularTotal para calcular el total de los productos en el carrito
  calcularTotal() {
    // Aquí debes implementar la lógica para calcular el total
    let total = 0;
    for (const producto of this.productosEnCarrito) {
      total += producto.precio * producto.cantidad ;
    }
    return total;
  }

  login() {
    const loginData = { correo: this.correo, contrasena: this.contrasena };
    this.usuarioService.loginUser(loginData).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        this.loginSuccessful.emit();
        this.authService.setUserEmail(this.correo);

        if (this.correo === 'saulledesma@sifoft.pe' && this.contrasena === 'saul123') {
          // Si el usuario es saulledesma@sifoft.pe con contraseña SAUL123, agrega el ítem.
          this.userAddedItem = true;
        }

        Swal.fire({
          title: 'Usuario',
          text: 'Inisio de sesion exitoso',
        });
      },
      error => {
        console.error('Error al iniciar sesión:', error);
        Swal.fire({
          title: 'Usuario',
          text: 'Error de Inisio de sesion ',
        });
      }
    );
  }

  registro() {
    // Aquí puedes utilizar this.userEmail y this.userPassword para llamar al servicio de login
    const user: User = {
      idUsuario: 0, // Puedes dejarlo como 0 o asignar el valor adecuado
      nombre:this.userNombre,
      apellido:this.userApellido,
      correo: this.userCorreo,
      contrasena: this.userConstrasena
    };

    this.usuarioService.createUser(user).subscribe(
      (response) => {
        // Lógica para manejar la respuesta exitosa
        console.log('registro exitoso:', response);

        Swal.fire({
          title: 'Usuario',
          text: 'Registro exitosamente',
        });
      },
      (error) => {
        // Lógica para manejar el error
        Swal.fire({
          title: 'Usuario',
          text: 'Error',
        });
      }
    );
  }



  abrircontacto(event: Event) {
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'contacto']);
  }
  abrircarrito(){
    const modalRef = this.modalService.open(CarritoComponent, { size: 'lg' });
  }
  abrirlaptop(event: Event){
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'laptop']);
  }
  abririmpresora(event: Event){
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'impresoras']);
  }
  abrirpc(event: Event){
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'pc']);
  }
  abrircamaras(event: Event){
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'camaras-seguridad']);
  }
  abrirmonitores(event: Event){
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'monitores']);
  }
  abrirbuyproducto(event: Event) {
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'buy-producto']);
  }
  abririnsert(event: Event) {
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'insert-product']);
  }
  abrirsoporte(event: Event) {
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['/home', 'soporte']);
  }


}





