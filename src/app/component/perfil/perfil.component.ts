import { Component,Input,Output,EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/Interfaces/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  @Output() loginSuccessful = new EventEmitter<void>();
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

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private authService: AuthServiceService,

  ) { }

  ngOnInit(): void {
    this.authService.getUserAddedItem().subscribe((value) => {

      this.userAddedItem = value;
      console.log("login additem", this.userAddedItem);
      // Ahora puedes usar this.userAddedItem en tu componente según tus necesidades
    });

    this.authService.userEmail$.subscribe(email => {
      this.userEmail = email;
    });
  }


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }




  abririnsert(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home', 'insert-product']);
  }

}
