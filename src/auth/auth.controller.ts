import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, UserForRegistration } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async loginUser(@Body() dto: LoginDto) {
    const user = await this.authService.verifyUser(dto);
    return { user: user };
  }

  @Post('register')
  async registerUser(@Body() dto: UserForRegistration) {
    const user = await this.authService.createUser(dto);
    return { user: user };
  }
}
