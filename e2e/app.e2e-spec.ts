import { ToDoMaterial2Page } from './app.po';

describe('to-do-material2 App', function() {
  let page: ToDoMaterial2Page;

  beforeEach(() => {
    page = new ToDoMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
