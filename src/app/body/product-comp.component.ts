import { Component, Input } from "@angular/core";

@Component ({
    selector: "app-product-comp",
    templateUrl: "product-comp.component.html",
    styleUrls: ['./product-comp.component.css']
})
export class ProductComponent {
    @Input()
     title! :string;
     @Input()
     text! :string;
     @Input()
     textLink! :string;
     @Input()
     buttonOne! :string;
     @Input()
     buttonTwo! :string;
     @Input()
     imagePath! :string;
}