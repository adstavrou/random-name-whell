describe('My First Test', () => {
    it('Does nothing much!', () => {
        expect(true).to.equal(true);
    });

    it('Start at localhost', () => {
        cy.visit('/')
    })

    it('Add a name', () => {
        cy.get('#name').type('Alexandros')
        cy.get('#addNameBtn').click()
        cy.get('#listOfNames > :nth-child(1)').should('have.text', 'Alexandros')
        cy.get('#name').should('be.empty')
    })

    it('Add a second name', () => {
        cy.get('#name').type('Stella')
        cy.get('#addNameBtn').click()
        cy.get('#listOfNames > :nth-child(2)').should('have.text', 'Stella')
        cy.get('#name').should('be.empty')
    })

    it('Add a third name', () => {
        cy.get('#name').type('Tzella Delafragka')
        cy.get('#addNameBtn').click()
        cy.get('#listOfNames > :nth-child(3)').should('have.text', 'Tzella Delafragka')
        cy.get('#name').should('be.empty')
    })

    it('Run the Wheel and get a winner from [\'Alexandros\',\'Stella\',\'Tzella Delafragka\']', () => {
        cy.get('#runTheWheel').click()
        cy.get('#winner').should(($elem) => {
            expect($elem.text()).to.be.oneOf(['Alexandros','Stella','Tzella Delafragka'])
        })
    })

})