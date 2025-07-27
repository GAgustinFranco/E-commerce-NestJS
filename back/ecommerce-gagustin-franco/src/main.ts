import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(loggerGlobal);
  const swaggerConfig = new DocumentBuilder()
  .setTitle("E-commerce-GAgustínfranco")
  .setDescription("API for E-commerce GAgustínfranco")
  .setVersion("1.0")
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api", app,  document)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
