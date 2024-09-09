import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { deregisterService, registerService } from './init/consul.init';
import { GrpcModule } from './grpc/index.module';

@Module({
  imports: [GrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit, OnModuleDestroy {
  //项目初始化注册服务
  async onModuleInit() {
    await registerService();
  }
  //项目关闭时注销服务
  async onModuleDestroy() {
    await deregisterService();
  }
}
