import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // used for database 
@ObjectType() // for graphql
export class User {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    username: string;

    @Column()
    @Field()
    password: string;

    @Column({ unique: true })
    email?: string;
}