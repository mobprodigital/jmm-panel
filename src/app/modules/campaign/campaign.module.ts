import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './components/manage/manage.component';
import { TrakingLinksComponent } from './components/traking-links/traking-links.component';
import { PermissionRequestComponent } from './components/permission-request/permission-request.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { CampaignCategoriesComponent } from './components/campaign-categories/campaign-categories.component';
import { CampaignCreativesComponent } from './components/campaign-creatives/campaign-creatives.component';
import { CampaignRoutingModule } from './campaign-routing/campaign-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule
  ],
  declarations: [ManageComponent, TrakingLinksComponent, PermissionRequestComponent, CreateCampaignComponent, CampaignCategoriesComponent, CampaignCreativesComponent],
  exports: [CampaignRoutingModule]
})
export class CampaignModule { }
