# Sobre o Projeto

    Este repositório contém a automação de testes do Blog Agibank.

# O objetivo é:

    - Garantir estabilidade das funcionalidades principais

    - Permitir maior velocidade nas entregas

    - Criar documentação executável via BDD

    - Centralizar testes E2E para rodarem em pipeline CI/CD

# Tecnologias

    - Cypress 13+

    - Cucumber / Gherkin com @badeball/cypress-cucumber-preprocessor

    - Node.js 18+

    - JavaScript/TypeScript



# Executando localmente
    - Clonar o repositório
    
        git clone https://github.com/naziane/cypress-tests-agibank.git

        cd cypress-tests-agibank

    - Instalar dependências

        npm install

    - Executar Cypress em modo interativo

        npx cypress open

    - Executar modo headless (CI)

        npm run test:report



# GitHub Actions - Execução de Testes Cypress

Este projeto possui integração contínua configurada com GitHub Actions para rodar os testes automatizados e gerar relatórios com Mochawesome.

# Como funciona

1. Toda vez que houver PUSH ou PULL REQUEST na branch MAIN, o workflow do GitHub Actions é disparado automaticamente.
2. O workflow realiza:

   * Checkout do repositório
   * Instalação do Node.js (versão 18.16)
   * Instalação das dependências (`npm install`)
   * Instalação e verificação do Cypress
   * Execução dos testes Cypress com Mochawesome
   * Merge dos relatórios JSON em um único `report.json`
   * Geração do relatório HTML final
   * Upload do relatório como artifact no GitHub Actions

3. Como visualizar os relatórios

1. Acesse a aba ACTIONS do repositório no GitHub.
2. Clique no workflow correspondente à execução do Cypress.
3. Na execução mais recente, clique em Artifacts
4. Baixe o artifact chamado `cypress-report`.
5. Dentro da pasta baixada, abra `report.html` no navegador para visualizar o relatório completo.



# Autora

Projeto desenvolvido por Naziane Alves Pinto.