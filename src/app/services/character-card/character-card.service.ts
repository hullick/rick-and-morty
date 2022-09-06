import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Character } from 'src/app/schemas/character';
import { ComponentAttribute } from 'src/app/schemas/component-attributes';

@Injectable({
  providedIn: 'root',
})
export class CharacterCardService {
  protected $hidden: BehaviorSubject<boolean> = new BehaviorSubject(true);
  protected $currentConfig:
    | BehaviorSubject<ComponentAttribute>
    | BehaviorSubject<any> = new BehaviorSubject(undefined);
  protected $lastMouseOverCharacter:
    | BehaviorSubject<Character>
    | BehaviorSubject<any> = new BehaviorSubject(undefined);

  public get $currentConfigObservable(): Observable<ComponentAttribute> {
    return this.$currentConfig.asObservable();
  }

  public show(): void {
    this.$hidden.next(false);
  }

  public hide(): void {
    this.$hidden.next(true);
  }

  public get hiddenStatus(): Observable<boolean> {
    return this.$hidden.asObservable();
  }

  public get $selectedCharacters(): Observable<Character> {
    return this.$lastMouseOverCharacter.asObservable();
  }

  public get $lastSelectedCharacter(): Character {
    return this.$lastMouseOverCharacter.value;
  }

  public setNewSelectedCharacter(character: Character): void {
    this.$lastMouseOverCharacter.next(character);
  }

  public setNewConfig(config: ComponentAttribute): void {
    this.$currentConfig.next(
      Object.assign(this.$currentConfig.value ?? {}, config)
    );
  }
}
