import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getSimple(): string {
    return 'get /user';
  }
  @Post()
  postSimple(): string {
    return 'post /user';
  }
  // Ruta con parámetro
  @Get(':id')
  findById(@Param() params) {
    return 'get /user/:id ' + params.id;
  }
}
