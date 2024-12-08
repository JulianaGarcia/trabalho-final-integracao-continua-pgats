class Products {
    viewProducts() {

        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('View Product').click()
    }

    searchProducts() {
        cy.get('input#search_product').type('Frozen')
        cy.get('#submit_search').click()
    }

    buyProduct() {
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('Add to cart').click()

        cy.contains('View Cart').click()
        cy.url().should('includes', "view_cart")
        cy.get('.btn.check_out').should('be.visible')
        cy.get('.btn.check_out').click()

        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')

        cy.get('.form-control').type('Teste no campo de comentário da ordem')
        cy.get('.btn.check_out').click()


        cy.get('[data-qa="name-on-card"]').type('Juliana')
        cy.get('[data-qa="card-number"]').type('2222333355554444')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('08')
        cy.get('[data-qa="expiry-year"]').type('2028')
        cy.get('[data-qa="pay-button"]').click()


        cy.get('[data-qa="order-placed"] b').should('be.visible')
    }


}

export default new Products()