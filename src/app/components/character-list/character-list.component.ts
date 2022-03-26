import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharacterInterface} from "../interfaces/character.interface";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  @Input() searchValue : string = "";
  @Output() specificCharacter = new EventEmitter<CharacterInterface>()

  public characters: CharacterInterface[] = [];
  public idCharacter: number = 0;
  public nombreCharacter: string = "";
  public imagenCharacter: string = "";
  public descripcionCharacter: number = 0;
  public editMode: boolean = false;


  constructor(private characterService: CharactersService) {
    this.characterService.charactersObserver.subscribe((obtainedCharacters) => {
      this.characters = obtainedCharacters
    }, error => {
      console.log(error)
    })
  }

  async ngOnInit(){
    await this.characterService.getCharacters()
    console.log("Characters: ", this.characters)
  }

  startsWith(word: string, subword: string){
    return word.toLocaleLowerCase().startsWith(subword.toLocaleLowerCase());
  }


  editCharacter(event: any) {
    console.log(event)
    this.specificCharacter.emit(event)
  }
}
