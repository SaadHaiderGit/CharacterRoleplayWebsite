import { DataState } from './../enum/data-state.enum';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Character } from '../interface/character';
import { CharacterService } from '../service/character.service';
import { of, Observable } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppState } from '../interface/app-state';
import { MsgResponse } from '../interface/msg-response';
import { CharacterNavbarComponent } from '../character-navbar/character-navbar.component';
import { UserService } from '../service/user.service';
import { LoginRedirect } from '../function/login_redirect';


@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CharacterNavbarComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  appState$: Observable<AppState<MsgResponse>>;
  readonly DataState = DataState;
  user: string = ""

  constructor(public router: Router, private characterService: CharacterService, private userService: UserService) {
    this.userService.getSessionUser.subscribe(val => this.user = val);;
    
    
  }

  ngOnInit(): void {
    console.log(this.user);
    LoginRedirect(this.user, this.router);
    this.display();
  }

  display(): void {
    this.appState$ = this.characterService.user_characters$(this.user)
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

  updateCharacter(id: number){
    this.router.navigate(['character_update', id]);
  }

  deleteCharacter(id: number){
    this.characterService.delete$(id).subscribe( data => {
      console.log(data);
      this.display();
    })
  }

}


