import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-input';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from 'src/modules/users/dto/create-user.input';
import { UsersService } from 'src/modules/users/users.service';


@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        const valid = await bcrypt.compare(password, user?.password);

        if (user && valid) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {

        const { password, ...result } = user;
        return {
            access_token: this.jwtService.sign({ username: user.username, sub: user.id }),
            user: result
        };
    }

    async signup(createUserInput: CreateUserInput) {
        const user = await this.usersService.findOne(createUserInput.username);
        if (user) {
            throw new Error('User already exists')
        }
        const password = await bcrypt.hash(createUserInput.password, 10);

        return this.usersService.create({ ...createUserInput, password });

    }
}