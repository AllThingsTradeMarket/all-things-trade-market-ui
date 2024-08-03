import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/shared.types';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly BASE_URL = 'http://127.0.0.1:5000/api';
    readonly headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    constructor(private http: HttpClient) { }

    get<T>(endpoint: string, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.get<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, {
            ...params,
            headers: this.headers
        });
    }

    post<T>(endpoint: string, data: T, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.post<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, data, {
            ...params,
            headers: this.headers
        });
    }

    put<T>(endpoint: string, data: T, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.put<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, data, {
            ...params,
            headers: this.headers
        });
    }

    delete<T>(endpoint: string, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.delete<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, {
            ...params,
            headers: this.headers
        });
    }
}
