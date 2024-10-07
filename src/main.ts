import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  // Allow cross-origin requests (Angular frontend will communicate with this)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
