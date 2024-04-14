import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPaymentHello(data): string {
    console.log(data);
    return 'Payment server is running! ! !';
  }
}
