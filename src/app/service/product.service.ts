import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://localhost:44347/api/product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductTitles(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/titles`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductTitlesAndPrices(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/titles-and-prices`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
