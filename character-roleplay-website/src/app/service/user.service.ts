import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { MsgResponse } from "../interface/msg-response";
import { User } from './../interface/user';

//used for making HTTP requests


@Injectable({providedIn: 'root'})
export class UserService {
    private readonly apiUrl = 'http://localhost:8080';
    private sessionUser = new BehaviorSubject("Saad"); //TK; this should be blank in the final ver., once login is implemented
    getSessionUser = this.sessionUser.asObservable();


    constructor(private http: HttpClient) { }

    user_list$ = <Observable<MsgResponse>>
    this.http.get<MsgResponse>(`${this.apiUrl}/user/list`)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    get$ = (username: string) => <Observable<MsgResponse>>
    this.http.get<MsgResponse>(`${this.apiUrl}/user/get/${username}`)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        return throwError (`ERROR found -- code: ${error.status}`);
    }


    setSessionUser(user: string) {
        this.sessionUser.next(user)
    }
}