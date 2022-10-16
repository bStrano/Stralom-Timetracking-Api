import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from './../../package.json';

export const initializeSwagger = (app: any) => {
  const config = new DocumentBuilder()
    .setTitle('Stralom Time Tracking')
    .setDescription('Documentação da API Stralom Time Tracking')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
