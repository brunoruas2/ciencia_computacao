---
title: Programação Orientada à Objetos
position: 2
---
:::note[Comentário]
Como já vimos bastante dessa parte na disciplina de [programação modular](../../../02-puc/03-segundo-periodo/04-programacao-modular.md) do tecnólogo. Aqui vamos engatar a quinta marcha e passar bem rápido.
:::

## Principais Conceitos

:::warning[Aviso]
Não saia dessa seção sem **decorar** cada um dos conceitos que vamos elencar aqui.
:::

A principal meta de qualquer implementação OOP é, basicamente, "reduzir acoplamento e aumentar coesão". Pois bem, vamos definir cada um desses pontos.

> Podemos definir **acoplamento** como a dependência entre objetos, ou seja, se um deles for alterado, os objetos dependentes também sofrerão mudanças.

> Chamamos de **coesão** o oposto do acoplamento. Onde objetos podem trabalhar livremente lado a lado de modo que os componentes do sistema sejam livres para mudar e evoluir enquanto "servem" seus métodos e procedimentos uns para os outros.

> Chamamos de **classe** a declaração de um objeto  com propriedades. Por sua vez, um **objeto** é a instanciação da classe alocada na memória que será utilizada em tempo de execução.

> Chamamos de **estado** as propriedades contidas em um determinado objeto. Por sua vez, chamamos de **comportamento** as funções e procedimentos contidos em um objeto

<details>
<summary>Exemplo de Estado e Comportamento</summary>
```cs
// Exemplo de estado e comportamento em OOP
using System

namespace AulaConceitos
{
	public class Objeto
	{
		public string Estado1 { get; set; }
		public int Estado2 { get; set; }

		public int Comportamento1(int param1, int param2)
		{
			int result;
			
			// logica do comportamento
	
			return result;
		}
	}
}
```
</details>
