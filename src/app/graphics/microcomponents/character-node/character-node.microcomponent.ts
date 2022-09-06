import { Component, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from 'src/app/enums/modals';
import { CharacterCardModal } from 'src/app/microcomponents/modals/character-card/character-card.modal';
import { Character } from 'src/app/schemas/character';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { SVGImageShape } from '../../shapes/svg-image/svg-image.shape';

@Component({
  selector: 'rem-character-node-microcomponent',
  templateUrl: './character-node.microcomponent.html',
  styleUrls: ['./character-node.microcomponent.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class CharacterNodeMicrocomponent extends SVGImageShape {
  @Input()
  public character!: Character;

  constructor(
    protected override d3ElementService: D3ElementService,
    protected characterCardService: CharacterCardService,
    protected ngbModalService: NgbModal,
    protected modalService: ModalService
  ) {
    super(d3ElementService);
  }

  override ngOnInit(): void {
    this.currentData.next({
      image: this.character?.image,
      name: this.character?.name,
    });

    // this.parentNodeAndGraphicComponent?.selection
    //   .append('svg:clipPath')
    //   .attr('id', 'avatarClipPath' + this.character?.id)
    //   .append('circle')
    //   .attr('cx', 20)
    //   .attr('cy', 20)
    //   .attr('r', 20);

    super.ngOnInit();
  }

  protected override onCurrentDataChange(): void {
    this.plottedD3Element?.selection
      .attr('xlink:href', this.character.image)
      .on('click', () => {
        const teste = this.ngbModalService.open(CharacterCardModal);
        this.modalService.open(Modals.CHARACTER_CARD, {
          size: 'xl',
        });
        teste.componentInstance.updateData('character', this.character);
      })
      .on('mouseover', () => {
        this.characterCardService.setNewSelectedCharacter(this.character);

        this.characterCardService.setNewConfig({
          attrs: {
            transform: `translate(${<number>this.config.attrs?.['x'] + 50},${
              <number>this.config.attrs?.['y'] + 50
            })`,
          },
        });

        this.characterCardService.show();
      })
      .on('mouseout', () => {
        this.characterCardService.hide();
      })
      .append('title')
      .text(this.currentData.value.name);
  }
}
