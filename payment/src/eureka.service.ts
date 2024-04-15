import { Injectable, OnModuleInit } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';

@Injectable()
export class EurekaService implements OnModuleInit {
  private client: Eureka;

  constructor() {
    this.client = new Eureka({
      // application instance information
      instance: {
        app: 'payment-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
          $: 8082,
          '@enabled': 'true',
        },
        vipAddress: 'nestjs-service',
        statusPageUrl: 'http://localhost:8082/info',
        healthCheckUrl: 'http://localhost:8082/health',
        dataCenterInfo: {
          '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
          name: 'MyOwn',
        },
      },
      eureka: {
        // eureka server host / port
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
      },
    });
  }

  onModuleInit() {
    this.client.start((error) => {
      console.log('Eureka registration complete', error);
    });
  }
}
