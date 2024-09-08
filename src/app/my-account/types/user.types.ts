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

export type User = {
    username: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
};

export type UserSearchParams = {
    ids: number[];
};