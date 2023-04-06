import { Subject } from "./Subject";
import { Observer } from "./Observer";
import { Memento } from "../Memento/Memento";

export class Catalog implements Subject {
    observers: Observer[] = [];
    products: string[] = [];
    protected mementos: Memento[] = [];
    attach(observer: Observer) {
        this.observers.push(observer)
        console.log("[OBSERVER] : Observateur ajouté");
    }

    notify(type: "added" | "removed", product: string) {
        this.observers.forEach(observer => {
            observer.update(type, product);
        })
    }

    remove(observer: Observer) {
        const index = this.observers.indexOf(observer);

        if( index === -1) {
            console.log("[OBSERVER] : Observateur non trouvé");
            return;
        }

        this.observers.splice(index, 1);
        console.log("[OBSERVER] : Observateur supprimé");
    }

    addProduct(product: string) {
        this.products.push(product);
        this.notify("added", product);
    }

    removeProduct(product: string) {
        this.products.filter(p => p !== product);
        this.notify("removed", product);
    }

    save() {
        const memento = new Memento();
        memento.setProducts([...this.products]);
        console.log("[MEMENTO] : Sauvegarde du catalogue : ", this.products);
        this.mementos.push(memento);
        return memento;
    }

    restore(memento: Memento) {
        console.log("[MEMENTO] : Restauration du catalogue : ", memento.getProducts());
        this.products = memento.getProducts();
    }

    display() {
        console.log("#### CATALOGUE ####");
        this.products.forEach(product => {
            console.log(product)
            console.log("- - -");
        })
        console.log("###################");
    }

}
