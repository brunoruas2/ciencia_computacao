# Overview 

CLOUD = Programmable Resources + Dynamic Abilities + Pay as you go

Ways to interact with AWS:
- AWS Management Console (site)
- AWS Command Line Interface (AWS CLI)
- AWS System Development Kits (AWS SDKs)

AWS Core Areas
- Compute
- Storage
- Databases
- Networking
- Security

# Understanding the AWS Global Infra

Data Center -> Availability Zone -> AWS Region
# Core Services Overview

## Compute

There are some options of cloud compute, to list a fell:

1. Virtual Machines
2. Containers
3. Batch Processing Compute Resources
4. Serverless Compute

Amazon Elastic Compute Cloud (EC2) -> The principal option of **virtual machine** in aws ecosystem.

### EC2 types

[Link da documentação oficial](https://aws.amazon.com/pt/ec2/instance-types/)

1. Memory Optimized (focus on RAM)
	1. Types: r4, r5, x1, z1
	2. Use Case: Open-source databases, in-memory caches, and real-time big data analytics
2. Accelerated Computing (focus on GPU)
	1. Types: f1, g3, g4, p2, p3
	2. Use Case: ML models, computational fluid dynamics, graphical workloads
3. Storage
	1. Types: d2, h1, i3
	2. Use Case: I/O intensive and business-critical workloads
4. General
	1. Types: a1, m4, m5, t2, t3
	2. Use Case: Web servers and code repositores
5. Compute (focus on CPU)
	1. Types: c4, c5
	2. Use Case: High performance web servers, high performance computing (HPC), scientific modeling, dedicated gaming servers and ad server engines, machine learning inference
6. High Performance Computing (HPC)
	1. Types: Hpc6a, Hpc6id
	2. Use Case: Large, complex simulations and deep learning overloads

#### Amazon EC2 Auto Scaling

The same content we learned before.

### Severless

Building and running applications without managing servers at al!

Keep in mind that **serverless doesn't run idle resources**, so you pay what you need.

#### AWS Lambda

Some benefits:

1. Multiple languages
2. Stateless code
3. Code can run on schedule or by trigger
4. Pricing by milisec of usage
5. Event-driven architectures
6. Totally scalable
7. High availability

Some exemples of usage:

1. Web apps
2. Backend
3. Data processing
4. Chatbots
5. Alexa
6. IT automation

### Containers

Amazon Elastic Container Service (AWS ECS) and Amazon Elastic Kubernetes Service (AWS EKS) are **containger orchestration services**. 

## Storage

## Databases

## Networking

## Security

## Pricing

