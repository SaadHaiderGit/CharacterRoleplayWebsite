import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { MsgResponse } from "../interface/msg-response";
import { Character } from "../interface/character";

//used for making HTTP requests


@Injectable({providedIn: 'root'})
export class CharacterService {
    private readonly apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    all_characters$ = <Observable<MsgResponse>>
    this.http.get<MsgResponse>(`${this.apiUrl}/character/list`)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    user_characters$ = (username: string) => <Observable<MsgResponse>>
    this.http.get<MsgResponse>(`${this.apiUrl}/character/list/${username}`)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    save$ = (character: Character) => <Observable<MsgResponse>>
    this.http.post<MsgResponse>(`${this.apiUrl}/character/save`, character)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    get$ = (charId: number) => <Observable<MsgResponse>>
    this.http.get<MsgResponse>(`${this.apiUrl}/character/get/${charId}`)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    update$ = (charId: number, character: Character) => <Observable<MsgResponse>>
    this.http.put<MsgResponse>(`${this.apiUrl}/character/update/${charId}`, character)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    delete$ = (charId: number) => <Observable<MsgResponse>>
    this.http.delete<MsgResponse>(`${this.apiUrl}/character/delete/${charId}`)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        return throwError (`ERROR found -- code: ${error.status}`);
    }
}