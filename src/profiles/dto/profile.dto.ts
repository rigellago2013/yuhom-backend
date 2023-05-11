import { User } from '@prisma/client';

export interface ProfileDto {
  email: string;
}

export function castToProfile(user: User, isFollowing: boolean): ProfileDto {
  return {
    email: user.email
  };
}
