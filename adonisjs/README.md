Sistema hospitalar

Objetivo do sistema e registrar informacoes medicas sobre pacientes e exames realizados

Funcoes

- Cadastro de Medicos (nome, crm, cpf, email, senha) OBS: Esses podem logar no sistema
  - Criar, Buscar, Atualizar
- Cadastro de Especialidades (Demartologia, Acupuntura, Cardiologia, ...etc)
  - Criar, Buscar, Atualizar
- Cadastro de Exames (Eletro, Ultrassonografia) OBS: Todo exame possui uma especialidade
  - Filtro pela especialidade
  - Criar, Buscar, Atualizar
- Cadastro de Pacientes (nome, email, cpf, nascimento)
  - Criar, Buscar, Atualizar
- Cadastro de Procedimentos (Precisa da informacao do exame, medico, paciente e hora do procedimento)
  - Busca de procedimentos realizados para um paciente pelo cpf

Requisitos:

- Dados persistidos no banco de dados
- Todas as boas praticas de um projeto seguro e codigo limpo
- Arquitetura em camadas, dividido em modulos
- Validacoes em campos, inclusive logicos (ex: cpf e email) OBS: Criar solucao utilizando Zod
