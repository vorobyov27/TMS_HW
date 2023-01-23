Feature: Check Kinopoisk main page

  @regression @menu
  Scenario Outline: As a user, I can open header menu
    Given I am on the Main page
    When I click headerMenu on Main page
    Then Element menuOpened appears on Main page
    And  Element menuHomeOption appears on Main page

  @regression @menu
  Scenario Outline: As a user, I can close opened menu
    Given I am on the Main page
    When I click headerMenu on Main page
    Then Element menuOpened appears on Main page
    When I click headerMenu on Main page
    Then Element menuOpened is not displayed on Main page

  @regression @menu
  Scenario Outline: As a user, I can open Tickets page via Menu
    Given I am on the Main page
    When I click headerMenu on Main page
    Then Element menuOpened appears on Main page
    And Element menuAfishaOption appears on Main page

    When I click menuAfishaOption on Main page
    Then Element promoTitle appears on Films page