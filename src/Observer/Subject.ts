import { Observer } from "./Observer";

export interface Subject {
    attach: (observer: Observer) => void;
    notify: (type: "added" | "removed", product: string) => void;
    remove: (observer: Observer) => void;
}
