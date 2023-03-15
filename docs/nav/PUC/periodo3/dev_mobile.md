<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark-reasonable.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

## Assuntos
- [Fundamentos de Computação Móvel](#fundamentos-de-computação-móvel)
    - [Fundamentos](#fundamentos)
    - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [Desenvolvimento de Aplicações Móveis](#desenvolvimento-de-aplicações-móveis)
    - [Interfaces](#interfaces)
    - [Persistência de Dados](#persistência-de-dados)
    - [Recursos Nativos](#recursos-nativos)


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

Nos 3 casos nós temos a existência de 3 áreas de atuação do servidor. Temos a camada de banco de dados, a de apresentação e a aplicação. No servidor de uma camada nós temos essas 3 interfaces funcionando no mesmo servidor. Por sua vez, no servidor de 2 camadas temos a separação entre o banco de dados e a aplicação com a apresentação do outro lado. Por fim, no servidor de 3 camadas temos a especialização em 3 máquinas diferentes para cada uma dessas atividades.

Como sempre não existe gabarito. Quanto mais camadas, mais controle sobre aplicação teremos, entretanto, O desenvolvimento será mais difícil e mais caro. Inversamente,o servidor de uma camada é muito mais fácil de desenvolver e manter sendo a customização do seu ponto fraco. 

### Ambiente de Desenvolvimento
#### Configuração


#### React Native



## Desenvolvimento de Aplicações Móveis
### Interfaces
#### Componentes


#### Navegação


### Persistência de Dados
#### SQLite


#### Web API


### Recursos Nativos
#### Câmera


#### Mapa