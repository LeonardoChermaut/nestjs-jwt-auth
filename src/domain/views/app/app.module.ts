import { Module } from '@nestjs/common';
import { UserModule } from '@src/domain/user/user.module';
import { AppService } from '@src/domain/views/app/app.service';
import { EnvModule } from '@src/helpers/env';
import { PrismaService } from 'prisma/prisma.service';
import { AppController } from '@src/domain/views/app/app.controller';

@Module({
  imports: [EnvModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
