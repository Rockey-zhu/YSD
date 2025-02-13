import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //接口文档
  //http://localhost:5001/api-docs/#/
  const config = new DocumentBuilder()
    .setTitle('ysd博客API')
    .setDescription('Nest项目001')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(5001);
}
bootstrap();
