import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  handleLogin(loginForm:any){
    console.log(loginForm);
    console.log(loginForm.value);
    // console.log(loginEmail);
  }

  // handleEmail(loginEmail: any){
  //   console.log(loginEmail);
  // }

}
