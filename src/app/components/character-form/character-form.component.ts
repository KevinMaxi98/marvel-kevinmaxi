import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CharacterInterface} from "../interfaces/character.interface";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  public character: CharacterInterface | undefined
  @Input() _id: string | undefined = ""
  @Input() idAuthor: string | undefined = ""
  @Input() body: string | undefined = ""
  @Input() title: string | undefined = ""
  @Input() image: string | undefined = ""
  @Input() category: string | undefined = ""
  @Input() createdAt: string | undefined = ""
  @Input() updatedAt: string | undefined = ""
  @Input() editMode: boolean | undefined = false;

  @Output() showCharacterForm = new EventEmitter<boolean>();


  public characterRegisterForm: FormGroup = this.formBuilder.group({
    title: [
      this.title,
      Validators.compose([
        Validators.required,
      ]),
    ],
    image: [
      this.image,
      Validators.compose([
        Validators.required,
      ]),
    ],
    body: [
      this.body,
      Validators.compose([
        Validators.required,
      ]),
    ],
  });

  constructor(public formBuilder: FormBuilder, public characterService: CharactersService) { }

  buildCharacterObject() {
    if (this.idAuthor) {
      this.character = {
      idAuthor: this.idAuthor,
      title: this.characterRegisterForm.value.title,
      image: this.characterRegisterForm.value.image,
      body: this.characterRegisterForm.value.body,
      category: "main",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }
    if (this.editMode) {
      this.character._id = this._id
    }
    }

  }

  ngOnInit(): void {
    this.characterRegisterForm = this.formBuilder.group({
      title: [
        this.title,
        Validators.compose([
          Validators.required,
        ]),
      ],
      image: [
        this.image,
        Validators.compose([
          Validators.required,
        ]),
      ],
      body: [
        this.body,
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }

  async createCharacter() {
    this.buildCharacterObject()
    if (this.character){
      await this.characterService.createCharacter(this.character).then(async () => {
        await this.characterService.getCharacters()
      })
    }


  }

  async editCharacter() {
    this.buildCharacterObject()
    if (this.character){
      await this.characterService.editCharacter(this.character).then(async () => {
        await this.characterService.getCharacters()
      })
    }
  }

  closeCharacterForm() {
    this.showCharacterForm.emit(false);
    console.log(this._id)
  }
}
