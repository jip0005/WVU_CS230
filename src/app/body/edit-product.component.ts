import { Component } from "@angular/core";
import { DatabaseService } from "./database.service";
import { ProductService } from "./product-comp.service";
import { Product } from "./product.model";

@Component({
    selector: 'app-edit-product',
    templateUrl: 'edit-product.component.html'
})
export class EditProductComponent {
    constructor(public productService: ProductService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onUpdateProduct(data:Product) {
        console.log("You pressed a button");
        this.productService.modifyProduct(data).subscribe(data => {
            console.log("Updated your product")
        });
    }

}