import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    try {
      const hashedPassword = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hashedPassword,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'The email address is already in use by another account.',
          );
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const userToSignIn = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!userToSignIn) throw new ForbiddenException('Incorrect credentials');

    const passwordMatches = await argon.verify(userToSignIn.hash, dto.password);

    if (!passwordMatches) throw new ForbiddenException('Incorrect credentials');

    delete userToSignIn.hash;
    return userToSignIn;
  }
}
