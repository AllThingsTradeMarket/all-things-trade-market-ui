import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/shared.types';

@Injectable({
    providedIn: 'root'
})
export class ApiService<T> {
    private readonly BASE_URL = 'http://localhost:3000/api';
    readonly headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    constructor(private http: HttpClient) { }

    get(endpoint: string, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.get<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, {
            ...params,
            headers: this.headers
        });
    }

    post(endpoint: string, data: T, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.post<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, data, {
            ...params,
            headers: this.headers
        });
    }

    put(endpoint: string, data: T, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.put<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, data, {
            ...params,
            headers: this.headers
        });
    }

    delete(endpoint: string, params: Object = {}): Observable<ApiResponse<T>> {
        return this.http.delete<ApiResponse<T>>(`${this.BASE_URL}/${endpoint}`, {
            ...params,
            headers: this.headers
        });
    }
}
