import { Module } from '@nestjs/common';
import { EnvConfiguration } from './env.config';
import { EnvService } from './env.service';

@Module({
  providers: [EnvConfiguration, EnvService],
  exports: [EnvConfiguration, EnvService],
})
export class EnvModule {}
