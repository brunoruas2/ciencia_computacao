---
sidebar_position: 2 # ../img/
---

# Terminologia

Eu coloquei aqui os principais jargões e conceitos relacionados à área de AI Engineering afim de sabermos o que cada buzz word quer dizer de verdade bem como as fontes de onde esses resumos foram tirados.

## Conceitos

### Prompt Engineering
É a arte de criar inputs para os modelos que produzam resultados acurados, constantes e úteis. Normalmente, usando contexto, instrução e exemplo para direcionar o resultado corretamente.

Fontes: [Youtube](https://www.youtube.com/watch?v=nf1e-55KKbg), [Roadmap](https://roadmap.sh/prompt-engineering)

### Retrieval-Augmented Generation - RAG
Abordagem que combina a recuperação de informação com um modelo para criar retornos contextualizados. Primeiro, coletamos informação relevante em uma knowledge base para, depois, consultar o LLM para gerar respostas baseadas nessa informação.

Fontes: [Datacamp](https://www.datacamp.com/blog/what-is-retrieval-augmented-generation-rag), [Google](https://cloud.google.com/use-cases/retrieval-augmented-generation), [Youtube](https://www.youtube.com/watch?v=T-D1OfcDW1M)

### AI Agents
Criados por instruções, conhecimento e ações. São softwares criados para executar tarefas mas que possuem uma ampla habilidade de decidir o "como" fazer essas tarefas. No core de um agent estão as LLMs que, por si só, não produzem nada além de texto.

Fontes: [Youtube](https://www.youtube.com/watch?v=MOyl58VF2ak), [Play.ht](https://play.ht/blog/ai-agents-use-cases/), [Langchain](https://python.langchain.com/docs/tutorials/agents/)

### AI Agent Developer
Alguém que é responsável por customizar LLMs contidas em AI Agents para processos dedicados e internos como empresas de modo que a AI consegue ter acesso à ferramentas, conhecimento, infra necessária para realmente ter impacto nas empresas.

Fontes: [Youtube](https://www.youtube.com/watch?v=MOyl58VF2ak), [Play.ht](https://play.ht/blog/ai-agents-use-cases/), [Langchain](https://python.langchain.com/docs/tutorials/agents/)

### Vector Databases
São modelos de banco de dados otimizados para encontrar proximidade entre seus elementos uma vez que guardam valores baseados em uma lista de números. Além disso, permitem long term memory para modelos de aprendizado de máquina existentes de modo que, sem eles, seria necessário fazer o treinamento específico (chamado de fine-tuning) para adicionar novos conhecimentos aos LLMs. São centrais para RAG também.

Fontes: [Cloudflare](https://developers.cloudflare.com/vectorize/reference/what-is-a-vector-database/), [Mongodb](https://www.mongodb.com/resources/basics/databases/vector-databases)

### Embedding
Processo de converter inputs em vetores numéricos de várias dimensões. Desse modo, os modelos conseguem encontrar relações de similaridade baseado nos valores dos vetores.

Fontes: [Youtube](https://www.youtube.com/watch?v=wgfSDrqYMJ4),[Cloudflare](https://www.cloudflare.com/en-gb/learning/ai/what-are-embeddings/),[IBM](https://www.ibm.com/think/topics/embedding)

### Model Training
É o processo de usar um dataset para consumo de um algoritmo de ML de modo que o resultado da ingestão da informação é comparado com o resultado da amostra para que o modelo produza resultados próximos do esperado. Pode ser supervisionado ou não.

Fontes: [AWS Documentation](https://docs.aws.amazon.com/machine-learning/latest/dg/training-ml-models.html), [Domino AI Blog](https://domino.ai/blog/what-is-machine-learning-model-training), [Oden Glossary](https://oden.io/glossary/model-training/)

### Inferência
É o processo que um modelo já treinado usa para definir o output para dados novos. Diferente do treinamento, a inferência não possui gabarito[^1].

Fontes: [Cloudflare](https://www.cloudflare.com/pt-br/learning/ai/inference-vs-training/), [Hazelcast Foundations](https://hazelcast.com/foundations/ai-machine-learning/machine-learning-inference/), [DataCamp Blog](https://www.datacamp.com/blog/what-is-machine-learning-inference)

### Large Language Models - LLM 
Programa de AI treinado em um conjunto de dados massivo (centenas ou milhões de gigas) que são construídos através de machine learning, mais especificamente, por um tipo de rede neural (neural network) chamada transformer model e que possuem a capacidade de receber e gerar text.

Fontes: [Cloudflare](https://www.cloudflare.com/en-gb/learning/ai/what-is-large-language-model/), [YouTube](https://www.youtube.com/watch?v=5sLYAQS9sWQ), [YouTube](https://www.youtube.com/watch?v=osKyvYJ3PRM)

### Artificial Intelligence - AI
Artificial Intelligence é um conjunto de várias subáreas. A ideia é superar ou equiparar a capacidade de um ser humano em descobrir informações novas, inferir dados baseados em inputs e capacidade de ponderar cenários e resultados.

Fonte: [Youtube](https://www.youtube.com/watch?v=4RixMPF4xis)

### Machine Learning - ML
Uma das áreas da AI é o Machine Learning que se refere ao treinamento de programas através da ingestão de dados para identificar features sem intervenção humana direta no "como" identificar. Pode ser com supervisão humana para avaliar os resultados ou não.

Fonte: [Youtube](https://www.youtube.com/watch?v=4RixMPF4xis)

###  Deep Learning e Neural Networks
Deep Learning é um tipo de ML que usa probabilidade e camadas para que o modelo se treine sem contato direto humano. Por sua vez, Neural Network é a arquitetura dos modelos que usam um sistema "parecido" com um cérebro humano.

Fontes: [Cloudflare](https://www.cloudflare.com/en-gb/learning/ai/what-is-large-language-model/)
 
### AI vs AGI
Artificial General Intelligence (AGI) é um campo teórico de pesquisa que tem como objetivo criar software com capacidade de inteligência comparada à humana e capacidade de autoensino, basicamente, um programa que pode aprender qualquer coisa. AI já possui um escopo fechado onde os programas utilização restrições (como a quantidade de parâmetros) para resolver tarefas pré-definidas e que foram treinad.

Fontes: [AWS - Artificial General Intelligence](https://aws.amazon.com/what-is/artificial-general-intelligence/), [Forbes - Difference Between AI and AGI](https://www.forbes.com/sites/bernardmarr/2024/05/20/the-crucial-difference-between-ai-and-agi/)


[^1]: Nem sempre tem gabarito para os treinamentos também, vide aprendizado não supervisionado.
