import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from 'src/controllers/user.controller';
import {
  AuthMiddleware,
  RolesMiddleware,
} from 'src/middleware/roles.middleware';
import { UserSchema } from 'src/repositories/schemas/user.schema';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RolesMiddleware).forRoutes(UsersController);
    consumer.apply(AuthMiddleware).forRoutes('/userList/:id');
  }
}
