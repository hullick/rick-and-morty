import { AfterViewInit, Component, TemplateRef } from '@angular/core';
import { Modals } from 'src/app/enums/modals';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  template: '',
  styleUrls: ['./generic.modal.scss'],
})
export abstract class GenericModal implements AfterViewInit {
  public abstract get modalId(): Modals;

  public abstract get modalClass(): Function;

  constructor(protected modalService: ModalService) {}

  ngAfterViewInit(): void {
    this.modalService.register(this.modalId, this.modalClass);
  }

  public updateData(
    attributeName: string,
    newData: object | string | number | []
  ): void {
    let oldData = (<any>this)[attributeName];

    if (typeof newData === 'object') {
      if (typeof oldData === 'object') {
        Object.keys(newData).forEach((key: string) => {
          if (!oldData[key]) {
            console.warn(`The key ${key} does not exists in old data`);
          }

          oldData[key] = (<any>newData)[key];
        });
      } else {
        throw new Error('Old and new data are from different types');
      }
    } else if (Array.isArray(newData)) {
      if (Array.isArray(oldData)) {
        oldData.splice(0, oldData.length);
        oldData.push(...newData);
      } else {
        throw new Error('Old and new data are from different types');
      }
    } else {
      oldData = newData;
    }

    console.log(oldData);
  }
}
