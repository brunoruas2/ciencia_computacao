

# Assuntos
- [**Fundamentos de Sistemas Distribuídos**](#fundamentos-de-sistemas-distribuidos)
    - [Definições de Sistemas Distribuídos](#definicoes-de-sistemas-distribuidos)
    - [Características de Sistemas Distribuídos](#caracteristicas-de-sistemas-distribuidos)
- [**Arquiteturas de Software Distribuído**](#arquiteturas-de-software-distribuido)
    - [Modelos Arquiteturais para Sistemas Distribuídos](#modelos-arquiteturais-para-sistemas-distribuidos)
    - [Modelos de Comunicação de Sistemas Distribuídos](#modelos-de-comunicacao-de-sistemas-distribuidos)
- [**Implementação de Software Distribuído**](#implementacao-de-software-distribuido)
    - [Middlewares para Desenvolvimento de Sistemas Distribuídos](#middlewares-para-desenvolvimento-de-sistemas-distribuidos)
- [**Bibliografia**](#bibliografia)

# Fundamentos de Sistemas Distribuídos
## Definições de Sistemas Distribuídos
### Redes e Sistemas Distribuídos
Até agora, todas as aplicações que construímos usaram uma separação lógica entre camadas (como o modelo MVC) mas, no fim do dia, tudo isso rodava sempre num mesmo servidor (que na maioria das vezes é o nosso computador de casa que usamos para estudar). Entretanto, quando pensamos em aplicações reais de alta performance (como sites de bancos, corretoras de valores, o Ifood, o Uber e etc) podemos ter certeza que esses serviços não são executados por um único servidor monolítico que é capaz de fazer todas as camadas de processamento desses serviços.

No mundo real, as aplicações funcionam de maneira **distribuída** em diferentes servidores.

Diante disso, temos que entender bem como os conceitos de **Redes de Computadores** e **Sistemas Distribuídos** se relacionam.

#### Redes de Computadores
Nós já aprendemos sobre esse assunto na microfundamento de Fundamentos de Redes do segundo período.

Podemos definir uma rede como sendo a soma das seguintes partes:

$$ Rede = (Dispositivos \ Eletrônicos) + (Sistemas \ de \ Comunicação) + (Protocolos \ de \ Rede) $$

Ou seja, uma rede é o conjunto de componentes físicos e lógicos que permitem a **troca de dados** entre os dispositivos.

#### Sistemas Distribuídos
Por outro lado, um sistemas distribuído pode ser definido (Coulouris et al, 2013) como sendo um sistema cujas partes (hardware ou software) se comunicam por meio de uma rede e coordenam suas ações apenas enviando mensagens entre si.

Ou seja, um sistema distribuído precisa de uma rede de computadores para existir. Entretanto, não são a mesma coisa (na verdade são conceitos bem diferentes).

Um sistema distribuído é composto por um conjunto de vários softwares (que chamaremos de serviços ou microsserviços) que atuam em conjunto como se fosse um programa apenas.

Nesse microfundamento vamos aprender alguns padrões arquiteturais de construção de sistemas distribuídos[^1].

### Exemplos de Software Distribuído
Podemos elencar uma série de sistemas distribuídos que utilizamos corriqueiramente:

 - Sistemas de Banco de Dados
     - Permitem acesso unificado a uma infraestrutura de dados
     - São acessados por diferentes origens de frontend
 - Aplicações Web
     - Sistemas complexos que utilizam fortemente as redes de computadores
     - Separação em várias camadas lógicas: frontend, backend, banco de dados, servidor de arquivos e etc
     - Utilizam arquitetura cliente-servidor
 - Sistemas P2P
     - Sistemas construídos de maneira não centralizada
     - Cada nó implementa a lógica de aplicação e acesso parcial as dados
     - Maior custo de localização de dados quando comparado aos sistemas centralizados
 - Aplicações de Internet das Coisas
     - Vários microcontroladores com sensores cada vez mais conectados à internet
 - Redes Sociais

## Características de Sistemas Distribuídos
### Compartilhamento de Recursos
Uma característica que une todos os sistemas atuais é o compartilhamento de informações. Nas aplicações modernas, é muito estranho pensarmos no usuário apenas como um consumidor de dados sem que ele mesmo seja um ator ativo no processo. No passado, a coisa era bem diferente, a chamada web 1.0 era estática e unidirecional.

Diante dessa nova realidade, temos que pensar em soluções que permitam o compartilhamento de informações em diferentes meios (web, mobile, API e etc) e entre múltiplos usuários (como uma planilha no google sheets que pode acessada por vários usuários simultaneamente).

#### Serviços e Servidores
Podemos definir como **serviço** qualquer parte de um sistema que gerencia um **conjunto de recursos** por meio de uma **interface**. Em sistemas distribuídos, os recursos são acessados remotamente por mecanismos de comunicação.

Um **servidor** é um programa (isso mesmo, um programa) que é executado em um hardware (que também costumamos chamar de servidor) e que atende às solicitações feitas por programas em outros computadores.

Aqui tem um vídeo bacana sobre o que é um servidor.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VXmvM2QtuMU?si=R5UQAHydpPe3ZcuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

A arquitetura mais famosa e simples é a cliente-servidor que a essa altura do campeonato já estamos bem familiares.

Chamamos de **requisição remota** o processo completo da comunicação entre cliente e servidor que vai desde a requisição inicial até o recebimento da resposta esperada.

**Atenção: ** Mesmo que possa parecer, a arquitetura client-server não é a única possível. Falamos agora a pouco que existem sistemas P2P que subvertem essa lógica e transformam todos os nós em clientes-servidores ao mesmo tempo.

### Desafios de Arquiteturas Distribuídas

# Arquiteturas de Software Distribuído
## Modelos Arquiteturais para Sistemas Distribuídos
### Sistemas Distribuídos Centralizados
### Sistemas Distribuídos Descentralizados
### Estilos Arquiteturais

## Modelos de Comunicação de Sistemas Distribuídos
### Comunicação entre Processos
### Invocação Remota
### Comunicação Indireta

# Implementação de Software Distribuído
## Middlewares para Desenvolvimento de Sistemas Distribuídos
### Objetos Distribuídos
### Serviços Web

# Bibliografia
## Obrigatória
 - COULOURIS, George; DOLLIMORE, Jean; KINDBERG, Tim; BLAIR, Gordon. **Sistemas distribuídos conceitos e projeto**. 5. Ed. Porto Alegre: Bookman, 2013. ISBN 9788582600542.
 - BASS, Len; CLEMENTS, Paul; KAZMAN, Rick. **Software Architecture in Practice**, Third Edition. Addison-Wesley Professional (O'Reilly). September 2012
 - FORD, Neal; RICHARDS, Mark. **Fundamentals of Software Architecture**. O'Reilly Media, 2020. ISBN 9781492043454.
 - JOURNAL OF SYSTEMS ARCHITECTURE: JSA : the Euromicro journal. New York: Elsevier,1996-. Mensal. ISSN 1383-7621.

## Complementar
 - CLEMENTS, Paul; BACHMANN, Felix; GARLAN, David; IVERS, James; LITTLE, Reed; MERSON, Paulo; NORD, Robert; STAFFORD, Judith. Documenting Software Architectures: Views and Beyond, Second Edition. Addison-Wesley Professional (O'Reilly). October 2010. ISBN: 9780132488617
 - ERL, Thomas. SOA: princípios de design de serviços. Pearson 334 ISBN 9788576051893.
 - JOURNAL OF CLOUD COMPUTING. London, UK: Springer,2012-. Anual. ISSN 2192-113X.
 - KATZER, Jason. Learning Serverless. O'Reilly Media, 2019. ISBN 9781492057017.
 - LEE, Valentino; Schneider, Heather; Schell, Robbie. Aplicações Móveis: arquitetura, projetos e desenvolvimento. Pearson 350 ISBN 9788534615402.
 - TANENBAUM, Andrew S.; STEEN, Maarten van. Sistemas Distribuídos: princípios e paradigmas. 2. Ed. Pearson, 2015. ISBN 9788576051428.

[^1]: Vai por mim. Aprende bem essa aula porque praticamente todas as empresas grandes usam essas arquiteturas.
