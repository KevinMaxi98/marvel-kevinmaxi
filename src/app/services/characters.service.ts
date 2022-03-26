import {Injectable} from "@angular/core";
import {CharacterInterface} from "../components/interfaces/character.interface";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public characters: CharacterInterface[] = []
  idAuthor = "kevin.maxi@devsu.com"
  public charactersObserver: Subject<CharacterInterface[]>
  constructor(private http: HttpClient) {
    this.charactersObserver = new Subject();
  }

  async createCharacter(character: CharacterInterface){
    this.http.post(`https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${this.idAuthor}`, character, {}).subscribe(responseData => {
      console.log(responseData)
    })
  }

  async editCharacter(character: CharacterInterface){
    this.http.put(`https://bp-marvel-api.herokuapp.com/marvel-characters/${character._id}?idAuthor=${this.idAuthor}`, character, {}).subscribe(responseData => {
      console.log(responseData)
    })
  }

  async getCharacters(){
    return this.http.get<{ [key: number]: CharacterInterface}>(`https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${this.idAuthor}`).pipe(map(characters => {
      const charactersArray: CharacterInterface[] = [];
      for (const character in characters){
        charactersArray.push({...characters[character]})
      }
      return charactersArray;
    })).subscribe(characters => {
      console.log(characters)
      this.charactersObserver.next(characters)
    })
  }

  async deleteCharacter(characterId: string){
    this.http.delete(`https://bp-marvel-api.herokuapp.com/marvel-characters/${characterId}?idAuthor=${this.idAuthor}`).subscribe(responseData => {
      console.log(responseData)
    })
  }
}
