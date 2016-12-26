import { TravelAngularPage } from './app.po';

describe('travel-angular App', function() {
  let page: TravelAngularPage;

  beforeEach(() => {
    page = new TravelAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
