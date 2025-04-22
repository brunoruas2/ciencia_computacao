---
title: Introdução
position: 1
---

## O que é Arquitetura de Software?

Podemos usar essa resposta do [stack overflow](https://pt.stackoverflow.com/questions/25403/qual-a-diferen%c3%a7a-de-arquitetura-e-engenharia-de-software) como um ponto de partida para nossa discussão.

Como regra de bolso, podemos pensar que a **Engenharia de Software** é o grande conjunto das habilidades de construção de programas e sistemas desde sua concepção até a entrega e manutenção. Por sua vez, a **Arquitetura de Software** é uma sub-área da engenharia que lida com o desenho e definição dos componentes que farão parte da solução entregue.

Pela ISO/IEEE 42010-2011, podemos conceituar Arquitetura como:

> A organização fundamental de um sistema incorporada em seus **componentes**, **relacionamentos** com o ambiente e os **princípios** que conduzem o seu design e evolução.

## Qual o momento ideal para aprender sobre Arquitetura?

Na minha opinião, o momento ideal para aprender a arte de planejar soluções de software é após a fase em que você é capaz de construir software minimamente útil e funcional. Mais especificamente, na fronteira entre júnior e pleno.

Para ser mais claro, depois que você tiver terminado de estudar pelo menos o ciclo básico[^1] e **também** tenha alguma vivência do mundo real[^2].

## Contexto Histórico

Antigamente, a maneira de se hospedar aplicações (principalmente no ambiente corporativo) era bem diferente de como é feito hoje com a chegada do **cloud** como principal meio de hospedagem.

Aliado à evolução de "onde" colocar seus programas, vieram também as mudanças em "como" o processo de construção de sistemas é feito (por exemplo, o surgimento das metodologias ágeis).

```mermaid
timeline
	title Evolução do processo de software
	Muito Antigo : Cascata/Prescritivo
	: Monolitos
	: Servidores Físcos
	Antigo : Agile
	: Apps em N camadas
	: Virtualização de Servidor Privado
	Atual : DevOps
	: Microserviços e APIs
	: Containers e Cloud Hibrida
	Futuro : NoOps
	: Serverless Service
	: Serverless Computing
	
```

Não se engane. A depender de onde você vai trabalhar, é plenamente possível encontrar demandas que ainda envolvam aplicações monolíticas em servidores físicos[^3].

## Perfil de Arquiteto

No geral, um arquiteto tem que ser capaz de pensar acima do simples fato de produzir código executável para uma camada de abstração de **como** criar soluções.

Existem alguns tipos de enfoques possíveis a depender da responsabilidade que a pessoa irá executar. A ISA elenca os seguintes tipos no seu site:
1. [Solution Architect](https://www.iasaglobal.org/solution-architecture/)
2. [Business Architect](https://www.iasaglobal.org/business-architecture/)
3. [Software Architect](https://www.iasaglobal.org/software-architecture/)
4. [AI Architect](https://www.iasaglobal.org/ai-architecture/)
5. [Integration Architect](https://www.iasaglobal.org/integration-architecture/)
6. [Agile Architect](https://www.iasaglobal.org/agile-architecture/)
7. [Hybrid Infrastructure Architect](https://www.iasaglobal.org/hybrid-infrastructure/)

Nas nossas aulas, vamos focar no papel desempenhado pelo **Arquiteto de Software**.

### Arquiteto de Software

Esse perfil de Arquiteto tem como objetivo a projeção de aplicações baseada em boas práticas de desenvolvimento. Tem como artefatos os modelos de referência para produção de soluções dentro da empresa.

Está fortemente alinhado com a área de negócio e a gestão estratégica da empresa visto que existem restrições de negócio que podem [^4] impactar no desenho da solução necessária.

## Bibliografia

1. The Open Group Architecture Framework (TOGAF). [link aqui](https://archive.org/details/togaf9.2/mode/2up). É o manual mais completo e complexo sobre todo o processo de arquitetura.
2. ISO 42010/2011. [link aqui](https://cdn.standards.iteh.ai/samples/50508/ec3d9367f48e4b28a7ac8dddaeca5a3f/ISO-IEC-IEEE-42010-2011.pdf)
3. [Site da Global IT Architects Association](https://iasaglobal.org/)

[^1]: Como o material do Tecnólogo em ADS aqui do site ☺️.

[^2]: Seja trabalhando ou fazendo freelance.

[^3]: E você deve ficar contente com a oportunidade de "tocar" no passado para ver como o modelo atual é melhor.

[^4]: E provavelmente, vão.
