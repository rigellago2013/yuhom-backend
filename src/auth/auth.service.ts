import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, UserDto, UserForRegistration } from './dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async createUser(dto: UserForRegistration) {
    const password = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          email: dto.email,
          password: password,
          name: dto.name,
        },
      });
      const token = await this.signToken(user.id, user.email);
      const userToReturn: UserDto = {
        email: user.email,
        name: user.name,
        role: user.role,
        token: token,
      };

      return userToReturn;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') throw new BadRequestException('Email is taken');
      }
    }
  }

  async verifyUser(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      },
    });
    if (!user) throw new NotFoundException('User does not exist.');
    const matches = await argon.verify(user.password, dto.password);
    if (!matches)
      throw new UnauthorizedException('Password and email does not match.');
    const token = await this.signToken(user.id, user.email);
    const userReturned: UserDto = {
      email: user.email,
      name: user.name,
      role: user.role,
      token: token,
    };
    return userReturned;
  }

  async signToken(userId: string, email: string): Promise<string> {
    const data = {
      sub: userId,
      email: email,
    };
    const SECRET = this.config.get('SECRET');
    const token = await this.jwt.signAsync(data, {
      secret: SECRET,
      expiresIn: '5h',
    });
    return token;
  }
}
