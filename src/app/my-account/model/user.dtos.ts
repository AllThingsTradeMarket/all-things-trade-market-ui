export type CreateUserDto = {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type AuthUserDto = {
    email: string;
    password: string;
};

export type AuthenticatedUserDto = {
    username: string;
    id: number;
}
