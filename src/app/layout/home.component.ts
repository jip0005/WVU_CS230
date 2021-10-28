import { ProductService } from "../body/product-comp.service";
import { Component, OnInit, Injectable } from "@angular/core";
import { Product } from "../body/product.model";

@Injectable()
@Component({
    selector: "tesla-home",
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService:ProductService) {
    
    }

    ngOnInit(): void {
        this.showProduct();
    }

    showProduct() {
        this.productService.getProduct().subscribe((data: Product[]) => {
            for(var product of data) {
                console.log(product);
                this.products.push(product);
            }
        })
    }
}