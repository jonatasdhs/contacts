import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() CreateContactDto: CreateContactDto) {
    return this.contactsService.create(CreateContactDto)
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }
}
