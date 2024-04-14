import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICRO_SERVICES } from 'src/common/constants/microservices';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICRO_SERVICES.PAYMENT.NAME,
        transport: Transport.TCP,
        options: {
          host: MICRO_SERVICES.PAYMENT.HOST,
          port: MICRO_SERVICES.PAYMENT.PORT,
        },
      },
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
