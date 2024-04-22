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
        vipAddress: 'payment-service',
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
      if (error) console.error('Eureka client failed to start', error);
    });
  }

  async getServiceUrl(appName: string): Promise<string> {
    await this.client.waitForRegistryFetch();
    const instance = this.client.getInstancesByAppId(appName)[0];
    return `http://${instance.ipAddr}:${instance.port['$']}`;
  }
}
