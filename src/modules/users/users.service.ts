import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) { }


    async create(createUserInput: CreateUserInput): Promise<User> {
        const newUser = this.userRepository.create(createUserInput);
        return await this.userRepository.save(newUser);
    }

    async findOne(username: string): Promise<User> {
        return await this.userRepository.findOne({ where: { username } });
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }


}
