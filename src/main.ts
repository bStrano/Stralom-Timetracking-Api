import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { initializeSwagger } from './configs/swagger.config';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeSwagger(app);
  app.enableCors();
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
