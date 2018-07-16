import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/regitration/regitration.component';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
import { VerifyEmailComponent } from '../components/verify-email/verify-email.component';
import { UserAccountComponent } from '../user-account/user-account.component';


//components



let userAccountRoutes: Routes = [
  {
    path: 'user-account',
    component: UserAccountComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent
      },
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
    ]
  }

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(userAccountRoutes)
  ],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
