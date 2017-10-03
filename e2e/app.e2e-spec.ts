import { OktaAngular2DemoPage } from './app.po';

describe('okta-angular2-demo App', () => {
  let page: OktaAngular2DemoPage;

  beforeEach(() => {
    page = new OktaAngular2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
