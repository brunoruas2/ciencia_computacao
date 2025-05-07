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

> Podemos definir **Acoplamento** como a dependência entre objetos, ou seja, se um deles for alterado, os objetos dependentes também sofrerão mudanças.

> Chamamos de **Coesão** o oposto do acoplamento. Onde objetos podem trabalhar livremente lado a lado de modo que os componentes do sistema sejam livres para mudar e evoluir enquanto "servem" seus métodos e procedimentos uns para os outros.

> Chamamos de **Classe** a declaração de um objeto  com propriedades. Por sua vez, um **Objeto** é a instanciação da classe alocada na memória que será utilizada em tempo de execução.

> Chamamos de **Estado** as propriedades contidas em um determinado objeto. Por sua vez, chamamos de **Comportamento** as funções e procedimentos contidos em um objeto

<details>
<summary>Exemplo de Estado e Comportamento</summary>
```cs
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

		// Aqui temos um exemplo de um Comportamento que altera um Estado
		public void AtualizaEstado1(string novoValor)
		{
			Estado1 = novoValor;
		}
	}
}
```
</details>

> Chamamos de **Herança** [^1] a capacidade de passagem de estados e comportamento entre classes. Nem sempre, o seu uso é aconselhado.

<details>
<summary>Exemplo de Herança</summary>

``` cs showLineNumbers
namespace AulaConceitos
{
	public class ObjetoPai
	{
		public string Estado1 { get; set; }
		public int Estado2 { get; set; }

		public int Comportamento1(int param1, int param2)
		{
			int result;
			// logica do comportamento
			return result;
		}

		// Aqui temos um exemplo de um Comportamento que altera um Estado
		public void AtualizaEstado1(string novoValor)
		{
			Estado1 = novoValor;
		}
	}
	
	public class ObjetoFilho : ObjetoPai
	{
		public string EstadoFilho1 { get; set; }
		public string EstadoFilho2 { get; set; }
		
		public int ComportamentoFilho1(int param1)
		{
			int result;
			// logica do comportamento
			return result;
		} 
	}
}
```

No exemplo acima, o comando `ObjetoFilho.Estado1` seria válido porque o estado da superclasse é herdado pela classe filha.
</details>

> Chamamos de **Abstração** a capacidade de planejarmos (principalmente super classes) estados e comportamentos de modo que criamos as classes sem necessariamente implementar seus comportamentos.

<details>
<summary>Exemplo de Abstração</summary>

:::warning
Classes abstratas **não** podem ser instanciadas. Elas sempre precisam ser herdadas para que seja feito o **polimorfismo**[^2].
:::

``` cs
namespace AulaConceitos
{
	public abstract class ClasseAbstrata
	{
		private readonly int _param1;

		public ClasseAbstrata(int param)
		{
			_param1 = param;
		}

		// Aqui eu defino que a classe do tipo ClasseAbstrata 
		// sempre vai ter os comportamentos 1 e 2 mesmo sem
		// definir o que esses caras fazem (isso vai ser posto na classe filha)
		public abstract Comportamento1();
		public abstract Comportamento2();
	}
}
```
</details>

> Chamamos de **Polimorfismo** a capacidade de mudança que uma classe filha pode ter em relação à classe herdada. Existem 2 tipos: De Inclusão e Paramétrico.

<details>
<summary>Exemplos de Polimorfismo</summary>

```cs
public abstract class ClassePolimorfismoDeInclusao
{
	public ClassePolimorfismo() {}

	// Esse método obrigatoriamente precisa receber override (polimorfismo de inclusao)
	public abstract void ComportamentoAbstrato()

	// Esse método possui uma lógica padrão mas permite override 
	// (outro tipo de polimorfismo de inclusão)
	public virtual void ComportamentoVirtual()
	{
		// lógica do void
	}

}
```

```cs
using System;

namespace ExemploPolimorfismoParametrico {
    // criacao da classe generica
    // o termo "paramétrico" vem justamente do fato que essa classe recebe 
    // qualquer tipo de objeto no parâmetro <T> 
    public class Conjuntos <T> { 
        // criacao de uma funcao como membro estatico
        // que retorna um booleano para os vetores "s" e "w"
        // do tipo de dado definido por "<T>"
        public static bool disjuntos(T[] s, T[] w)
        {
        // loop em todos os elementos do vetor "s"
        for (int i = 0; i < s.Length; i++)
        {
            // loop em todos so elementos do vetor "w"
            for (int j = 0; j < w.Length; j++)
            {
                // Teste: O elemento s[i] é igual ao w[j]?
                // se sim, eles possuem algum elemento em comum
                // logo, nao sao conjuntos disjuntos!
                if (s[i].Equals(w[j]))
                    return false;
            }
        }
        // se nenhum dos elementos dos dois conjuntos
        // for igual ao do outro, entao sao conjuntos
        // disjuntos!
        return true;
        }
    }
    // Programa Principal
    class MainClass {
        public static void Main(string[] args) {
            if (Conjuntos<int>.disjuntos(new int[] {1,3,5}, new int[] {2,4,6}))
            {
                Console.WriteLine("Conjuntos Disjuntos!");
            } else
            {
                Console.WriteLine("conjuntos não Disjuntos!");
            }
        }
    }
}
```
</details>

> Chamamos de **Encapsulamento** a gestão da exposição dos métodos das classes (sendo públicos ou privados) através dos [modificadores de acesso](../../../../blog/modificadores-acesso-csharp).

<details>
<summary>Exemplo de Encapsulamento</summary>

```cs
public class ExemploEncapsulamento
{
  private string EstadoPrivado1 { get; set; }
  
  public SetEstadoPrivado1(string valor)
  {
    EstadoPrivado1 = valor; // define valor privado
  }
  
  public string GetEstadoPrivado1()
  {
    return EstadoPrivado1; // retorna valor privado
  }
}
```
</details>

[^1]: Provavelmente o conceito mais importante da OOP.

[^2]: Nós vimos esse conceito na aula de Programação Modular.
