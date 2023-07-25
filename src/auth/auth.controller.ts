import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '@src/auth/auth.service';
import { IsPublic } from '@src/auth/decorators';
import { AuthRequest } from '@src/auth/models';
import { LocalAuthGuard } from '@src/auth/guards/local.auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  async login(@Request() { user: credentials }: AuthRequest) {
    return this.authService.login(credentials);
  }
}
