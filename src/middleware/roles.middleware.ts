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
    if (user !== 'admin' && route.startsWith('/admin/api')) {
      return res.status(403).json({ message: 'Access forbidden: Admin only' });
    }

    next();
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['token'];
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    const userId = req.params.id;
    if (token !== userId) {
      throw new UnauthorizedException(
        'You are not allowed to to access this resource',
      );
    }
    next();
  }
}
