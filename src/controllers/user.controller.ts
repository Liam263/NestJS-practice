import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { users } from 'src/Data/UserMockData';
import { UserDTO } from 'src/dtos/note.dto';
import { UserService } from 'src/services/user.service';

@Controller()
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('/createUser')
  async createUser(@Res() res, @Body() user: UserDTO) {
    console.log('Controller', user.name, user.password, user.role);
    const newUser = await this.userService.createUser(user);
    return res.json({
      message: 'User created successfully',
      data: newUser,
    });
  }

  @Get('admin/api/getAllUsers')
  async getAllUsers(@Res() res) {
    const users = await this.userService.getAllUsers();
    return res.json(users);
  }

  @Get('admin/api/:id')
  async getUserById(@Res() res, @Param('id') id: string) {
    const user = await this.userService.getUserById(id);
    return res.json(user);
  }

  @Patch('/users/:id')
  async updateUser(@Res() res, @Param('id') id: string, @Body() user: UserDTO) {
    const updatedUser = await this.userService.updateUser(id, user);
    return res.json(updatedUser);
  }

  @Delete('/users/:id')
  async deleteUser(@Res() res, @Param('id') id: string) {
    const deletedUser = await this.userService.deleteUser(id);
    return res.json(deletedUser);
  }

  @Post('/login')
  async login(@Res() res, @Body() user: { name: string; password: string }) {
    const loginUser = await this.userService.login(user.name, user.password);
    if (loginUser) {
      const token = { userId: loginUser._id, role: loginUser.role };

      return res.json({
        message: 'Login successful',
        token,
      });
    }

    return res.status(401).json({ message: 'Invalid Credentials' });
  }

  @Get('/userList/:id')
  async getUserList(@Res() res, @Param('id') id: string) {
    const toDoList = users.find((user) => user.id === id);

    return res.json(toDoList);
  }
}
