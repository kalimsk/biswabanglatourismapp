import { BiswabanglatourismappPage } from './app.po';

describe('biswabanglatourismapp App', () => {
  let page: BiswabanglatourismappPage;

  beforeEach(() => {
    page = new BiswabanglatourismappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
