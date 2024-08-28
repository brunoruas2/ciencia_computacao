# Programação Orientada à Objetos

## Principais Conceitos

1. Estado e Comportamento
2. Herança
3. Abstração
4. Polimorfismo
5. Encapsulamento
6. Interface x Implementação
7. Herança x Composição

## Estado e Comportamento

Estado é basicamente o nome de propriedades das classes. Comportamento é basicamente os métodos de uma classe (função e void).

## Interface x Implementação

``` c#
public interface IInterface
{
	void Metodo()
}

public class ImplementaInterface : IInterface
{
	public void Metodo()
	{
		// logica do metodo
	}
}

public class UsoImplementacao
{
	public void MetodoNovo()
	{
		var foo = new ImplementaInterface();
		foo.Metodo();
	}
}

public class UsoAbstracao
{
	private readonly IInterface _interface
		
	public UsoAbstracao(IInterface iinterface)
	{
		_interface = iinterface;
	}

	public void MetodoNovo()
	{
		_iinterface.Metodo();
	}
}
```

## Herança x Composição

``` c#
class SuperClasse
{
	public void MetodoQueQueroExpor()
	{
		// void
	}

	public void MetodoQueQueroEsconder()
	{
		// void
	}
}

class SubClasseHeranca : SuperClasse
{
	public void Metodo()
	{
		MetodoQueQueroExport(); // vai funcionar
		MetodoQueQueroEsconder(); // vai funcionar tambem
	}
}

class SubclasseComposicao
{
	public void Metodo() // continuar
}
```