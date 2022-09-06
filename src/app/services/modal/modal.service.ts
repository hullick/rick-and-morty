import { Component, Injectable, TemplateRef } from '@angular/core';
import {
  NgbModal,
  NgbModalOptions,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { Modals } from 'src/app/enums/modals';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  protected modalsInstances: Map<Modals, BehaviorSubject<NgbModalRef>> =
    new Map();
  protected modalsClasses: Map<Modals, Function> = new Map();

  constructor(protected ngbModalService: NgbModal) {}

  register(id: Modals, modal: Function): void {
    this.modalsClasses.set(id, modal);
  }

  open(id: Modals, opts?: NgbModalOptions): NgbModalRef {
    console.log(123)
    let bs = this.modalsInstances.get(id);

    const modal = this.modalsClasses.get(id);

    if (modal) {
      this.ngbModalService.dismissAll();

      const ngbModal = this.ngbModalService.open(modal, opts);

      if (!bs) {
        const newBs = new BehaviorSubject<NgbModalRef>(ngbModal);

        this.modalsInstances.set(id, newBs);
        bs = newBs;
      }

      bs.next(ngbModal);

      return ngbModal;
    } else {
      throw new Error('Modal not registered');
    }
  }

  instancesOfModal(id: Modals): Observable<NgbModalRef> | undefined {
    return this.modalsInstances.get(id)?.asObservable();
  }
}
