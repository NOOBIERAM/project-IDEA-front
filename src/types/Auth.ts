export interface AuthLoginResponse {
    accessToken: string
}

export interface AuthLoginDto {
    username: string,
    password: string
}

export interface AuthRegisterResponse {
	userId: string,
	username: string,
	createdAt: string
}
export interface AuthRegisterDto extends AuthLoginDto {
    confirmPassword: string
}