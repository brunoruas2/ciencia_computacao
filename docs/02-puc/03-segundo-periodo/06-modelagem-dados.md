---
sidebar_position: 6
title: Modelagem de Dados
description: "" 
---

# Modelagem de Dados

:::info[Aula em Elaboração]
Infelizmente eu ainda não terminei esse material. Você pode aproveitar para ir vendo os outros conteúdos enquanto isso! 😜
:::

## Projeto de Banco de Dados

### Fundamentos de Banco de Dados

#### Abordagem de Arquivos x Banco de Dados

Podemos definir um **banco de dados** como:
> Uma coleção de dados relacionados, persistentes[^1] \[...\] que tem por objetivo atender uma comunidade de usuários.

[^1]: Ou seja, que continuam salvos mesmo depois do computador desligar.

Dessa feita, podemos ver que *antes* de modelar e projetar nosso banco, temos que ter em mentos o propósito de uso e sua real necessidade.

Outro conceito muito próximo é o de **Sistema Gerenciador de Banco de Dados (SGBD):**
> Um software que incorpora as funções de definições, recuperação e alteração de dados em um BD

Ou seja, **Banco de dados** é um conceito com foco no **conteúdo**. Enquanto, **SGBD** é um conceito com foco na **tecnologia** que vai manipular o conteúdo armazenado (ex: MySQL, MSSQL, Firebird e etc).

##### O Passado
Mas nem sempre existiu a abordagem de banco de dados. Antigamente, cada programa precisava ser responsável pelos próprios arquivos que persistiam as informações. 

O modo de persistir dados era com **enfoque de arquivos**. Onde meio que tudo era salvo em plain text ou algum formato de texto estruturado como um `csv` da vida e os sistemas tinham que trabalhar com isso.

Desse modo, era praticamente impossível intercambiar informações entre aplicações porque não se tinha um template geral para consulta e persistência dos dados.

Isso gerava a necessidade de cada aplicação ter sua própria base (mesmo que a informação fosse comum à vários setores). Agora, imagine que existam 3 tabelas `produto` e que o valor de venda dele foi alterado. Existe uma chance real que algum time simplesmente esqueça de atualizar em uma das réplicas o que poderia causa graves prejuízos à empresa.

#### Tipos de Linguagens e Tipos de Profissionais

##### Linguagens DDL E DML

Já vimos que um banco de dados é relacionado ao conteúdo que será persistido para consulta posterior. Dessa feita, como tudo em tecnologia, precisamos de uma `linguagem` para interagir com o SGBD afim de criarmos as definições dos dados e manipular o que tivermos salvo.

Existem 2 tipos de linguagens que usamos para essa tarefa:
- **DDL (Data Definition Language)**: Usada para criar tabelas, criar visões, definir relações entre elas e as características de cada valor.
- **DML (Data Manipulation Language)**: Muito mais usada na prática diária. É responsável por manipular (select, insert, delete, update) os dados persistidos. Pode ser de 2 tipos.
	- **Procedural**: Onde o user define qual dado será acessado e como chegar nele. Mais usados em triggers e rotinas automáticas.
	- **Não Procedural**: Onde define apenas qual dado acessar.

:::note[Comentário]
Ao longo dos estudos vamos nos deparar com um conceito chamado `stored procedure` e é exatamente isso que acabamos de ver acima.
:::

Para aprofundar um pouco mais, vamos ver esses 2 códigos de consultas.

```sql
/* DML Procedural */
BEGIN
  DECLARE @EmployeeName VARCHAR(50);
  DECLARE @EmployeeId INT = 101;
  
  SELECT @EmployeeName = Name
  FROM Employees
  WHERE EmployeeID = @EmployeeId;
  
  PRINT @EmployeeName;
END;
```

```sql
/* DML Não Procedural */
SELECT Name
FROM Employees
WHERE EmployeeID = 101;
```

Podemos ver que na DML não procedural, deixamos a cargo do motor da linguagem julgar qual melhor rota para acessar as informações que solicitamos[^2].

[^2]: Na esperança que ele sempre tome uma decisão otimizada de como acessar o dado. Mas fique tranquilo, quase sempre ele escolhe o melhor caminho.

##### Principais atuantes em um projeto de BD

Como papéis principais em um projeto de banco de dados, podemos destacar:
- Administrador de Dados
	- Arquiteta a estrutura de informação da empresa
	- Administra a descrição da base de dados[^3]
	- Define padrões de codificação (template de nome de tabela, campos e etc)
	- Profundo conhecedor das regras de negócio
- Administrador de Banco de Dados
	- Foco na otimização e performance
	- Gerencia o SGBD
	- É responsável pela estrutura de armazenamento (migrations, carga de dados e etc)
- Analista de Sistemas/Engenheiro de Software/Desenvolvedor
	- Constrói soluções que consomem o SGBD
	- Deve procurar otimizar suas `queries` de modo a sempre custar pouco para o processamento do SGBD
- Usuário Final
	- Podem ser tanto no nível operacional quanto gerencial

[^3]: Também conhecido como dicionário de dados.

#### Níveis do SGBD e Etapas do Projeto de BD

### Modelagem de Entidades e Relacionamentos (MER)

#### Modelagem de Entidades e Atributos

#### Modelagem de Relacionamentos

#### Modelo de Entidades e Relacionamentos Estendido

#### Modelagem de Supertipos e Subtipos

## Projeto de Banco de Dados Relacionais e Não Relacionais

### Modelo Relacional de Banco de Dados

#### Conceitos do Modelo Relacional e Chave Primária

#### Integridade Referencial e Chave Estrangeira

### Mapeamento do Modelo de Entidades e Relacionamentos para Modelo Relacional

#### Mapeamento de Entidades e Atributos

#### Mapeamento de Relacionamentos

### Normalização de Banco de Dados

#### Primeira e Segunda Formas Normais

#### Terceira Forma Normal

### Banco de Dados Não-Relacionais

#### Database NoSQL

### Segurança

#### Segurança de Banco de Dados

## Bibliografia
:::note[Comentário]
Me causou muita estranheza o curso ter apenas um livro como referência bibliográfica. Mas como se trata de um tecnólogo, acho que podemos relevar. Agora nos cabe ver nesse livro quais foram as outras fontes usadas.
:::

- ELMASRI, Ramez; NAVATHE, Shamkant B. **Sistemas de banco de dados.** 7 ed. São Paulo: Person, 2018. 

