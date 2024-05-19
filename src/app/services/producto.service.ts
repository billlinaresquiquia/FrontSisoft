import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { catchError,tap } from 'rxjs';
import { Observable , throwError } from 'rxjs';
import { Product } from '../Interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosEnCarrito: any[] = [];
  private baseURL  = 'https://localhost:7285/api/Product';


  agregarAlCarrito(producto: any) {
    this.productosEnCarrito.push(producto);
  }

  obtenerProductosEnCarrito() {
    return this.productosEnCarrito;
  }


  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/all`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener productos por categoría
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/category/${category}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener productos por estado
  getProductsByStatus(status: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/status/${status}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener productos por rango de precio
  getProductsByPriceRange(min: number, max: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/price/${min}/${max}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para subir imágenes y crear un nuevo producto
  uploadProduct(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/upload`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para actualizar un producto
  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/${id}`, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para eliminar un producto
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(
        `Código de error: ${error.status}, ` +
        `Mensaje: ${error.error}`);
    }
    return throwError('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
  }




}
