import { Resolver, Args, Mutation, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-input';
import { GqlAuthGuard } from '../common/gql-auth.guard';
import { User } from 'src/modules/users/entities/user.entity';
import { CreateUserInput } from 'src/modules/users/dto/create-user.input';

@Resolver('Auth')
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @Mutation(() => LoginResponse)
    @UseGuards(GqlAuthGuard) // Authentication guard
    async login(@Args('loginuserinput') loginUserInput: LoginUserInput, @Context() context) {
        return this.authService.login(context.user);
    }

    @Mutation(() => User)
    async signup(@Args('loginuserinput') createUserInput: CreateUserInput, @Context() context) {
        return this.authService.signup(createUserInput);
    }
}