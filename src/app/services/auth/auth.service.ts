import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

//interfaces
import { UserRequest, UserResponse } from '../../interfaces/auth/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);

  private apiURL = environment.apiURL; 

  public login = (obj: UserRequest) => {
    return this.httpClient.post<UserResponse>(this.apiURL + 'auth/login', obj);
  } 


}
