//prikazuje listu produkata i omogucava izmjenu i dodavanje
import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    constructor(private repository: ProductRepository) { }
    getProducts(): Product[] {
        console.log("pozvan getProducts1: ", this.repository.getProducts());
        return this.repository.getProducts();
    }
    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}