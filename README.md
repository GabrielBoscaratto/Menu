
# Restaurante Menu - Projeto Full Stack

Este projeto é uma aplicação de um menu de restaurante, desenvolvida utilizando Java Spring Boot para o back-end e React para o front-end. O sistema permite exibir o menu de um restaurante, trazendo os dados do menu em formato JSON via uma API RESTful.

## Tecnologias Utilizadas

### Front-end:
- **React**: Utilizado para criar a interface gráfica dinâmica e interativa.
- **Axios**: Usado para realizar requisições HTTP para a API.

### Back-end:
- **Java Spring Boot**: Framework usado para desenvolver a API RESTful.
- **Spring Boot Starter Web**: Para criar as APIs e lidar com requisições HTTP.
- **Spring Data JPA**: Para integrar com o banco de dados e realizar operações de persistência.
- **H2 Database**: Banco de dados em memória utilizado para armazenar os dados do menu.

## Funcionalidades

- **Exibição do Menu**: O menu do restaurante é exibido na interface gráfica com informações de nome, descrição e preço de cada item.
- **Integração com API**: A interface React consome dados em formato JSON da API RESTful, proporcionando uma experiência dinâmica.
- **CRUD**: Adição, remoção e atualização de itens do menu via API (opcional, dependendo de como você configurou).

## Como Executar o Projeto

### Pré-requisitos

- JDK 17 ou superior instalado.
- Node.js e npm instalados.
