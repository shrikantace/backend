import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './modules/users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbconfig from './config/ormconfig';



@Module({
  imports: [
    TypeOrmModule.forRoot(dbconfig),
    GraphQLModule.forRoot({
    driver: ApolloDriver ,
    autoSchemaFile: 'src/graphql/schema.gql',
    playground: true,
    sortSchema:true,
}), UsersModule, AuthModule,
  ],
  
})
export class AppModule {}
