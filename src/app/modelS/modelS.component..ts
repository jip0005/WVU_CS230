import { Component } from "@angular/core";

@Component({

    selector: 'app-model-S',
    templateUrl: 'modelS.component.html',
    styleUrls: ['./modelS.component.css']

})

export class ModelSComponent {
    inventory:string = "Existing Inventory"
    order:string = "Custom Order"
    name:string = "Model S"
}