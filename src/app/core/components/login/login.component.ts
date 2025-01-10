import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserModel } from 'src/app/models/user.model';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  user = new UserModel();
  error = {status: '', statusText: '', error: ''};
  readonly loginDialog = inject(MatDialogRef<LoginComponent>);

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  
  createForm(){
     this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.minLength, Validators.nullValidator]]
   });

   this.form.valueChanges.subscribe({
    next: () => {
      this.user.username = this.form.value['username'];
      this.user.password = this.form.value['password'];
    }
   })
  }

  login() {
    this.authService.login(this.user).subscribe({
      next: (user) => {
        if(user !== null || user !== undefined){
          this.loginDialog.close()
        }
      },
      error: (error) =>  {this.error = error, console.log(this.error)}
    })
  }

  onKeyUp(){
   this.error.status = '';
  }
}
