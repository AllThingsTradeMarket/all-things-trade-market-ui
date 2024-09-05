import { Injectable } from "@angular/core";
import { AuthUserDto, AuthenticatedUserDto, CreateUserDto } from "../model/user.dtos";
import { ApiService } from "../../shared/utils/apiService";
import { Observable, BehaviorSubject } from "rxjs";
import { ApiResponse } from "../../shared/model/shared.types";
import { CURRENT_USER_LOCAL_STORAGE_KEY } from "../../shared/constants/constants";
import { Router } from "@angular/router";
import { isNil } from "lodash";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly registerEndpoint = 'users';
    private readonly loginEndpoint = 'users/login';
    private isLogged = false;
    private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!isNil(localStorage.getItem(CURRENT_USER_LOCAL_STORAGE_KEY)));

    constructor(private apiRegisterService: ApiService<CreateUserDto>, private apiLoginService: ApiService<AuthUserDto>,  private router: Router) {
        this.isLogged = !isNil(localStorage.getItem(CURRENT_USER_LOCAL_STORAGE_KEY));
    };

    createUser(user: CreateUserDto) {
        return this.apiRegisterService.post(this.registerEndpoint, user);
    }

    signIn(user: AuthUserDto): Observable<ApiResponse<AuthenticatedUserDto>> {
        return this.apiLoginService.post<AuthenticatedUserDto>(this.loginEndpoint, user);
    }

    setIsLogged(loggedIn: boolean) {
        this.isLoggedSubject.next(loggedIn);
    }

    getIsLogged(): Observable<boolean> {
        return this.isLoggedSubject.asObservable();
    }

    logout() {
        localStorage.removeItem(CURRENT_USER_LOCAL_STORAGE_KEY);
        this.setIsLogged(false);
        this.router.navigate(['/']);
    }
}