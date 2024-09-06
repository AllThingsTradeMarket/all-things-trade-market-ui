import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdResponse } from '../model/shared.types';

@Injectable({
    providedIn: 'root'
})
export class ApiService<T> {
    private readonly BASE_URL = 'http://localhost:3000/api';
    readonly headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    constructor(private http: HttpClient) { }

    get(endpoint: string, params: Object = {}): Observable<T> {
        return this.http.get<T>(`${this.BASE_URL}/${endpoint}`, {
            ...params,
            headers: this.headers
        });
    }

    post<ReturnType = T, DataType = T>(endpoint: string, data: DataType, params: Object = {}, headers?: HttpHeaders): Observable<ReturnType> {
        return this.http.post<ReturnType>(`${this.BASE_URL}/${endpoint}`, data, {
            ...params,
            headers: headers ? headers : this.headers
        });
    }

    put(endpoint: string, data: T, params: Object = {}) {
        return this.http.put<IdResponse>(`${this.BASE_URL}/${endpoint}`, data, {
            ...params,
            headers: this.headers
        });
    }

    delete(endpoint: string, params: Object = {}) {
        return this.http.delete<IdResponse>(`${this.BASE_URL}/${endpoint}`, {
            ...params,
            headers: this.headers
        });
    }
}
