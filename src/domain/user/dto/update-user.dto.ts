import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from '@src/domain/user/dto/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
