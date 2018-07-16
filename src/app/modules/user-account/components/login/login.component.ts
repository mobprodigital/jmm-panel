import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { async } from 'q';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  public loginFormGroup: FormGroup;


  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  /**
   * Navigate to a page
   */
  public navigateTo(ev: MouseEvent, path: string): void {
    ev.preventDefault();
    this.router.navigateByUrl(`/user-account/${path}`);
  }


  public userLogin() {
    if (this.loginFormGroup.invalid) {
      Object.keys(this.loginFormGroup.controls).forEach(async field => {
        let _field = this.loginFormGroup.get(field);
        if (_field) {
          _field.markAsTouched({ onlySelf: true });
        }
      });
    }
  }

}
