import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,  FormBuilder, Validators  } from '@angular/forms';
import { RouterLink } from '@angular/router';

//pipes
import { LanguagePipe } from '../../../pipes/language/language.pipe';

@Component({
  selector: 'app-recover-password',
  imports: [ReactiveFormsModule, LanguagePipe, RouterLink],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent {
  private fb = inject(FormBuilder);
  
  formRecovery = this.fb.group({
    'email':['', Validators.email]
  });

  public recovery = () => {



  }


}
