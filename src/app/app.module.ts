import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterFormComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
