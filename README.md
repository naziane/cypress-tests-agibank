1. Sobre o Projeto

    Este repositório contém a automação de testes do Blog Agibank.

2. O objetivo é:

    - Garantir estabilidade das funcionalidades principais

    - Permitir maior velocidade nas entregas

    - Criar documentação executável via BDD

    - Centralizar testes E2E para rodarem em pipeline CI/CD

3. Tecnologias

    - Cypress 13+

    - Cucumber / Gherkin com @badeball/cypress-cucumber-preprocessor

    - Node.js 18+

    - JavaScript/TypeScript



4. Instalação e Execução
    - Clonar o repositório
    
        git clone https://github.com/naziane/cypress-tests-agibank.git

        cd cypress-tests-agibank

    - Instalar dependências

        npm install

    - Executar Cypress em modo interativo

        npx cypress open

    - Executar modo headless (CI)

        npx cypress run

