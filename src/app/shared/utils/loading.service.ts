import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setIsLoading(isLoading: boolean) {
        this.isLoadingSubject.next(isLoading);
    }

    getIsLoading(): Observable<boolean> {
        return this.isLoadingSubject.asObservable();
    }
};
