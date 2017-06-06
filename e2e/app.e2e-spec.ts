import { ISurveyPage } from './app.po';

describe('i-survey App', () => {
  let page: ISurveyPage;

  beforeEach(() => {
    page = new ISurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
