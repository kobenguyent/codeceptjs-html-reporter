const { I } = inject();

Feature('Sample API Tests');

Scenario('Passing test', () => {
  I.sendGetRequest('/users/1');
  I.seeResponseCodeIs(200);
});

Scenario('Failing test', () => {
  I.sendGetRequest('/users/999');
  I.seeResponseCodeIs(404);
});

Scenario.skip('Skipped test', () => {
  I.sendGetRequest('/posts');
});
