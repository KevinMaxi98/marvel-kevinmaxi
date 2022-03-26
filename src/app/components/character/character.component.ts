import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharacterInterface} from "../interfaces/character.interface";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: CharacterInterface | undefined
  @Input() show: boolean = true;

  @Output() specificCharacter = new EventEmitter<CharacterInterface>();

  constructor(public characterService: CharactersService) { }

  ngOnInit(): void {
  }


  async deleteCharacter() {
    if (this.character?._id) {
      await this.characterService.deleteCharacter(this.character?._id)
    }
    await this.characterService.getCharacters()

  }

  editCharacter() {
    this.specificCharacter.emit(this.character)
  }
}
