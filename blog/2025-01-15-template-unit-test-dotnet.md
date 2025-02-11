---
slug: template-unit-test-dotnet
title: Template para teste unitário em projetos .NET
authors:
  - ruasbr
tags:
  - tip
  - dotnet
---

Melhor template de teste unitário que eu conheço para projeto .NET

<!-- truncate -->

```csharp
using Microsoft.Extensions.Configuration;
using Moq.AutoMock;
using Xunit;
using AutoFixture;
using Moq;

private readonly IConfiguration _configuration = GetIConfiguration();

public static IConfiguration GetIConfiguration()
{
	return (IConfiguration)new ConfigurationBuilder()
	.SetBasePath(Regex.Replace(Directory.GetCurrentDirectory(), "\\\\bin.+", ""))
	.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
	.Build();
}

public void Test_Should_Do_Something()
{
	// Arrange
	var autoMocker = new AutoMocker();
	var fixture = new Fixture();
	fixture.Behaviors.Add(new OmitOnRecursionBehavior());
	fixture.Behaviors.Remove(new ThrowingRecursionBehavior());
	fixture.Inject(_configuration)

	// create the SUT class with all injection config mocked allready
	var SUT = autoMocker.CreateInstance<ClassOfSut>();
	
	// if you need mock some injection configured behavior
	var someInjectedDependence = autoMocker.GetMock<ClassOfInjectedDependecy>();
	someInjectedDependence.Setup().Returns();
	
	// to create some object
	var someObject = fixture.Build<ObjectClass>()
		.With(x => x.SomePropertie, AsignedValue)
		.Create();

	// rest of the test
}
```