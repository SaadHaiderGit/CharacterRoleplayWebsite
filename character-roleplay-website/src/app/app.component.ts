import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from './service/character.service';
import { of, Observable } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppState } from './interface/app-state';
import { DataState } from './enum/data-state.enum';
import { MsgResponse } from './interface/msg-response';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  appState$: Observable<AppState<MsgResponse>>;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.appState$ = this.characterService.all_characters$
    .pipe(
      map(response =>  {
        return { dataState: DataState.LOADED_STATE, appData: response }
      }),
      startWith({ dataState: DataState.LOADING_STATE }),
      catchError((error: string) => {
        return of({ dataState: DataState.ERROR_STATE, error: error })
      })
    );  
  }
}
