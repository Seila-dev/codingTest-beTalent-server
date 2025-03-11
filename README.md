# API de Gerenciamento de Funcionários e Cargos

Esse backend foi desenvolvido com **Node.js**, **Express** e **Prisma**, para gerenciar funcionários e cargos, incluindo upload de arquivos e documentação interativa via **Swagger UI**.

## Índice

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura de Endpoints](#estrutura-de-endpoints)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Acessando a Documentação Swagger UI](#acessando-a-documentação-swagger-ui)
- [Contribuindo](#contribuindo)

## Descrição

Este backend oferece as seguintes funcionalidades principais:

- **Gestão de Funcionários**: Adicionar, atualizar, listar e excluir funcionários.
- **Gestão de Cargos**: Adicionar, atualizar, listar e excluir cargos.
- **Upload de Arquivos**: Funcionários podem ter imagens associadas (por exemplo, foto de perfil).
- **Documentação Interativa**: Swagger UI para explorar e testar a API.

A aplicação se conecta a um banco de dados **PostgreSQL** e usa o **Prisma** como ORM.

## Tecnologias Utilizadas

- **Node.js** (para o backend)
- **Express** (framework para construir APIs)
- **Prisma** (ORM para interagir com o banco de dados PostgreSQL)
- **Swagger UI** (para documentação interativa)
- **Multer** (para upload de arquivos)
- **PostgreSQL** (banco de dados)
- **Docker** (para rodar o PostgreSQL e o backend em containers)

## Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Seila-dev/codingTest-beTalent-server.git
   cd codingTest-beTalent-server

2. **Instale as dependências**:
    ```bash
    npm install
3. **Suba os containers com Docker Compose**: Rode o seguinte comando para subir o PostgreSQL e o backend:
    ```bash
    docker compose up
    ```
    Isso irá criar e iniciar os containers necessários para o backend e o banco de dados PostgreSQL.

4. **Verifique se os containers estão rodando**: Você pode verificar os containers com o comando:
    ```bash
    docker ps
    ```
    Isso deve listar o PostgreSQL ligado na porta 26257.
5. **Caso a porta 3000 do backend ainda não esteja ativa**: Você pode ativar ela com o comando:
    ```bash
    npm run dev
    ```

## Estrutura de Endpoints
Funcionários (Employees)

- POST /employees: Cria um novo funcionário (com upload de arquivo).
- GET /employees: Lista todos os funcionários.
- PUT /employees/:id: Atualiza os dados de um funcionário (com upload de arquivo).
- DELETE /employees/:id: Exclui um funcionário.

Cargos (Roles)

- POST /roles: Cria um novo cargo.
- GET /roles: Lista todos os cargos.
- PUT /roles/:id: Atualiza um cargo existente.
- DELETE /roles/:id: Exclui um cargo.

## Como Rodar o Projeto

1. Inicie o servidor: Se você seguiu os passos acima com o Docker Compose, o servidor já estará rodando automaticamente na porta 3000.

2. Acessando a API: Com o servidor em execução, você pode interagir com a API usando ferramentas como Postman ou diretamente pela linha de comando.

## Acessando a Documentação Swagger UI

A documentação da API está disponível no Swagger UI, que pode ser acessado em:
    
    http://localhost:3000/docs
    

Nessa interface, você pode explorar todos os endpoints, ver os parâmetros necessários e até testar as requisições diretamente.

## Contribuindo

Se você deseja contribuir para o projeto, siga os passos abaixo:

- Faça um fork deste repositório.
- Crie uma branch para sua feature (git checkout -b minha-feature).
- Faça commit das suas alterações (git commit -am 'Adicionando nova feature').
- Envie para o repositório remoto (git push origin minha-feature).
- Abra um pull request.