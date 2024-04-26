import { DataState } from './../enum/data-state.enum';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Character } from '../interface/character';
import { CharacterService } from '../service/character.service';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppState } from '../interface/app-state';
import { MsgResponse } from '../interface/msg-response';
import { CharacterNavbarComponent } from '../character-navbar/character-navbar.component';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-create',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CharacterNavbarComponent, FormsModule],
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.css'
})
export class CharacterCreateComponent implements OnInit {

  user: string = "";
  readonly DataState = DataState;
  appState$: Observable<AppState<MsgResponse>>;
  private dataSubject = new BehaviorSubject<MsgResponse>(null);
  tempCharacter: any = {
    char_id: null,
    username: "",
    char_name: "",
    race: "",
    classtype: "",
    description: "",
    equipment: ""
  };

  constructor(public router: Router, private characterService: CharacterService, private userService: UserService) {
    this.userService.getSessionUser.subscribe(val => this.user = val);;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.saveCharacter();
  }

  saveCharacter(): void {
    console.log("At least I get here")
    let character: Character = {
      char_id: null,
      username: this.user,
      char_name: this.tempCharacter.char_name,
      race:  this.tempCharacter.race,
      classtype:  this.tempCharacter.classtype,
      description:  this.tempCharacter.description,
      equipment:  this.tempCharacter.equipment
    };
    console.log(<Character>character);

    this.characterService.save$(character).subscribe(data => {
      }
    );  
  }
}
