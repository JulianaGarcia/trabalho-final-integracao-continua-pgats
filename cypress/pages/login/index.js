class Login {
    loginCorrect(){
        cy.get('[data-qa="login-email"]').type('julianagm@gmail.com')
        cy.get('[data-qa="login-password"]').type('1234')
        cy.get('[data-qa="login-button"]').click()

    }

    loginIncorrect(){
        cy.get('[data-qa="login-email"]').type('testerjulianag@gmail.com')
        cy.get('[data-qa="login-password"]').type('1234')
        cy.get('[data-qa="login-button"]').click()

    }
 
}

export default new Login()