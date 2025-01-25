import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {


  isLogin: boolean = true;
  isRegister: boolean = false;

  onLogin() {
    debugger
    this.isRegister = false;
    this.isLogin = true;
  }

  onRegister() {
    debugger
    this.isLogin = false;
    this.isRegister = true;
  }
}
