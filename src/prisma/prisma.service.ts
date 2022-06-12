import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgres://ubwvtxovzxdpma:37e3c4079aa5a6aabdfee3fc109c380e678c901719112f0f5ae5c833d4b22491@ec2-52-71-69-66.compute-1.amazonaws.com:5432/dfhm8prbrnia9h',
        },
      },
    });
  }
}
