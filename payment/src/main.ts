import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3003,
      host: 'localhost',
    },
  });
  await app.startAllMicroservices();
  await app.listen(3003);
  console.log(`Payments Server is running on`);
}
bootstrap();
