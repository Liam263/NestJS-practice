import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/dtos/note.dto';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userService: Model<User>) {}

  async createUser(user: UserDTO): Promise<User> {
    const newUser = await this.userService.create(user);
    console.log(`User input: ${user.name}: ${user.password}`);
    console.log(`User created: ${newUser.name} : ${newUser.password}`);

    return newUser;
  }

  async getUserById(userId: string): Promise<User> {
    return await this.userService.findById(userId);
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userService.find();
    return users;
  }

  async updateUser(userId: string, user: UserDTO): Promise<User> {
    return await this.userService.findByIdAndUpdate(userId, user);
  }

  async deleteUser(userId: string): Promise<void> {
    return await this.userService.findByIdAndDelete(userId);
  }

  async login(name: string, password: string): Promise<User> {
    const user = await this.userService.findOne({ name, password });
    return user;
  }
}
