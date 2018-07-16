import { CampaignRoutingModule } from './campaign-routing.module';

describe('CampaignRoutingModule', () => {
  let campaignRoutingModule: CampaignRoutingModule;

  beforeEach(() => {
    campaignRoutingModule = new CampaignRoutingModule();
  });

  it('should create an instance', () => {
    expect(campaignRoutingModule).toBeTruthy();
  });
});
