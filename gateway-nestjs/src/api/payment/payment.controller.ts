import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service'; // PaymentService 위치에 따라 경로를 조정해주세요.

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async getApiHello() {
    return await this.paymentService.getApiHello();
  }
}
