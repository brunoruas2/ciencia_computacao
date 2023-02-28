<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark-reasonable.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

## Assuntos

- [**Conceitos e Processos de Software**](#conceitos-e-processos-de-software)
    - [Definições](#definicoes)
    - [Modelos e Princípios de Processo de Software](#modelos-e-principios-de-processo-de-software)
    - [Processos Ágeis](#processos-ageis)
    - [Processos Prescritivos](#processos-prescritivos)
    - [Quando usar cada Processo?](#quando-usar-cada-processo)
    - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos Não Funcionais](#requisitos-nao-funcionais)
- [**Atividades e Artefatos da Engenharia de Software**](#atividades-e-artefatos-da-engenharia-de-software)
    - [Atividades Técnicas](#atividades-tecnicas)
    - [Atividades Gerenciais](#atividades-gerenciais)
    - [Testes de Software](#testes-de-software)
    - [Artefatos e Templates](#artefatos-e-templates)
    - [Desenhando Processos de Software](#desenhando-processos-de-software)
- **Bibliografia**

## Conceitos e Processos de Software

A engenharia de software é subárea da Ciência da Computação que lida com as atividades de desenvolvimento, operação e evolução de software. Esse campo surgiu com a crise do software de 1968.

### Definições
Agora vamos aprender os conceitos usados ao longo do trabalho de engenharia de software:


- Programa - Conjunto de instruções em uma linguagem de programação.
- Software - Programa + Estrutura de Dados + Documentação. 
- Sistema - Conjunto de elementos interdependentes de Softwares, Hardware e Pessoas. Podem ser intensivos em qualquer umas dessas 3 partes.


### Modelos e Princípios de Processo de Software
O processo de Software é um conjunto de etapas usadas para a produção de soluções de software. Podemos elencar dois conceitos importantes que compõe o processo de software:


- Descrição de Processos:
    - Atividades - Lista de etapas necessárias.
    - Produtos ou Artefatos - Produto gerado pelas atividades.
    - Papéis - Quem executa cada atividade.
    - Condições - As requisições pré e pós execução das atividades.


- Modelos de Ciclo de Vida:
    - Modelo Sequencial Linear: Análise/Projeto/Codificação/Teste.
    - Modelo em Cascata: Definição/Projeto/Implementação/Integração/Manutenção.
    - Modelo Incremental: O projeto é quebrado em incrementos e cada incremento possui um modelo sequencial linear ou em cascata.
    - Modelo Incremental Evolutivo: Esboço/loop{Especificação/Desenvolvimento/Validação} até que se tenha a versão final.
    - Modelo Espiral: loop{Planejamento/Modelagem/Construção/Entrega/Feedback} para cada incremento novo ao software.
    - Modelo Iterativo: É o modelo Sequencial Linear mas com possibilidade de retorno para as etapas anteriores até que se esteja aprovado pelo cliente.
    - Modelo V: Durante todas as etapas de processo de software nós já vamos definindo os testes que serão usados para a aprovação do produto. 
		



Hoje em dia, temos dois modelos mais usados. A modelo incremental foca em entregar um pedaço de cada vez e o modelo iterativo permite entregar versões mais simples do produto e ir aprimorando elas. O modelo atual mais usado é justamente o 	**Modelo incremental iterativo**.

Agora que aprendemos o conceito de modelo de processo de software, vamos analisar algumas abordagens de elaboração de software. Podemos dizer que existem 3 grupos principais de processos de gestão de software: 1) Processos ágeis; 2) Processos Prescritivos e 3) Processos Enxutos (lean process).

**Comentário:** No material do curso só foram abordadas os dois primeiros processos.

### Processos Ágeis
Os processos ágeis nasceram no final do século XX. Seguem o modelo incremental e iterativo de desenvolvimento. Os incrementos são pequenos e sucessivos (2 a 3 semanas). O cliente está constantemente em contato com o produto gerado no ciclo. A documentação é reduzida porque há muita comunicação interpessoal.

Existem várias metodologias mas podemos elencar alguns:


- eXtreme Programming (XP)
- Scrum
- Dynamic System Development (DSDM)
- Feature Driven Development (FDD)
- Crystal Families


Hoje em dia o método mais usado é o Scrum. A novidade dele é que a abordagem do desenvolvimento é empírica e permite a evolução dos requisitos do processo ao longo do processo.

O Scrum é divido em apenas 3 etapas: 1) Planejamento inicial do projeto; 2) Loop de desenvolvimento e feedback (chamado de sprint) e 3) Entrega ao cliente.

As equipes do scrum são pequenas, multidisciplinares, de liderança diluída e trabalham com um foco de melhorias pequenas em um prazo mais curto (2 ou 4 semanas). Existe a figura do facilitador do processo chamado Scrum Master.

Os requisitos do software são mantidos no artefato chamado 	**Backlog** e serve de norte pada os times de desenvolvimento.

Existem 3 papeis no processo de gestão do Scrum:


- Product Owner (PO) - O cliente ou alguém representante da vontade dele. Podemos pensar no PO como a ponte entre a empresa-cliente e a empresa-desenvolvedora.
- Scrum Master - É o facilitador do time de desenvolvimento. Atua como ponte entre o time de desenvolvimento e o PO. Atentemos para o fato do PO não participar do processo de desenvolvimento técnico.
- Equipe de Desenvolvimento - É auto-organizada e responsável pela produção dos algoritmos que comporão o software.

Agora veremos de maneira organizada os artefatos produzidos no processo de Scrum:

- Backlog do Produto - Lista de características necessárias ao software atreladas a um grau de importância. Cada característica é fruto de uma 	**história de usuário** que é composta de 3 informações (quem?; o que? e por quê?).
- Backlog da Sprint - É um subconjunto das características elencadas do backlog do produto. Esses itens serão o foco da sprint (2 a 4 semanas).
- Incremento do Produto - É o resultado do trabalho realizado na sprint.


Além dos papéis e dos artefatos, existem as cerimônias do modelo Scrum:


- Reunião de planejamento da Sprint - Decide quais características do Backlog do projeto serão objeto de trabalho pelo time de desenvolvimento.
- Daily - Acompanhamento a cada 24 horas do esforço do time de desenvolvimento para o alcance do planejamento da sprint. Algo rápido (15 min).
- Revisão da Sprint - Avaliação pelo PO do cumprimento do backlog da sprint. Foco no produto.
- Retrospectiva da Sprint - Melhoria do processo por meio de feedback de todas as partes envolvidas no processo de sprint. Foco no processo.


### Processos Prescritivos
Antes do predomínio das metodologias ágeis, os processos de controle de produção de software eram orientados por processos prescritivos, também são chamados de processos dirigidos por planos. A ideia é primeiro planejar tudo e ir visualizando o caminhar dos trabalhos em termos do planejamento inicial. O Rational Unified Process (RUP) é o mais famoso desses modelos.

O RUP hoje pertence à IBM e possui algumas características principais:


- Possui vários princípios dos quais podemos citar:
  - Foco nos riscos principais
  - Garantia do valor
  - Permitir mudanças
  - Definição da arquitetura da solução o mais breve possível
  - Construção da solução em componentes
- Baseado em componentes/etapas planejadas
    - Disciplinas (o que deve ser feito): <br> Requisitos/Análise/Projeto/Implementação/Teste
    - Fases (as etapas de cumprimento das disciplinas): <br> Concepção/Elaboração/Construção/Transição
- Possui linguagem padronizada: Unified Modeling Language (UML)
- É dirigido por caso de uso
- Funciona por modelo iterativo-incremental


Os benefícios dos processos prescritivos ainda são vistos nas maiores empresas, principalmente relacionados ao uso da UML para definição de etapas necessárias em interações e processos. Abaixo temos um exemplo retirado do material do curso. Mais informações sobre a UML podem ser encontradas nesse [link](https://www.devmedia.com.br/modelagem-de-sistemas-atraves-de-uml-uma-visao-geral/27913).

---
Especificação do caso de uso Matricular em disciplinas do sistema de controle acadêmico. Fonte: A
especificação do caso de uso foi adaptada do livro BEZERRA, Eduardo. Princípios de análise e projeto de sistemas com UML. Rio de Janeiro: Campus, 2003.

Matricular em disciplinas

Sumário: O aluno usa o sistema para se matricular em disciplinas.

Ator primário: aluno

Ator secundário: Sistema Financeiro

Pré-condições: o aluno está identificado pelo sistema

Fluxo Principal:

1. O aluno solicita a matrícula em disciplinas;
2. O sistema apresenta a lista de disciplinas disponíveis para o semestre corrente para as quais o alunos possui pré-requisitos;
3. O aluno seleciona as disciplinas desejadas e solicita a matrícula;
4. O sistema aloca o aluno em turmas de ofertas das disciplinas desejadas e informa ao aluno a turma alocada para cada disciplina bem como o professor, os horários e dias da semana e as salas de aula;
5. O aluno confirma as alocações feitas;
6. O sistema realiza a matrícula e envia os dados para o Sistema Financeiro;
7. O caso de uso termina.

Fluxo Alternativo (4): Inclusão em lista de espera

a. Se não há vaga ou oferta disponível para alguma disciplina selecionada pelo aluno, o sistema informa o fato ao aluno e fornece a opção de inserir o aluno em uma lista de espera para aquela disciplina;

b. Se o aluno aceitar o sistema insere o aluno na lista de espera desejada e apresenta a posição do aluno na lista. O caso de uso retorna ao passo 4;

c. Se o aluno não aceitar o caso de uso prossegue a partir do passo 4.


Fluxo de Exceção (4): Violação de regra de negócio relativa quantidade máxima de créditos
a) Se o aluno já atingiu a quantidade máxima de créditos em que pode se matricular por semestre, o sistema informa a quantidade de disciplinas que ele pode se matricular e o caso de uso retorna ao passo 2;

Pós-Condições: O aluno foi inscrito em turmas das disciplinas selecionadas ou foi acrescentado a
listas de esperas das disciplinas selecionadas.

---

Ao final de cada fase são superados os marcos principais do RUP. Cada marco significa o maior risco relacionado àquela etapa. Na fase de concepção é o marco de objetivo de ciclo de vida. Na fase de elaboração é o marco que arquitetura do software. Na fase da construção é o marco da capacidade operacional inicial e, por fim, no marco da transição é o marco da entrega do produto.

Existem problemas nos métodos prescritivos, os principais são:


- Forte apego à hierarquia
- Segmentação elevada do processo de construção
- Em situações críticas, acabam dando lugar a processos ágeis


### Quando usar cada Processo?
Na vida real, podemos encontrar vários modelos misturados no dia a dia das empresas. As práticas em cada empresa são orgânicas e fortemente baseadas na cultura organização local.

Podemos sempre analisar os modelos como uma matriz de 2 eixos: Cascata x Iterativo e Disciplinado x Flexível. Aqui nós só analisamos os processos iterativos. Cabe a você saber se precisa de um processos mais formal como o RUP ou algo mais rápido e flexível como o SCRUM.
### Requisitos
Podem ser divididos em 2 grupos: requisitos de cliente e requisitos do software. A primeira classe é focada nas necessidades dos usuários [^1] que utilização o sistema (é o problema a ser resolvido). A segunda categoria são as características que o produto deve ter para cumpri os requisitos dos clientes (são as ferramentas que o sistema terá para interagir com os users).

[^1]:Por meio das histórias de usuários ou dos casos de uso.

Os requisitos de software podem ser divididos em funcionais e não funcionais. Essa divisão será abordada de maneira mais detalhada abaixo.

### Requisitos Funcionais

Os requisitos funcionais são as características que o software deve ter para resolver os problemas elencados como objetivos do sistema proposto. São definidos pelos stakeholders (user, clientes, especialistas e investidores). No SCRUM eles estão no backlog do projeto e no RUP está num documento específico para isso.

É uma lista de exposições breves das funcionalidades que o software fará e como ele se comportará em relação a alguma interação dos usuários. Atente para o fato que os requisitos funcionais são sempre relacionados a algum usuário e não à características técnicas do sistema.

### Requisitos Não Funcionais

São as descrições das normas e padrões do produto de software. É aqui que definimos a linguagem de programação, o ambiente, os critérios de segurança, banco de dados, disponibilidade do produto, desempenho e etc.

Um requisito não funcional deve sempre citar um critério de aceitação quantificável. Desse modo, podemos realizar testes objetivos na hora de avaliar se o desenvolvimento da feature foi bem sucedido na iteração.

Podemos elencar alguns tipos de requisito não funcional:

- Desempenho
- Disponibilidade
- Portabilidade
- Usabilidade
- Capacidade e Degradação
- Manutenibilidade


Outros requisitos não funcionais são relacionados ao processo de desenvolvimento. Como por exemplo:

- Restrição da equipe desenvolvedora
- Qual processo de software deve ser usada
- Qual documentação deve ser criada


Além dessas duas classificações, podemos ter restrições relacionadas ao projeto de software:

- Qual SGBD deve ser usado
- Plataforma de disponibilidade (web ou não)
- Qual linguagem de programação usada
- Qual o SO das plataformas
- Existência de sistema legado


Todos os requisitos não funcionais estarão no backlog da sprint através da aceitação do incremento pelo cliente e no RUP existe uma documentação específica para isso.

## Atividades e Artefatos da Engenharia de Software

O processo de produção de software é divido em atividades com seus respectivos responsáveis e os artefatos criados a cada etapa finalizada.

As atividades são dividas em técnicas, gerenciais, testes e de apoio[^2]. Essas atividades são as que compõe toda a gestão da engenharia de software.

[^2]:Não focaremos nessa parte mas são as atividades de RH, administrativo e etc.


### Atividades Técnicas
Dentro das atividades técnicas nós temos a 	**engenharia de requisitos**, 	**design/projeto de software**, 	**implementação/codificação**, 	**testes** e 	**aceitação do cliente**.

Podemos elencar as seguintes atividades técnicas necessárias ao bom processo de engenharia de requisitos:


- Levantamento de Requisitos (Elicitação):


	- Entrevistas
	- Observação
	- Leitura de documentação


- Análise dos Requisitos:


	- Análise das lacunas
	- Modelagem gráfica
	- Revisão das descrições


- Especificação dos Requisitos:


	- Descrição sem ambiguidades
	- Linguagem natural, controlada ou específica


- Validação dos Requisitos:


	- Revisão de tudo
	- Prototipagem
	- Notações complexas podem dificultar entendimento do cliente
	- Validação por parte do cliente


Agora vamos ver as atividades de Projeto (design) de Software:


- Ponderação das alternativas de soluções
- Escolha da solução que será implementada
- Detalhamento da solução escolhida (elaboração do projeto):


	- Arquitetura do Software: <br>
		Alto nível de abstração. Foco nos requisitos não funcionais. Representação das partes gerais da solução.
	- Projeto Detalhado: <br>
		Baixa abstração. Definição dos objetos e das interações. Foco nos requisitos funcionais. Algoritmos e estruturas de dados.


Uma vez que temos os requisitos elencados e o projeto definido, entramos na etapa de implementação ou codificação.

Implementados os algoritmos, temos a etapa de testes de software para validar os requisitos e garantir que os objetivos sejam alcançados. Podem ser manuais ou automatizados.

Por fim, temos a aprovação do cliente no sentido de cumprimento das funcionalidades esperadas e da qualidade exigida da solução.

Após a aprovação, existe a etapa de manutenção de software que é composta da repetição de todas as etapas expostas acima. Cada manutenção ou aprimoramento passa pelas etapas descritas desde a análise de requisito até a aprovação.

##### Medidas de Software

São abordagens de medição e definição de metas para o cumprimento das etapas programadas para alcance dos objetivos da solução contratada.

### Atividades Gerenciais
São as atividades que atuam no controle da complexidade da solução desenvolvida e podem ser dividas em 	**gestão de configuração**, 	**gestão de projeto**, 	**gestão de requisitos** e 	**gestão de processos** e, além dessas, possuem atividades afins como gestão da qualidade e estimativas de software.

A gestão de configuração ou gestão de versões é a atividade que cuida da manutenção e organização dos arquivos produzidos durante todo o processo de software. É a atividade que controla as atualizações dos programas e mantém a memória de todas as etapas anteriores.

A gerência de projeto de software é a atividade que controle a dinâmica de tempo, pessoas, custos envolvido no processo de desenvolvimento.

A gerência de requisitos é a atividade de controle das necessidades de mudança no escopo do projeto bem como controla as mudanças na mudança da necessidade do cliente a respeito da mudança de requisitos. Também atua na priorização dos requisitos para a definição dos focos de trabalho. Outra atribuição relacionada é o controle da rastreabilidade dos requisitos pois todas as etapas de elaboração devem ser relacionadas a algum requisito que pertença ao escopo solicitado pelo cliente.

A gestão de Processos é a atividade de definição e melhoria do processo de gestão de software de acordo com as boas práticas, dos modelos de capacitação e maturidade como (CMMI e MPS.BR).

A gestão da qualidade é a atividade que avalia as várias interfaces de dinâmicas que impactam no resultado final do produto de software.

A estimativa de software é a atividade de gerar previsões com base na história da empresa de desenvolvimento afim de melhorar a alocação dos recursos para cumprimento das etapas previstas no início do processo de planejamento.

### Testes de Software
O objetivo dos testes é identificar os problemas da solução desenvolvida mas, como tudo na vida, existem restrições a quantidade e qualidade de testes possíveis de serem feitos uma vez que existem custos associados a essa atividade.

Diante das restrições impostas pela realidade e da complexidade do processo de desenvolvimento, é impossível, não importa o dimensionamento do esforço, garantir uma aplicação livre de erros. O foco dessa atividade é garantir que, ao dado nível de confiança requerido, que o software entregará as capacidades requeridas no projeto.

Os testes são necessários para garantir o cumprimento dos requisitos funcionais e não funcionais e podem ser divididos em dois tipos:


- Testes Funcionais/Caixa Preta - Baseados no ponto de vista do usuário do software.
- Testes Estruturais/Caixa Branca - Ponto de vista de quem desenvolveu o software por meio de inputs e avaliação de outputs.


Uma boa maneira de realizar os testes funcionais é reproduzir as situações listadas nas histórias dos usuários.

Uma 	**Plano de Testes** é o documento que indica o conjunto de informações relacionadas ao teste realizado, tais como:


- Testes de desempenho
- Testes funcionais da história de usuário x
- Teste de responsividade
- Teste de campos de formulários
- Teste de navegabilidade ou links
- Teste de ponta a ponta


No teste ponta a ponta passamos por todas as principais características e funcionalidades do produto que desenvolvimento para cumprimento dos requisitos.

Um plano de teste deve conter os casos de testes que, por sua vez, devem conter as seguintes informações:


- Objetivo
- Valores de entrada
- Valores de saída esperada
- Valores de saída real
- Registro de execução (falha ou sucesso)


### Artefatos e Templates

#### Artefatos

Os 	**artefatos** são um dos produtos que as atividades técnicas e gerencias produzem em cada ciclo de trabalho e podem ser usados nas etapas posteriores da execução do projeto. Existem vários tipos, vamos elencar alguns:


- Artefatos do processo de desenvolvimento:


- Backlog do produto[^3]
- Diagramas de casos de usados
- Descrição de casos de uso
- Documento de especificação de requisitos <br>
Descreve os requisitos baseados em casos de uso ou outra forma de descrição.

[^3]:Nós já sabemos o que é.

- Artefatos do processe de gerenciamento:


- Documento de arquitetura de software <br>
O nome já denuncia mas é importante porque contém vários diagramas do desenho da aplicação e como a solução foi construída em partes funcionais.
- Plano de Teste de software
- Casos de testes
- Lista de bugs
- Plano de projeto
- Matriz de rastreabilidade <br>
Mostra como os requisitos (que compõe as linhas da matriz) se relacionam com os artefatos produzidos durante o processo de produção.
	

#### Templates

Nós já aprendemos o que são os artefatos de software e em que contexto eles são gerados, agora, vamos aprender algumas ferramentas e templates que nos auxiliam no processo de criação desses artefatos durante o processo de desenvolvimento de software.

**Comentário:** Essa seção é mais para consulta quando você precisar gerenciar algum projeto de desenvolvimento de software. Vou tentar manter os links atualizados mas caso algum deixe de funcionar, pode me avisar pelo [twitter](https://twitter.com/bruno_ruas2).

##### Backlog do produto e Kanban

Existem várias maneiras de organizar o cumprimento dos requisitos contidos no backlog do projeto. O kanban é um quadro onde transformamos cada item do backlog em unidades separáveis (geralmente post-its ou quadros) onde podemos mover para quadrantes de um board maior. Usualmente temos os quadrantes "A fazer", "Fazendo" e "Feito". Desse modo, podemos ver rapidamente o estado do desenvolvimento das atividades programadas para a sprint.

Existem várias ferramentas virtuais que podem ser usadas no processo como:


- [Trello](https://trello.com/)
- [PivotalTracker](https://www.pivotaltracker.com/)


##### Especificação de Requisitos de Software

Existem vários templates disponíveis na internet:


- [IEE/ISO/IEC 29148](https://www.reqview.com/doc/iso-iec-ieee-29148-templates.html)
- [Esse exemplo](http://www.hectordufau.com.br/openup/openup/guidances/examples/use_case_spec_CD5DD9B1.html)
- [Método Volere](https://www.volere.org/wp-content/uploads/2018/12/template14_ptbra.pdf)
- [PUC-MG](https://github.com/DroidFoundry/DroidMetronome/wiki/TEMPLATE-Documento-de-Especifica%C3%A7%C3%A3o-de-Objetivos-e-Requisitos-(EOR))


##### Documento de Arquitetura de Software


- [Architecture View Template](https://wiki.sei.cmu.edu/confluence/display/SAD/Template%3AArchitectureViewTemplate)
- [Interface Template](https://wiki.sei.cmu.edu/confluence/display/SAD/Template:InterfaceTemplate)
- [IEE/ISO/IEC 42020](https://webstore.iec.ch/preview/info_isoiecieee42020%7Bed1.0%7Den.pdf)


Nesse link [aqui](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/guidances/guidelines/test_case_81FD1D9F.html) você pode ver como elaborar um caso de teste funcional a partir dos casos de uso.

Aqui tem um template de [ata de reunião](https://pucminas.instructure.com/courses/49008/files/2889647?wrap=1).

Por fim, temos um template de matriz de impacto de mudanças [aqui](https://pucminas.instructure.com/courses/49008/files/2889655?wrap=1). E uma matriz de rastreabilidade em excel [aqui](https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2013/10/Requirements-Traceability-matrix.xlsx).

### Desenhando Processos de Software
Essa última seção é um exercício onde vamos colocar em prática todos os conceitos aprendidos até agora. Temos que saber que os conceitos aprendidos não são regras imutáveis na aplicação prática em um processo de software. Podemos combinar características de vários modelos durante o processo de execução de um planejamento sempre com foco na melhora contínua da qualidade do software.

Mesmo tendo muita flexibilidade sobre o processo de software, podemos elencar características que são obrigatórias em qualquer desenho:


- Qual o modelo de ciclo de vida
- Quais as atividades que comporão o processo de software e quais a técnicas usadas ao longo delas
- Quais produtos ou artefatos serão gerados a cada etapa
- Os papéis dos agentes relacionados ao longo do processo


Nós começamos o nosso estudo de engenharia de software pelos modelos de ciclo de vida exatamente porque eles regem grande parte das atividades e artefatos produzidos durante todo o processo de software. A maturidade da empresa, dimensionamento da mão de obra, recursos disponíveis, verba do projeto, tempo de execução e outras características são importantes para definição do melhor modelo de ciclo de vida a ser adotado.

A nossa jornada pela engenharia de software vai ser em grande medida construir um amplo repertório de modelos de ciclo de vida, atividades e artefatos.

Para facilitar o complexo processo de software, existem várias ferramentas que centralizam as diferentes etapas e simplificam o processo de gestão:


- Bizagi Modeler
- Eclipse Process Framework


## Bibliografia

- PRESSMAN, Roger S.; MAXIM, Bruce R. **Engenharia de software: uma abordagem profissional**. 8. ed. Porto Alegre: AMGH, 2016. E-book ISBN 9788580555349. Capítulos 1, 2, 3
- PRIKLADNICKI, Rafael, WILLI, Renato, e MILANI, Fabiano. **Métodos ágeis para desenvolvimento de software**. Porto Alegre: Bookman, 2014 1 recurso online ISBN 9788582602089 Capítulos 1,2,3,8,12,13
- SOMMERVILLE, Ian. **Engenharia de software**, 10ª ed. Pearson 768 ISBN 9788543024974 Capítulos 1,2,3,4
- COHN, Mike; SILVA, Aldir José Coelho Corrêa da. **Desenvolvimento de software com Scrum: aplicando métodos ágeis com sucesso**. Porto Alegre: Bookman, 2011. E-book ISBN 9788577808199
- LARMAN, Craig. **Utilizando UML e padrões: uma introdução á análise e ao projeto orientados a objetos e desenvolvimento iterativo**. 3. ed. Porto Alegre: Bookman, 2007. E-book (695 páginas) ISBN 9788577800476
- PAULA FILHO, Wilson de Pádua. **Engenharia de software**, v. 2 projetos e processos. 4. Rio de Janeiro LTC 2019 1 recurso online ISBN 9788521636748
- VETORAZZO, Adriana de Souza. Engenharia de software. Porto Alegre SAGAH 2018 1 recurso online ISBN 9788595026780
- WAZLAWICK, Raul Sidnei. **Engenharia de software conceitos e práticas**. Rio de Janeiro GEN LTC 2013 1 recurso online ISBN 9788595156173

