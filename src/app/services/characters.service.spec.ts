import { TestBed } from '@angular/core/testing';
import {CharactersService} from "./characters.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Subject} from "rxjs";

describe("service: CharacterService", () => {
  let service: CharactersService;
  let http: HttpClient
  const endpoint = 'https://bp-marvel-api.herokuapp.com/marvel-characters'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ CharactersService ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(CharactersService);
    http = TestBed.inject(HttpClient);
  })

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should create an observer', () => {
    expect(service.charactersObserver).not.toBeUndefined()
  })

  it("Should call with success get", () => {
    spyOn(http, 'get');
    service.getCharacters()
    expect(http.get).toHaveBeenCalled()
  })
})
