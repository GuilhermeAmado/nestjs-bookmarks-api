import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup(dto: AuthDto) {
    // TODO: generate the password hash

    // TODO: save new user in the db

    // TODO: return the saved user
    return {
      message: 'hello from signup',
    };
  }

  signin() {
    return {
      message: 'hello from signin',
    };
  }
}
