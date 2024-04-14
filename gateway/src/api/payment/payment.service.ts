import { Inject } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { MICRO_SERVICES } from '../../common/constants/microservices';
import { CustomRes } from '../../common/types/custom.response';

export class PaymentService {
  constructor(
    @Inject(MICRO_SERVICES.PAYMENT.NAME)
    private readonly apiClient: ClientTCP,
  ) {}

  async getApiHello() {
    const { status, data, message }: CustomRes = await lastValueFrom(
      this.apiClient.send('getPaymentHello', { hi: 'eeeasycode' }),
    );
    console.log(status);
    console.log(message);
    return data;
  }
}
