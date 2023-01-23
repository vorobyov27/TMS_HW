Feature: Check Kinopoisk links

  @regression @links
  Scenario Outline: As a user, I can open afisha link from main page
    Given I am on the Main page
    Then Element afishaLink appears on Main page
    When I click afishaLink on Main page
    Then Element myAfishaTab appears on Afisha page

  @regression @links
  Scenario Outline: As a user, I can open afisha link from main page
    Given I am on the Main page
    When I scroll to hdBlock element on Main page
    Then Element filmsLink appears on Main page
    When I click filmsLink on Main page
    Then Element promoTitle appears on Films page