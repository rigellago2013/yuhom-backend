import { BadRequestException, Injectable,   NotFoundException, } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserForUpdate, changePasswordDto, createUserDto } from './dto';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUser(id : string) : Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id, 
      }
    });
    if (user === null) throw new NotFoundException('User not found.');
    delete user.password;
    return user;
  }
    
  async createUser(createUserDto : createUserDto) : Promise<any> {
    try {
      const password = await argon.hash(createUserDto.password);
      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          name: createUserDto.name,
          email : createUserDto.email,
          password : password,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw new BadRequestException('Bad request.');
      }
    }
  }

  async updateUser(id : string, dto: UserForUpdate) {
    try {
      const userUpdated = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          ...dto,
          email : dto.email,
          name : dto.name
        },
      });
      delete userUpdated.password;
      return userUpdated;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new BadRequestException('Email taken');
      }
    }
  }

  async deleteUser(id: string) {
    const article = await this.prisma.user.findUnique({
      where: { id: id },
    });
    if (!article) throw new NotFoundException('User not found');
    await this.prisma.user.delete({
      where: {
        id: id,
      },  
    });
    return true;
  }

  async changePassword(id : string, dto: changePasswordDto) {
    try {
      const password = await argon.hash(dto.password);
      const userUpdated = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          ...dto,
          password : password
        },
      });
      return userUpdated;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new BadRequestException('Error changing password.');
      }
    }
  }
}
