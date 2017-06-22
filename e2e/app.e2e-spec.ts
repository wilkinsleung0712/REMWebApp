import { REMWebAppPage } from './app.po';

describe('remweb-app App', () => {
  let page: REMWebAppPage;

  beforeEach(() => {
    page = new REMWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
