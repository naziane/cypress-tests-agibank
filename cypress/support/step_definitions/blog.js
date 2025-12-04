import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://blog.agibank.com.br');
});

Given("que estou na página inicial do blog", () => {
  cy.visit("https://blog.agibank.com.br/");
});

When("eu clico no botão de pesquisa", () => {
    cy.get('.ast-search-icon a.slide-search', { timeout: 10000 })
    .should('exist')
    .click({ force: true });
});


When('digito {string} e envio', (termo) => {
  // 1️⃣ Abre o campo de pesquisa
  cy.get('.ast-search-icon a.slide-search').click();

  // 2️⃣ Espera o input aparecer no DOM e ficar visível
  cy.get('input#search-field', { timeout: 10000 })
    .should('exist')             // elemento existe
    .should(($input) => {        // elemento visível e focável
      if ($input.css('visibility') === 'hidden') {
        $input.css('visibility', 'visible');
      }
    })
    .invoke('attr', 'tabindex', '0') // garante foco
    .focus()
    .as('searchInput');

  // 3️⃣ Digita no input
  cy.get('@searchInput')
    .should('exist')             // garante que ainda existe
    .type(`${termo}{enter}`, { delay: 50 }); // delay ajuda com sites dinâmicos
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

