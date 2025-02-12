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

public void First_template()
{
	// Arrange
	var autoMocker = new AutoMocker();
	var fixture = new Fixture();
	fixture.Behaviors.Add(new OmitOnRecursionBehavior());
	fixture.Behaviors.Remove(new ThrowingRecursionBehavior());
	fixture.Inject(_configuration);

	// create the SUT class with all injection config mocked allready
	var SUT = autoMocker.CreateInstance<ClassOfSut>();
	
	// if you need mock some injection configured behavior
	var someInjectedDependence = autoMocker.GetMock<ClassOfInjectedDependecy>();
	someInjectedDependence.Setup().Returns();
	
	// to create some object
	var someObject = fixture.Build<ObjectClass>()
		.With(x => x.SomePropertie, AsignedValue)
		.Create();

	// to create a list of objects
	int qtdToCreate = 10;
	var listObjects = fixture.CreateMany<classObjects>(qtd)
		.Cast<anotherClassIfNeeded>()
		.ToList();

	// rest of the test
}

public void Second_template()
{
	// Arrange
	var autoMocker = new AutoMocker();
	var fixture = new Fixture();
	fixture.Behaviors.Add(new OmitOnRecursionBehavior());
	fixture.Behaviors.Remove(new ThrowingRecursionBehavior());
	fixture.Inject(_configuration);

	// create mocks for each param in this fashion
	var param1Mock = autoMocker.GetMock<param1>().Object;

	// create the SUT class with params mocked
	var SUT = new ClassToSut(param1Mock);

	// rest of the test
}

```