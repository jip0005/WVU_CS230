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
        console.log(this.baseUrl + this.productsEndpoint)
        return this.http.get<Product[]>(this.baseUrl + this.productsEndpoint)
    }

    modifyProduct(data:Product) {
        
        return this.http.put(this.baseUrl + this.productsEndpoint, data);

    }

}