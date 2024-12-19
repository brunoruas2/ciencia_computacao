---
sidebar_position: 8 # ../img/
---

# Lógica Computacional

## Pensamento Lógico

A primeira parte eu já cobri, de maneira mais aprofundada, no projeto matemática. Se quiserem ver um material mais completo, podem conferir na Bibliografia ou no meu [Projeto Matemática](https://github.com/brunoruas2/ProjetoMatematica/blob/main/Book%20of%20Proof%20-%20Richard%20Hammack/book_of_proof.pdf). Provavelmente, essa seção inteira será deletada no futuro e todo o conteúdo dela será desenvolvido pelo projeto matemática.


### Definições
Aqui vai ficar apenas uma lista de todos os conceitos explicados nesse tópico. Se alguém tiver alguma dúvida sobre eles, recomendo ler a bibliografia indicada ou o projeto matemática.


- Conjunto
- Elemento
- Pertencimento e Igualdade
- Propriedades dos conjuntos
- Conjunto vazio
- Tipos de definições de conjuntos (chaves, set builder notation, recursão, característica) 


### Subconjuntos


- Notação $(A \subset B)$
- Diagrama de Venn
- Conjunto Potência (Power Set)
- Sequências (lista de objetos ordenados)


### Operações sobre Conjuntos


- Cardinalidade $(|{1,5,3}| = 3)$
- Emparelhamento: Se X e Y possuem a mesmo cardinal, ao ligarmos cada elemento de X a um elemento de Y, dizemos que os conjuntos estão emparelhados
- Produto Cartesiano: $A \times B = \{(a,b) | a \in A  \land b \in B\}$
- Conjunto Universo/Universal
- Propriedades dos Conjuntos:


- Comutatividade
- Associatividade
- Distributividade
- União e Interseção com Universo
- Complemento Duplo
- Idempotência
- Lei de DeMorgan
- Absorção
- Diferença de Conjuntos
- União e Interseção com Vazio
- União e Interseção com complemento
- Complementos de U e vazio


- Conjunto Disjuntos ($A \cap B = \emptyset$)
- Partição ($A = A_1 \cup A_2 \dots \cup A_n$)


### Princípios da Lógica Proposicional


- Lógica: Ramo da Filosofia, Matemática e Ciência da Computação que lida com 	**inferências válidas**
- Hipóteses vedadeiras $\rightarrow$ Conclusões Verdadeiras
- Asserção: Uma afirmação declarativa
- Proposição: Uma asserção verdadeira ou falsa mas não ambos
- Variáveis Proposicionais: É a variável atribuída à alguma proposição
- Proposições Compostas: Proposições ligadas por operadores lógicos
- Tabela Verdade


### Conectivos Lógicos


- Conectivos: Criam novas proposições a partir de duas ou mais proposições
- Negação ($\neq$)
- Conjunção ($\land$)
- Disjunção ($\lor$)
- Disjunção Exclusva ($\oplus$)
- Condicional ou Implicação ($p \rightarrow q$). Onde p é a hipótese e q é a conclusão
- Bicondicional ($p \rightarrow q \land q \rightarrow p$) ou ($p \leftrightarrow q$)
- Proposições Compostas
- Ordem de Precedência em Proposições Compostas:
- Negação
- Conjunção
- Disjunção
- Implicação
- Implicação Dupla


### Tabela Verdade e Equivalência Lógica
Esse assunto eu realmente recomendo o material do projeto matemática no site Economia Mainstream.


- Tautologia: Uma proposição que sempre será verdadeira
- Contradição ou Absurdo: Proposição sempre falsa
- Contingência: Proposição cujo valor será definido pelas suas variáveis proposicionais
- Equivalência Lógica: Se duas proposições possuem a mesma tabela verdade, elas são equivalentes
- Lógica Proposicional - Sentenças objetivas e não ambíguas, circuitos lógicos, automação de processos e etc


### Predicados e Quantificadores

A proposição $x > 3$ possui dois componentes:

$x$ é chamado de 	**sujeito**

$>3$ é chamado de 	**predicado**


- $P(x)$ é a notação para uma declaração com predicado $P$ e sujeito $x$
- A validade de uma proposição desse tipo depende inteiramente do valor do sujeito
- Quantificador universal: $\{ \forall x \in \mathbb{R} : P(X)\} = \{P(x_1) \land P(x_2)  \land \dots\}$
- Quantificador existencial: $\{\exists x \in \mathbb{R} : P(X)\} = \{P(x_1) \lor P(x_2)  \lor \dots\}$


### Ligando Variáveis

- Uma variável é dita 	**amarrada** quando está atrelada a algum quantificador ou quando algum valor é atribuído a ela
- Se uma variável não está amarrada, então dizemos que ela está 	**livre**
- Um proposição só existe se todas as suas variáveis estiverem amarradas
- Quando atribuímos um quantificador a uma variáveis, dizemos que estamos definindo o seu 	**escopo**
- $\exists x (P(x) \land Q(x)) \lor  \forall x R(x)$ : É uma proposição cujo primeiro escopo é dado por $\exists x$ e o segundo é dado por $\forall x$ 


### Negações

- $\neg \forall P(x) = \exists x \neg P(x)$
- $\neg \exists x Q(x) =  \forall x \neg Q(x)$

## Pensamento Analítico

### Provas de Teoremas
Um 	**teorema** é uma declaração em que pode-se demonstrar a sua validade de maneira lógica. Esse processo é chamado de 	**prova** e obedece aos construdos lógicos que aprendemos na primeira parte desse microfundamento.

Sempre que temos um teorema, podemos reduzir sua estrutura em dois componentes: Sua hipótese ($p$) e sua conclusão ($q$). A prova do teorema é justamente a comprovação que, a partir da hipótese, podemos chegar na conclusão proposta.

A habilidade de comprovar teoremas é a real linguagem da matemática. Requer muita criatividade, lógica e capacidade de ser claro na exposição dos argumentos.

A construção de provas matemáticas deve ter um conjunto de ferramentas que podemos elencar:


- Axiomas/Postulados
- Teoremas já provados
- Hipóteses
- Proposições derivadas as anteriores segundo as regras de inferência


### Regras de Inferência
as regras de inferência são as regras que garantem a obtenção de novas informações a partir de informações anteriores e, simultaneamente, o respeito às regras lógicas.

O 	*modus ponens* (modo de afirmar) é a regra de inferência fundamental. Sua lógica é a seguinte:


- Data a tautologia $(p \land (p \rightarrow q)) \rightarrow q$
- Se $p$ for verdade, então, a tautologia nos diz que será verdade que $p \rightarrow q$
- O que por fim, nos garante que $q$ seja o resultado alcançado com a verdade de $p$


A escrita desse argumento é com a colocação das verdades na parte de cima de uma linha horizontal e das conclusões na parte de baixo.

$p$ 

$p \rightarrow q$

$\therefore q$

Esse "$\therefore$" significa "portanto".

Além da regra fundamental, nós temos uma grande quantidade de outras regras importantes para construção de provas de teoremas. Abaixo podemos ver uma tabela com várias delas.



|                               **Tautologia**                                |       **Nome**       |
| :-------------------------------------------------------------------------: | :------------------: |
|                         $p \rightarrow (p \lor q)$                          |        Adição        |
|                         $(p \land q) \rightarrow p$                         |    Simplificação     |
|                  $((p) \land (q)) \rightarrow (p \land q)$                  |      Conjunção       |
|                 $[p \land (p \rightarrow q)] \rightarrow q$                 |     Modus Ponens     |
|            $[\neg q \land (p \rightarrow q)] \rightarrow \neg p$            |    Modus Tollens     |
| $[(p \rightarrow q) \land (q \rightarrow r)] \rightarrow (p \rightarrow r)$ | Silogismo hipotético |
|                  $[(p \lor q) \land \neg p] \rightarrow q$                  | Silogismo disjuntivo |
|                    $[(p \lor q) \land (\neg p \lor r)]$                     |      Resolução       |


### Argumentos Válidos
Na lógica proposicional, um argumento é dito 	**valido** se sempre que as hipóteses forem verdadeiras, a conclusão será, obrigatoriamente, verdadeira. Em notação formal dizemos que

$p_1 \land \dots \land p_n \rightarrow q$


A demonstração da validade de um argumento depende de como as hipóteses se conectam com as conclusões sempre de maneira lógica segundo o correto uso dos conectivos lógicos já estudados.

Em tese, a construção de uma tabela verdade é sempre possível para um número arbitrário de hipóteses, o problema disso, é que o tamanho dessa tabela cresce na razão de $2^n$ sendo $n$ a quantidade de hipóteses. Para superarmos esse problema, fazemos grande uso das regras de inferência.

Uma premissa 	**falsa** aplicada a uma argumentação logicamente correta gera conclusões falsas. Então a validade das premissas também pode ser um motivo de cuidado na hora de construirmos teoremas.

Uma 	**falácia** é um tipo de erro argumentativo que, à primeira vista, até se parece com um argumento válido, mas possui algum erro na sua construção. Um exemplo é a 	**falácia da afirmação da conclusão** que pode ser expressa como $[(p \rightarrow q) \land q] \rightarrow p$. Essa expressão é falsa quando $p$ é falso e $q$ verdadeiro.

Um exemplo em linguagem natural dessa falácia é "$p \rightarrow q$: Quem resolve todos os exercícios aprende. $q$: Você aprendeu. Logo, $p$: você resolveu todos os exercícios". Veja que, se alguém aprender (o que torna $q$ verdadeiro) mas não fizer todos os exercícios (tornando $p$ falso) quebra a linha de argumentação e torna essa proposição falsa.

Outra falácia conhecida é a 	**negação da hipótese**. Podemos construir ela como sendo $[(p \rightarrow q) \land \neg p] \rightarrow \neg q$. A primeira vista, parece certo, mas não é.

#### Regras de Inferência

**Comentário:** Eu achei que essa parte foi um pouco negligenciada no curso. Devo voltar aqui para expandir esse conteúdo mais tarde. Por enquanto, temos essa tabela de referência.


|      **Regra de Inferência**      |         **Nome**          |             **Nota**              |
| :-------------------------------: | :-----------------------: | :-------------------------------: |
| $\forall x P(x) \rightarrow P(c)$ |   Instanciação Universal   |           c específico            |
| $P(c) \rightarrow \forall x P(x)$ |  Generalização Universal  |           c arbitrário            |
| $\exists x P(x) \rightarrow P(c)$ | Instanciação Existencial  | c específico e não conhecido      |
| $P(c) \rightarrow \exists x P(x)$ | Generalização Existencial |   c específico e conhecido        |



### Indução Matemática
A 	**dedução** é o processo de, a partir de premissas verdadeiras, determinar as conclusões verdadeiras necessariamente oriundas dessas premissas. Ou seja, é o processo de, partindo de um 	**princípio geral** se chegar em um 	**caso especial**.

O processo reverso é chamado de 	**indução**. Partir do caso específico para um princípio anterior geral.

A indução pode ser usada para comprovar teoremas que se relacionam com um número arbitrário de elementos (ou mesmo infinitos elementos). Basicamente, a demonstração por indução consiste em dois passos:


- Passo básico (provar para $P(n=1)$)
- Passo indutivo (Provar que $P(k) \implies P(k+1)$)


Temos que ter cuidado com o passo básico. Afirmar que $P(n=1)$ é verdadeiro 	**não é** provar. Similarmente, no passo indutivo, também não podemos assumir que $P(k)$ é verdade sem tomar muito cuidado. O ideial é que $P(k)$ seja evidentemente verdadeira.
### Indução Forte
Similar ao processo de prova por indução simples. A 	**indução forte** possui 2 passos:


- Provar que $P(n=1)$ é verdadeiro
- Provar que $P(1) \land P(2) \land \dots \land P(k) \implies P(k+1)$


Ao contrário do que o nome sugere, a indução forte é mais flexível que a indução simples. O material é um pouco obtuso nesse tema, então vamos ter que revisar essa seção posteriormente.
### Recursão
As vezes precisamos lidar com sequências, conjuntos ou funções que não são definíveis facilmente. Para conseguirmos um tipo útil de definição, podemos usar um processo chamado de 	**recursão** em que definimos um objeto pela sua característica de composição.

Para uma 	**sequência** definida recursivamente, podemos usar a indução para provar proposições que façam uso dela.

Para um 	**conjunto**, primeiro definimos os elementos iniciais e depois fornecemos uma regra para construção de novos elementos. Para demonstrações com conjuntos recursivos, usamos um método de prova chamado indução estrutural.

Para uma 	**função**, primeiro definimos o passo básico e depois uma rega para encontrar o valor da função no seu domínio definido. Um exemplo famoso disso são os número de Fibonacci onde temos $f_0 = 0, f_1 = 1$ e $f_n = f_{n-1} + f_{n-2} \forall n = 2,3,4,\dots$. 

Existe uma relação entre a recursão e a indução pois, geralmente, objetos construídos recursivamente são demonstrados por meio de indução matemática.
### Especificação de Sistemas
A especificação de sistemas é a capacidade de traduzir linguagem natural para linguagem lógica.


## Bibliografia

- HUNTER, David J. **Fundamentos de Matemática Discreta**. Rio de Janeiro: LTC, 2011
- ROSEN, Keneth H. **Discrete Mathematics and its Applications**. New York: McGraw-Hill, 2019
