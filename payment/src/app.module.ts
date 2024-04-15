import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EurekaService } from './eureka.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EurekaService],
})
export class AppModule {}
