import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: any;
  password: any;
  isLoggedIn: boolean = false;
  userList: any;
  submitted = false;
  show = false;

  loginForm : any = FormGroup;
  

  constructor(private loginService: LoginService, private userService: UserService,private route : Router) { }
 
  // get emailInput() { return this.loginForm.get('email'); }
  // get passwordInput() { return this.loginForm.get('password'); } 
  ngOnInit(){
    this.password = 'password';
    if (this.loginService.getToken()) {
      this.isLoggedIn = true;
      this.getUser();
    }

  } 

  
  onSubmit(): void {
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        this.isLoggedIn = true;
        alert('Successfully logged in');
        this.userService.getUsers().subscribe(
          users => {
            console.log('List of users:', users);
            this.route.navigate(['user']);
            this.getUser();

          },
          error => {
            console.error('Error fetching users:', error);
          }
        );
      },
      error => {
        console.error('Login error:', error);
        alert('Invalid username/password');
      }
    );
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  getUser(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.userList = users;
        console.log(this.userList);
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
}
}