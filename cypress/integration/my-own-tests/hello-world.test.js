/// <reference types="cypress" /> 
//añadimos la referencia para que nos permita utilizar cy. Hay mas referencias, se puede ver en node_modules
describe('Basic tests', () => {
    
    it('We hace correct page title',()=>{
        // throw new Error('ops');
        cy.visit('https://codedamn.com');

        // Similar to mocha --> Mocha is a JS test framework for Node.js
        cy.contains('Be industry-ready').should('exist'); //cy.contains --> Search for text inside the element. When we use .should its converted into an assertion
    });

    it('have correct text using should',()=>{
        cy.contains('Be industry-ready').should('have.text','Be industry-ready fullstack coder. 10x faster and 100x cheaper.'); 
    });

    it('cy.get --> Click button',()=>{
        //cy.get --> css selector
        cy.get('div#root').should('exist');
        cy.get('div[id=root]').should('exist'); // también se puede hacer de esta forma
        cy.get('div#noroot').should('not.exist');


        // formas de obtener un boton...
        //atributo data-* --> no es relevante para el html, por ello se puede usar para referirnos a un elemento en concreto. 
        // Way 1. Esta no es muy buena porque si cambia el texto del boton, el test va a fallar. Es una forma muy fragil
        cy.contains('Explore Learning Paths');

        // Way 2. Es otra forma muy fragil ya que utiliza classnames, y esos podrían cambiar. 
        cy.get('.relative > section > div > div > a');

        // Way 3. Best way. 
        cy.get('[data-testid=homepage-cta]').click();

        // GENERAL RULE: no utilizar declaracion de variables... usar directamente cy
    });

    it('viewport change',()=>{
        cy.viewport('iphone-5');
        // cy.viewport(1280,720);  //width, height
        cy.visit('https://codedamn.com');
    });
})
