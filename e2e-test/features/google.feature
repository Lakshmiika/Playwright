@google
Feature: Google Homepage Test

  Scenario: Open Google and verify title
    Given I open Google homepage
    Then the page title should contain Google
