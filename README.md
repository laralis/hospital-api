# Sistema Hospitalar

Sistema para registrar informações médicas de pacientes e exames realizados, facilitando o gerenciamento de médicos, especialidades e procedimentos.

## Funcionalidades

- **Cadastro de Médicos**: Dados como nome, CRM, CPF, e-mail e senha.
- **Cadastro de Especialidades**: Exemplo: Dermatologia, Cardiologia.
- **Cadastro de Exames**: Exames vinculados a especialidades.
- **Cadastro de Pacientes**: Nome, e-mail, CPF e data de nascimento.
- **Cadastro de Procedimentos**: Relaciona exame, médico, paciente e hora.

## Requisitos

- Persistência de dados em banco de dados.
- Na versão do **express** as validações de campos foram feitas usando **Zod** e o gerenciamento do banco de dados foi feito usando **Prisma**.

## Estrutura do Projeto

O projeto possui três versões:

- **`adonis`**: Implementação com **AdonisJS**.
- **`adonis`**: Implementação com **AdonisJs** utilizando layer architecture.
- **`express`**: Implementação com **ExpressJS**.

## Tecnologias

- **AdonisJS** / **ExpressJS**
- **Banco de Dados**: MySQL
- **Zod**: Validação de dados
- **Prisma**: ORM para gerenciar o banco de dados.
