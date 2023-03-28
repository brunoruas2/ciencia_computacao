<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark-reasonable.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

## Assuntos
- [**Fundamentos de Computação Móvel**](#fundamentos-de-computacao-movel)
    - [Fundamentos](#fundamentos)
    - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [**Desenvolvimento de Aplicações Móveis**](#desenvolvimento-de-aplicacoes-moveis)
    - [Interfaces](#interfaces)
    - [Persistência de Dados](#persistencia-de-dados)
    - [Recursos Nativos](#recursos-nativos)
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

**Comentário:** Como a construção de um tutorial com passo a passo do desenvolvimento da aplicação tornaria essa aula muito maçante, eu criei um repositório no github para hospedar o código que vamos elaborar. Para acompanhar as fases do desenvolvimento, vocês podem usar o histórico de commits na branch do projeto. Além disso, vou colocar algumas versões do nosso app no Expo para vocês verem a evolução.

Para acessar a página do branch do projeto no github, [clique aqui](https://github.com/brunoruas2/repositorio_codigos/tree/appReactNative/appReactNative).

### Interfaces

Nessa parte vamos focar nos principais componentes do react native e react native paper. Tente entender bem a utilização desses componentes nos códigos dispostos abaixo.

A ideia é que, com a utilização desses componentes, vocês tenham uma noção de como esses itens podem ajudar na construção das aplicações que vocês mesmos vão construir no futuro.

#### Componentes
##### Appbar
O primeiro componente que é vamos aprender é a barra de título. A documentação oficial desse componente pode ser encontrado nesse [link](https://callstack.github.io/react-native-paper/docs/components/Appbar/AppbarHeader/).

Basicamente a única coisa que a gente precisa fazer é importar o componente `Appbar` na nossa aplicação.

``` js
import React from 'react';
import { Appbar } from 'react-native-paper';

import HomePage from './src/pages/HomePage'

const App = () => {

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Calculadora" />
      </Appbar.Header>
    </>
  );
}

export default App;
```

**Comentário:** Perceba que na parte de retorno da função nós colocamos um par de tags de abertura e fechamento sem nenhum conteúdo (`< >` e `< / >`) isso é importante porque o aplicativo precisa estar encapsulado em uma hierarquia como essa. É como se fosse apenas uma `<div></div>` em um html.


#### TextInput e Button
Agora que a nossa aplicação tem uma barra de título, podemos colocar os campos de inserção dos valores de gasolina e etanol. O componente que recebe input do usuário é o `TextInput` cuja documentação pode ser encontrada neste [link](https://callstack.github.io/react-native-paper/docs/components/TextInput/TextInputIcon/).

Vamos acrescentar, no código anterior, dois campos de inserção de texto e um botão que por enquanto só vai imprimir no console uma mensagem.

``` js
import React from 'react';
import { Appbar, TextInput, Button } from 'react-native-paper';

import HomePage from './src/pages/HomePage'

const App = () => {

    const [gas, setGas] = React.useState('');
    const [eta, setEta] = React.useState('');

  return (
    <>
        <Appbar.Header>
            <Appbar.Content title="Calculadora" />
        </Appbar.Header>

        <TextInput 
        label = "Preço Gasolina"
        value={gas}
        onChangeText={text => setGas(text)}
        />

        <TextInput 
        label = "Preço Etanol"
        value={eta}
        onChangeText={text => setEta(text)}
        />

        <Button icon='alarm-panel' mode='contained' onPress={() => console.log('Apertado!')}>
            Calcular
        </Button>
    </>
  );
}

export default App;
```
**Comentário:** Uma fonte bacana para sabermos quais ícones podemos usar na nossa aplicação pode ser encontrada nesse link do [material-icons](https://pictogrammers.com/library/mdi/).

##### Estilo e View
Podemos elaborar um pouco mais o estilo da nossa aplicação através do componente do react native chamado `StyleSheet`. O funcionamento desse componente é muito similar ao CSS que aprendemos na disciplina de desenvolvimento web front end.

Outro componente que usaremos do react native é a `View`. o funcionamento deste componente é muito parecido com a `div` o html. Ela vai substituir as tags vazias usadas até agora.

``` js
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Appbar, TextInput, Button } from 'react-native-paper';

import HomePage from './src/pages/HomePage'

const App = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Calculadora" />
      </Appbar.Header>

      <View style={styles.body}>
        <TextInput
          style={styles.input}
          label = "Preço Gasolina"
          value={gas}
          onChangeText={text => setGas(text)}
        />

        <TextInput 
          style={styles.input}
          label = "Preço Etanol"
          value={eta}
          onChangeText={text => setEta(text)}
        />

        <Button icon='alarm-panel' mode='contained' onPress={() => console.log('Apertado!')}>
          Calcular
        </Button>
      </View>
    </View>
  );
}

// Componente de Estilo da Aplicação
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  body:{
    margin: 8
  },
  input:{
    backgroundColor: '#FFF',
    marginBottom:9
  }
});

export default App;
```
##### Text
Ainda precisamos de um componente que vai receber a resposta do nosso cálculo. Esse componente será do tipo `Text` e, por enquanto, receberá exatamente o conteúdo do input do preço da gasolina. Mais à frente colocaremos o resultado de um cálculo nele.

A documentação desse componente pode ser encontrada nesse [link](https://callstack.github.io/react-native-paper/docs/components/Typography/Text/).

``` js
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import HomePage from './src/pages/HomePage'

const App = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Calculadora" />
      </Appbar.Header>

      <View style={styles.body}>
        <TextInput
          style={styles.input}
          label = "Preço Gasolina"
          value={gas}
          onChangeText={text => setGas(text)}
        />

        <TextInput 
          style={styles.input}
          label = "Preço Etanol"
          value={eta}
          onChangeText={text => setEta(text)}
        />

        <Button icon='alarm-panel' mode='contained' onPress={() => console.log('Apertado!')}>
          Calcular
        </Button>

        <Text style={styles.text}> {gas} </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  body:{
    margin: 8
  },
  input:{
    backgroundColor: '#FFF',
    marginBottom:9
  },
  text:{
    textAlign:'center',
    margin:8
  }
});

export default App;
```

##### Refatoração
Até aqui, temos uma aplicação minimamente funcional, entretanto, precisamos reorganizar o nosso código para aumentar a produtividade e a manutenibilidade ao longo prazo.

Usaremos a pasta `components` do nosso projeto para guardar esses itens da nossa refatoração. Nesta pasta, vamos criar um primeiro arquivo chamado `Container.js`

``` js
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({children}) => {
    return <View style={styles.container}>
        {children}
    </View>
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    }
});

export default Container;
```

Exatamente a mesma lógica vai ser aplicada nos componentes do cabeçalho, do corpo e dos inputs de texto.

``` js
import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({title}) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
        </Appbar.Header>
    )
};

export default Header;
```

``` js
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({children}) => {
    return <View style={styles.body}>
        {children}
    </View>
};

const styles = StyleSheet.create({
    body:{
        margin: 8
    }
});

export default Body;
```

No caso do input de texto, vamos aproveitar e já colocar o padrão de teclado numérico no nosso dispositivo mobile. Além disso, passaremos Todas as propriedades do `TextInput` para o nosso novo componente de texto.

``` js
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
    return (
        <TextInput
            style={styles.input}
            keyboardType='decimal-pad'
            // Os três pontos indicam que a gente quer
            // receber todas as propriedades do componente
            // TextInput no nosso novo componente
            {...props}
        />
    )
};

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#FFF',
        marginBottom:9
    }
});

export default Input;
```

Agora que conseguimos criar os nossos próprios componentes, podemos atualizar o nosso arquivo `App.js` fazendo uso dessas novas nomenclaturas.

``` js
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Input from './src/components/Input';

import HomePage from './src/pages/HomePage'

const App = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');

  return (
    <Container>
      <Header title={"Calculadora"}/>

      <Body>
        <Input
          label = "Preço Gasolina"
          value={gas}
          onChangeText={text => setGas(text)}
        />

        <Input 
          label = "Preço Etanol"
          value={eta}
          onChangeText={text => setEta(text)}
        />

        <Button icon='alarm-panel' mode='contained' onPress={() => console.log('Apertado!')}>
          Calcular
        </Button>

        <Text style={styles.text}> {gas} </Text>

      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    margin:8
  }
});

export default App;
```
Essa refatoração nos dá duas vantagens. A primeira, é que o texto se torna muito mais legível (lembrando até a estrutura de uma aplicação web). A segunda, é que qualquer mudança que fizermos nos nossos componentes vai ser aplicada a toda a nossa aplicação uniformemente.

O resultado pode ser visto abaixo.

<div data-snack-id="@bruno.ruas2/app-react-native-parte-02" data-snack-platform="web" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>

#### Navegação
Nossa aplicação ainda tem um problema que precisamos resolver: ela tem apenas uma página.

Para podermos trabalhar com mais de uma tela, vamos precisar de um mecanismo de navegação entre páginas.

Ao contrário do que temos em páginas web, em aplicações móveis não temos a utilização de url entre as páginas. Dessa feita, essa limitação precisa ser levada em consideração no desenho de uma boa aplicação móvel.

Ecossistema do react tem um pacote que nos ajuda grandemente nessa tarefa. A documentação oficial pode ser encontrada neste [link](https://reactnavigation.org/).

##### Bottom Navigation
Sem dúvida nenhuma, o principal método de navegação nas aplicações móveis hoje é uma barra com ícones indicando as diferentes páginas do nosso aplicativo. O nome desse tipo de componente do react native é o **Bottom Navigation**.

A documentação desse componente pode ser encontrada nesse [link](https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/).

A primeira coisa que vamos fazer para a criação dessa capacidade é alimentar a nossa pasta de `pages` com 2 páginas novas. A primeira nós chamaremos de `calculadora` e a segunda de `custos`. Dessa forma, nossa pasta do projeto ficará do seguinte modo:

```
- src/
    | - components/
    |   | - Body.js
    |   | - Container.js
    |   | - Header.js
    |   | - Input.js
    | - pages/
        | - HomePage.js
        | - Calculadora.js
        | - Custos.js
- App.js
- package.json
- README.md
```

Além dessa mudança, vamos migrar todo o conteúdo do arquivo `App.js` pra página `Homepage.js`. Desse modo, o `App.js` vai renderizar apenas um componente que chamaremos de `Home`. O código da página inicial está agora contido no arquivo `HomePage.js`.

##### FlatList e List
Agora vamos acrescentar alguma informação na nossa página de custos. O objetivo dessa página é armazenar o histórico de consumo do usuário. Para podermos efetuar esse trabalho vamos precisar de 2 componentes que mostram elementos em listas.

O primeiro é o `FlatList` do react native. O segundo é o `List` do react native paper.

Uma vez que temos dados (por enquanto escritos em um array na própria página), podemos arranjar esses elementos em uma lista com a utilização do componente `List`. Entretanto, antes de criarmos a nossa lista propriamente dita, precisamos renderizar os componentes.

**Comentário:** O código pode parecer um pouco complexo mas na verdade não é. Não se assuste e veja os comentários a respeito de cada item do componente.

``` js
const Custos = () => {

    const renderItem = ({ item }) => (
        <List.Item
            // Uma string do tipo R$ 12.00 (R$ 2.00 x 3.00 L), ou seja, foi gasto 2 reais por 3 litros.
            title={'R$ ' + item.valor.toFixed(2) + ' ( R$ ' + item.preco.toFixed(2) + ' x ' + (item.valor/item.preco).toFixed(2) +' L)'}
            // Apenas a kilometragem do carro com km no final
            description={item.km + 'km'}
            // No lado esquerdo da informação temos a passagem das propriedades da lista para o itens em uma função lambda
            // Esses itens serão do tipo List.Icon herdando a passagem dos parâmetros para cada da lista.
            // Em cada um desses itens, são definidas apenas 2 propriedades: a cor e o ícone.
            // A cor tem um truque na definição porque tem um condicional ternário. Se o id for 0, então a cor é verde, se não, azul.
            left={props => <List.Icon {...props} color={ item.tipo == 0 ? 'green' : 'blue'} icon='gas-station' />}
            // No lado direito, temos algo parecido mas passando as props para um elemento de texto
            // esse elemento tem um style para tamanho da fonte e o seu alinhamento.
            right={props => <Text {...props} style={{alignSelf: 'center', fontSize:10}}> {item.date} </Text>}
        />
    );

    return (...)
}
```

Agora que conseguimos tratar a informação em itens renderizados, podemos passar esses elementos para a construção da lista no retorno do nosso componente `Custos`. Mais especificamente, no body dele por meio de uma `FlatList`.

#### FAB (O botão flutuante)
Temos que viabilizar a inserção de novos dados na aplicação. Para isso, vamos criar um botão flutuante que facilitará essa inserção. Na verdade, vamos fazer um pequeno truque. Ao clicar no botão de adicionar a pessoa vai ser direcionada para uma nova tela.

A documentação desse componente pode ser encontrada neste [link](https://callstack.github.io/react-native-paper/docs/components/FAB/).

Como o nosso código da página de custo já está muito grande, vamos colocar embaixo apenas os pedaços do código que se referem a esse componente.

``` js
import { List, Text, FAB } from 'react-native-paper';

...

const Custos = () => {

  ...
  
  return (
    <Container>
      <Header title={'Gerenciador'} />
      <Body>
        ...
      </Body>
      <FAB
          small
          icon='plus'
          onPress={() => console.log('Quero adicionar!')}
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        />
    </Container>
  )
}

export default Custos;
```

Até agora temos 2 páginas na nossa aplicação. Para navegar entre a página inicial e a página de registros de consumo, nós podemos clicar diretamente no item do menu inferior.

Entretanto, ao clicar no ícone de inserir um novo consumo nós precisaremos de acesso a uma nova página com um formulário de inserção. Aprenderemos como fazer isso na próxima sessão desse micro fundamento.

Podemos ver o estado atual do nosso aplicativo abaixo.

<div data-snack-id="@bruno.ruas2/app-react-native-parte-03" data-snack-platform="web" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>

##### Navegando entre páginas
Como afirmamos agora há pouco, ao clicar no botão de adicionar a pessoa será encaminhada para uma nova página com um formulário de inserção dos dados de consumo. Para isso teremos que usar uma outra técnica de navegação diferente da que usamos no nosso menu de navegação.

A documentação dessa técnica pode ser encontrada neste [link](https://reactnavigation.org/docs/hello-react-navigation).

Da mesma maneira que fizemos antes, temos que criar uma nova página que chamaremos de `Abastecimento.js`. Portanto, nossa pasta do projeto ficará com a seguinte configuração:

```
- src/
    | - components/
    |   | - Body.js
    |   | - Container.js
    |   | - Header.js
    |   | - Input.js
    | - pages/
        | - HomePage.js
        | - Calculadora.js
        | - Custos.js
        | - Abastecimento.js
- App.js
- package.json
- README.md
```

Para que essa técnica funcione, teremos que atualizar o nosso `App.js` com a inclusão de um contêiner de navegação.

Além de habilitarmos a parte de interligação de páginas nós também estamos, de fato, aplicando o conceito de histórico de navegação ao nosso aplicativo. O que torna a aplicação ainda mais complexa do que ela já está sendo feita.

**Comentário:** Agora precisamos revisar alguns conceitos importantes. Aprendemos lá em algoritmos e estrutura de dados o que é uma pilha. Esse conceito vai ser usado no nosso controle do fluxo de utilização que é parecido com histórico de navegador. Quando o usuário sai de uma página para outra, a nossa aplicação vai registrar isso em uma estrutura de pilha onde, caso ele queira retornar para a página anterior, ela vai seguindo a mesma ordem dos procedimentos que foram inseridos só que de trás pra frente.

##### Navegação entre Abastecimento e Custos
Para possibilitar a navegação entre a página de abastecimento e a página de custos precisaremos habilitar um tipo histórico de navegação bem simples. Primeiro vamos criar uma nova pasta chamada `navigations` e um arquivo dentro dela chamado `Main.js` que guardará o nosso fluxo básico de navegação em uma pilha.

```
- src/
    | - components/
    |   | - Body.js
    |   | - Container.js
    |   | - Header.js
    |   | - Input.js
    | - pages/
    |   | - HomePage.js
    |   | - Calculadora.js
    |   | - Custos.js
    |   | - Abastecimento.js
    | - navigation/
        | - Main.js
- App.js
- package.json
- README.md
```

O código desse arquivo que conterá o histórico de navegação pode ser visto abaixo.

``` js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/HomePage';
import Abastecimento from '../pages/Abastecimento';

const Stack = createNativeStackNavigator();

const Main = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{header:() => null}}/>
            <Stack.Screen name="Abastecimento" component={Abastecimento} options={{header:() => null}}/>
        </Stack.Navigator>
    );
}

export default Main;
```

Após isso, no ``App.js`` nos mudaremos a indicação da página Home para Main.

``` js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/navigations/Main' // aqui

const App = () => {

  return (
    <NavigationContainer>
      <Main /> // e aqui
    </NavigationContainer>
  )
}

export default App;
```

Nós queremos habilitar a opção de voltar apenas na página de abastecimento. Por causa disso, nós vamos mudar o nosso componente de header criando uma nova propriedade. Sempre que o nosso header receber uma propriedade chamada `goBack` ele mostrará o ícone de voltar no canto superior esquerdo. Além disso, executará o que quer que passemos no parâmetro de goBack.

O código do componente de cabeçalho ficará desse modo.

``` js
import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack }) => { // Acrescentamos o parâmetro
    return (
        <Appbar.Header>
            // Criamos um teste condicional que só mostra
            // A backaction se o parâmetro goBack foi recebido
            {
                goBack &&
                <Appbar.BackAction onPress={goBack} />
            }
            <Appbar.Content title={title} />
        </Appbar.Header>
    )
};

export default Header;
```

Na nossa página de custos, nós vamos inserir o componente que vai permitir a navegação. Além disso, vamos colocar um comando de navegação para a página de abastecimento assim que o FAB for clicado.

``` js
...

import { useNavigation } from '@react-navigation/native';

const Custos = () => {

  const navigation = useNavigation(); // Componente que permite a navegação
  ...
  
  return (
    <Container>
      <Header title={'Gerenciador'} />
      <Body>
        ...
      </Body>
      <FAB
          small
          icon='plus'
          onPress={() => navigation.navigate('Abastecimento')}
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        />
    </Container>
  )
}

export default Custos;
```

A partir de agora ao clicar no nosso botão flutuante seremos direcionados para a página de abastecimento. Basta agora finalmente criarmos a página de abastecimento que, por enquanto, só terá um texto simples.

``` js
import React from 'react';
import { FlatList } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

const Abastecimento = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title={'Abastecimento'}
        goBack={() => navigation.goBack()}
      />
      <Body>
        <Text>Aqui vai ficar o formulário de abastecimento!</Text>
      </Body>
    </Container>
  )
}

export default Abastecimento;
```

Todas essas mudanças podem ser vistas no aplicativo abaixo. Vá para a página de custos e clique no botão de + para ser direcionado à página de abastecimento. Clique na seta para esquerda para voltar para a página anterior.

<div data-snack-id="@bruno.ruas2/app-reactive-native-parte-04" data-snack-platform="web" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>

### Persistência de Dados
#### SQLite


#### Web API


### Recursos Nativos
#### Câmera


#### Mapa

## Bibliografia
- Bass, Len; Clements, Paul; Kazman, Rick. **Software Architecture in Practice,** Third Edition. Addison-Wesley Professional, 2012.
- Boduch, Adam; Derks, Roy. **React and React Native** - Third Edition. Packt Publishing. 2020.
- Ingeno, Joseph. **Software Architect's Handbook**. Packt Publishing, 2018.
- Richards, Mark; Ford, Neal. **Fundamentals of Software Architecture**. O'Reilly Media, Inc., 2020.
- Valentino Lee, Heather Schneider, Robbie Schell. **Mobile Applications: Architecture, Design, and Development**. Pearson. 2004.