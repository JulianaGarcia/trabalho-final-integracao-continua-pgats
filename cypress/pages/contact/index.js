class contactUs {
    contactUsForm(){
        cy.get('[data-qa="name"]').type('Juliana')
        cy.get('[data-qa="email"]').type('tester-1723369545485@gmail.com')
        cy.get('[data-qa="subject"]').type('Teste Contact us')
        cy.get('[data-qa="message"]').type('Esse é um teste para validar o submit do formulário contact us')
        cy.fixture('DocWord.docx').as('arquivo')
        cy.get('input[name="upload_file"]').selectFile('@arquivo')

        cy.get('[data-qa="submit-button"]').click()
    }

}

export default new contactUs()

