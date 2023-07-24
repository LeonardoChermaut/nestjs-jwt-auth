import { log } from 'console';
import { NestFactory } from '@nestjs/core';
import { EnvService } from './helpers/env';
import { AppModule } from './domain/views/app';
import { UseGlobalValidationPipe } from './domain/http/validation';
import { UseGlobalHttpFxceptionFilter } from './domain/http/exception';
import { SwaggerDocumentBuilderModule } from './helpers/swagger/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new UseGlobalHttpFxceptionFilter());
  app.useGlobalPipes(new UseGlobalValidationPipe());

  const env = app.get(EnvService);
  const port = env.getAppPort();

  SwaggerDocumentBuilderModule.setup(app);

  await app.listen(port);
  log(`Application is running on port: [${port}]`);
};

bootstrap();
