# API Puppies

API para cadastro e consulta de animais disponíveis para adoção.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Knex.js**: Query builder SQL para Node.js.
- **Express**: Framework web para Node.js.

## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

- **src/**: Contém o código-fonte da aplicação.
  - **controllers/**: Controladores que gerenciam as requisições e respostas.
  - **models/**: Definições das entidades e interação com o banco de dados.
  - **routes/**: Definição das rotas da API.
  - **database/**: Configurações e migrações do banco de dados.

## Instalação e Uso

Para rodar o projeto localmente, siga os seguintes passos:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Caarlos7x/api-puppies.git
   cd api-puppies

2. **Instale as dependências:**
   ```bash
   npm install

3. **Configure o banco de dados**:

  - Certifique-se de ter um banco de dados PostgreSQL rodando.
  - Configure as credenciais de acesso no arquivo knexfile.ts.

4. **Execute as migrações**:
   ```bash
   npx knex migrate:latest

5. **Inicie o servidor**:
   ```bash
   npm run dev

6. **Acesse a API**:
   *A API estará disponível em http://localhost:3000.*

## Endpoints

A API possui os seguintes endpoints:

- GET /animals: Retorna a lista de animais disponíveis para adoção.
- POST /animals: Adiciona um novo animal para adoção.
- GET /animals/:id: Retorna os detalhes de um animal específico.
- PUT /animals/:id: Atualiza as informações de um animal.
- DELETE /animals/:id: Remove um animal do cadastro.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para sugerir melhorias ou corrigir bugs.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes
