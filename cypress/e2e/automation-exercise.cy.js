import register from "../pages/register";
import login from "../pages/login";
import contact from "../pages/contact";
import menu from "../pages/menu";
import products from "../pages/products";

describe('Automation Exercise - Trabalho conclusão', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com')
  });

  it('TC1: Register User', () => {
    
    menu.irParaLogin();
    register.fillForm();

    cy.url().should('includes', "account_created") 
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.get('i.fa-user').parent().should('contain', Cypress.env('SignUpName')) 
  })

  it('TC2: Login User with correct email and password', () => {
    menu.irParaLogin();
    login.loginCorrect();

    cy.get('i.fa-user').parent().should('contain', "JulianaG")

  })

  it('TC3: Login User with incorrect email and password', () =>{
    menu.irParaLogin();
    login.loginIncorrect();

    cy.get('.login-form form p').should('contain', 'Your email or password is incorrect!')

  })

  it('TC4: Logout User', () =>{
    menu.irParaLogin();
    login.loginCorrect(); 
    cy.get('i.fa-user').parent().should('contain', "JulianaG")

    menu.irParaLogout();
    cy.url().should('includes', "login")
    cy.contains("Login to your account").should("be.visible")

  })

  it('TC5: Register User with existing email', () =>{
    menu.irParaLogin();
    register.fillFormExistingEmail(); 

    cy.get('.signup-form form p')
    .should('be.visible')
    .and('contain', 'Email Address already exist!')

  })

  it('TC6: Contact Us Form', () =>{ 
    menu.irParaLogin()
    login.loginCorrect()
    cy.get('i.fa-user').parent().should('contain', "JulianaG")

    menu.irParaContactUs() 
    cy.get('.contact-form h2')
    .should('be.visible')
    .and('have.text', 'Get In Touch')

    contact.contactUsForm()

    cy.get('.status').should('contain', 'Success! Your details have been submitted successfully.')

  })

  it('TC8: Verify All Products and product detail page', () =>{   
    menu.irParaLogin()
    login.loginCorrect()
    cy.get('i.fa-user').parent().should('contain', "JulianaG")

    menu.irParaProducts()
    cy.url().should('includes', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')
    products.viewProducts()

    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information p').should('be.visible').and('have.length', 4)
    cy.get('.product-information span span').should('be.visible')
    
  })

  it('TC9: Search Product', () => {    

    menu.irParaLogin()
    login.loginCorrect()
    cy.get('i.fa-user').parent().should('contain', "JulianaG")
    menu.irParaProducts()
    cy.url().should('includes', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')

    products.searchProducts()

    cy.get('.title').should('be.visible').and('contain', 'Searched Products')
    cy.get('.single-products')
      .should('be.visible')
      .and('have.length.at.least', 1)

  })

  it('TC10: Verify Subscription in home page', () => { 

    menu.irParaLogin();
    login.loginCorrect(); 
    cy.get('i.fa-user').parent().should('contain', "JulianaG")

    cy.get('input#susbscribe_email')
      .scrollIntoView()
      .type('tester-1723369545485@gmail.com')
    cy.get('button#subscribe').click()

    cy.contains('You have been successfully subscribed!').should('be.visible')

  })

  it('TC15: Place Order: Register before Checkout', () =>{   
    menu.irParaLogin()
    register.fillForm()
    cy.url().should('includes', "account_created") 
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.get('b').should('contain', Cypress.env('SignUpName'))

    menu.irParaProducts()
    products.buyProduct()

    menu.irParaDeleteAccount()
    cy.get('[id=form] b').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()

  })

})