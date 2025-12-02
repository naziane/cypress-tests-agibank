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
  cy.get('.ast-search-icon a.slide-search', { timeout: 10000 })
    .click({ force: true });

  // Garante que o campo foi criado após o clique
  cy.get('input#search-field', { timeout: 10000 })
    .should('exist');
  

  // Rebusca o elemento 
  cy.get('input#search-field', { timeout: 10000 })
    .type(`${termo}{enter}`, { force: true });
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
  cy.contains(
    "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.",
    { matchCase: false, timeout: 15000 }
  ).should("be.visible");
});

