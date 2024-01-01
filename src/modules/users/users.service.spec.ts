import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
    let usersService: UsersService;
    let userRepository: Repository<User>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository,
                },
            ],
        }).compile();

        usersService = module.get<UsersService>(UsersService);
        userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    });

    it('should be defined', () => {
        expect(usersService).toBeDefined();
    });
    // Create user jest test case
    describe('create', () => {
        it('should create a new user', async () => {
            const createUserInput: CreateUserInput = {
                username: 'newuser',
                password: 'newpassword',
                email: 'newemail@email.com'
            };

            const mockUser: User = { id: 1, ...createUserInput };
            jest.spyOn(userRepository, 'create').mockReturnValueOnce(mockUser);
            jest.spyOn(userRepository, 'save').mockImplementationOnce(async () => mockUser);

            const result: User = await usersService.create(createUserInput);

            expect(result).toEqual(mockUser);
        });
    });
    // find user jest test case
    describe('findOne', () => {
        it('should find a user by username', async () => {
            const mockUser: User = { id: 1, username: 'testuser', password: 'testpassword' };
            jest.spyOn(userRepository, 'findOne').mockImplementationOnce(async () => mockUser);

            const result: User = await usersService.findOne('testuser');

            expect(result).toEqual(mockUser);
        });
    });
    // list all users jest case
    describe('findAll', () => {
        it('should find all users', async () => {
            const mockUsers: User[] = [
                { id: 1, username: 'user1', password: 'password1' },
                { id: 2, username: 'user2', password: 'password2' },
            ];
            jest.spyOn(userRepository, 'find').mockImplementationOnce(async () => mockUsers);

            const result: User[] = await usersService.findAll();

            expect(result).toEqual(mockUsers);
        });
    });
});
