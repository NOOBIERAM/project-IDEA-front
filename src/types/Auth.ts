import type { UserResponse } from "./User"

export interface AuthLoginResponse {
    accessToken: string
}

export interface AuthLoginDto {
    username: string,
    password: string
}

export interface AuthRegisterResponse extends UserResponse {}
export interface AuthRegisterDto extends AuthLoginDto {
    confirmPassword: string
}