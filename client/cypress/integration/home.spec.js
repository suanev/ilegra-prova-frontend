describe('Home page', () => {
  before(() => {
    cy.openHomePage();
  });

  it('Should validate if newsletter form is working as it should', () => {
    cy.newletterForm();
  });

  it('Should validate if social buttons on the footer component is working as it should', () => {
    cy.socialButtons();
  });
});
