// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule, MatSlideToggleModule, MatSelectModule, MatRadioModule, MatChipsModule } from '@angular/material';

// components
import { ManageComponent } from './components/manage/manage.component';
import { TrakingLinksComponent } from './components/traking-links/traking-links.component';
import { PermissionRequestComponent } from './components/permission-request/permission-request.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { CampaignCategoriesComponent } from './components/campaign-categories/campaign-categories.component';
import { CampaignCreativesComponent } from './components/campaign-creatives/campaign-creatives.component';
import { CampaignRoutingModule } from './campaign-routing/campaign-routing.module';
import { InfoComponent } from './components/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  declarations: [ManageComponent, TrakingLinksComponent, PermissionRequestComponent, CreateCampaignComponent, CampaignCategoriesComponent, CampaignCreativesComponent, InfoComponent],
  exports: [CampaignRoutingModule]
})
export class CampaignModule { }
