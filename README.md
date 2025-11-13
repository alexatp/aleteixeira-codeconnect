# CodeConnect

Uma plataforma moderna de blog desenvolvida com Next.js, focada em compartilhamento de conhecimento técnico e experiências de desenvolvimento. O projeto implementa conceitos avançados de Server-Side Rendering (SSR) e gerenciamento de estado com banco de dados.

## Visão Geral

O CodeConnect é uma aplicação web full-stack que permite a criação, visualização e busca de posts técnicos. A plataforma oferece uma experiência completa com paginação inteligente, sistema de busca em tempo real e renderização otimizada do lado do servidor.

## Principais Funcionalidades

- **Sistema de Posts Completo**: Criação, listagem e visualização detalhada de posts
- **Busca Avançada**: Sistema de busca que funciona em títulos e conteúdo dos posts
- **Paginação Inteligente**: Navegação eficiente entre páginas com controle de estado
- **Renderização de Markdown**: Processamento e exibição de conteúdo Markdown em HTML
- **Sistema de Autores**: Gerenciamento de usuários e associação de posts
- **Logs Estruturados**: Sistema de logging avançado para monitoramento e debugging
- **Interface Responsiva**: Design adaptativo com CSS Modules

## Tecnologias Utilizadas

### Frontend
- **Next.js 14**: Framework React com App Router e Server Components
- **React 18**: Biblioteca para construção de interfaces de usuário
- **CSS Modules**: Estilização modular e escopada

### Backend e Banco de Dados
- **Prisma ORM**: Modelagem e acesso ao banco de dados com type safety
- **PostgreSQL**: Banco de dados relacional para persistência
- **Docker Compose**: Orquestração de containers para desenvolvimento

### Bibliotecas e Ferramentas
- **Remark**: Processamento de Markdown para HTML
- **Winston**: Sistema de logging estruturado
- **Prisma Client**: Cliente de banco de dados auto-gerado

## Estrutura do Projeto

```
codeconect-fullstack/
├── prisma/
│   ├── schema.prisma      # Modelagem do banco de dados
│   ├── seed.js           # Dados iniciais do banco
│   └── migrations/       # Histórico de migrações
├── src/
│   ├── app/              # App Router do Next.js
│   │   ├── page.js       # Página inicial com listagem
│   │   ├── layout.js     # Layout principal
│   │   └── posts/[slug]/ # Páginas dinâmicas de posts
│   └── components/       # Componentes reutilizáveis
│       ├── CardPost/     # Cartão de preview do post
│       ├── Avatar/       # Avatar do autor
│       ├── SearchForm/   # Formulário de busca
│       └── ...
├── docker-compose.yaml   # Configuração do PostgreSQL
└── package.json         # Dependências e scripts
```

## Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd codeconect-fullstack
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   ```bash
   # Inicie o PostgreSQL via Docker
   docker-compose up -d
   
   # Execute as migrações do Prisma
   npx prisma migrate dev
   
   # Popule o banco com dados de exemplo
   npx prisma db seed
   ```

4. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   POSTGRES_PRISMA_URL="postgresql://postgres:password@localhost:5432/codeconnect_dev"
   POSTGRES_URL_NON_POOLING="postgresql://postgres:password@localhost:5432/codeconnect_dev"
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

6. **Acesse a aplicação**
   
   Abra seu navegador e acesse: `http://localhost:3000`

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm start`: Inicia o servidor de produção
- `npm run lint`: Executa a verificação de código

## Funcionalidades Detalhadas

### Sistema de Posts
- Listagem paginada com 6 posts por página
- Ordenação por data de criação (mais recentes primeiro)
- Visualização individual com rendering de Markdown
- Associação com autores e avatares

### Sistema de Busca
- Busca case-insensitive nos títulos dos posts
- Integração com a paginação
- Persistência do termo de busca na navegação

### Gerenciamento de Estado
- Uso do App Router do Next.js para roteamento
- Server Components para performance otimizada
- Estado de busca e paginação via URL parameters

### Banco de Dados
O projeto utiliza um schema Prisma com duas entidades principais:
- **User**: Representa os autores dos posts
- **Post**: Contém o conteúdo, metadados e referência ao autor

## Desenvolvimento e Contribuição

### Estrutura de Componentes
Todos os componentes seguem o padrão:
- Arquivo `index.jsx` com a lógica do componente
- Arquivo `[nome].module.css` com estilos específicos
- Uso de CSS Modules para isolamento de estilos

### Sistema de Logging
O projeto implementa logging estruturado com Winston:
- Logs de erro para debugging
- Logs informativos para monitoramento
- Diferentes níveis de log configuráveis

### Boas Práticas Implementadas
- Componentes Server e Client separados
- Tratamento de erros em todas as operações de banco
- Validação de dados de entrada
- CSS Modules para evitar conflitos de estilo
- Estrutura modular e reutilizável

## Deployment

Para deployment em produção, o projeto inclui:
- Script de build que executa migrações automaticamente
- Geração do Prisma Client
- Execução de seeds para dados iniciais
- Otimizações do Next.js para performance

## Recursos Adicionais

- Interface responsiva que funciona em desktop e mobile
- Sistema de navegação intuitivo
- Performance otimizada com Server-Side Rendering
- Tratamento robusto de erros e estados de loading
