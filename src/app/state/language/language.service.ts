import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Idiom } from '../../interfaces/language/language.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private dataSubject = new BehaviorSubject<Idiom>('ES');
  data$: Observable<Idiom> = this.dataSubject.asObservable();

  updateLanguage(newValue: Idiom) {
    this.dataSubject.next(newValue);
  }

}
