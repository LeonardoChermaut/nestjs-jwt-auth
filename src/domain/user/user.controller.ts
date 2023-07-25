import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '@src/domain/user/user.service';
import { CreateUserDto } from '@src/domain/user/dto/create-user.dto';
import { UpdateUserDto } from '@src/domain/user/dto/update-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User created successfully',
    type: CreateUserDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid field',
    type: BadRequestException,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Users listed successfully',
    type: [CreateUserDto],
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User found successfully',
  })
  findByEmail(@Param('id') email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User updated successfully',
    type: UpdateUserDto,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User removed successfully',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
