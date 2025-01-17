---
slug: template-retry-dotnet
title: Template de Retry para processos iterados em .NET
authors:
  - ruasbr
tags:
  - tip
  - dotnet
---

Template de aplicação de Policy para tentativas em processos iterados.

<!-- truncate -->

```csharp
private static TimeSpan GetIntervalInLoop(int retry) => TimeSpan.FromSeconds(Math.Pow(2, retry));

await Policy
	.Handle<Exception>()
	.WaitAndRetryAsync(N_TENTATIVAS, (x) => GetIntervalInLoop(x))
	.ExecuteAsync(async () =>
	{
		// bloco de código a ser executado
	});
```