class Register {
    fillForm(){
        const timestamp = new Date().getTime()
        const signUpName = "JulianaG"
        Cypress.env('SignUpName', signUpName)

        cy.get('[data-qa="signup-name"]').type(Cypress.env('SignUpName'))
        cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@gmail.com`)
        cy.contains('button', 'Signup').click()

        cy.get('input[type=radio]').check('Mrs')
        cy.get('[data-qa="password"]').type('1234', { log: false })
        cy.get('[data-qa="days"]').select('8')
        cy.get('[data-qa="months"]').select('July')
        cy.get('[data-qa="years"]').select('1994')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('Juliana')
        cy.get('[data-qa="last_name"]').type('QA')
        cy.get('[data-qa="company"]').type('PGATS')
        cy.get('[data-qa="address"]').type('Rua alecrin, n 25')
        cy.get('[data-qa="country"]').select('Australia')
        cy.get('[data-qa="state"]').type('New South Wales')
        cy.get('[data-qa="city"]').type('Sydney')
        cy.get('[data-qa="zipcode"]').type('900')
        cy.get('[data-qa="mobile_number"]').type('123 456 789')
        cy.get('[data-qa="create-account"]').click()

    }

    fillFormExistingEmail(){
        const signUpName = "JulianaGM"
        Cypress.env('SignUpName', signUpName)

        cy.get('[data-qa="signup-name"]').type(Cypress.env('SignUpName'))
        cy.get('[data-qa="signup-email"]').type('julianagm@gmail.com')    
        cy.contains('button', 'Signup').click()

    }

}

export default new Register()


