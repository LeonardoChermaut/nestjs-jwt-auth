import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from './jwt.config';

@Module({})
export class JwtConfigModule {
  static register(): DynamicModule {
    return {
      module: JwtConfigModule,
      imports: [JwtModule.registerAsync({ useClass: JwtConfig })],
    };
  }
}
