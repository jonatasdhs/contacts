import { Inject, Injectable } from "@nestjs/common";
import { ContactsRepository } from "../contact.repository";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateContactDto): Promise<Contact> {
        const contact = new Contact()
        Object.assign(contact, {
            ...data
        })

        const newContact = await this.prisma.contact.create({
            data: { 
                id: contact.id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                createdAt: contact.createdAt,
                userId: contact.userId
             }
        })
        return plainToInstance(Contact, newContact)
    }
    async findAll(): Promise<Contact[]> {
        const contacts = await this.prisma.contact.findMany()
        return plainToInstance(Contact, contacts)
    }
    async findOne(id: string):Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
            where: { id }
        })
        return plainToInstance(Contact, contact)
    }
    
}