describe('/starships', () => {
  before(() => {
    cy.openHomePage();
  });

  it('Should validate that the page is redirecting to the films screen', () => {
    cy.get(':nth-child(7) > .link').click();
  });

  it('Search for a movie of interest and click to see its details', () => {
    cy.get('#root > :nth-child(2)');
    cy.wait(20000);
    cy.get(':nth-child(2) > .category__description > .card__link').click();
  });
});
