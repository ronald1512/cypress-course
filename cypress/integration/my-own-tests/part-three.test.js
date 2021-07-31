/// <reference types="cypress" /> 

//respuesta de poner en la consola: localStorage.__auth__token
//esto nos servirá para no estar va de loggearse a cada rato, sino lo que hacemos es guardar este token en el localstorage más adelante. 
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvbmFsZHJvbWVybyIsIl9pZCI6IjYxMDVhZWI2Nzc4NDE1MDAwYTcxOTQ1OSIsIm5hbWUiOiJSb25hbGQgUm9tZXJvIiwiaWF0IjoxNjI3NzYyNTI0LCJleHAiOjE2MzAzNTQ1MjR9.gd9QIFXDFU_efDGbvz9vJ8ZY7rar3Ts9r7s-lffb3Do'


describe('Part III --> Testing with cypress', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com')
    });

    it('The webpage loads, at least', () => {
        cy.visit('https://codedamn.com')
    });

    //it.only lo que hace es indicar que quiero que solo ejecute los que tienen only
    it('Login page looks good', () => {
        cy.contains('Sign In').click();
        cy.contains('Sign in to your account').should('exist');
        cy.contains('Sign in with Google').should('exist');
        cy.contains('Sign in with Facebook').should('exist');
        cy.contains('Forgot your password?').should('exist');
    });

    it('The login page links work', () => {

        // 1. Sing in page
        cy.contains('Sign In').click();

        // 2. password reset page
        cy.contains('Forgot your password?').click();

        // 3. verify your page URL
        // cy.url().should('include','/password-reset'); //esta forma tambien se puede
        cy.url().should('eq', 'https://codedamn.com/password-reset');

        // 4. go back, to the sign in page
        cy.go('back');  //regresamos a la pagina anterior


        cy.contains('Create a free account').click();
        cy.url().should('include', '/register');

        // ADITIONAL LOGS. Console.log doesn't work here. 
        cy.log('testing logs');
        // cy.log('Current URL = ', cy.url()); // esto no funciona como espero, porque la ejecución es asíncrona y no espera que se resuelva el argumento. 


        cy.url().then(value => {
            cy.log('The current url is: ', value);
        })
    });

    it.only('Login should display correct error', () => {
        cy.contains('Sign In').click();
        cy.contains('Unable to authorize.').should('not.exist');
        cy.get('[data-testid=username]').type('admin')
        cy.get('[data-testid=password]').type('admin')
        cy.get('[data-testid=login]').click();

        cy.contains('Unable to authorize.').should('exist');
    });

    it.only('Login should work fine', () => {
        cy.contains('Sign In').click();
        cy.get('[data-testid=username]').type('ronaldromero')
        cy.get('[data-testid=password]').type('MAbBWDuNyCaB3@V')
        cy.get('[data-testid=login]').click();

        cy.url().should('include', '/dashboard');
    });
})
