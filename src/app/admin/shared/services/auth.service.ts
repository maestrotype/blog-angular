import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {

    }

    get token(): string {
        return ''
    }

    login(user: User): Observable<any> {
        return this.http.post('', user)
    }

    logout() {

    }

    isAuthentificated(): boolean {
        return !!this.token
    }

    private setToken() {

    }
}