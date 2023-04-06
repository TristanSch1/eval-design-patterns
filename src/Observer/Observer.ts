export interface Observer {
    update: (type: "added" | "removed", product: string) => void;
}
