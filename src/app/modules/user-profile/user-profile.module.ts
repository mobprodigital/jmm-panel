import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileInfoComponent, ProfileEditComponent, SettingComponent]
})
export class UserProfileModule { }
