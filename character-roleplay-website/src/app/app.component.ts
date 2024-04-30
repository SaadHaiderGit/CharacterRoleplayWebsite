import { CharacterCreateComponent } from './character-create/character-create.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CharacterService } from './service/character.service';
import { of, Observable } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppState } from './interface/app-state';
import { DataState } from './enum/data-state.enum';
import { MsgResponse } from './interface/msg-response';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterNavbarComponent } from './character-navbar/character-navbar.component';
import { CharacterFooterComponent } from './character-footer/character-footer.component';
import { CharacterUpdateComponent } from './character-update/character-update.component';
import { CharacterLoginComponent } from './character-login/character-login.component';
import { CharacterRollComponent } from './character-roll/character-roll.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    CommonModule, 
    CharacterListComponent, 
    CharacterNavbarComponent, 
    CharacterFooterComponent, 
    CharacterCreateComponent,
    CharacterUpdateComponent,
    CharacterLoginComponent,
    CharacterRollComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = `Test Site for Character Roleplay`;
  constructor() {}

  ngOnInit(): void {}
}
