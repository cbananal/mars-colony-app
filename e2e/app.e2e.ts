import { Angular2ProjectPage } from './app.po';

describe('angular2-project App', function() {
  let page: Angular2ProjectPage;

  beforeEach(() => {
    page = new Angular2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-project works!');
  });
});
