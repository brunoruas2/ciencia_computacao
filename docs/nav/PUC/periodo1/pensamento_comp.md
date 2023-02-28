<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark-reasonable.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

## Assuntos
- [Conceitos e Competências de Pensamento Computacional](#conceitos-e-competencias-de-pensamento-computacional)
- [Computação Desplugada](#computacao-desplugada)
- [Bibliografia](#bibliografia)



## Conceitos e Competências de Pensamento Computacional
Existem divergências quanto ao significado preciso desse conceito, contudo, as interpretações vigentes costumam convergir para a definição que o pensamento computacional é a maneira de organizar o raciocínio de modo a pensar de maneira organizada, lógica e propor soluções úteis para os problemas propostos.

Podemos elencar alguns pilares que fundamentam o processo de pensamento computacional:


- Abstração - Construção de um modelo simplificado da questão.
- Decomposição - Separação do problema em diferentes partes.
- Reconhecimento de Padrões - Identificação de processos que se repetem.
- Automação (aka Algoritmo) - Construção de um processo de solução do problema.


Além desses passos, podemos acrescentar mais algumas etapas ao esforço de solução de problemas:


- Paralelização - Etapas paralelas e independentes.

    - Particionamento de Dados - Quebra de um grande volume de dados para processamento paralelo e posterior união do resultado.
    - Particionamento de Tarefas - Quebra do processo em diferentes unidades executoras paralelas.

- Simulação - Simplificação do caso real para melhor compreender o problema.
- Avaliação de Soluções - Análise dos impactos das soluções propostas.


É importante é saber que pensamento computacional não é pensar como um computador e sim de maneira organizada.

Esses passos não são necessariamente seguidos nessa ordem[^1]. Podemos pensar nessa lista como etapas necessárias mas não sucessivas. Agora veremos um pouco mais sobre cada uma delas.

[^1]:Embora, na minha opinião, faz todo sentido seguir nessas etapas mesmo.

## Computação Desplugada
O foco dessa seção é elencar algum problemas que podem ser resolvidos com algoritmos que foram construídos usando o uso das etapas aprendidas na seção anterior.

Várias situações que nós encontramos no processo de construção de uma solução podem ser entendidas como análogas a algum dos problemas elencados aqui. Por isso é bom manter anotações sempre que aprendermos uma técnica de resolução nova para um problema.


- Compresão de Texto: <br>
		 Resolvido com a substituição de seções longas por caracteres menores antes da transmissão. Depois enviamos as regras de codificação para processamento da mensagem original. Tópico teórico: Teoria da Informação; Codificação.
- Adivinhação de um Número: <br>
		Basta ir perguntando pela metade das opções. Essa é a solução de menor rodadas. Tópico teórico: Árvore de Decisão; Eficiência de Algoritmos.
- Problema do Caixeiro Viajante: <br>
		Construção de um grafo e escolha do caminho de menor soma entre as distâncias dos nós. Tópico teórico: Teoria dos Grafos.
- Nonograma: <br>
		Procurar as regras de construção das imagens para cada linha até que se tenha um conjunto de regras para ser aplicadas nas instruções iniciais. Desafio difícil de implementar por linguagem de programação. Tópicos teóricos: Abstração; Modelagem.

## Bibliografia

- BEECHER, Karl. **Computational Thinking - A beginner's guide to problem-solving and programming**. Swindon, UK: BCS Learning \& Development Limited, 2017. (O´Reilly) EPUB ISBN-13: 978-1-78017-36-65
- FORBELLONE, André Luiz Villar; EBERSPACHER, Henri Frederico. **Lógica de programação: a construção de algoritmos e estruturas de dados**. 3. ed. São Paulo: Prentice Hall, 2005. xii, 218 p. ISBN 8576050242
- MANZANO, José Augusto N. G; OLIVEIRA, Jayr Figueiredo de. **Algoritmos: lógica para desenvolvimento de programação de computadores**. 28. ed. rev. e atual. São Paulo, SP: Érica, 2016. ISBN 9788536518657
- GUEDES, Sérgio (Org). **Lógica de programação algorítmica**. São Paulo: Pearson, 2014. ISBN 9788543005546
- MANZANO, José Augusto N. G. **Estudo dirigido de algoritmos**. 15. São Paulo Erica 2011 1 recurso online ISBN 9788536519067
- SOUZA, Marcos Fernando Ferreira de. **Computadores e sociedade: da filosofia às linguagens de programação**. Editora Intersaberes 208 ISBN 9788559722116
- TORRES, Fernando E. et al. **Pensamento computacional**. Porto Alegre: SAGAH, 2019. ISBN 978-85-9502-997-2
- FORBELLONE, André Luiz Villar; EBERSPACHER, Henri Frederico. **Lógica de programação: a construção de algoritmos e estruturas de dados**. 3. ed. São Paulo: Prentice Hall, 2005. xii, 218 p. ISBN 8576050242
