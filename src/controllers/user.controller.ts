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
import { UserDTO } from 'src/dtos/note.dto';
import { UserService } from 'src/services/user.service';

@Controller()
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('/createUser')
  async createUser(@Res() res, @Body() user: UserDTO) {
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
}
