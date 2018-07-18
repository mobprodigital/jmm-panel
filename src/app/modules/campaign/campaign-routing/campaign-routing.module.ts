import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../core/components/home/home.component';
import { CreateCampaignComponent } from '../components/create-campaign/create-campaign.component';
import { ManageComponent } from '../components/manage/manage.component';
import { CampaignCategoriesComponent } from '../components/campaign-categories/campaign-categories.component';
import { CampaignCreativesComponent } from '../components/campaign-creatives/campaign-creatives.component';
import { PermissionRequestComponent } from '../components/permission-request/permission-request.component';
import { TrakingLinksComponent } from '../components/traking-links/traking-links.component';
import { NotFoundComponent } from '../../../not-found/not-found.component';
import { InfoComponent } from '../components/info/info.component';


const campaignRoutes : Routes = [
  {
    path : 'campaign',
    component : HomeComponent,
    children : [
      {
        path : 'categories',
        component : CampaignCategoriesComponent
      },
      {
        path : 'creatives',
        component : CampaignCreativesComponent
      },
      {
        path : 'create',
        component : CreateCampaignComponent
      },
      {
        path : 'manage',
        component : ManageComponent
      },
      {
        path : 'info/:id',
        component : InfoComponent
      },
      {
        path : 'permission-request',
        component : PermissionRequestComponent
      },
      {
        path : 'tracking-link',
        component : TrakingLinksComponent
      },
      {
        path : '',
        component : ManageComponent
      },
      {
        path : '**',
        component : NotFoundComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(campaignRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
