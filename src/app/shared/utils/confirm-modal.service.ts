import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ConfirmModalConfig } from "../types/shared.types";
import { DEFAULT_CONFIRM_MODAL_CONFIG } from "../constants/constants";

@Injectable({
    providedIn: 'root'
})
export class ConfirmModalService {
    private isModalOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private modalConfigSubject: BehaviorSubject<ConfirmModalConfig> = new BehaviorSubject<ConfirmModalConfig>({
        onConfirm: () => { },
        text: 'Do You confirm?',
        onCancel: this.closeConfirmModal
    });

    openConfirmModal(config: ConfirmModalConfig) {
        this.modalConfigSubject.next(config);
        this.isModalOpenSubject.next(true);
    }

    closeConfirmModal() {
        this.isModalOpenSubject.next(false);
    }

    getIsConfirmModalOpen(): Observable<boolean> {
        return this.isModalOpenSubject.asObservable();
    }

    getConfirmModalConfig = () => this.modalConfigSubject.asObservable();
};
