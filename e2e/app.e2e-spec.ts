<<<<<<< HEAD
import { AppPage } from './app.po';

describe('ng4-playground App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
=======
import { AppPage } from './app.po';

describe('ng4-playground App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
