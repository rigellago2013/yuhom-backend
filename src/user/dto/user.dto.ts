import { IsNumber, IsNotEmpty, IsString, IsDate, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class LoginDto {

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class UserDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  token: string;
}

export class UserForRegistration {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  name : string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class UserForUpdate {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  name : string;
}

export class createUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name : string;

  @ApiProperty()
  @IsEmail()
  email : string;

  @ApiProperty()
  @IsNotEmpty()
  password : string;
}


export class changePasswordDto{

  @ApiProperty()
  @IsNotEmpty()
  password : string;
}
