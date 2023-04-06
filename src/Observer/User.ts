import { Observer } from "./Observer";
import { Registry } from "../Prototype/Registry";
import { Catalog } from "./Catalog";
import { Operation } from "../Prototype/Operation";

const operationType = {
    added: "ajouté",
    removed: "supprimé"
}
export class User implements Observer {
    name: string;
    email: string;

    catalog: Catalog;
    operations: Operation[] = [];
    constructor(name: string, email: string, catalog: Catalog) {
        this.name = name;
        this.email = email;
        this.catalog = catalog;
    }

    update(type: "added" | "removed", product: string) {
        console.log(`[OBSERVER] : Envoie de mail à ${this.email}, le produit ${product} à été ${operationType[type]} du catalogue`);
    }

    addProduct(product: string) {
        this.catalog.addProduct(product);
        return this.addOperation("added", product);
    }

    removeProduct(product: string) {
        this.catalog.removeProduct(product);
        return this.addOperation("removed", product);
    }

    addOperation(type: "added" | "removed", product: string) {
        const operation = new Operation(type, product, new Date());
        this.operations.push(operation);
        return operation;
    }

    createRegistry() {
        const operations = this.operations.map(operation => operation.clone());
        return new Registry(this.name, operations);
    }
}
