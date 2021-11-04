import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<Product[]>
    constructor(private db:AngularFireDatabase){
        console.log("Setting up firebase communication");
        this.items = this.db.list<Product>('products').valueChanges();
    }

    public showData() {
        this.items.subscribe((data : Product[]) => {
            console.log("Data received");
            for(let item of data) {
                console.log(item);
            }
        })
    }
}