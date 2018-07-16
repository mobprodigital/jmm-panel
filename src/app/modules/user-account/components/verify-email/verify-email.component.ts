import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  verifyEmailForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.verifyEmailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  verifyEmail() {
    if (this.verifyEmailForm.invalid) {
      let _field = this.verifyEmailForm.get('email');
      if (_field) {
        _field.markAsTouched({ onlySelf: true });
      }
    }
  }

  /**
   * Navigate to a page
   */
  public navigateTo(ev: MouseEvent, path: string): void {
    ev.preventDefault();
    this.router.navigateByUrl('/' + path);
  }

}
