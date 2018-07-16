import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-regitration',
  templateUrl: './regitration.component.html',
  styleUrls: ['./regitration.component.css']
})
export class RegistrationComponent implements OnInit {


  public rgtFormGroup: FormGroup;
  public countryList: Array<string> = ['India', 'China', 'USA', 'UK', 'Turky', 'Pakistan', 'Brazil'];
  constructor(private router: Router) { }


  ngOnInit() {
    this.rgtFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      companyName: new FormControl('', [Validators.required]),
      websiteUrl: new FormControl('', [Validators.pattern(new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"))]),
      skypeName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(new RegExp(/^\d*[1-9]\d*$/))]),
    });
  }


  /**
   * Navigate to Login page
   */
  public goToLogin(ev: MouseEvent): void {
    ev.preventDefault();
    this.router.navigateByUrl('/login');
  }

  public registerUser() {
    if (this.rgtFormGroup.invalid) {
      Object.keys(this.rgtFormGroup.controls).forEach(async control => {
        let _control = this.rgtFormGroup.get(control);
        if (_control) {
          _control.markAsTouched({ onlySelf: true });
        }
      })
    }
  }

}
