// auth.resolver.ts
import { Resolver, Args, Mutation, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-input';
import { GqlAuthGuard } from '../common/gql-auth.guard';
import { User } from 'src/modules/users/entities/user.entity';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Args('loginuserinput') loginUserInput: LoginUserInput,@Context() context ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  
  async signup(@Args('loginuserinput') loginUserInput: LoginUserInput,@Context() context ) {
    return this.authService.signup(loginUserInput);
  }
}