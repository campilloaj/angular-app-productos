import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
//Service
import { LanguageService } from '../../state/language/language.service';
import { configIdiom } from './configIdiom';

@Pipe({
  name: 'language',
  standalone: true,
  pure: false, // Importante para que se actualice automáticamente
})
export class LanguagePipe implements PipeTransform {

  private data: "ES" | "EN" = 'ES';
  private subscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.data$.subscribe((value) => {
      this.data = value;
    });
  }

  transform(value: keyof typeof configIdiom.ES): string {
    return configIdiom[this.data][value];
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
