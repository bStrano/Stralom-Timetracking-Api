import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { initializeSwagger } from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeSwagger(app);
  await app.listen(3000);
}
bootstrap();
