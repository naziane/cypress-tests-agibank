Feature: Pesquisa de artigos no Blog Agibank
Como usuário do Blog Agibank
Quero pesquisar conteúdos através da lupa
Para encontrar artigos relevantes rapidamente

 Scenario: Buscar artigo no blog
    Given que estou na página inicial do blog
    When eu clico no botão de pesquisa
    And digito "emprestimos" e envio
    Then devo ver resultados de pesquisa relacionados


Scenario: Realizar pesquisa por termo inexistente
    Given que estou na página inicial do blog
    When eu clico no botão de pesquisa
    And digito "aaaaaaaaaaaa" e envio
    Then devo visualizar uma mensagem informando que nenhum resultado foi encontrado
