import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { MsgResponse } from "../interface/msg-response";

//used for making HTTP requests


@Injectable({providedIn: 'root'})
export class ServerService {
    private readonly apiUrl = 'any';

    constructor(private http: HttpClient) { }

    servers$ = <Observable<MsgResponse>>
    this.http.get<MsgResponse>(`${this.apiUrl}/character/list`)
    .pipe(
        tap(console.log),
        catchError(this.handleError),
    );

    handleError(handleError: any): Observable<never> {
        return throwError ("Method not implemented.");
    }
}