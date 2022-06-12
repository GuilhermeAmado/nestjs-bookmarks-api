import { Module } from '@nestjs/common';
import { AuthControler } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthControler],
  providers: [AuthService],
})
export class AuthModule {}
