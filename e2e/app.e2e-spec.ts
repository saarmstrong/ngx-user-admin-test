import { NgxUserAdminTestPage } from './app.po';

describe('ngx-user-admin-test App', () => {
  let page: NgxUserAdminTestPage;

  beforeEach(() => {
    page = new NgxUserAdminTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
