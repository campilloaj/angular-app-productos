import { Component, inject } from '@angular/core';
import { LanguagePipe } from '../../pipes/language/language.pipe';
import { LanguageService } from '../../state/language/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-idiom',
  imports: [LanguagePipe],
  templateUrl: './select-idiom.component.html',
  styleUrl: './select-idiom.component.css',
})
export class SelectIdiomComponent {
  idiom: 'ES' | 'EN' = 'ES';

  languageService = inject(LanguageService);
  private subscription: Subscription;

  constructor() {
    this.subscription = this.languageService.data$.subscribe({
      next: (value) => {
        this.idiom = value;
      },
    });
  }

  handleChangeLanguage = (ev: Event) => {
    const value = (ev.target as HTMLSelectElement).value as 'EN' | 'ES';
    this.languageService.updateLanguage(value);
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
