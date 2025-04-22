import { Injectable, inject } from '@angular/core';

import { messages } from '../../config/messages';
import { LanguageService } from '../language/language.service';
import { Subscription } from 'rxjs';

//interfaces
import { Idiom } from '../../interfaces/language/language.interface';

export interface ToastMessage {
  id: number;
  message: string;
  type:string;
}

type MessageKey = keyof typeof messages;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private languageService = inject(LanguageService);

  public listMessage: ToastMessage[] = [];
  public isVisible = false;
 
  private idCounter = 0;
  private subscription: Subscription;
  private data: Idiom = 'ES';

  constructor(){
    this.subscription = this.languageService.data$.subscribe((value) => {
      this.data = value;
    });
  }


  public show(messageCode: Array<MessageKey> | string, type: | 'warning' | 'error' | 'info'= "warning" , duration = 1500 ) {
 
    let tempArray:string[] = [];

    // Asegura que todo lo que venga se convierta en array
    const newToasts = Array.isArray(messageCode) ? messageCode : [messageCode] as MessageKey[];

    //buscar el mensaje con el codigo
    newToasts.forEach(x => {
      
      const found = messages[x];
    
      if(found){
        tempArray.push(found[this.data] || '');
      }
    });

    tempArray.forEach((msg) => {

      const id = this.idCounter++;
      const toastItem: ToastMessage = { id, message: msg, type };
      this.listMessage.push(toastItem);

      // Elimina el toast después de 'duration' ms
      setTimeout(() => {
        this.listMessage = this.listMessage.filter(t => t.id !== id);
      }, duration);
    });
  }


  ngOnDestroy() { this.subscription.unsubscribe(); }

}
