Siri Cascudo Web

Siri Cascudo Web é um projeto desenvolvido por um estudante com uma abordagem descontraída, inspirado no universo do Bob Esponja. O projeto utiliza React para o frontend e uma API Full REST 100% desenvolvida em Java Spring para o backend.

Índice

Descrição
Tecnologias Utilizadas
Funcionalidades
Como Executar
Estrutura do Projeto
Contribuição
Licença
Descrição

Este projeto simula o ambiente do famoso restaurante Siri Cascudo, da série Bob Esponja, com uma interface interativa e divertida. O objetivo é oferecer uma experiência de desenvolvimento que seja tanto educativa quanto divertida, integrando um frontend moderno em React com um backend robusto e escalável em Java Spring.

Tecnologias Utilizadas

React: Biblioteca JavaScript para construção de interfaces de usuário.
Java Spring: Framework para desenvolvimento de aplicações web e API REST.
Spring Boot: Para simplificação da configuração do projeto Spring.
PostgreSQL: Banco de dados relacional utilizado para armazenar as informações.
Spring Data JPA: Para abstração da camada de persistência de dados.
Axios: Biblioteca para fazer requisições HTTP do frontend para a API.
Funcionalidades

Listagem de Itens do Menu: Visualização dos itens disponíveis no cardápio do Siri Cascudo.
Cadastro de Pedidos: Permite ao usuário fazer pedidos e enviá-los para a cozinha.
Gestão de Clientes: Função administrativa para gerenciar os clientes cadastrados.
Histórico de Pedidos: Visualize o histórico completo de pedidos realizados no restaurante.
Como Executar

Pré-requisitos
Node.js (versão 14+)
Java JDK (versão 11+)
Maven
PostgreSQL

Backend
Clone este repositório:
bash
Copiar código
git clone https://github.com/gabrielboscaratto/menu.git
Navegue até o diretório do backend:

cd siri-cascudo-web/backend
Configure as credenciais do banco de dados no application.properties.
Execute o backend com o Maven:
mvn spring-boot:run
Frontend
Navegue até o diretório do frontend:
bash
cd siri-cascudo-web/frontend
Instale as dependências do Node.js:
bash
Copiar código
npm install
Execute o servidor de desenvolvimento:
bash
Copiar código
npm start
Acessando a Aplicação
Com o backend e o frontend rodando, acesse a aplicação em: http://localhost:3000

Estrutura do Projeto

plaintext

├── backend/
│   ├── src/
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Vamos construir juntos!

Licença

Este projeto está licenciado sob a MIT License.
