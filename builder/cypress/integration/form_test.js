describe('get the name input', () => {
    it('can achieve the name and type in it', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="name"]')
        .type('Ooga')
        .should('have.value', 'Ooga')
    })
})

describe('get the email input and change it', () => {
    it('can achieve the email input and type an email', () => {
            cy.get('input[name="email"]')
            .type('Ooga@booga.com')
    })
})

describe('password input, new password', () => {
    it('can get the password, while typing a new one', () => {
        cy.get('input[name="password"]')
        .type('New Secret Password')
    })
})

describe('check the TOS checkbox', () => {
    it('checks the TOS', () => {
        cy.get('input[name="tos"]')
        .should('have.value', 'on')
    })
})

describe('submit form', () => {
    it('can be able to submit form', () => {
        cy.get('input[name="name"]').should('have.value', 'Ooga')
        cy.get('input[name="email"]').should('have.value', 'Ooga@booga.com')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').should('not.be.disabled')

        cy.get('button').click()
    }) 
})

describe('form validation', () => {
    it('check to see if everything is filled out', () => {
        cy.get('input[name="name"]').should('have.value', 'Ooga')
        cy.get('input[name="email"]').should('have.value', 'Ooga@booga.com')
        cy.get('input[type="checkbox"]').check()

    })
})
