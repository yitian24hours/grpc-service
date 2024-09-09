import { INestApplication } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { myGrpcMicroserviceConfig } from 'src/proto/config/proto.config';

//初始化微服务
export const startMicroService = async (app: INestApplication<any>) => {
  app.connectMicroservice<MicroserviceOptions>(myGrpcMicroserviceConfig);
  await app.startAllMicroservices();
};
