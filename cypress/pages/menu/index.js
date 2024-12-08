class menu{

    irParaLogin(){
        cy.get('a[href$=login]').click()
    }

    irParaLogout(){
        cy.contains('Logout').click()
    }

    irParaContactUs(){
        cy.contains('Contact us').click()
    }

    irParaProducts(){
        cy.contains('Products').click()
    }

    irParaDeleteAccount(){
        cy.contains('Delete Account').click()
    }
}

export default new menu()