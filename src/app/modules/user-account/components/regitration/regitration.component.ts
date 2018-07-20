import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserAccountService } from '../../services/user-account.service';
import { AjaxResponse } from '../../../../services/ajax/interface/ajax-response.interface';

// modals

@Component({
  selector: 'app-regitration',
  templateUrl: './regitration.component.html',
  styleUrls: ['./regitration.component.css'],
  providers: [UserAccountService]
})
export class RegistrationComponent implements OnInit {

  public registrationFormDisabled: boolean = false;
  public rgtFormGroup: FormGroup;
  public CountryList: Array<string> = ['India', 'China', 'USA', 'UK', 'Turky', 'Pakistan', 'Brazil'];
  public regtTypeList: any[] = [
    {
      value: "emp",
      name: "Employee",
    },
    {
      value: "adv",
      name: "Advertiser"
    },
    {
      value: "pub",
      name: "Publisher"
    }
  ]
  constructor(private router: Router, private _userAccount: UserAccountService) { }


  ngOnInit() {
    this.rgtFormGroup = new FormGroup({
      Fname: new FormControl('', [Validators.required]),
      Lname: new FormControl(''),
      RegTyp: new FormControl('', [Validators.required]),
      PrgCode: new FormControl(''),
      Paswd: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      EmlID: new FormControl('', [Validators.required, Validators.email]),
      CompName: new FormControl('', [Validators.required]),
      CmpDomain: new FormControl('', [Validators.pattern(new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"))]),
      SkypeName: new FormControl('', [Validators.required]),
      Country: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(new RegExp(/^\d*[1-9]\d*$/))]),
    });
  }


  /**
   * Navigate to Login page
   */
  public goToLogin(ev: MouseEvent): void {
    if (this.registrationFormDisabled) {
      return;
    }
    ev.preventDefault();
    this.router.navigateByUrl('/user-account/login');
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
    else {
      this.registrationFormDisabled = true;
      this._userAccount.Register(this.rgtFormGroup.value).then((response: AjaxResponse) => {
        if (response.responseCode === 1) {

        }
        console.log(response);
        this.registrationFormDisabled = false;
      });
      this.registrationFormDisabled = false;

    }
  }

  public setPrgCode() {
    let regtUserControl = this.rgtFormGroup.get('RegTyp');
    let prgCodeControl = this.rgtFormGroup.get('PrgCode');
    if (regtUserControl && prgCodeControl) {
      switch (regtUserControl.value) {
        case 'adv':
          prgCodeControl.setValue('reg3');
          break;
        case 'emp':
          prgCodeControl.setValue('reg1');
          break;
        case 'pub':
          prgCodeControl.setValue('reg2');
          break;
        default:
          prgCodeControl.setValue('null');
          break;
      }
    }
  }

  /**
   * Toggle disable and enable the registration form
   * @param isDisable disables the form if true else enables
   */
  public toggleRegForm(isDisable: boolean) {
    if (isDisable) {
      this.rgtFormGroup.disable();
    }
    else {
      this.rgtFormGroup.enable();
    }
  }

}
