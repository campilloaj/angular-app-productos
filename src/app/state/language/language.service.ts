import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type Language = "ES" | "EN";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private dataSubject = new BehaviorSubject<Language>('EN');
  data$: Observable<Language> = this.dataSubject.asObservable();

  updateLanguage(newValue: Language) {
    this.dataSubject.next(newValue);
  }

}
