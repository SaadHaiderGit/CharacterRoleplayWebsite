import { Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterUpdateComponent } from './character-update/character-update.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { CharacterLoginComponent } from './character-login/character-login.component';
import { CharacterRollComponent } from './character-roll/character-roll.component';

export const routes: Routes = [
    {path: 'character_login', component: CharacterLoginComponent},
    {path: 'character_list', component: CharacterListComponent},
    {path: 'character_create', component: CharacterCreateComponent},
    {path: 'character_update/:id', component: CharacterUpdateComponent},
    {path: 'character_rolldice', component: CharacterRollComponent},
    {path: '', redirectTo: 'character_login', pathMatch: 'full'}  
];
