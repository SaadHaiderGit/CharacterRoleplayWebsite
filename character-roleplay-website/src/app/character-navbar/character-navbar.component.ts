import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-character-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './character-navbar.component.html',
  styleUrl: './character-navbar.component.css'
})

export class CharacterNavbarComponent implements OnInit {

  user: string = "";
  constructor(public router: Router, private userService: UserService) {
    this.userService.getSessionUser.subscribe(val => this.user = val);;
  }

  ngOnInit(): void {}
}
