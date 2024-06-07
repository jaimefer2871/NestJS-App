import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import { HelloService } from './hello.service';
import { CreateHelloDto } from './dto/create-hello.dto';
import { UpdateHelloDto } from './dto/update-hello.dto';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) { }

  @Post()
  create(@Body() createHelloDto: CreateHelloDto) {
    return this.helloService.create(createHelloDto);
  }

  @Get()
  findAll() {
    return this.helloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelloDto: UpdateHelloDto) {
    return this.helloService.update(+id, updateHelloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helloService.remove(+id);
  }
  @Get('/notfound/404')
  @HttpCode(404)
  notfoundPage() {
    return "404 no encontrado"
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    let tipo = typeof status;
    return 'Variable de tipo: ' + tipo + ', Valor estatus: ' + status;
  }

  @Get('example/greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: "string", age: "number" }) {

    return {
      name: query.name,
      age: query.age,
      typeName: typeof query.name,
      typeAge: typeof query.age,
      string: `Tu nombre es ${query.name} y tu edad es ${query.age}`
    }

  }
}
