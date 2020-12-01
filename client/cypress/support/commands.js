Cypress.Commands.add('openHomePage', () => {
  cy.visit('http://localhost:3000');
  cy.wait(500);
});

Cypress.Commands.add('newletterForm', () => {
  cy.get('.newsletter');
  cy.get('[placeholder="Your name"]').type('Suane');
  cy.get('[placeholder="email@email.com"]').type('email@email.com');
  cy.get('.btn').click();
  cy.on('window:alert', msg => {
    expect(msg).to.equal(
      'The Dark Force saved your email, and we will send you some news soon!',
    );
  });
});

Cypress.Commands.add('socialButtons', () => {
  cy.get('.footer__container');
  cy.get('[href="https:twitter.com/starwars"]').click();
  cy.get('[href="https:www.instagram.com/starwars/"]').click();
  cy.get(
    '[href="https:www.facebook.com/StarWars.br/?brand_redir=169299103121699"]',
  ).click();
  cy.get('[href="https:www.youtube.com/user/starwars"]').click();
});
