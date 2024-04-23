import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from '../interface/character';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor() {}
//null, "Billy", "Sansa Dale", "Skeleton",
//"Healer", "helps people", "Sword"
  ngOnInit(): void {
    this.characters = [{
      char_id: 1,
      username: "Saad",
      char_name: "Friera",
      race: "Elf",
      classtype: "Ranger",
      description: "High-ranking sharpshooter",
      equipment: "Bow"
    },
    {
      char_id: 2,
      username: "Hamza",
      char_name: "Gabe",
      race: "Human",
      classtype: "Blacksmith Extraordine (also a chef on the weekends, except for holidays)",
      description: `Forger of the Gallowblades. Yes, those miserable blades that that happen to be the scourge of many a kingdom --
       they're a tremendous taint on civilized and uncivilized society alike. Have you seen those death weapons in action? I wouldn't dare
       approach their wielders, it's like stepping into a savanna bog in the dry season and you're flanked by seven Infernal Raze Devils.`,
      equipment: "Runic Fire Hammer"
    }]
  }
}
