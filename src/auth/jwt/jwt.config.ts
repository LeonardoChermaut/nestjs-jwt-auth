import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
import { EnvService } from '@src/helpers/env';

export class JwtConfig implements JwtOptionsFactory {
  constructor(private readonly env: EnvService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.env.getJwtSecret(),
      signOptions: { expiresIn: this.env.getJwtExpirationTime() },
    };
  }
}
