import { ServerManagerPage } from './app.po';

describe('server-manager App', () => {
  let page: ServerManagerPage;

  beforeEach(() => {
    page = new ServerManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
