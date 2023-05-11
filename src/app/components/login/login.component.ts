import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private as: AuthServiceService, private fb: FormBuilder, private router: Router ){
    sessionStorage.removeItem('token')
    this.loginForm = fb.group({
      email: ['', Validators.compose([ Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  submitLoginForm(){
    if (this.loginForm.valid) {
      this.as.getUser(this.loginForm.value.email).subscribe((data) => {
        console.log(data);
        
        if (data){
          if(this.loginForm.value.password === data[0].password){
            console.log("user verified");
            sessionStorage.setItem('token', data[0].email + data[0].id);
            this.as.showMenu('true');
            this.router.navigate(['/home']);
          }
        }else{
          console.log("user not found");
          
        }
      })
  }
}
}
