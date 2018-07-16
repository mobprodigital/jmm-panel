import { UserAccountModule } from './user-account.module';

describe('UserLoginModule', () => {
  let userLoginModule: UserAccountModule;

  beforeEach(() => {
    userLoginModule = new UserAccountModule();
  });

  it('should create an instance', () => {
    expect(userLoginModule).toBeTruthy();
  });
});
