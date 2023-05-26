import { randomUUID } from "crypto";

export class Contact {
    readonly id: string;
    name: string;
    email: string | null;
    phone: number | null;
    readonly createdAt: Date;
    userId?: string

    constructor() {
        this.id = randomUUID();
    }
}