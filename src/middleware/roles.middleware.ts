import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RolesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const user = req.headers['role'];
    const route = req.originalUrl;
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    console.log(user);
    if (user !== 'admin' && route.startsWith('/admin/api')) {
      return res.status(403).json({ message: 'Access forbidden: Admin only' });
    }

    next();
  }
}
