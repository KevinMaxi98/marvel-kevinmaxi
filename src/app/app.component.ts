import { Component } from '@angular/core';
import {CharacterInterface} from "./components/interfaces/character.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-kevinmaxi';

  public showCharacterForm: Boolean = false;
  public searchValue : string = "";
  public specificCharacter : CharacterInterface | undefined
  public editMode: boolean = false

  startsWith(word: string, subword: string){
    return word.toLocaleLowerCase().startsWith(subword.toLocaleLowerCase());
  }

  changeSearchValue(event: KeyboardEvent) {
    this.searchValue = (event.target as HTMLInputElement).value
  }

  onNewClick() {
    this.editMode = false
    this.showCharacterForm = !this.showCharacterForm
  }

  editCharacter(event: CharacterInterface) {
    this.specificCharacter = event
    console.log(event)
    this.showCharacterForm = true
    this.editMode = true

  }
}
