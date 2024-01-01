import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)
        private readonly userRepository: Repository<User>) { }

    async create(createUserInput: CreateUserInput): Promise<User> {
        const newUser = this.userRepository.create(createUserInput); // will create new user in the database
        return await this.userRepository.save(newUser);
    }

    async findOne(username: string): Promise<User> {
        return await this.userRepository.findOne({ where: { username } });  // will find user by username in the database
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find(); // will find all user in the database
    }
}
