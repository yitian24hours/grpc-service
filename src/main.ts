import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startMicroService } from './init/microservices.init';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8081);
  await startMicroService(app);
}
bootstrap();
