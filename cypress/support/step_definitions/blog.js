import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do blog", () => {
  cy.visit("https://blog.agibank.com.br/");
});

When("eu clico no botão de pesquisa", () => {
    cy.get('.ast-search-icon a.slide-search', { timeout: 10000 })
    .should('exist')
    .click({ force: true });
});


When('digito {string} e envio', (termo) => {
  // Abre o campo de pesquisa
  cy.get('.ast-search-icon a.slide-search', { timeout: 10000 })
    .click({ force: true });

  // Digita no input de pesquisa
  cy.get('input#search-field', { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .focus()
    .type(`${termo}{enter}`);
});


Then("devo ver resultados de pesquisa relacionados", () => {

  //  Aguarda os resultados carregarem
  cy.get("article", { timeout: 15000 })
    .should("have.length.greaterThan", 0);

  // Valida que o título da página contém o termo pesquisado
  cy.get(".ast-archive-title", { timeout: 15000 })
    .invoke("text")
    .then((text) => {
      expect(text.toLowerCase()).to.include("emprestimos");
    });

});



Then("devo visualizar uma mensagem informando que nenhum resultado foi encontrado", () => {
 cy.get('.page-content', { timeout: 30000 })
  .should('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.');

});

