describe('Home page', () => {
    it('effects work', () => {
        cy.visit('http://localhost:5173');
        cy.get('#infoButton').click();
        cy.get('#closeButton').click();
        cy.scrollTo('bottom');
    })
})
