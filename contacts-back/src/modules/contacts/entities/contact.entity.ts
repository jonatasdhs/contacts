import { randomUUID } from "crypto";

export class Contact {
    readonly id: string;
    name: string;
    email: string;
    phone: number;
    readonly createdAt: Date;

    constructor() {
        this.id = randomUUID();
    }
}