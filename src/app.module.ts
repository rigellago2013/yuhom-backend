import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { HdmfModule } from './hdmf/hdmf.module';

@Module({
  imports: [
    PrismaModule,
    ProfilesModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HdmfModule,
  ],
})
export class AppModule {}
