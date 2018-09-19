import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  routeName: string;
  shopUserRoute: string;

  constructor(private http: HttpClient) {
    this.routeName = 'shops';
    this.shopUserRoute = 'shop_user';
  }

  /**
   * Get a collection of Shops
   * @param p
   */
  getShops(lat: number, lon: number, p: number = 1): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.routeName}?page=${p}&lat=${lat}&lon=${lon}`);
  }

  /**
   * Get a collection of favorite Shops
   * @param p
   */
  getFavoriteShops(p: number = 1): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.routeName}/favorites?page=${p}`);
  }

  /**
   * Like or Dislike a shop
   * @param data
   */
  likeOrDislike(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.shopUserRoute}`, JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /**
   * Like or Dislike a shop
   * @param data
   */
  remove(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.shopUserRoute}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
