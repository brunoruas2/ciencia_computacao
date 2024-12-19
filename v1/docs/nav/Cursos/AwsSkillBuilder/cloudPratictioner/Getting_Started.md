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

There are 2 main types of **containger orchestration services** offer by AWS:
- Amazon Elastic Container Service (AWS ECS)
- Amazon Elastic Kubernetes Service (AWS EKS)

Not much information was given in the material (need to deeper in the future).

## Storage

### Amazon Simple Storage Service (AWS S3)

We can aggregate the S3 benefits in two main categories:

- **Durability** of 99.999999999 (this is the actual number, no joke)
- **Support for event triggers** that be able to be used in event-driven applications with usage of lambda for example

#### S3 classes

[Link for official documentation](https://aws.amazon.com/pt/s3/storage-classes/)

There are four classes that can be used to improve the benefits of S3 usage and maintain de cost at minimum possible.

1. Standard: <br> Low latency and high throughput
2. Intelligent-Tiering: <br> Tries to low the cost automatically moving the data to less-expensive s3 classes by volume of requests. Latency of milliseconds and high performance.
3. Express One Zone: <br> Runs in only one AZ. One digit milliseconds latency.
4. Standard-IA: <br> For data with infrequent access by low latency when necessary.
5. One Zone-IA: <br> Same of standard by runs in a single AZ with a reduce in 20% of the cost.
6. Glacier Instant Retrieval: <br> Low cost for data with long storage prevision but required milliseconds latency when necessary.
7. Glacier Flexible Retrieval: <br> For data needed one or two times a year and with high latency. 10% less expensive if compared with Glacier instant retrieval.
8. Glacier Deep Archive: <br> For clients that need to store data up do 7 years for due diligence or accountability purposes.
9. Outposts: <br> For data that need to be on-premises, AWS offers a way to run a kind of local AWS server locally and still have the AWS APIs to interact with the infra.


#### Use Cases 

- Content storage and distribution
- Backup and archiving
- Build a data lake
- Backup and restore critical data
- Archive data
- Run cloud-native apps

### Amazon Elastic Block Store (AWS EBS)

EC2 instances didn't have persistence in data. When the EC2 instance dies, the data is gone. But with EBS you can persist data which can be used by EC2 instances.

Has incremental snapshots.

Has encrypt option to all the data in the volume. And data traveling between instance and EBS is encrypt as well. Even the past data stored in snapshots become encrypted.

The amount of SSD/HDD volume can be defined and scale only if needed.

To remember: EBS is like a virtual SSD for EC2 instances. 

### Amazon Elastic File System (AWS EFS)

If you need a serverless shared file system solution, you will need AWS EFS.

Four types:
- NetApp ONTAP
- Open ZFS
- Windows File Server
- Lustre

## Databases

### Overview

There's a lot of database solutions on AWS. We will do some brief overlook in the types and solutions available in the AWS Ecosystem.  

### Relational Databases

The more tradicional type of DBMS. Works with traditional applications, ERPs, CRMs and other types of well-know demands.

- **Amazon Aurora**: <br> MySQL or PostgreSQL compatible relational database for cloud that can run in multi AZ replicas.
- **Amazon RDS**: <br> A web service that can run in **multiple AZs** for high availability. You can user RDS with a lot of engines like Aurora (MySQL or PostegreSQL), MariaDB, Oracle, SQL Server, MySQL and PostegreSQL.
- **Amazon Redshift**: <br> A  data warehouse that uses **columnar storage** that enable complex queries over analytical data workloads.

### Key-value Databases

Well suited for high-traffic web apps, e-commerce systems and gaming.

- **Amazon DynamoDB**: <br> Achieve a single digit millisecond latency serverless non-relational database.
### In-memory Databases

For demands of really fast response and not long term storage like caching, session management, gaming leaderboards, geospatial apps.

- **Amazon ElastiCache**: <br> Microsecond latency scalable caching service.
- **Amazon MemoryDB for Redis**: <br> The redis approaching in the AWS ecosystem. 

### Document Databases

Content management, catalogs, user profiles are some of example of usage.

- **Amazon DocumentDB**: <br> With MongoDB compatibility, can scale JSON workloads.

### Wide Column Databases

Here is a [link](https://budibase.com/blog/data/wide-column-database/) for an article that discuss what is a wide column database. In (really) short, is a type of column database that is better suited for infrequent attributes in each entry (like attributes of products in a e-commerce SaaS).

- **Amazon Keyspaces**

### Graph Databases

Better suited for fraud detection, social networking, recommendations engines and so on.

- **Amazon Neptune**: <br> Focus on **relationship** between data for highly connected datasets.

### Time Series Databases

For really intensive metrics over time like IoT, DevOps, Telemetry per exemple.

- **Amazon Timestream**: <br> Can store and analyse trillions of events per day.

### Ledger Databases

Systems of record, supply chain, registrations, banking transactions are some applications.

- **Amazon Quantum Ledger Database (AWS QLDB)**: <br> Transparent, immutable and cryptographically verificable.

## Networking

### Amazon VPC

Is a private network that provides logical isolation for the workloads. You can control the traffic in and out a VPC.

The gate of a VPC is a **Internet Gateway**.

### Amazon Route 53

A high available cloud DNS service. Can be used to domain registration, DNS routing and heal checking.

### Elastic Load Balancing

Like others Load Balance applications, the Elastic Load Balancing is a web service that control de inflow of traffic and redirect between the EC2 instances available (and can escalate the instances if necessary) in one ou more AZs.

## Security

### Shared Responsibility Model

Even the AWS and the client are responsible for the security either **in** the cloud and **of** the cloud. The each share of responsibility is defined by the so called **Shared Responsibility Model**.

#### Customer Responsibility

Basically, the customer is responsible for the security **of the cloud**. To list some of his part:

- Platform, apps and identity access management
- Operation system, network and firewall config
- Client-side data and data integrity auth
- Server-side encryption
- Network traffic protection

and so on.

#### AWS Responsibility

The AWS' part is the infrastructure of the cloud:

- AWS software
- Hardware and AWS global infra

### AWS Compliance

To permit that the client achieve their goal of maintain the security in the cloud. AWS create a handful Security Services:

- AWS Identity and Access Management (AWS IAM) to control access
- AWS Artifact to generate on-demand compliance reports
- AWS Key Management Service (AWS KMS) to generate, manage and rotate encryption keys
- AWS Shield to protect from DDoS attacks

### AWS Trust Advisor

Service that help the customer to reduce cost, increase performance, fault tolerance, services quotas and improve security by recommendations that help the customer to achieve the best practices.

## Pricing

Pricing concepts used by AWS:

- Pay for what you use
- Pay less when you reserve
- Pay less with volume-based discounts
- Pay even less as AWS grows

### EC2  Pricing

There are three categories of purchasing:

- On-demand instances:
	- Charged per hour
	- Short-term
	- Best fit on unpredictable workloads
- Reserved Instances/Saving Plans
	- Discount by 1 or 3 year commitments
	- Larger the upfront payment, lager the discount
	- Two offering classes:
		- Standard Reserved Instances -> you can modify AZ, scope, networking type and instance size in the same EC2 family
		- Convertible Reserved Instances -> you can exchange EC2 instances of different EC2 family, OS and tenancy
- Spot Instances
	- Up to 90% discount
	- Best fir for aplication with flexible start and end

### AWS Free Tiers

There are three types:

- Always free
- 12 months free
- Free trials



# Next Steps

There are 12 AWS certifications.

There are four levels of expertise in AWS certifications:

1. Foundational
2. Associate
3. Professional
4. Specialty