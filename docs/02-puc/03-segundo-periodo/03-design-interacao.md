---
sidebar_position: 3
---

# Design de Interação

## Elementos do Design de Interação
Ao longo desse microfundamento, teremos o objetivo de responder a seguinte pergunta: "O que leva um usuário a gostar de usar um sistema?". Assumiremos um papel chamado de **projetista de sistemas interativos**.

A base desse trabalho é compreender o usuário, os sistemas interativos e a relação entre usuário e sistemas. Vamos aprender a projetar essas interações bem como avaliar se os objetivos determinados foram alcançados.

**Comentário:** Essa matéria tem abordagem bem teórica. Então esse material vai ser o mais resumido possível sobre os temas abordados. Quem tiver interesse em se aprofundar, pode buscar esse diferencial na bibliografia.
### Sistemas Interativos em Contexto
Em qualquer planejamento de interações existem dois atores: o usuário humano e o computador. Ambos são peças fundamentais para o desenho das interações, entretanto, a maneira como modelamos o comportamento desses agentes pode variar de acordo com o contexto e o objetivo de design.

Podemos dizer que existem quarto perpectivas básicas para modelagem das interações user-computador:


  - **Perspectiva Sistema** - Abora a interação user-pc como a interação entre dois sistemas. Uma característica marcante dessa abordagem é o uso de formas codificadas como atalhos de teclas ou linguagem formal. A ênfase é dada ao computador e na transmissão de dados. Dados como tempo de interação e número de erros são importantes para avaliação.
  - **Perspectiva Parceiro do Discurso** - O ponto focal de avaliação está mais próximo do usuário. Existem interação por linguagem natural e inferência. Um exemplo dessa abordagem são as pesquisas relacionadas em sites de buscas. Dados como a qualidade da resposta provida pelo sistemas são importantes para essa abordagem.
  - **Perspectiva Ferramenta** - O sistema é modelado como ferramenta para alcance de algum resultado. Existe claramente a presença de um resultado da interação (um artefato) que define o sucesso ou fracasso da interação. Dados sobre uso das funções disponíveis e facilidade de uso são importantes.
  - **Perspectiva Mídia** - O foco aqui é na comunicação entre pessoas. Nesse caso o sistema atua como meio de comunicação entre usuários. A qualidade da comunicação é um dos dados mais importantes nessa abordagem.


### Atributos de Qualidade da Interação (Cognição e Semiótica)
#### Perspectiva teórica do Humano na Interação Humano-Computador
A interação Humano-Computador (IHC) é o estudo dos sistemas computacionais que são projetados para receberem interações de usuários humanos. O foco principal é a implementação, avaliação e investigação dos sistemas e fenômenos relacionados ao seus usos.

Os usuários dos sistemas são humanos. Isso implica que a IHC leva em consideração aspectos do sistema cognitivo com suas preferências e comportamentos. Também entendem que existem diferenças entre usuários e, até mesmo, variações entre o mesmo usuários ao longo do tempo.

O método de investigação da IHC é teórico por meio do uso de abordagens distintas. No ramo das abordagens da psicologia experimental são usados dados mensuráveis e modelagem de comportamento humano. No ramo da psicologia cognitiva, temos a aplicação de conceitos teóricos para a interpretação de algumas interações e comportamentos observados.

Além dos caminhos de pesquisa baseados na psicologia, temos também a adoção de métodos oriundos do estudo da linguística que investigam os signos usados na comunicação e metacomunicação por meio de artefatos. Para citar algumas dessas abordagens temos: Leis de Hick-Hyman, Leis de Fitts, Processador Humano de Informação, Princípios da Gestalt, Teoria da Atividade, Cognição Distribuída, Engenharia Cognitiva, Teoria da Ação, Engenharia Semiótica e etc.

#### O Contexto da Experiência do Usuários
Chamamos de **contexto de uso** todos os fatos que interferem e interagem com o uso de um sistema. Para citar alguns temos: tempo, ambiente físico, social e cultural, disponibilidade e outros fatores.

A interação do usuário sempre tem algum objetivo em mente que pode ser simples ou complexo. Qualquer interação, como cadastro de um funcionário, é analisada como uma interação.

As interações humano-computador acontecem por meio de uma **interface**. Ela atua como único meio entre os modos de processamento de informações orgânicos e biológicos do ser humano e os recursos de máquina do computador. A interface também atua como agende limitador das interações, visto que, ela é quem define as funções acessíveis ao usuário em dado tempo.

Outra limitação que a interface impõe a a respeito da acessibilidade. Se o sistema apenas possui uma interface de intração por CLI (Command Line Interface), o uso dessa aplicação será totalmente diferente de um outro sistema com GUI (Graphic User Interface), por exemplo.

Também podemos definir **interação** como a troca de informações e influência entre o usuário e o sistema através da interface. Interagir sempre implica em provar dados e receber novas informações como retorno.

É no contexto de uso que temos a **Experiência do Usuário (User eXperience ou UX)**. Esse conceito tão famoso envolve a interface, a interação e o ambiente de interação. O processo de projetar a UX (UX Design) é levar em conta todos esses vários pontos para proporcionar sempre a melhor experiência possível.

A **interface de usuário (UI)** é a construção do modo em que a informação será disposta ao usuário por meio da **arquitetura da informação (IA)**. Ela é quem define quais serão as partes em destaque e o que pode ser ``escondido'' por trás de um menu, por exemplo.

Para concluir esses conceitos, vamos coloca-los todos juntos: Por meio da **interface** e dentro de um **contexto de uso** é que ocorrem as **interações** de modo que a **UX** desse usuário é definida, além desses dois primeiros fatores, pela **IA**[^1].

[^1]:Information Arquiteture, não confundir com AI (Artificial Inteligence).

O estudo de todas as variáveis que amarramos acima é chamado de **Design de Interação (IxD)**. Não é nenhum espanto constatar que em várias equipes de IxD tenhamos a presença de profissionais de vários campos de estudos que variam da linguística até a antropologia.

#### Atributos de Usabilidade, Comunicabilidade e Acessibilidade
Quais seriam os atributos necessários para que possamos avaliar uma interação como adequada? Podemos definir quatro características que podem nos ajudar a julgar essa matéria:


  - **Usabilidade** - Grau em que um produto é usado por usuários específicos para se atingir um objetivo específico em um dado contexto de uso.
  - **Acessibilidade** - Uso do sistema sem que a interface imponha obstáculos ao usuário.
  - **Experiência de** Uso - Como o usuário se sente ao interagir com o sistema. Pode ser grandemente impactada por todos os elementos do contexto de uso.
  - **Comunicabilidade** - Capacidade da interface comunicar ao usuário a lógica que rege o seu funcionamento.


Existem alguns normativos que regem os consensos da comunidade ao longo dessas questões. Podemos destacar a [ISO/IEC 25010:2011](https://www.iso.org/standard/35733.html) e a [ISO 9241-11:2018(en)](https://www.iso.org/standard/63500.html).
#### A interação pela Lente Cognitiva
Em 1986, um pesquisador chamado Donal Norman lançou os fundamentos do que hoje é conhecida como [**Engenharia Cognitiva (EC)**](https://www.sciencedirect.com/topics/engineering/cognitive-engineering). Esse ramo de estudos busca compreender os fundamentos da ação e desempenho humano que sejam relevantes para a construção de design de modo a possibilitar a criação de sistemas agradáveis e engajantes.

Em sua base a EC considera que existem dois grupos de variáveis: 1) Variáveis Psicológicas e 2) Variáveis Físicas (estados do sistema) e Controles Físicos (mecanismos de interação). como são conjuntos de variáveis muito diferentes entre si. Podem existir discrepâncias causadas nas tentativas de construir modos de interação entre esses dois "mundos" distintos. Podemos destacar três tipos de problemas:


  - **Problemas de Mapeamento** - As variáveis psicológicas precisar ser conectadas às variáveis físicas por meio da interface. Qualquer imprecisão no meio de comunicação entre user e computador gera problemas de mapeamento.
  - **Dificuldade de Controle** - O quão fácil é controlar as variáveis físicas para se alcançar o objetivo proposto pela solução.
  - **Dificuldade de Avalização** - O quão fácil é avaliar se o resultado da interação do user está de acordo com o objetivo da interação.


Os problemas descritos acima são originários da diferença entre como o designer entende o sistema e como o usuário entende o sistema. Podemos criar alguns conceitos para organizar melhor essa problemática de meios de interpretação diversos do mesmo sistema. É possível separar essas interpretações em três componentes:


  - Modelo de Design - Modelo conceitual que o sistema é compreendido pelo design.
  - Imagem do Sistema Físico - É o sistema físico construído a partir do modelo de design.
  - Modelo do Usuário - É o modelo construído internamente pelo usuário ao longo das interações com o sistema.


**Comentário:** Cada conceito que vimos até agora levam anos de pesquisa até se ter algum domínio. Nosso foco por agora é apenas conhecer a existência desses conceitos bem como uma versão resumida do que são.

**Fontes Complementares:**


  - NORMAN, Donald A. Steps toward a cognitive engineering: Design rules based on analyses of human error (Links para um site externo.). In: Proceedings of the 1982 conference on Human factors in computing systems. 1982. p. 378-382. Acesso em 15 de Mai. de 2021.
  - NORMAN, Donald A. Cognitive engineering. User centered system design, v. 31, p. 61, 1986.


#### A interação pela Lente Semiótica 
**Comentário:** Eu não sei vocês, mas, pra mim, a palavra semiótica é o tipo de palavra que apenas eruditos e intelectuais costumam usar. Então, finalmente, chegou a nossa hora de aprender o que significa isso.

Podemos definir a **Semiótica** como o ramo da linguística que estuda como e porque as pessoas atribuem significado às coisas e, além disso, como usam esses objetos dotados de significado para se comunicar.

Por sua vez, a **Engenharia Semiótica** busca compreender a interação humano-computador como um caso particular de comunicação humana mediada por sistemas computacionais. Esse processo de comunicação ocorre em dois níveis:


  - Comunicação direta user-sistema
  - Metacomunicação designer-user mediada pela interface do sistema.


A interface pode ser entendida como um meio da mensagem passada pelo designer. Essa comunicação se dá por meio de **signos** (coisas com significado), **significados** (tarefas que desejamos executar) e **representações** (janelas, botões, menus e etc).

Existem três tipos de signos:


  - Estáticos - Comunicam seu significado integral por meio de telas fixas do sistema
  - Dinâmicos - Comunicam seu significado integral em sequência de telas e não e apenas uma visão.
  - Metalinguísticos - São signos que explicam outros signos (estáticos ou dinâmicos).


## Processo de Design de Interação
### Perspectivas de Design
#### Métodos de se Projetar um Sistema
No esforço de construir boas interfaces de sistemas, podemos partir de abordagens diferentes que focam em pressupostos de interpretação da interação user-computador. Grosso modo, podemos agrupar essas abordagens em dois grupos:


  - De Dentro para Fora - Foco no software. Primeiro se projeta a estrutura de dados, lógica do sistema e, por fim, a interface. As métricas são focadas na eficiência de funcionamento do sistema.
  - De Fora para Dentro - Foco no usuário. Começa-se com o projeto da interface para, depois, seguir o planejamento da lógica e a organização dos dados. Essa abordagem demanda um amplo conhecimento da pessoas que farão uso do sistema.


**Graus de Importância do Usuário**

Existem algumas maneiras de se considerar o usuário na hora de construirmos a interface das aplicações. Podemos definir três graus de relevância do usuário na construção das aplicações:


  - **Projeto Independente** - Esse modelo não conhece nem consulta o usuário no processo de construção do software. O usuário terá de se adaptar à lógica do sistemas. Deve aceitar o que o sistema permite e não permite. Essa abordagem não é a ideal para sistemas interativos.
  - **Design Centrado no Usuário** - Há a preocupação em entender quem são os usuários e quais são os seus objetivos. São coletados dados empíricos de uso, simulações e protótipos. Costumam ter quatro atividades para a construção:
    

      - Identificação das necessidades
      - Construção do design do sistemas
      - Construção da versão Interativa
      - Avaliação do artefato
    

  - **Design Participativo** - O usuário tem voz ativa no processo. Amplo foco na usabilidade.


**Fontes Complementares:**


  -  KUHN, Sara; WINOGRAD, Terry. Participatory Design (Links para um site externo.). In: Bringing Design to Software. New York: Addison-Wesley, 1996. Acesso em: 01 Jul. 2021.
  - PONCIANO, Lesandro. HCI Support Card: Creating and Using a Support Card for Education in Human-Computer Interaction (Links para um site externo.). In: Workshop sobre Educação em IHC. Simpósio Brasileiro de Fatores Humanos em Sistemas Computacionais. 2019, Vitória. Porto Alegre: Sociedade Brasileira de Computação, 2019. p. 106-111. Acesso em: 01 Jul. 2021. 


#### Desing é Técnica ou Arte?
**Comentário:** Eu, particularmente, acho esse tipo de discussão pouco relevante. Então vou apenas resumir e indicar as bibliografias.

Basicamente, temos duas maneiras de enxergar o conhecimento de construção de design de interações:


  - **Racionalismo Técnico** - Existem problemas conhecidos com soluções pre-determinadas. O papel do designer seria "enxergar" as equivalências do caso prático dele com a teoria. Além disso, teria a responsabilidade de aumentar o seu repertório de soluções para sempre ter uma saída a um problema de design encontrado.
  - **Reflexão em Ação** - Existem problemas e soluções únicas onde os métodos e ferramentas atuam apenas como auxiliadores do processo de construção do design. Nessa abordagem a criatividade do designer possui amplo espaço para construção.


**Fontes Complementares:**


  -  PONCIANO, Lesandro. Debate Estruturado: Uma Estratégia Pedagógica para Ensino e Aprendizagem de Valores Humanos em Interação Humano-ComputadorLinks para um site externo.. In: Workshop sobre Educação em IHC - Simpósio Brasiliero de Fatores humanos em Sistemas Computacionais, 17., 2018, Belém. Porto Alegre: Sociedade Brasileira de Computação, 2018. Acessso em: 01 de Jul. de 2021.
  - PONCIANO, Lesandro; ANDRADE, Nazareno. Perspectivas em Computação SocialLinks para um site externo.. Computação Brasil, Raquel Prates and Thais Castro (Eds.), v. 36, p. 30-33, 2018. Acesso em 01 de Jul. de 2021.


### A Prática de Design
Até agora tivemos guiado nossa caminhada no mundo dos conceitos. É importante saber os termos usados no mercado bem como suas referências bibliográficas, entretanto, o viés da nossa formação nos direciona para uma abordagem mais prática também.
#### Modelagem de Usuários e Necessidades
Como designers de uma aplicação um dos nossos objetivos é alcançar a **usabilidade** que, pela ISO 9241-11 (2018), pode ser entendida como o grau de utilização do produto para o alcance dos objetivos de modo eficiente, eficaz e satisfatório.

Pois bem, sabemos que quem usará os nossos sistemas são os **usuários**, diante disso, só podemos construir aplicações com usabilidade se pensarmos no nossos usuários. Para pensarmos melhor a respeito deles, precisamos de informações que podem vir das mais diversas fontes: pesquisar, entrevistas, vivência e etc. A partir dessas informações, podemos realizar um processo chamado de **Modelagem de Usuários**.

A modelagem de usuários pode ser feita por meio de três técnicas:


  - **Perfil de Usuário** - Descrição detalhada das características. É u agrupamento de conjuntos característicos para um grupo de usuários reais (jovens, idosos, professores, alunos e etc) focam em algumas características e ignorando outras.
  - **Persona de Usuário** - É o uso de uma fabulação a respeito do uso. Criamos uma história fictícia que elucida as funcionalidades que nosso sistema deve ter para que o objetivo do nosso personagem seja alcançado.
  - **Mapa de Empatia** - Descrição do usuário por meio dos meios de fala, pensamento, sentimento, ação e contexto. Usa-se um mapa como esse [aqui](https://analistamodelosdenegocios.com.br/wp-content/uploads/2017/08/Mapa-de-Empatia-do-Analista-de-Modelos-de-Negocios-1024x709.png).


**Fontes Complementares:**


  - Artigo científico com exemplos de perfis: PONCIANO, Lesandro; BRASILEIRO, Francisco. Finding Volunteers' Engagement Profiles in Human Computation for Citizen Science Projects (Links para um site externo.). Human Computation, v. 1, n. 2, 2014. Acesso em: 01 de Jul. de 2021.
  - Artigo científico com exemplos de perfis: LOUZADA, Henrique; CHAVES, Gabriel; PONCIANO, Lesandro. Exploring user profiles based on their explainability requirements in interactive systems (Links para um site externo.). In: Proceedings of the 19th Brazilian Symposium on Human Factors in Computing Systems. 2020. p. 1-6. Acesso em: 01 de Jul. de 2021.


#### Abordagens de Prototipagem
Agora que temos nossos modelos de usuários, o próximo passo é construir o **protótipo** da nossa solução.

O objetivo dessa técnica é obter feedback dos interessados antes da construção final do projeto. Desse modo, uma boa fase de prototipagem pode economizar verdadeiras fortunas para as empresas e clientes.

Usualmente, o processo de prototipagem consiste em quatro etapas:


  - Definição do feedback a ser coletado
  - Construção dos protótipos
  - Avaliação dos interessados
  - Descarte do protótipo


Agora que sabemos as etapas gerais do processo, nos resta saber quem seriam esses **interessados**. A resposta para essa pergunta depende muito de quem se propor a respondê-la mas, no geral, clientes, outros designers e usuários são boas fontes de feedback.

**Métodos de construção de Protótipos**

Para a construção de protótipos temos uma infinidade de técnicas possíveis. Vamos destacar algumas:


  - **Wireframe** - Telas de baixa fidelidade com foco na arquitetura da informação e o layout.
  - **Mock-Up** - Telas de alta fidelidade com inclusão de detalhes e funcionalidades mas com escopo de atuação reduzido[^2].
  - **Storyboards** - Prototipagem por figuras similares a um diagrama de fluxo que ilustram detalhes na sequência de interação.
  - **Prototipação em Vídeo** - Criação de uma narrativa visual de utilização da solução com exemplo do que será feito na experiência real.
  - **Protótipo em Papel** - Desenho livre das funcionalidades. Permite uma alta ajustabilidade mas é desaconselhado para projetos de alta complexidade.

[^2]:Por exemplo, usando uma base de dados de teste.

**Graus de Fidelidade em Prototipagem**

Agora que aprendemos alguns dos métodos usados na construção dos protótipos, podemos ver que existem diferentes níveis de abstração a depender de qual método optarmos. Chamamos de **prototipação horizontal** os métodos que temos menor profundidade nos detalhes, entretanto, uma maior amplitude na quantidade de características do sistema. Do outro lado, temos a **prototipação vertical** que foca em poucas características mas com uma abordagem muito mais profunda.

Além do escopo da quantidade de características, podemos avaliar os protótipos relativamente ao grau de fidelidade. Os métodos de **baixa fidelidade** são mais rápidos e baratos por focarem em abstrair a maioria dos detalhes em detrimento das ideias simples e iniciais. No outro espectro, métodos de **alta fidelidade** tentam se aproximar grandemente do que será o resultado final com o máximo de detalhes possíveis.
#### Cores, Fontes e Harmonização
A **tipografia** é o ramo que estuda as diferentes características entre os ``tipos''. Geralmente, agrupados por meio de famílias, época e estilo.

Além das fontes de texto, as **cores** também são importantes no quesito da estética da aplicação. Cores podem ser entendidas em termo de ``temperatura'' como cores quentes para objetos em destaque e cores frias para objetos de background. Para auxiliar a escolha da identidade visual, podemos usar ferramentas como o **círculo cromático** para escolher cores de diferentes padrões como, por exemplo:


  - **Complementares** - Opostas no círculo cromático
  - **Análogas** - Três cores vizinhas no círculo cromático
  - **Tríades** - Três cores equidistantes no círculo cromático
  - **Divisão Complementar** - Três cores. Uma principal e uma cor de cada lado (sendo ambas complementares entre si)
  - **Esquema Quadrado** - Dois pares de cores complementares
  - **Esquema Retângulo** - Quatro cores sendo um par complementar e um par análogo


Outra maneira de escolhermos cores é por meio de escalas padrão. Uma **escala divergente** é a que vai de um polo de cor até o outro. Uma **escala sequencial** é a que vai degradando uma mesma cor para a composição da escala. Uma **escala qualitativa** é a que reúne cores diferentes em uma mesma paleta. E, por fim, uma **escala de cores com semânticas convencionais** são escalas de cores que já possuem certo consenso na comunidade (por exemplo a escala Manchester usada em hospitais).
#### Componentes e Recomendações Ergonômicas
Toda aplicação de ter o que chamamos de **comportamentos elementares** que podem ser entendidos como o básico para qualquer boa interação usuário-computador. Esses comportamentos ergonômicos elementares são:


  - Provisão de convite à interação por meio da indicação das ações possíveis
  - Provisão do apoio às ações via redução da carga de trabalho
  - Provisão de feedback ao usuário em cada entrada de dados


A grande maioria das interações hoje em dia se dão por intermédio de uma **Graphical User Interface (GUI)** que, normalmente, utiliza padrões de janelas, ícones, menus e apontadores (WINP[^3]). A abordagem usada para essas aplicações usa o padrão "reconhecer, em vez de recordar" que, como o nome diz, foca no uso guiado pelo reconhecimento de padrões em tela e não via memorização de padrões de uso.

[^3]:Do inglês Windows, Icons, Menus and Pointing Devices.

**Ícones**

Durante a elaboração de qualquer aplicação, o **projeto de ícones** é relevante porque são eles que o usuário usa para o reconhecimento dos padrões de referência para o uso.

Para o alcance desse objetivo, temos alguns princípios norteadores para o uso dos ícones:


  - **Metáfora** - O uso de um conhecimento em um contexto para facilitar o entendimento. O exemplo clássico é o uso do ícone de um disquete como elemento de salvamento.
  - **Mapeamento Direto** - Imagem parecida com o ícone a ser representado.
  - **Convenção** - O significado de um ícone de se manter consistente ao longo de todo o sistema.


**Erros e Alertas**

Durante a comunicação entre computador e usuário, é muito comum o uso de mensagens de alerta e erro. Podemos elencar algumas boas práticas para o uso dessas ferramentas:


  - Uso de linguagem branda
  - Não usar dupla negativas
  - O sentido dos verbos sempre deve apontar para o sistema. Por exemplo, "Comando não reconhecimento" ao invés de "Comando incorreto"
  - Evitar o uso de caixa alta


**Objetos de Interação**

Aqui vamos ter uma série de recomendações sobre as melhores práticas a respeito dos objetos usados na elaboração de uma interface.

Em se tratando de **objetos de seleção** também temos algumas boas práticas a serem seguidas:


  - **Listbox** - Ordenar os elementos para facilitar a pesquisa
  - **Radio Button** - Itens mutualmente excludentes
  - **Check Box** - Sempre permitir a seleção de múltiplas alternativas


Nos **objetos de apresentação**, temos de ficar atentos em:


  - Não usar hífen no final das linhas
  - Máximo 60 caracteres por linha
  - Usar espaçamento entre parágrafos
  - Usar bordas implícitas ou explícitas
  - Evitar caixa alta
  - Fontes serifadas para textos longos
  - Fontes sem serifa para títulos e rótulos


No quesito **preenchimento de formulários** temos:


  - Usar diferenciação entre rótulo e dados
  - Usar diferenciação entre campos obrigatórios e opcionais
  - Indicar o que for text default
  - Usar feedback sempre que houver envio dos dados ou salvamento
  - Sempre ordenar de maneira satisfatória a navegação entre campos com uso da tecla tab


No fronte de **interface** podemos destacar:


  - **Interfaces Web**
    

      - Maior atenção à arquitetura da informação
      - Indicação de como se mover no site
    

  - **Dispositivos Móveis**
    

      - Minimizar os níveis de navegação
      - Minimizar a quantidade de conteúdo exibido
      - Reduzir a quantidade de entradas necessárias pelo usuário
      - Aplicação tolerante com perda de sinal e desligamento do aparelho
    



#### Princípios e Regras de Design
Agora vamos aprender alguns princípios gerais por dois grupos. Os princípios **gestálticos** são oriundos da escolha de pensamento Gestalt muito usada no estudo da psicologia. Complementarmente, vamos ver uma lista de princípios chamados de **regras de ouro**.

O princípios gestálticos são:


  - **Proximidade** - Entidades visuais próximas são entendidas como grupo.
  - **Alinhamento** - Alinhamento são melhor percebidos que contornos irregulares.
  - **Simetria** - Objetos simétricos são percebidos melhor que objetos assimétricos.
  - **Similaridade** - Semelhança de objetos implica em unidade.
  - **Destino Comum** - Objetos com um mesmo sentido são percebidos como grupo.
  - **Fecho** - A mente costuma completar figuras incompleta para gerar regularidade.
  - **Região Comum** - Objetos dentro de um contorno são percebidos como unidade.
  - **Conectividade** - Objetos conectados são entendidos como unidade.


As regras de ouro são:


  - Consistência
  - Fornecer Atalhos
  - Fornecer Feedbacks Informativos
  - Marcar o Final dos Diálogos
  - Permitir Reversão de Ações
  - Fornecer Controle de Iniciativa do User
  - Reduzir a Carga de Memória de Trabalho


**Fontes Complementares:** Aqui tem um [artigo](https://www.cs.umd.edu/users/ben/goldenrules.html) sobre as regras de ouro que explica melhor cada um desses pontos. Em tempo oportuno essa seção será atualizada com um resumo deles.
## Avaliação da Qualidade de Sistemas Interativos
### Abordagens de Avaliação
#### O Processo de Avaliação de Sistemas Interativos
Podemos definir as abordagens de avaliação de sistemas em diferentes modos.

No primeiro modo de separação, podemos nos ater ao momento da avaliação. Nesse caso podemos ter uma avaliação no começo ou no final do Desenvolvimento do sistema. Quando realizamos a avaliação no início do processo de projeto para nos asseguramos que estamos no caminho certo, estamos realizando a **Avaliação Formativa**. Na outra ponta, quando avaliamos no final do processo se todos os objetivos foram atingidos, é dito que fizemos a **Avaliação Somativa**.

A outra maneira de separar as abordagens de avaliação é quanto ao método de avaliação. Nesse caso, podemos destacar três abordagens:


  - **Avaliação por Inspeção** - Nessa abordagem o usuário não é envolvido. Ao invés disso, simulamos um usuário por meio de um inspetor que tenta se colocar na posição de user.
  - **Avaliação por Observação** - Nessa abordagem os usuários participam e a avaliação é feita através do uso direto do sistema ou de alguma representação do mesmo. 
  - **Avaliação por Investigação** - Nessa abordagem os usuários participam, entretanto, a avaliação é feita mediante a aplicação de técnicas de investigação (questionário, focus group e etc).


### Métodos de Avaliação
#### Inspeção do Percurso Cognitivo
Agora que aprendemos sobre algumas das abordagens de avaliação, podemos nos aprofundar um pouco mais em como colocar alguma dessas abordagens em prática por meio de métodos. Nesse tópico, focaremos nos métodos de avaliação por inspeção.

No método de **Avaliação Heurística**, nos baseamos em um conjunto de dez heurísticas (que são métodos de investigação) para avaliarmos se o sistema possui as características desejadas. As dez heurísticas de Nielses são:

  - Visibilidade do Estado do Sistema
  - Correspondência Sistema - Mundo Real
  - Controle e Liberdade do User
  - Consistência e Padronização
  - Reconhecimento ao invés de Memorização
  - Prevenção de Erros
  - Flexibilidade e Eficiência de Uso
  - Projeto Estético e Minimalista
  - Ajuda ao User com Erros
  - Ajuda e Documentação

Outra metodologia possível é a chamada **Avaliação do Percurso Cognitivo**. Nesse método, nós nos baseamos em quatro questões:

  - O user tenta alcançar o resultado desejado?
  - O user nota que existe uma ação correta disponível?
  - O user consegue associar a ação correta ao efeito que se quer atingir?
  - O user percebe que está progredindo em direção à conclusão da tarefa?

Em ambos os métodos temos a coleta de dados, avaliação e preparação de avaliação baseadas nos fluxos e princípios que levantamos antes.
#### Inspeção Semiótica
Nessa seção vamos aprender duas abordagens de avaliação da comunicabilidade de sistemas também baseados no processo de inspeção.

O **Método de Inspeção Semiótica (MIS)** é um tipo de avaliação que busca analisar a comunicabilidade do sistema por meio da emissão da metacomunicação. Metacomunicação é o estudo da capacidade de comunicar a própria dinâmica da comunicação entre interlocutores, ou seja, é o estudo da informação sobre a informação.

**Comentário:** Bem filosófico né?! Eu, sinceramente, acho que não vale a pena entrar muito profundamente em cada tópico desse por agora. Vamos ficar apenas na superfície por enquanto.

O protocolo MIS é baseado em:


  - Inspeção da metacomunicação de recursos de ajuda e documentação
  - Inspeção da metacomunicação em signos estáticos
  - inspeção da metacomunicação em signos dinâmicos
  - Confronto dos resultados anteriores
  - Análise da qualidade da metacomunicação


Cada item do protocolo leva em consideração os seguintes elementos:


  - Quem é o user
  - O que se quer fazer
  - Qual a maneira preferida de se executar essa tarefa
  - Qual é o sistema projetado
  - Qual a maneira que o sistema está projetado para realizar essa tarefa


Além dessa metodologia, temos o **Método de Avaliação da Comunicabilidade (MAC)** que é baseado em observação. O foco é avaliar a comunicação entre o designer e o user por meio da interface. Sempre que o user não compreender o que foi proposto pelo designer ou não souber expressar sua vontade por meio do sistema, dizemos que houve uma ruptura de comunicabilidade.

A maneira de investigação é baseada em 13 etiquetas com frases que simulam o que um user diria diante das situações experimentadas:


  - Cade?
  - E agora?
  - O que é isso?
  - Epa!
  - Onde estou?
  - O que houve?
  - Por que não funciona?
  - Assim não dá
  - Vai de outro jeito
  - Não, obrigado
  - Pra mim está bom
  - Socorro!
  - Desisto


**Comentário:** De todos os assuntos, esse ai foi o que eu achei mais estranho. Talvez precisaremos expandir mais essa seção mas por hora, é o que temos.
#### Avaliação da Acessibilidade
No quesito acessibilidade, queremos que a interface tenha os  requisitos necessários dispositivos na análise Web Content Accessibility Guidelines (WCAG). Esse método de avaliação possui quatro princípios que devem ser observados nas interfaces:


  - **Percepção**:
    

      - Alternativas em texto para todo conteúdo não textual
      - Alternativas multimídia dinâmica e temporal
      - Conteúdo apresentável em diferentes formas sem perda da informação ou estrutura
      - Facilitação a percepção visual e auditiva por meio da separação entre planos de fundo e primeiro plano
    

  - **Operação**:
    

      - Garantir que toda funcionalidade esteja disponível a partir do teclado
      - Tempo de leitura de conteúdo suficiente
      - Evitar formas de exibição que podem provocar convulsões
      - Facilitar a navegação, localização de conteúdos e localização das informações
    

  - **Compreensão**:
    

      - Conteúdo textual legível e compreensível
      - Páginas web funcionais
      - Auxíliar à correção de erros
    

  - **Robustez**:
    

      - Maximizar a compatibilidade com utilizadores atuais e futuros
    



#### Teste de Usabilidade
O **teste de usabilidade** é um tipo de avaliação por observação e costumam responder perguntas sobre o funcionamento do sistema.

Durante o teste de usabilidade, cada tarefa realizada é medida para se obter dados como:


  - Grau de sucesso da execução
  - Total de erros cometidos
  - Quantos erros por tipo ocorreram
  - Tempo necessário para a conclusão


A coleta das informações pode variar de acordo com a vontade do designer. Pode variar desde observação visual simples até instrumentalização por meio de instrumentos.

Antes de se realizar o teste, é necessário definir as tarefas a serem executadas, qual o perfil de usuário, recrutamento dos usuários, material para observação, execução do teste-piloto a ser feito na seção de uso. Essa é a **etapa de preparação do teste**.

Após isso, passamos para a **etapa de coleta dos dados** por meio da aplicação dos testes e coleta das performances de uso.

Por fim, temos a **interpretação e consolidação dos resultados** que nos permite sumarizar os dados afim de tirarmos conclusões úteis sobre eles.
#### Investigação da Usabilidade
Por fim, vamos aprender um pouco sobre a avaliação da usabilidade[^4] por meio da análise System Usability Scale (SUS) que usa o modelo de avaliação por investigação. Como já aprendemos, esse tipo de avaliação permite a interação do user com o sistema ou algum representante dele.

[^4]:Eu não faço ideia do motivo de termos a seção anterior chamada "Teste de usabilidade" a agora termos a seção "Investigação da usabilidade" mas vamos lá.

O SUS foi criado em 1986 e utiliza um questinário de 10 questões aplicadas após o uso do sistema ou do conhecimento sobre como ele funciona.

As questões aplicadas são:

  - Eu acho que gostaria de usar esse sistema com frequência
  - Eu acho o sistema desnecessariamente complexo
  - Eu achei o sistema fácil de usar
  - Eu acho que o precisaria de ajuda com conhecimentos técnicos para usar o sistema
  - Eu acho que as funções do sistema são bem integradas
  - Eu acho que o sistema apresenta muita inconsistência
  - Eu imagino que as pessoas aprenderão como usar o sistema rapidamente
  - Eu achei o sistema atrapalhado de usar
  - Eu me senti confiante ao usar o sistema
  - Eu precisei aprender várias coisas novas antes de conseguir usar o sistema

Onde para cada item, temos as seguintes opções baseadas na escala Likert de resposta:


  - Discordo completamente
  - Discordo parcialmente
  - Não concordo nem discordo
  - Concordo parcialmente
  - Concordo completamente


Para a compilação usamos o seguinte cálculo de pontuação: 1) para as questões ímpares, subtraia 1 ponto da pontuação respondida; 2) para os itens pares subtraia 5; 3) Some  todos os pontos; 4) multiplique por 2,5. A pontuação variará entre 0 a 100.

Um resultado esperado médio gira em torno de 68 pontos. Abaixo de 50 é sinal de problemas que podem indicar insucesso na solução.

**Fontes Complementares:**:


  -  Trabalho de conclusão de curso que avalia um aplicativo empregando o método SUS: SAPFI: um sistema de alerta para evitar aglomerações em filas de espera de praças de alimentaçãoLinks para um site externo. [link](http://bib.pucminas.br:8080/pergamumweb/vinculos/000096/000096a6.pdf).
  - Trabalho de conclusão de curso que avalia um sistema empregando o método SUS: Proposta, Prototipação e Avaliação de Aplicação para Colaboração e Compartilhamento entre TorcedoresLinks para um site externo. [link](http://bib.pucminas.br:8080/pergamumweb/vinculos/000043/0000430f.pdf).


## Bibliografia
  - BENYON, David. **Interação Humano-Computador - 2ª edição**. Pearson 466 ISBN 9788579361098.
  - PADUA FILHO, Wilson de Paula. **Multimídia conceitos e aplicações**. 2. Rio de Janeiro LTC 2010 ISBN 978-85-216-1993-2.
  - ROGERS, Yvonne; PREECE, Jennifer; SHARP, Helen. **Interaction Design: beyond human-computer interaction**, 5rd Edition. Wiley (O’Reilly). May 2019. ISBN: 9780470665763.
  - COLBORNE, Giles. **Simple and Usable Web, Mobile, and Interaction Design, Second Edition**. New Riders (O’Reilly). ISBN: 9780134778181.
  - PEREZ, Clotilde; BARBOSA, Ivan Santo. **Hiperpublicidade, v. 1. Fundamentos e interfaces**. São Paulo Cengage Learning 2018. ISBN 9788522116294 (Recurso online).



