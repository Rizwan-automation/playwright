Feature: Playwright Assignment - Task 4

  @task4
  Scenario Outline: Task 4
    Given I visit "<url>" and with page "A place to practice your automation skills!"
    When I click login link
    And I login with username "<username>" and password "<password>"
    And I verify user is logged in as "Welcome back Rizwan"
    And I select currency as "EUR"
    And I select main menu as "Men" and sub-menu as "Body & Shower"
    And I add items of "Body & Shower" in cart
    And I select main menu as "Men" and sub-menu as "Fragrance Sets"
    And I add items of "Fragrance Sets" in cart
    And I select main menu as "Men" and sub-menu as "Pre-Shave & Shaving"
    And I add items of "Pre-Shave & Shaving" in cart
    And I select main menu as "Men" and sub-menu as "Skincare"
    And I add items of "Skincare" in cart
    And I click on checkout button
    Then I verify items count in cart "first time"
    And I verify total price "first time"
    And I click on edit cart button
    And I check total amount is 200
    And I select currency as "USD"
    And I check total amount is 200
    And I select currency as "GBP"
    And I check total amount is 200
    And I select currency as "EUR"
    And I check total amount is 200
    And I select main menu as "Fragrance"
    And I check product count is 15
    And I click on checkout button
    And I verify items count in cart "second time"
    And I verify total price "second time"

    Examples:
      | url                             | username | password   |
      | https://automationteststore.com | rizwanvd | Pakistan1! |