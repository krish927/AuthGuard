import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private as: AuthServiceService  , private fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      // id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      role: [''],
    });

  }

  submitRegisterForm() {
    if (this.registerForm.valid) {
      this.as.registerUser(this.registerForm.value).subscribe((response)=>{
        if(response){
          this.router.navigate(['/login']);
        }
      })
    }
  }
}
