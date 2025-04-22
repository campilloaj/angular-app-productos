import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LanguagePipe } from '../../../pipes/language/language.pipe';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastService } from '../../../state/toast/toast.service';
import { LanguageService } from '../../../state/language/language.service';
import { SelectIdiomComponent } from '../../../components/select-idiom/select-idiom.component';
import { validator } from '../../../utils/validators';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    LanguagePipe,
    SelectIdiomComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private toast = inject(ToastService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  languageService = inject(LanguageService);

  formLogin = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.maxLength(6)],
  });

  public login = () => {
    const { email, password } = this.formLogin.value;

    const { hasError, listMessage } = validator([
      { key: 'emailRequired', value: email },
      { key: 'passwordRequired', value: password },
    ]);

    if (hasError) {
      this.toast.show(listMessage, 'warning');
      return;
    }

    if (!this.formLogin.valid) {
      console.log("aqui", this.formLogin.controls.email.errors)
      if(this.formLogin.controls.email.errors){
        this.toast.show(["emailNotValid"], 'warning');
      }   
      
      return;
    }



    this.router.navigate(["dash"], { replaceUrl:true });
  };
}
