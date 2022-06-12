import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
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
