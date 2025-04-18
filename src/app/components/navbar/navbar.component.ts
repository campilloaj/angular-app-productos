import { Component, inject } from '@angular/core';

import { LanguageService } from '../../state/language/language.service';
import { LanguagePipe } from '../../pipes/language/language.pipe';

@Component({
  selector: 'app-navbar',
  imports: [LanguagePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  idiom = '';
  isOpenIdiom = false;

  languageService = inject(LanguageService);

  constructor(){
   this.languageService.data$.subscribe({
      next : (value) => {
          console.log(value)
          this.idiom = value;
      }
    } )
  }


  handleClickIdiom = () => {
    this.isOpenIdiom = !this.isOpenIdiom; 
  }

}
