export class Operation {
    type: "removed" | "added";
    product: string;
    date: Date;

    constructor(type: "removed" | "added", product: string, date: Date) {
        this.type = type;
        this.product = product;
        this.date = date;
    }

    clone() {
        console.log("[PROTOTYPE] : Clonage d'opération", this);
        return { ...this };
    }
}
