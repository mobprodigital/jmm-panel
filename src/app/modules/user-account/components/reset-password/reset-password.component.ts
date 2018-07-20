import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      newPwd: new FormControl('', [Validators.required, Validators.minLength(4), this.matchPassword()]),
      confirmPwd: new FormControl('', [Validators.required, Validators.minLength(4), this.matchPassword()])
    })
  }

  matchPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let pwdControl = this.resetPasswordForm ? this.resetPasswordForm.get('newPwd') : null;
      let confirmPwdControl = this.resetPasswordForm ? this.resetPasswordForm.get('confirmPwd') : null;

      if (pwdControl && confirmPwdControl) {
       
        if (pwdControl.value === confirmPwdControl.value) {
          return null;
        }
        else {
          return { 'passwordMismatch': true }
        }
      }
      return { 'passwordMismatch': true }
    }
  }

  public resetPassword() {


    console.log(this.resetPasswordForm.get('confirmPwd'));

    if (this.resetPasswordForm.invalid) {
      Object.keys(this.resetPasswordForm.controls).forEach(async field => {

        let _field = this.resetPasswordForm.get(field);
        if (_field) {
          _field.markAsTouched({ onlySelf: true });
        }

      });
    }
  }

  /**
   * Navigate to a page
   */
  public navigateTo(ev: MouseEvent, path: string): void {
    ev.preventDefault();
    this.router.navigateByUrl('/user-account/' + path);
  }
}
