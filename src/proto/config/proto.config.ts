import { MicroserviceOptions } from '@nestjs/microservices';
import { setGrpcServiceConfig } from '..';

export const myGrpcMicroserviceConfig: MicroserviceOptions =
  setGrpcServiceConfig({
    optionForProto: [{ _package: 'demo', _path: '/Demo/demo.proto' }],
    url: '127.0.0.1:8082',
  });
