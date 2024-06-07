import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('validateUserPipeValue', value)

    const ageNumber = parseInt(value.age.toString(), 10);
    const nameUpper = value.name.toUpperCase()

    if (isNaN(ageNumber)) {
      throw new HttpException('La edad deberia ser un numero', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: ageNumber, name: nameUpper};
  }
}
