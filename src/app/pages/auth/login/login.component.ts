import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,  FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguagePipe } from '../../../pipes/language/language.pipe';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastService } from '../../../state/toast/toast.service';
import { LanguageService } from '../../../state/language/language.service';
import { SelectIdiomComponent } from '../../../components/select-idiom/select-idiom.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, LanguagePipe, SelectIdiomComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
 
  private toast = inject(ToastService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  languageService = inject(LanguageService);

  formLogin = this.fb.group({
    'email':['', Validators.email],
    'password':['', Validators.maxLength(6)]
  });

  public login = () => {

    console.log(this.formLogin.value)
    
    this.toast.show(["emailRequired", "passwordRequired"], 'warning')

    //this.router.navigate(["dash"], { replaceUrl:true });

  }
    
}
