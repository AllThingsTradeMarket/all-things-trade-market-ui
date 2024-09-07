import { Injectable } from "@angular/core";
import { AuthUserDto, AuthenticatedUserDto, CreateUserDto } from "../model/user.dtos";
import { ApiService } from "../../shared/utils/apiService";
import { Observable, BehaviorSubject } from "rxjs";
import { CURRENT_USER_LOCAL_STORAGE_KEY } from "../../shared/constants/constants";
import { Router } from "@angular/router";
import { isNil } from "lodash";
import { LoadingService } from "../../shared/utils/loadingService";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly registerEndpoint = 'users';
    private readonly loginEndpoint = 'users/login';
    private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!isNil(localStorage.getItem(CURRENT_USER_LOCAL_STORAGE_KEY)));

    constructor(private apiRegisterService: ApiService<CreateUserDto>, private apiLoginService: ApiService<AuthUserDto>,  private router: Router,
        private loadingService: LoadingService
    ) {
    };

    createUser(user: CreateUserDto) {
        return this.apiRegisterService.post(this.registerEndpoint, user);
    }

    signIn(user: AuthUserDto): Observable<AuthenticatedUserDto> {
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
        window.location.href = '/';
    }

    getCurrentUserId() {
        const userDataJson = localStorage.getItem(CURRENT_USER_LOCAL_STORAGE_KEY);
        if (userDataJson) {
            const userData = JSON.parse(userDataJson);
            return userData.id;
        }
        return 'no user logged';
    }
}