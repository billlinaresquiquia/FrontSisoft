import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs';
import { Observable , throwError } from 'rxjs';
import { User } from '../Interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = 'https://localhost:7285/api/User';
  private usuarioLogueado: boolean = false;

  constructor(private http: HttpClient) { }

  // Método para verificar si el usuario ha iniciado sesión
  public isUsuarioLogueado(): boolean {
    return this.usuarioLogueado;
  }

  // Método para iniciar sesión
  loginUser(loginData: { correo: string, contrasena: string }): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/Login`, loginData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para crear un nuevo usuario
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para eliminar un usuario
  deleteUser(dni: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${dni}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else if (error.status === 200) {
      console.error('Respuesta del servidor:', error.error);
    } else {
      console.error(
        `Código de error: ${error.status}, ` +
        `Mensaje: ${error.error}`);
    }
    return throwError('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
  }
}