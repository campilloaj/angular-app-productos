import { Component, inject } from '@angular/core';
import { LanguagePipe } from '../../pipes/language/language.pipe';
import { LanguageService } from '../../state/language/language.service';

//interfaces
import { Idiom } from '../../interfaces/language/language.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-idiom',
  imports: [LanguagePipe],
  templateUrl: './select-idiom.component.html',
  styleUrl: './select-idiom.component.css',
})
export class SelectIdiomComponent {

  languageService = inject(LanguageService);
    
  public data: Idiom= 'ES';
  private subscription: Subscription;

  constructor() {
    this.subscription = this.languageService.data$.subscribe((value) => {
      this.data = value;
    });
  }

  handleChangeLanguage = (ev: Event) => {
    const value = (ev.target as HTMLSelectElement).value as Idiom;
    this.languageService.updateLanguage(value);
  };

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
