import { Injectable } from '@angular/core';
import { Character } from 'src/app/schemas/character';
import Data from 'src/assets/data/data.json';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor() {}

  getCharacters(): Array<Character> {
    //@ts-ignore
    return Data.characters;
  }
}
