import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    phone: number;
}