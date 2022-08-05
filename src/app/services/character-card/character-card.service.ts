import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Character } from 'src/app/schemas/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterCardService {
  protected _hidden: BehaviorSubject<boolean> = new BehaviorSubject(true);

  protected _lastMouseOverCharacter: Subject<Character> = new Subject();

  constructor() {}

  public show(): void {
    this._hidden.next(false);
  }

  public hide(): void {
    this._hidden.next(true);
  }

  public get hiddenStatus(): Observable<boolean> {
    return this._hidden.asObservable();
  }

  public get lastMouseOverCharacter(): Observable<Character> {
    return this._lastMouseOverCharacter.asObservable();
  }

  public setNewMouseOverCharacter(character: Character): void {
    this._lastMouseOverCharacter.next(character);
  }
}
