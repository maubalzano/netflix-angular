import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap, tap } from "rxjs/operators";
import { Product, ProductResponse } from "src/app/shared/models/movie.model";
import { SessionStorageService } from "src/app/shared/services/session-storage.service";
import { environment } from "src/environments/environment.prod";
import { getPopulars, getPopularsSuccess } from "./actions.previews";

@Injectable()
export class previewsEffects {
    getPopulars = createEffect(() => this.action$.pipe(
        ofType(getPopulars),
        mergeMap((props) => {
            const params = new HttpParams()
            .set('api_key', environment.api_key)
            .set('language', 'it-IT')
            .set('page', 1);
            
            return this.http.get<ProductResponse>(`${environment.popularsUrl}trending/${props.value}/day`, { params })
             .pipe(
               map(({results}) => results.map(res => Product.build(res))),
               map(res => {console.log(res);

                  const products = res.reduce((a: Product[][],b: Product) => {
                    if (a[0].length && a[a.length - 1].length > 4) {
                    a.push([b]) } else { 
                    a[a.length - 1].push(b) };
                    return a
               }, [[]] as Product[][]);
               return { products: products, type: props.value}
            }
            
            ),
               tap(({products}) => this.sessionStorageService.sessionStorage.setItem(`Populars/${props.value}`, JSON.stringify(products))),
               map(({products, type}) => getPopularsSuccess({ value: {products: products, type: type}}))
             )
        })

    ));

    constructor(
        private action$: Actions, 
        private sessionStorageService: SessionStorageService,
        private http: HttpClient
        ) {}
}

