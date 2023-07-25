import { Module } from '@nestjs/common';
import { UserModule } from '@src/domain/user/user.module';
import { AppService } from '@src/domain/views/app/app.service';
import { EnvModule } from '@src/helpers/env';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';
import { AppController } from '@src/domain/views/app/app.controller';
import { AuthModule } from '@src/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@src/auth/jwt/jwt.guard';

@Module({
  imports: [EnvModule, UserModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AppModule {}
