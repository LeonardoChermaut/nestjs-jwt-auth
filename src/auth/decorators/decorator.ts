import { SetMetadata } from '@nestjs/common';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@src/domain/user/entities/user.entity';
import { AuthRequest } from '@src/auth/models/auth.request.body';

export enum KEY {
  IS_PUBLIC = 'isPublic',
  IS_PRIVATE = 'isPrivate',
}
export const IsPublic = () => SetMetadata(KEY.IS_PUBLIC, true);
export const IsPrivate = () => SetMetadata(KEY.IS_PRIVATE, true);

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const { user } = context.switchToHttp().getRequest<AuthRequest>();
    if (!user) return null;

    return user;
  },
);
