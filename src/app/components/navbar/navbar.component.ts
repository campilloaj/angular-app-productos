import { Component, inject } from '@angular/core';

//services
import { LanguageService } from '../../state/language/language.service';

//components
import { SelectIdiomComponent } from '../select-idiom/select-idiom.component';
import { MenuProfileComponent } from '../menu-profile/menu-profile.component';

@Component({
  selector: 'app-navbar',
  imports: [SelectIdiomComponent, MenuProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  
  idiom = '';
  isOpenIdiom = false;
 
  //DI
  languageService = inject(LanguageService);

  constructor() {
    this.languageService.data$.subscribe({
      next: (value) => {
        this.idiom = value;
      },
    });
  }

  handleClickIdiom = () => {
    this.isOpenIdiom = !this.isOpenIdiom;
  };

}
