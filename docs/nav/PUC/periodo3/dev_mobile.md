<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark-reasonable.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

## Assuntos
- [**Fundamentos de Computação Móvel**](#fundamentos-de-computacao-movel)
    - [Fundamentos](#fundamentos)
    - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [**Desenvolvimento de Aplicações Móveis**](#desenvolvimento-de-aplicacoes-moveis)
- [**Bibliografia**](#bibliografia)

## Fundamentos de Computação Móvel
### Fundamentos
#### Características de Aplicações Móveis
Antes de aprendermos **como** desenvolver uma aplicação móvel na prática, pensemos um pouco sobre o que é uma aplicação móvel? Quais são as características dessas aplicações?

Podemos definir como **aplicação móvel**, qualquer solução de software desenvolvida para ser executada em dispositivos portáteis, normalmente, dotados de capacidade de comunicação com internet.

Existem algumas **características** que precisamos atender para o desenvolvimento de uma aplicação móvel efetiva:

- Portabilidade: <br> Nesse quesito, precisamos nos atentar ao tamanho e peso do dispositivo bem como dos seus acessórios. Isso é especialmente relevante no desenvolvimento de jogos em consoles portáteis como [nintendo switch](https://developer.nintendo.com/).
- Usabilidade: <br> Existem vários tipos de pessoas que podem usar nossas aplicações. Pensando nessas realidade, precisamos nos ater às características relacionadas aos **usuários** que são nosso público alvo, as características do **ambiente** em que nossos usuários utilizarão e, por fim, as características do **dispositivo** que será usado para acesso ao nosso software.
- Funcionalidade: <br> Normalmente, somos capazes de agrupar os aplicativos em dois grupos. O primeiro são aplicativos que operam de forma autônoma (sem necessidade de contato com servidores externos). O segundo grupo, se refere aos apps que consomem requisições para servidores.
- Conectividade: <br> Não é estranho supor que a principal característica das aplicações móveis da atualidade é a sua conectividade a serviços externos. Essa comunicação pode ser feita de forma constante ou intermitente. Além disso, existem as aplicações inteiramente baseadas em dados locais no dispositivo do usuário.

#### Arquitetura de Aplicações Móveis
Parecido com o que vimos na matéria de [desenvolvimento web backend](/CC_site/nav/PUC/periodo2/dev_web_backend/). Vamos aprender um pouco mais sobre a arquitetura das soluções web móveis.

A primeira parte que a gente aprendeu sobre arquitetura pode ser encontrada na matéria de desenvolvimento é back end. Dessa maneira vamos nos ater apenas à arquitetura de aplicações móveis.

O modelo mais usado de arquitetura de aplicações móveis é o modelo cliente e servidor. Nesse modelo, Temos a figura do banco de dados E da aplicação que se comunicam por meio da internet.

**Comentário:** Isso mesmo lembra bastante a maneira como um site funciona. A principal diferença é que ao invés do navegador aqui temos o aplicativo.

##### Tipos de cliente
Podemos separar os tipos de clientes em 2 grupos:

- Thin Clients <br> Esse tipo de cliente depende muito pouco do hardware que o aplicativo rodará. Normalmente, usamos um navegador para acesso à aplicação. Esse tipo de cliente torna A manutenção das aplicações muito mais fáceis. O único ponto fraco desse tipo de cliente é que a aplicação só funcionará com acesso constante à internet.
- Fat Clients <br> Ao contrário dos clientes magros, os clientes gordos podem aceitar períodos de interrupção da comunicação entre a aplicação e o servidor. O problema é que o hardware que o roda a aplicação é muito relevante. Tornando o desenvolvimento e a manutenção do software específicos para cada aparelho em que a aplicação é instalada.

##### Tipos de Servidores
Da mesma maneira que podemos separar os clientes em 2 categorias, podemos separar os servidores em 3 categorias baseada em camadas:

- Arquitetura de uma camada
- Arquitetura de duas camadas
- Arquitetura de três camadas

Nos 3 casos nós temos a existência de 3 áreas de atuação do servidor. Temos a camada de **banco de dados**, a de **apresentação** e a **aplicação**. No servidor de uma camada nós temos essas 3 interfaces funcionando no mesmo servidor. Por sua vez, no servidor de 2 camadas temos a separação entre o banco de dados e a aplicação com a apresentação do outro lado. Por fim, no servidor de 3 camadas temos a especialização em 3 máquinas diferentes para cada uma dessas atividades.

Como sempre não existe gabarito. Quanto mais camadas, mais controle sobre aplicação teremos, entretanto, O desenvolvimento será mais difícil e mais caro. Inversamente,o servidor de uma camada é muito mais fácil de desenvolver e manter sendo a customização do seu ponto fraco. 

### Ambiente de Desenvolvimento
Basicamente, existem 2 maneiras de se desenvolver uma aplicação mobile.

A primeira maneira é o desenvolvimento nativo que, no caso do Android é feito utilizando a linguagem Java/Kotlin, e, no ambiente a IOS, é feito com Swift ou Objective-C.

A segunda maneira é o desenvolvimento híbrido. Nesse caso, desenvolvemos uma aplicação usando uma linguagem e, em uma fase posterior, convertemos essa aplicação para o ambiente IOS ou Android.

Nessa matéria, usaremos a abordagem do desenvolvimento híbrido utilizando a tecnologia [React Native](https://reactnative.dev/) que é inteiramente baseada em JavaScript.

**Comentário:** Se você precisar de um reforço de JavaScript, nós temos uma parte da disciplina de [desenvolvimento web front end](/CC_site/nav/PUC/periodo1/desenvolvimento_web/#a-linguagem-javascript) que ensina o básico sobre ela.

#### React Native
O nome React Native não é atoa. Podemos separar esse conceito em 2. O primeiro, [**React**](https://reactjs.org/), se refere a um framework em JavaScript para construção de interfaces de usuário. O segundo, **native**, é uma alusão ao fato que, uma vez que a aplicação é construída, ela pode ser traduzida para código nativo de cada plataforma.

**Comentário:** Não podemos achar que o React possibilita desenvolvimento fullstack de aplicações em JavaScript. Ela é uma biblioteca para criação de interfaces de usuário. Nada mais do que isso.

##### Crash Course em React
Não tem jeito, para entender bem React Native precisamos entender pelo menos o básico do React.

Aqui em baixo temos, literalmente, o tutorial da documentação oficial do React com os principais componentes que precisam ser apreendidos.

Se preferir, pode ler o mesmo material nesse [link](https://reactjs.org/docs/hello-world.html).

<iframe src="https://reactjs.org/docs/hello-world.html" frameborder="0" width="100%" height="800"></iframe>

O ideal é ter lido, pelo menos, toda essa parte de main concepts.

##### Crash Course em React Native
Da mesma maneira que fizemos com o material do react, vamos colocar aqui em baixo o tutorial do React Native.

Se preferir, o mesmo material está disponível neste [link](https://reactnative.dev/docs/getting-started).

<iframe src="https://reactnative.dev/docs/getting-started" frameborder="0" width="100%" height="800"></iframe>

#### Ferramentas de Desenvolvimento
Agora que aprendemos um pouco sobre o que é o react e o react native, vamos aprender como desenvolver aplicações utilizando essas ferramentas.

No decorrer dessa disciplina, nós vamos utilizar um ambiente de desenvolvimento virtual [Expo](https://expo.dev/signup). A vantagem desse ambiente está no fato de podermos desenvolver as aplicações inteiramente no ambiente web e testar, em tempo real, o resultado das nossas alterações do código.

Uma vez com a conta criada, podemos usar a sessão de **snacks** para criar aplicações que rodam na própria interface do Expo.

##### Estrutura Padrão de um Projeto React Native
Ao criar um snack no Expo a gente consegue perceber a estrutura básica de um projeto construído em React Native. No diretório do projeto, podemos ver 2 pastas (uma `assets` e uma `components`), um arquivo JS (que será o principal, normalmente chamado de `App.js`), um arquivo JSON (com as dependências do projeto) e um arquivo de README em markdown.

```
- assets/
- components/
    | - AssetExample.js
- App.js
- package.json
- README.md
```

Aqui embaixo temos o projeto padrão de um Snack no Expo. Eu mudei apenas a parte que tá na tag de texto.

<div data-snack-id="@bruno.ruas2/default-expo-app" data-snack-platform="web" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>

Dessa feita, vamos poder observar aqui no site mesmo a evolução da aplicação que vamos desenvolver.

**Comentário:** Podemos rodar a aplicação que estamos desenvolvendo também no nosso próprio smartphone baixando o aplicativo do Expo no nosso celular. O app que temos que baixar é o [Expo Go](https://expo.dev/client).

Mesmo Expo criando automaticamente um padrão de pastas, nós vamos utilizar o mesmo padrão que o professor usou na construção do projeto da disciplina.

```
- src/
    | - components/
    | - pages/
        | - HomePage.js
- App.js
- package.json
- README.md
```

Com essa nova estrutura, temos uma aplicação simples. Essa vai ser a aplicação que a gente vai evoluir ao longo de todo o microfundamento.

<div data-snack-id="@bruno.ruas2/app-react-native-parte-01" data-snack-platform="web" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>

##### React Native Paper
Da mesma maneira que o bootstrap facilita muito a construção de interfaces web com os componentes de visualização previamente construídos, podemos usar o [react native paper](https://callstack.github.io/react-native-paper/) para os componentes da nossa aplicação mobile.

Essa ferramenta é construída em cima dos componentes padronizados do Google Material Design.

<iframe src="https://callstack.github.io/react-native-paper/docs/guides/getting-started/" frameborder="0" width="100%" height="800"></iframe>

##### React Native Local
Para aqueles que (assim como eu) preferem o desenvolvimento localmente é possível configurar Um ambiente de desenvolvimento rodando o React Native localmente.

Abaixo temos um tutorial do [Rocketseat](https://react-native.rocketseat.dev/) explicando o passo a passo.

<iframe src="https://react-native.rocketseat.dev/" frameborder="0" width="100%" height="800"></iframe>

## Desenvolvimento de Aplicações Móveis
Agora que sabemos o básico da teoria, vamos colocar em prática no desenvolvimento de uma aplicação. Nosso objetivo é desenvolver uma aplicação focada na gestão de combustível utilizando react native e o react native paper.

**Aviso Importante:** Eu não gostei da maneira como a parte prática foi ministrada nesse microfundamento da PUC. O professor focou demais em mostrar como o ecossistema possui funcionalidades então foi um showcase de componentes desnecessariamente. Em virtude disso, eu vou ter que ir atrás de um projeto coeso que tenha começo, meio e fim. Então os que tiverem pressa no assunto desse material, pode ir direto na bibliografia abaixo ou os materiais da primeira parte.

## Bibliografia
- Bass, Len; Clements, Paul; Kazman, Rick. **Software Architecture in Practice,** Third Edition. Addison-Wesley Professional, 2012.
- Boduch, Adam; Derks, Roy. **React and React Native** - Third Edition. Packt Publishing. 2020.
- Ingeno, Joseph. **Software Architect's Handbook**. Packt Publishing, 2018.
- Richards, Mark; Ford, Neal. **Fundamentals of Software Architecture**. O'Reilly Media, Inc., 2020.
- Valentino Lee, Heather Schneider, Robbie Schell. **Mobile Applications: Architecture, Design, and Development**. Pearson. 2004.