import { Controller, Post, Body, HttpStatus, HttpException, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-input';
import { CreateUserInput } from 'src/modules/users/dto/create-user.input';
import { User } from 'src/modules/users/entities/user.entity';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')  // api route auth/login
    @ApiResponse({ status: HttpStatus.OK, description: 'Login successful', type: Object })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
    async login(@Body() loginUserInput: LoginUserInput) {
        try {
            const user = await this.authService.validateUser(loginUserInput.username, loginUserInput.password);
            if (!user) {
                throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
            }
            const result = await this.authService.login(user);
            return result;
        } catch (error) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
    }

    @Post('signup') // api route auth/signup
    @ApiResponse({ status: HttpStatus.CREATED, description: 'User created successfully', type: User })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
    @ApiResponse({ status: HttpStatus.CONFLICT, description: 'User already exists' })
    async signup(@Body() createUserInput: CreateUserInput) {
        try {
            const result = await this.authService.signup(createUserInput);
            return result;
        } catch (error) {
            if (error.message === 'User already exists') {
                throw new HttpException('User already exists', HttpStatus.CONFLICT);
            }
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

}
