# Projeto_Wayne

# Aplicação Web de Segurança para as Indústrias Wayne

## Descrição
A aplicação web de segurança foi desenvolvida para as Indústrias Wayne com o objetivo de gerenciar dispositivos de segurança, controlar o acesso de usuários e fornecer uma dashboard de visualização de dados. O sistema é composto por um **frontend** (HTML, CSS, JavaScript) e um **backend** (Node.js), integrados para fornecer uma experiência de usuário eficiente e segura.

---

## Requisitos Implementados
A aplicação atende aos seguintes requisitos:

1. **Sistema de Gerenciamento de Segurança:**
   - Controle de acesso com autenticação e autorização para diferentes tipos de usuários (funcionário, gerente, administrador).
   - Interface de login para acesso seguro.

2. **Gerenciamento de Recursos:**
   - Adição, edição e remoção de dispositivos (equipamentos, veículos, dispositivos de segurança).
   - Visualização de dispositivos para funcionários e gerentes.

3. **Dashboard de Visualização:**
   - Painel de controle com dados relevantes sobre segurança e recursos.
   - Gráficos e métricas para análise rápida.

4. **Integração Frontend-Backend:**
   - Comunicação eficaz entre o frontend e o backend via API REST.
   - Armazenamento e manipulação de dados no backend.

---

## Estrutura do Projeto

### Frontend
O frontend foi desenvolvido com **HTML**, **CSS** e **JavaScript**, utilizando a biblioteca **Chart.js** para gráficos. A estrutura é organizada em páginas separadas para cada tipo de usuário:

- **Login (`gerenciamento_home.html`):**
  - Interface de login com validação de usuário e senha.
  - Redirecionamento para o painel correspondente (funcionário, gerente, administrador).

- **Painel do Funcionário (`painel_funcionario.html`):**
  - Visualização de dispositivos (somente leitura).

- **Painel do Gerente (`painel_gerente.html`):**
  - Visualização e edição de dispositivos.
  - Redirecionamento para o painel do dashboard.

- **Painel do Administrador (`painel_admin.html`):**
  - Adição, edição e remoção de dispositivos.
  - Redirecionamento para o painel do dashboard.

- **Dashboard (`dashboard.html`):**
  - Exibição de métricas e gráficos sobre segurança e recursos.

### Backend
O backend foi desenvolvido em **Node.js** com **Express** e utiliza um arquivo `db.json` para simular um banco de dados. As principais funcionalidades incluem:

- **Rotas da API:**
  - `GET /dispositivos`: Retorna a lista de dispositivos.
  - `POST /dispositivos`: Adiciona um novo dispositivo.
  - `PUT /dispositivos/:id`: Atualiza um dispositivo existente.
  - `DELETE /dispositivos/:id`: Remove um dispositivo.

- **Armazenamento de Dados:**
  - Os dados são armazenados em um arquivo `db.json`, que simula um banco de dados simples.

---

## Integração Frontend-Backend

A integração entre o frontend e o backend é feita através de requisições HTTP (GET, POST, PUT, DELETE) para a API REST. Aqui estão os principais pontos de integração:

1. **Login:**
   - O frontend valida as credenciais do usuário e redireciona para o painel correspondente.

2. **Gerenciamento de Dispositivos:**
   - O frontend faz requisições à API para:
     - Obter a lista de dispositivos (`GET /dispositivos`).
     - Adicionar um novo dispositivo (`POST /dispositivos`).
     - Editar um dispositivo (`PUT /dispositivos/:id`).
     - Remover um dispositivo (`DELETE /dispositivos/:id`).

3. **Dashboard:**
   - O frontend obtém os dados dos dispositivos (`GET /dispositivos`) e os exibe em gráficos e métricas.

---

## Usabilidade

### Pontos Fortes:
1. **Interface Intuitiva:**
   - A interface é simples e fácil de usar, com navegação clara entre as páginas.
   - Botões e formulários são bem destacados.

2. **Responsividade:**
   - O layout se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.

3. **Feedback ao Usuário:**
   - Mensagens de erro e confirmação são exibidas para informar o usuário sobre o status das operações.

4. **Segurança:**
   - O controle de acesso impede que usuários não autorizados acessem áreas restritas.

## Implementação dos Requisitos

### 1. Sistema de Gerenciamento de Segurança
- **Login:**
  - O frontend valida as credenciais e redireciona para o painel correspondente.
  - O backend não foi implementado para autenticação.

### 2. Gerenciamento de Recursos
- **Funcionário:**
  - Pode visualizar dispositivos (`GET /dispositivos`).
- **Gerente:**
  - Pode visualizar e editar dispositivos (`PUT /dispositivos/:id`).
- **Administrador:**
  - Pode adicionar, editar e remover dispositivos (`POST /dispositivos`, `PUT /dispositivos/:id`, `DELETE /dispositivos/:id`).

### 3. Dashboard de Visualização
- **Total de Dispositivos:**
  - Exibe o número total de dispositivos cadastrados.
- **Tipos de Dispositivos:**
  - Gráfico de pizza mostra a distribuição dos tipos de dispositivos.
- **Atividades Recentes:**
  - Lista simulada de atividades.
- **Status de Segurança:**
  - Exibe um status geral de segurança.

---

## Conclusão

A aplicação web de segurança para as Indústrias Wayne atende aos requisitos propostos, oferecendo uma solução completa para o gerenciamento de dispositivos e a visualização de dados. A integração entre frontend e backend foi implementada de forma eficaz, garantindo uma comunicação fluida e segura.

---

## Anexos

### Código Fonte
- **Frontend:**
  - `gerenciamento_home.html`
  - `painel_funcionario.html`
  - `painel_gerente.html`
  - `painel_administrador.html`
  - `dashboard.html`
  - `estiloswayne.css`
- **Backend:**
  - `server.js`
  - `db.json`
  - `package-lock.json`
  - **node_modules**

### Bibliotecas Utilizadas
- **Chart.js** para gráficos.
- **Express** e **CORS** no backend.
