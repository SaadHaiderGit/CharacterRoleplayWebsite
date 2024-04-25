import { Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { CharacterCreateComponent } from './character-create/character-create.component';

export const routes: Routes = [
    {path: 'character_list', component: CharacterListComponent},
    {path: 'character_create', component: CharacterCreateComponent},
    {path: '', redirectTo: 'character_list', pathMatch: 'full'}     //will change later to default to a login page
];
