import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterNavbarComponent } from '../character-navbar/character-navbar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Character } from '../interface/character';
import { CharacterService } from '../service/character.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppState } from '../interface/app-state';
import { MsgResponse } from '../interface/msg-response';
import { UserService } from '../service/user.service';
import { LoginRedirect } from '../function/login_redirect';

@Component({
  selector: 'app-character-update',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CharacterNavbarComponent, FormsModule],
  templateUrl: './character-update.component.html',
  styleUrl: './character-update.component.css'
})
export class CharacterUpdateComponent implements OnInit {
  
  id: number = -1;
  user: string = "";
  missingInputs: boolean = false;
  appState$: Observable<AppState<MsgResponse>>;
  tempCharacter: any = {
    char_id: null,
    username: "",
    char_name: "",
    race: "",
    classtype: "",
    description: "",
    equipment: ""
  };

  constructor(
    public router: Router, private route: ActivatedRoute, private characterService: CharacterService, private userService: UserService) {
    this.userService.getSessionUser.subscribe(val => this.user = val);;
  }

  ngOnInit(): void {
    LoginRedirect(this.user, this.router);
    this.id = this.route.snapshot.params['id'];

    this.characterService.get$(this.id).subscribe(response => {
      console.log(response);
      this.tempCharacter = response.data.character;
    }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateCharacter();
  }

  updateCharacter(): void {
    if (this.tempCharacter.char_name != "" && this.tempCharacter.race != "" && this.tempCharacter.classtype != "" &&
     this.tempCharacter.description != "" && this.tempCharacter.equipment != "") {
      let character: Character = {
        char_id: this.tempCharacter.char_id,
        username: this.user,
        char_name: this.tempCharacter.char_name,
        race: this.tempCharacter.race,
        classtype: this.tempCharacter.classtype,
        description: this.tempCharacter.description,
        equipment: this.tempCharacter.equipment
      };
      console.log(<Character>character);

      this.characterService.update$(character.char_id, character).subscribe(data => {});
      this.router.navigate(['/character_list']) 
    } 
    else {
      this.missingInputs = true;
    }
  }
}
