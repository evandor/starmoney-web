import { StarmoneyWebPage } from './app.po';

describe('starmoney-web App', function() {
  let page: StarmoneyWebPage;

  beforeEach(() => {
    page = new StarmoneyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
