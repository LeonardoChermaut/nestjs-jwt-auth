import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EnvModule } from '../../../helpers/env';

@Module({
  imports: [EnvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
