import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 8082,
      host: 'localhost',
    },
  });
  await app.startAllMicroservices();
  await app.listen(8082);
  console.log(`Payments Server is running on`);
}
bootstrap();
