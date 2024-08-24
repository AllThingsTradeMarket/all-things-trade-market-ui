import { Injectable } from "@angular/core";
import { CreateUserDto } from "../model/user.dtos";
import { ApiService } from "../../shared/utils/apiService";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    readonly registerEndpoint = 'users';

    constructor(private apiRegisterService: ApiService<CreateUserDto>) { };

    createUser(user: CreateUserDto) {
        return this.apiRegisterService.post(this.registerEndpoint, user);
    }
}