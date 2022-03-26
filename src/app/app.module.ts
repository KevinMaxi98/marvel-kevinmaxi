import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharacterFormComponent } from './character-form/character-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
