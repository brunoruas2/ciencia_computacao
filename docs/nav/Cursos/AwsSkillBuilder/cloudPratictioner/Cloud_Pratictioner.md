# Notas Rápidas de Estudo AWS

## Module 1 - Intro + Module 2 - The Cloud

Cloud computing -> pay as you go withou pay beforehand.

Ec2 (elastic cloud computing).

Ec2 types -> general, compute, memory, accelerated and storage.

Ec2 pricing -> on-demand, reserved (type, plataform or tenancy), saving plans (1 or 3 years), spot 
(90% off, runs in not used machines at time) and dedicated hosts.

Load balance

Lambda

SNS -> Topic post

SQS -> Message broker

ECS -> EKS da amazon

EKS -> orquestrador de containers docker

AWS Fargate (serveless para containers)

## Module 3 - Global Infra and Reliability

4 factors to chose region (compliance, proximity, features and price).

Availability Zone (AZ) -> group of data centers indicates in final of a region ex es-east-1a, b or c.

AWS Regions -> group of az isolated geographically

Edge Location -> cache coping to places there are not close to a region to reduce the latency that use AWS Cloudfront to deliver.

AWS Cloudfront -> CDN da amazon.

AWS Route 53 -> DNS da amazon.

AWS Outpost -> an kind of mini region run by amazon inside our building.

how to create/update aws resources -> AWS Management Console (Browser), AWS CLI, AWS SDKs, AWS Elastic Beastalk and AWS Cloudformation.

AWS Elastic Beanstalk -> Ferramenta que faz deploy de app php, .net, java, python e etc. Baseados em alguns presets.

AWS Cloudformation -> Infra as code tool (yaml or json).

Advice: run at least across 2 AZ in each region.

## Module 4 - Networking

AWS VPC -> Provision of isolated aws cloud separated by subnets that contains resources.

Subnet -> A group of resources based on security or operacional needs. Can be public (through a internet gateway) or private (through a vpc).

Internet Gateway (IGW) -> Used to allow internet access to a VPC.

AWS Virtual Private Gateway -> A virtual VPN to my vpc and a private network (aka intranet).

AWS Direct Connect -> Dedicated private connection fiber with a AWS Direct Connect endpoint.

Packet -> A unit of data sent over the internet or network

Acces Control List (ACL) -> The component that checks packets permitions for subnets. Default is to allow in and out traffic.

Security Group -> The component that check packets permission for aws components (like ec2). Is Stateful and returns always allowed. Default is block in and allow out traffic.

Edge Location

AWS Cloudfront

AWS Route 53

## Module 5 - Databases and Storage

Block Level Storage -> Place to store file in a way that can be updated block by block and not by the hole file

EC2 Storage -> Instance Store Volumens that dies within the ec2 machine

AWS Elastic Block Store (EBS) -> A way to save persistence data for ec2 instances. Block storage that can be updated partially. Run in a AZ (not region). Kind of SSD/HDD for EC2.

Snapshots -> Incremental backups for EBS

AWS Simple Store Service (S3) -> Store data as objects with versions in buckets (like a file equivalent). Can receive objects until 5TB!

S3 Lifecycle Policies -> Rules that can move data for s3 tiers automatically for better storage and cost

S3 Classes aka Tiers ->

- Standard (99.9999999% prob of availability in a year)
- Static Website Hosting
- Standard-Infrequent Access Data aka Standard-IA (not so frequently until we need it, like a backup)
- Glacier Flexible Retrieval (Retain data for audit or compliance in valts). Accept policies like Write one - read many (worm)

AWS Elastic File System (EFS) -> Is a serverless shared file system. Scales automatically. Run in a region. Can be access by premises by AWS Direct Connect.

AWS Relational Database Service (RDS) -> Support dbms with automated patching, backups, redundancy, fail over and disaster recovery

lift-and-shift -> Migrate from an on-premisses dbms

AWS RDS database engines ->

- AWS Aurora (compatible with MySQL and PostegreSQL)
- MySQL
- PostegreSQL
- MariaDB
- Oracle
- MSSQLServer

AWS DynamoDB -> Serverless database. NoSQL with item + attribute. Purpose built.

Data warehouses -> Storage of data to post ante analysis with focus in the past data and not real time updates.

AWS Redshift -> Focus in data analysis. Data warehouse as a service. 10x faster than traditional databases for queries in multiple databases.

AWS Database Migration Service (DMS) -> A way to migrate onpremisses databases to aws cloud solutions (with source db still in use!). Can be homogeneous or heterogeneous (with need a aditional convert step). Can be used to bring to dev env the prod data, consolidate multiple db into one and continous replication of on db into many targets.

Other Database Services -> AWS DocumentDB (with mongoDB compatibility), AWS Neptune (graph database), AWS Managed Blockchain, AWS QLDB (Quantum Ledger DB), Database Acelerators (with AWS Elasticache) or DAX (DynamoDB Acelerator)

## Module 6 - Security

Share Responsability Model -> aws resp "of the cloud" + user resp "in the cloud"

AWS part -> physical + network + hypervisor

user part -> Operation System + Application + Data

AWS Root User -> Owner of the aws account

Multifactor Authoriation (MFA)

AWS Identity and Access Management (IAM) -> Least privileged principle (user start of zero allowed powers)

Policies -> Permition json that effect (allow or deny) + action (api call) + resource

IAM Groups -> a better way to manage the permitions by attach users in groups

IAM Roles -> temporary permitions

AWS Organizations -> 

1. Central local to manage multiple AWS accounts
2. Consolidade billing
3. Hierarchical group accounts
4. Control AWS Service and API Actions (Service Control Polices - SCP)

Organization Units -> The name of each AWS organization

AWS Compliance -> A LOT of best practices that AWS already follow

AWS Artifact -> Service that provide on-demand access to AWS Security and compliance reports

Denial-of-service Attacks -> 

1. UDF Flood (api weather)
2. HTTP Level Attacks (multiple http clients)
3. Slowloris Attack (slow connection fake to stop de queue)

Defenses of DDoS by AWS ->

1. Security Groups (the bad api calls does not reach the server)
2. AWS Shield with AWS WAF (Machine learning and other stuff)
3. Elastic Load Balancer (each track is segregated)

AWS Shield -> Service that protects applications against DDoS attacks (two levels: stantad -no cost- and advanced)

Encryption -> A way to ensure that only permitioned peaple can access to the data

AWS Key Management Service (KMS) -> Encryption operations by a key

AWS WAF -> web applicatoin firewall that checks that the request is not from a bloqued IP addr

AWS Inspector -> Automated security assessments to avaluate your app and give some advices to improve the security

AWS GuardDuty -> Inteligent threat detection by monitoring the network activity and account behavior

## Module 7 - Monitoring

AWS CloudWatch -> Monitoring your aws infra by metrics. Reduce Mean Time To Resolution (MTTR) and improve Total Costume Ownership (TCO)

Cloudwatch Alarm -> An alert that can be integrated with sns

Cloudwatch Dashboard -> a dashboard, simple as it

AWS CloudTrail -> A compreensive api for audition. Every call in aws saves a log in cloudtrail that can be save in s3 buckets

CloudTrail Insigns -> Automatic detect unusual API activities in my aws account

AWS Trusted Advisor -> Avaluate by 5 pillars: Cost optmization, Performance, Security, Fault tolerance and Service limits. Some are free and others paid. 3 actions: Action recomendation, Investigation recomendation and alright.

## Module 8 - Billing

AWS Free Tier -> 3 ways: aways free, 12 months free and trial

How AWS price works ->

- Pay for what you user
- Pay less when you reserve
- Pay less with volumed-based discounts when you use more

AWS Princing Calculator

AWS Billing Dashboard -> Painel to pay the aws bill 

AWS Consolidate Billing -> Centralize the bill process + share saving across accounts +  it's free

AWS Budged -> 4 types: cost, usage, reservation and saving plans. Custom alerts to keep the control on time

AWS Cost explore -> drill down to know where you are allocating the cost. Can be group by tag to keep track of projects or other group of services

AWS Support plans ->

- Basic support:
	- 24/7 customer service
	- documentation
	- whitepapers
	- aws trusted advisor
	- aws personal health dashboard
- Developer support:
	- Email support 24 hours to response
- Business support:
	- aws trusted advisor full power
	- direct phone to cloud support team (4 hour to response)
- Enterprise On-Ramp support:
	- 30 minutes response for critical workload
	- access to a pool of Technical Account Managers (TAMs)
- Enterprise support:
	- 15 minutes response
	- Designated Technical Account Manager (TAM)

Technical Account Manager (TAM) -> A consigliere to keep the aws account running in conformity of the 6 pillars of well-architectured framework (more in module 10):

- Operational Excellence
- Security
- Reliability
- Performance Efficiency
- Cost Optimization
- Sustainability

AWS Marketplace -> A market for enterprise services of third parties in a bunch of categories like devops, infra, Iot, machine learning and more

## Module 9 - Migration and Innovation

AWS Adoption Framework (CAF) -> Advice to make a smooth change for cloud in 6 perspectives: Business, People, Governance, Platform, Security and Operations. The first 3 focus on business and the last 3 focus on technical capabilities

AWS CAF Action Plan -> Guide to make a migration

Migration Strategies (6 R's) ->

- Re-hosting (lift and shift)
- Re-platforming (lift, tinker and shift)
- Retire (die apps not needed anymore)
- Retain (make app life only for a short period of time on premisses until then die)
- Repurchasing (buy new software inted of use the old ones)
- Refactoring (re-code part of your software)

AWS Snow Family ->

- AWS Snowcone - A hardware that you receive from amazon, plug in your data center, copy the data and send back to amazon to send this to the cloud. Store up to 14TB
- AWS Snowball Edge - A device suited for large-scale data migrations. Can be Storage focused or Compute focused. 80TB
- AWS Snowmobile - 100PB. Like a container to plug in your on-premises data center

Innovation in AWS -> VMWare Cloud AWS, Amazon SageMakes (machine learning pre-trained models), Amazon Augmented AI (2AI), Amazon Lex (the heart of Alexa), Amazon Textract (extract text), AWS DeepRacer, Iot, AWS Groud Station (for satelities)

AWS Q Developer -> Like a copilot without store or be used

## Module 10 - The Cloud Journey

6 pillars of Well-Architectured framework ->

- Operational Excellence (running and monitoring systems)
- Security (integrity of data and users)
- Reliability (recovery plannings and handle changes)
- Performance Efficiency (compute resources used in the best way)
- Cost Optimization (optimize full cost)
- Sustainability (minimize the environmental impact)

Well-Architectured tool -> A service that evaluate your aws account by the 6 pillars above by a form of questions

6 main benefits to use cloud ->

- pay as you use (not upfront cost) and the cost is not fixed 
- benefit from massive scale
- stop guessing capacity and scale fast when needed
- increase speed and agility by trying and failing fast and cheap
- stop wasting money hosting data centers and focus on the business
- go global in minutes

## Module 11 - AWS Certified Cloud Practitioner Basics

4 Domains ->

- Cloud Concepts (24%)
- Security and Compliance (30%)
- Technology (34%)
- Billing and Pricing (12%)

Exam Details ->

- 65 questions
- 90 minutes
- Minimum score is 700
- Two types of questions (multiple-choice and multiple-response)

Exam Strategies ->

- Read the full question
- Predict the answers before reading the options
- Eliminate the wrong options