import { IsString, MinLength } from "class-validator"

export class CreateTaskDto {

    @IsString({"message" : "Debe especificar una cadena de caracteres"})
    @MinLength(1,{"message" : "Minimo 1 caracter"})
    name: string

    @IsString({"message" : "Debe especificar una cadena de caracteres"})
    @MinLength(1,{"message" : "Minimo 1 caracter"})
    description: string
}