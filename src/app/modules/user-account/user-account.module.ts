import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatSelectModule } from '@angular/material';
import { HttpModule } from '@angular/http';

// custom modules
import { SharedModule } from "../shared/shared.module";

// components
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/regitration/regitration.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { UserAccountRoutingModule } from "./user-account-routing/user-account-routing.module";
import { UserAccountComponent } from './user-account/user-account.component';
import { AjaxService } from '../../services/ajax/ajax.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    MatCheckboxModule,
    UserAccountRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserAccountComponent,
    LoginComponent,
    RegistrationComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
  ],
  exports: [MatCheckboxModule, UserAccountRoutingModule, HttpModule],
  providers : [AjaxService]
})
export class UserAccountModule { }
