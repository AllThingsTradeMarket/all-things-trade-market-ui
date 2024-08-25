import { Injectable } from "@angular/core";
import { AuthUserDto, AuthenticatedUserDto, CreateUserDto } from "../model/user.dtos";
import { ApiService } from "../../shared/utils/apiService";
import { Observable } from "rxjs";
import { ApiResponse } from "../../shared/model/shared.types";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly registerEndpoint = 'users';
    private readonly loginEndpoint = 'users/login';

    constructor(private apiRegisterService: ApiService<CreateUserDto>, private apiLoginService: ApiService<AuthUserDto>) { };

    createUser(user: CreateUserDto) {
        return this.apiRegisterService.post(this.registerEndpoint, user);
    }

    signIn(user: AuthUserDto): Observable<ApiResponse<AuthenticatedUserDto>> {
        return this.apiLoginService.post<AuthenticatedUserDto>(this.loginEndpoint, user);
    }
}