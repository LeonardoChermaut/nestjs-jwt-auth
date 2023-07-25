import { Request } from 'express';
import { User } from '@src/domain/user/entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
