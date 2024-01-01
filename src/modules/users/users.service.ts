import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';


@Injectable()
export class UsersService {

  private readonly users = [
    {
      id: 1,
      username: 'test1',
      password: 'test1',
    },
    {
      id: 2,
      username: 'test2',
      password: 'test2', 
    },
  ]

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    }
    this.users.push(user)
    return user;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }

  findAll() {
    return  this.users;
  }


}
