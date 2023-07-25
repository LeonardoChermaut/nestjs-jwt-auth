export interface IEnv {
  getJwtSecret(): string;
  getAppPort(): number;
}
