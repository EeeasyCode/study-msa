import { Controller, Get } from '@nestjs/common';

@Controller()
export class StatusController {
  @Get('health')
  healthCheck() {
    return { status: 'UP' };
  }

  @Get('info')
  getInfo() {
    return { info: 'NestJS Service Info' };
  }
}
