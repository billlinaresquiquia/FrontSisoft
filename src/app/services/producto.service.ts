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
  private apiUrl = 'https://localhost:7285/api/Product';

  
  agregarAlCarrito(producto: any) {
    this.productosEnCarrito.push(producto);
  }

  obtenerProductosEnCarrito() {
    return this.productosEnCarrito;
  }


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/list`);
  }
  
  getProductsByCategory(categoriaId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/categoria/${categoriaId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al obtener productos por categoría:', error);
        return throwError(error);
      })
    );
  }
  
  uploadProduct(productData: FormData): Observable<any> {
    const headers = new HttpHeaders().append('Accept', 'application/json'); // Corrección aquí
    const options = { headers: headers };

    return this.http.post<any>(`${this.apiUrl}/upload`, productData, options).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al cargar el producto:', error);
        return throwError(error); // Reenviar el error para que se maneje en el componente
      })
    );
  }
  updateProduct(id: number, updatedProductData: Product): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Asegúrate de que el tipo de contenido sea JSON si estás enviando datos JSON
    });
    const options = { headers: headers };
  
    return this.http.put<any>(url, updatedProductData, options).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar el producto:', error);
        return throwError(error);
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
  
    return this.http.delete<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al eliminar el producto:', error);
        return throwError(error);
      })
    );
  }
  
  

  
}
