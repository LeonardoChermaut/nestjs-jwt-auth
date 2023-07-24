import { ConfigService } from '@nestjs/config';

export interface IEnv {
  getDatabase(config: ConfigService): string;
  getAppPort(): number;
}
