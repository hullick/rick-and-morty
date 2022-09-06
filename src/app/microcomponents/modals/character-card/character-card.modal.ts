import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { Modals } from 'src/app/enums/modals';
import { Character } from 'src/app/schemas/character';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { GenericModal } from '../generic-modal/generic.modal';

@Component({
  selector: 'rem-character-card-modal',
  templateUrl: './character-card.modal.html',
  styleUrls: ['./character-card.modal.scss'],
})
export class CharacterCardModal extends GenericModal {
  public name: string = '';
  public character: Character = {
    created: '',
    episode: [],
    gender: 'Female',
    id: 0,
    image: '',
    location: undefined,
    name: '',
    origin: undefined,
    species: '',
    status: 'unknown',
    type: '',
    url: ''
  };

  public override get modalId(): Modals {
    return Modals.CHARACTER_CARD;
  }

  @ViewChild('characterCardModal')
  private _modal!: TemplateRef<HTMLTemplateElement>;

  public get modalClass(): Function {
    return CharacterCardModal;
  }

  constructor(
    protected override modalService: ModalService,
    protected characterCardService: CharacterCardService,
    public activeModal: NgbActiveModal
  ) {
    super(modalService);
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.modalService
      .instancesOfModal(this.modalId)
      ?.subscribe((modalInstance) => {
        modalInstance.componentInstance.updateData(
          'character',
          this.characterCardService.$lastSelectedCharacter
        );
      });
  }
}
