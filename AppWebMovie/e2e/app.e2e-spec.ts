import { ExamenFPage } from './app.po';

describe('examen-f App', () => {
  let page: ExamenFPage;

  beforeEach(() => {
    page = new ExamenFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
