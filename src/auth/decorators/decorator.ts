import { SetMetadata } from '@nestjs/common';

export enum KEY {
  IS_PUBLIC = 'isPublic',
  IS_PRIVATE = 'isPrivate',
}
export const IsPublic = () => SetMetadata(KEY.IS_PUBLIC, true);
export const IsPrivate = () => SetMetadata(KEY.IS_PRIVATE, true);
