import { DataState } from './../enum/data-state.enum';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from '../interface/character';
import { CharacterService } from '../service/character.service';
import { of, Observable } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppState } from '../interface/app-state';
import { MsgResponse } from '../interface/msg-response';
import { CharacterNavbarComponent } from '../character-navbar/character-navbar.component';


@Component({
  selector: 'app-character-edit',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CharacterNavbarComponent],
  templateUrl: './character-edit.component.html',
  styleUrl: './character-edit.component.css'
})
export class CharacterEditComponent {

}
