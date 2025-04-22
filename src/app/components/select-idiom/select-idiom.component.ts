import { Component, inject, ElementRef, HostListener } from '@angular/core';
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
  public data: Idiom = 'ES';
  private subscription: Subscription;
  languageService = inject(LanguageService);
  private elementRef = inject(ElementRef);
  showMenuIdiom = false;


  constructor() {
    this.subscription = this.languageService.data$.subscribe((value) => {
      this.data = value;
    });
  }

    // Detectar clics fuera del componente
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
        this.showMenuIdiom = false;
    }
  }

  handleChangeLanguage = (value: Idiom) => {
    this.languageService.updateLanguage(value);
  };

  handleMenuIdiom = () => {
    this.showMenuIdiom = !this.showMenuIdiom;
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
