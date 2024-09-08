import { Component, OnInit } from '@angular/core';
import { ConfirmModalService } from '../../utils/confirm-modal.service';
import { ConfirmModalConfig } from '../../types/shared.types';

@Component({
  selector: 'tm-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  modalOpened: boolean = false;
  modalConfig: ConfirmModalConfig | undefined;

  constructor(private confirmModalService: ConfirmModalService) { }

  ngOnInit(): void {
    this.confirmModalService.getIsConfirmModalOpen()
      .subscribe(isOpened => {
        this.modalOpened = isOpened;
        if (!isOpened) {
          this.modalConfig = undefined;
        }
      });
    this.confirmModalService.getConfirmModalConfig()
      .subscribe(modalConfig => {
        this.modalConfig = modalConfig;
      });
  }
}
