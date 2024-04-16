import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { SetResponse } from './common/decorator/response.decorator';
import { ResMessage } from './common/constant/res.message';
import { ResStatusCode } from './common/constant/res.status.code';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';

// @UseInterceptors(TransformInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @SetResponse(ResMessage.PAYMENT_HELLO, ResStatusCode.OK)
  @MessagePattern('getPaymentHello')
  getApiHello(data: { hi: string }): string {
    return this.appService.getPaymentHello(data);
  }
}
