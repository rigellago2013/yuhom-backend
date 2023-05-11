import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/common/decorator/get-user.decorator';
import { JwtGuard } from 'src/common/guard';
import { ProfilesService } from './profiles.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@ApiTags('Profiles')
@Controller('profiles')
@ApiSecurity('bearer')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}
  @Get('me')
  async findUser(@GetUser() user: User, @Param('id') id: string) {
    return { profile: await this.profileService.findUser(user, id) };
  }
}
