import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EjemploController } from './ejemplo/ejemplo.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, EjemploController],
  providers: [AppService],
})
export class AppModule {}
