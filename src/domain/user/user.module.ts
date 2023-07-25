import { Module } from '@nestjs/common';
import { UserService } from '@src/domain/user/user.service';
import { UserController } from '@src/domain/user/user.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
