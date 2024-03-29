import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
require('dotenv').config()
@Module({
    imports: [PassportModule, UsersModule,
        JwtModule.register({
            signOptions: { expiresIn: '1d' },
            secret: process.env.JWT_SECRET,
        }), // JWT configuration
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
