import { Operation } from "./Operation";

export class Registry {
    user: string;
    protected operations: Operation[] = [];

    constructor(user: string, operations: Operation[]) {
        this.user = user;
        this.operations = operations;
    }

    print() {

        console.log(`Voila le registre de ${this.user} :`);

        if(!this.operations.length) {
            console.log("/");
            return;
        }

        this.operations.forEach(operation => {
            console.log(`[${operation.date.getHours()}:${operation.date.getMinutes()}] : ${operation.product} -> ${operation.type}`);
        })
    }
}
