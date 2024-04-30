import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CharacterNavbarComponent } from '../character-navbar/character-navbar.component';
import { Observable } from 'rxjs';
import { LoginRedirect } from '../function/login_redirect';
import { Character } from '../interface/character';
import { UserService } from '../service/user.service';
import { DiceRoll } from '@dice-roller/rpg-dice-roller';

@Component({
  selector: 'app-character-roll',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CharacterNavbarComponent, FormsModule],
  templateUrl: './character-roll.component.html',
  styleUrl: './character-roll.component.css'
})
export class CharacterRollComponent implements OnInit {
  
  roll: DiceRoll = null;
  badInput: boolean = false;
  user: string = "";
  appState$: Observable<Object>;
  dice: any = {
    num: null,
    val: null
  };

  constructor(
    public router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.userService.getSessionUser.subscribe(val => this.user = val);;
  }

  ngOnInit(): void {
    LoginRedirect(this.user, this.router);
  }

  onSubmit(): void {
    this.diceRoll();
  }

  diceRoll(): void {
    console.log(typeof this.dice.num);
    console.log(this.dice.num, "+", this.dice.val)
    if (this.dice.num != null && this.dice.val != null) {
      this.roll = new DiceRoll(`${<string>this.dice.num}d${<string>this.dice.val}`);
      this.badInput = false;
    }
    else {
      this.badInput = true;
    }
  }



















  async doDiceRoll(): Promise<void> {
    
    let dicePrompt: string = `${<string>this.dice.num}d${<string>this.dice.val}`;
    console.log(dicePrompt);

    const url = 'https://dice-roll.p.rapidapi.com/roll/4/d/20';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2490a1914fmshe97c248efe6d3f0p1ea413jsne708f7b2c92b',
        'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
