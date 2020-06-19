/* eslint-disable no-undef */

describe('Navigates to the page and loads', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('loads the page correctly', () => {
        cy.contains('Lambda Eats')
        cy.contains('Home')
        cy.contains('Pizza?')
        cy.contains('coding')
    })
})

describe('Clicks on the button to order pizza and navigates to order page', () => {
    it('clicks on the pizza button', () => {
        cy.contains('Pizza').click()
    })

    it('navigates to /pizza url', () => {
        cy.url().should('include', '/pizza')
    })

    it('loads the page correctly', () => {
        cy.contains('Lambda')
        cy.contains('Home')
        cy.contains('Name')
        cy.contains('Size')
        cy.contains('Toppings')
        cy.contains('Instructions')
        cy.contains('Add to Order')
    })

    it('input areas are empty', () => {
        cy.get('#nameInput').should('be.empty')
        cy.get('#sizeInput').should('have.value', '')
        cy.get('[for=pepperoniInput]').should('not.be.checked')
        cy.get('[for=mushroomInput]').should('not.be.checked')
        cy.get('[for=baconInput]').should('not.be.checked')
        cy.get('[for=onionInput]').should('not.be.checked')
        cy.get('[name=instructions]').should('be.empty')
    })

    it('add order button is disabled', () => {
        cy.contains('Add to Order').should('be.disabled')
    })
})

describe('Checks that error messages appear appropiately', () => {
    it('navigates to size', () => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('enters invalid name input and checks for error message ', () => {
        cy.get('#nameInput').type('a')
        cy.contains('2 characters')
    })

    it('enters invalid size and displays appropiate error message', () => {
        cy.get('#sizeInput').select('Large')
        cy.get('#sizeInput').select('')

        cy.contains('A size is required')
    })

    it('add order button is disabled', () => {
        cy.contains('Add to Order').should('be.disabled')
    })
})

describe('Enters in valid input and submits an order', () => {
    it('navigates to size', () => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Enters data into the input fields', () => {
        cy.get('#nameInput').type('Name')
            .should('have.value', 'Name')
        cy.get('#sizeInput').select('Large')
            .should('have.value', 'large')
        cy.get('#pepperoniInput').check()
            .should('be.checked')
        cy.get('#mushroomInput').check()
            .should('be.checked')
        cy.get('#baconInput').check()
            .should('be.checked')
        cy.get('#onionInput').check()
            .should('be.checked')
        cy.get('[name=instructions').type('Gluten Free')
            .should('have.value', 'Gluten Free')
    })

    it('Add order button is enabled and submits order and is redirected to home page', () => {
        cy.contains('Add to Order')
            .should('be.enabled')
            .click()
        cy.url().should('not.include', '/pizza')
        cy.url().should('include', '/confirm')

    })
})