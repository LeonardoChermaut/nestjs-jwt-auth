import { Module } from '@nestjs/common';
import { UserModule } from '@src/domain/user/user.module';
import { AppService } from '@src/domain/views/app/app.service';
import { EnvModule } from '@src/helpers/env';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';
import { AppController } from '@src/domain/views/app/app.controller';
import { AuthModule } from '@src/auth/auth.module';

@Module({
  imports: [EnvModule, UserModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
