export interface LoginDto {
  email: string;
  password: string;
}

export interface UserDto {
  name: string;
  email: string;
  role: string;
  token: string;
}

export interface UserForRegistration {
  name: string;
  email: string;
  password: string;
}

export interface UserForUpdate {
  name?: string;
  email?: string;
}
