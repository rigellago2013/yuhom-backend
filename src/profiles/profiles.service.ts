import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { castToProfile, ProfileDto } from './dto';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async findUser(user: User, email: string) {

  }

  async followUser(user: User, email: string) {

  }

  async unfollowUser(user: User, email: string) {

  }
}
