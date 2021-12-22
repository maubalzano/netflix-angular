import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { Product, ProductResponse } from 'src/app/shared/models/movie.model';
import { map, windowCount } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DetailResponse } from 'src/app/shared/models/productDetails.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  urlFilm = "https://api.themoviedb.org/3/movie/popular"
  urlTv = "https://api.themoviedb.org/3/tv/popular"

  constructor(private http: HttpClient) { }

  getDetails(id: number, type: string){
    const params = new HttpParams()
      .set('api_key', environment.api_key)
      .set('language', 'it-IT');
    return this.http.get<DetailResponse>(`${environment.popularsUrl}${type}/${id}`, { params})
  }

}
