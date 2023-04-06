
export class Memento {
    protected products: string[] = [];

    getProducts() {
        return this.products;
    }

    setProducts(products: string[]) {
        this.products = products;
    }
}
