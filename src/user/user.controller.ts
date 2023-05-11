import {
  Body,
  Controller,
  Get,
  Put,
  UseGuards,
  Post,
  Param,
  Delete,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/common/decorator/get-user.decorator';
import { JwtGuard } from 'src/common/guard';
import { UserForUpdate, changePasswordDto, createUserDto } from './dto';
import { UserService } from './user.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@ApiTags('User')
@Controller('user')
@ApiSecurity('bearer')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findUser(id);
    if (!user) {
      throw new NotFoundException(`User not found.`);
    }
    return user;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() dto: UserForUpdate) {
    const user = await this.userService.updateUser(id, dto);
    if (!user) {
      throw new BadRequestException(`Error on update user.`);
    }
  }

  @Post('create')
  async createUser(@Body() userDto: createUserDto) {
    let user = await this.userService.createUser(userDto);
    if (!user) {
      throw new InternalServerErrorException(`Error on creating hdmf.`);
    }
    return user;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const res =  this.userService.deleteUser(id);
    if(!res) {
      throw new BadRequestException('Error deleting user.');
    }
    return { success : true, message : 'User successfully deleted.'}
  }

  @Put(':id/change-password')
  async changePassword(@Param('id') id: string,@Body() dto: changePasswordDto) {
      const changedUser = await this.userService.changePassword(id, dto);
      if(!changedUser) {
        throw new BadRequestException(`Error changing password.`);
      }
      return {success: true, message : 'Password changed successfully.'};

  }
}
