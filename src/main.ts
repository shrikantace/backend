import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

require('dotenv').config()
async function bootstrap() {
  console.log(process.env.DB_HOST);
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle(process.env.APP_NAME)
  .setDescription(process.env.APP_DESC)
  .setVersion('1.0')
  .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
  })
  .addBearerAuth()
  .build();
const swaggerOptions = {
  swaggerOptions: {
      tagsSorter: 'alpha',
      docExpansion: 'none'
  }, 
};

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document, swaggerOptions);


  await app.listen(process.env.APP_PORT);
}
bootstrap();
