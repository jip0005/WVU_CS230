import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({providedIn: 'root'})
export class ProductService {
    private baseUrl:string = 'https://tesla-app-cdb45-default-rtdb.firebaseio.com/';
    private productsEndpoint = 'products.json';
    constructor(private http: HttpClient) {

    }

    getProduct() {
        return this.http.get<Product>(this.baseUrl + this.productsEndpoint)
    }

}