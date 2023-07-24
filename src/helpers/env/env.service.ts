import { Injectable } from '@nestjs/common';
import { IEnv } from './env.interface';
import { EnvConfiguration } from 'src/helpers/env';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService implements IEnv {
  constructor(private envConfig: EnvConfiguration) {}

  getDatabase(config: ConfigService): any {
    const env = this.envConfig;
    return {
      type: config.get('DB_TYPE', env.getValue('DB_TYPE')),
      host: config.get('DB_HOST', env.getValue('DB_HOST')),
      port: config.get('DB_PORT', env.getValue('DB_PORT')),
      username: config.get('DB_USERNAME', env.getValue('DB_USERNAME')),
      password: config.get('DB_PASSWORD', env.getValue('DB_PASSWORD')),
      database: config.get('DB_DATABASE', env.getValue('DB_DATABASE')),
      synchronize: true,
    };
  }

  getAppPort(): any {
    return this.envConfig.getValue('APP_PORT');
  }
}
