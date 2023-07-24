import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UseGlobalValidationPipe } from './use.validation.pipe';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: UseGlobalValidationPipe,
    },
  ],
})
export class GlobalValidationPipeModule {}
