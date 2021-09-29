import { Component } from "@angular/core";
import { mock_products } from "../body/mock-products";
import { Product } from "../body/product.model";

@Component({
    selector: "tesla-home",
    templateUrl: "home.component.html"
})
export class HomeComponent {
    products:Product[] = [];

    constructor() {
        for (var product of mock_products) {
            this.products.push(new Product(product));
        }
    }
}