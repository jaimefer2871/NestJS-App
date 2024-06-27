import { IsBoolean, IsString } from 'class-validator';
export class CreateUserDto {
    id?: string
    @IsString()
    email: string
    @IsString()
    name: string
    @IsString()
    password: string
    createdAt?: string
    updatedAt?: string
}
