import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../interface/app-state';
import { MsgResponse } from '../interface/msg-response';
import { CharacterNavbarComponent } from '../character-navbar/character-navbar.component';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CharacterNavbarComponent, FormsModule],
  templateUrl: './character-login.component.html',
  styleUrl: './character-login.component.css'
})
export class CharacterLoginComponent implements OnInit {

  user: string = "";
  appState$: Observable<AppState<MsgResponse>>;
  tempUser: any = {
    username: "",
    password: ""
  };
  badValues = false;
  emptyValues = false;
  goodValues = false;

  constructor(public router: Router, private userService: UserService) {
    this.userService.getSessionUser.subscribe(val => this.user = val);;
  }

  ngOnInit(): void {
    if (this.user != "") {
      this.router.navigate["character_list"];
    }
  }

  onSubmit(): void {
    this.checkUser();
  }

  checkUser(): void {
    let user: User = {
      username: this.tempUser.username,
      password: this.tempUser.password
    };

    if (user.username == "" || user.password == "") {
      this.badValues = false;
      this.emptyValues = true;
    }
    else {
      try {
        this.userService.get$(user.username).subscribe(response => {
          if (response.data.user.password == user.password) {
            this.goodValues = true;
            this.userService.setSessionUser(user.username);
            this.router.navigate(['/character_list']);
          }
          else {
            this.emptyValues = false;
            this.badValues = true;
          }
        });
      }
      catch (error) {
        this.emptyValues = false;
        this.badValues = true;
      }
      console.log(this.user);

    } 
  }
}
