import { Component } from "@angular/core";

@Component({

    selector: 'app-model-Y',
    templateUrl: 'modelY.component.html',
    styleUrls: ['./modelY.component.css']

})

export class ModelYComponent {
    inventory:string = "Existing Inventory"
    order:string = "Custom Order"
    name:string = "Model Y"
}