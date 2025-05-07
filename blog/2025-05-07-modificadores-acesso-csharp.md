---
slug: modificadores-acesso-csharp
title: Lista dos Modificadores de acesso do C#
authors:
  - ruasbr
tags:
  - tip
  - dotnet
---
No paradigma da orientação à objetos, temos o conceito de **Encapsulamento** que é um dos seus pilares.

Na prática, a maneira que temos de implementar esse conceito é por meio dos **modificadores de acesso** que determinam o grau da exposição dos nossos estados e comportamentos das classes.

Vamos relembrar eles em c#?

<!-- truncate -->

```cs
public // acesso irrestrito
protected // acesso limitado à classe real ou alguma classe herdada
internal // acesso somente ao assembly (dll) que a classe pertence
protected internal // limitada ao assembly ou classes derivadas em outra dll
private // acesso somente dentro da classe
private protected // acesso limitado dentro da classe ou 
sealed // método não permite alteração por meio da herança
```