/// <reference types="cypress" /> 

//respuesta de poner en la consola: localStorage.__auth__token
//esto nos servirá para no estar va de loggearse a cada rato, sino lo que hacemos es guardar este token en el localstorage más adelante. 
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvbmFsZHJvbWVybyIsIl9pZCI6IjYxMDVhZWI2Nzc4NDE1MDAwYTcxOTQ1OSIsIm5hbWUiOiJSb25hbGQgUm9tZXJvIiwiaWF0IjoxNjI3NzYyNTI0LCJleHAiOjE2MzAzNTQ1MjR9.gd9QIFXDFU_efDGbvz9vJ8ZY7rar3Ts9r7s-lffb3Do'


describe('Part IV --> Basic Athenticated Desktop Tests', () => {
    beforeEach(()=>{
        cy.then(()=>{
            window.localStorage.setItem('__auth__token',token); 
        });
    });
    
    beforeEach(() => {
        //bootstrapping external things
        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com')
    });

    it('should load playground correctly',()=>{
        cy.visit('https://codedamn.com/playground/html');
        cy.get('div')
        cy.pause(); //realiza una pausa esperando a que yo presione el boton de resume. 
        // cy.debug()


        // presionar teclas especiales
        // cy.get('[data-testid=xterm]').type('{ctrl}{c}').type('touch testscript.js{enter}')

        // poner timeout a llamada
        // cy.contains('Setting up the challenge', {timeout: 7*1000}).should('exist');


        //para darle click derecho a algo

        // cy.contains('testscript.js').rightclick();
    });
})
