import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtConfigModule } from '@src/auth/jwt/jwt.config.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '@src/auth/auth.controller';
import { UserModule } from '@src/domain/user/user.module';
import { AuthService } from '@src/auth/auth.service';
import { LocalStrategy } from '@src/auth/strategies';
import { JwtStrategy } from '@src/auth/jwt/jwt.strategy';
import { LoginValidationMiddleware } from '@src/auth/middlewares/';

@Module({
  imports: [UserModule, PassportModule, JwtConfigModule.register()],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}
