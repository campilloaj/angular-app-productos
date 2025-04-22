import { Component, inject, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-profile',
  imports: [],
  templateUrl: './menu-profile.component.html',
  styleUrl: './menu-profile.component.css',
})
export class MenuProfileComponent {
  private elementRef = inject(ElementRef);
  showMenuProfile = false;
  // Detectar clics fuera del componente
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showMenuProfile = false;
    }
  }

  handleMenuProfile = () => {
    this.showMenuProfile = !this.showMenuProfile;
  };

  public closeSesion = () => {};
}
