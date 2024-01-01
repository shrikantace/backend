import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config()
async function bootstrap() {
  console.log(process.env.DB_HOST);
  const app = await NestFactory.create(AppModule);

  
  await app.listen(3000);
}
bootstrap();
