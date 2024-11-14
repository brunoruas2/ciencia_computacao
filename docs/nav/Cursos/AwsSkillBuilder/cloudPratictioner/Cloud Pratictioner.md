Module 1 and 2
==============================================================
Cloud computing -> pay as you go withou pay beforehand.
Ec2 (elastic cloud computing).
Ec2 types -> general, compute, memory, accelerated and storage.
Ec2 pricing -> on-demand, reserved (type, plataform or tenancy), saving plans (1 or 3 years), spot (90% off, runs in not used machines at time) and dedicated hosts.
Load balance
Lambda
SNS
SQS
ECS -> eks da amazon.
EKS -> orquestrador de containers docker.
AWS Fargate (serveless para containers)

Module 3 - global infra and reliability
==============================================================
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

Advice: run across 2 AZ in each region

Module 4 - Networking
==============================================================
AWS VPC -> Provison of isolated aws cloud separed by subnets that contains resources.
Subnet -> A group of resources based on security or operacional needs. Can be public (through a internet gateway) or private (through a vpc).
Internet Gateway (IGW) -> Used to allow internet access to a VPC.
AWS Virtual Private Gateway -> A virtual VPN to my vpc and a private network (aka intranet).
AWS Direct Connect -> Dedicated private connection fiber with a AWS Direct Connect endpoint.
Packet -> A unit of data sent over the internet or network
Acces Control List (ACL) -> The component that checks packets permitions for subnets. Default is to allow in and out traffic.
Security Group -> The component that check packets permitions for aws components (like ec2). Is Stateful and returns always allowed. Default is block in and allow out traffic.
Edge Location
AWS Cloudfront
AWS Route 53

Module 5 - Databases and Storage
==============================================================
Block Level Storage -> Place to store file in a way that can be updated block by block and not by the hole file
EC2 Storage -> Instance Store Volumens that dies within the ec2 machine
AWS Elastic Block Store (EBS) -> A persistent database to ec2 instances. Block storage that can be updated partially. Run in a AZ (not region)
Snapshots -> Incremental backupds for EBS
AWS Simple Store Service (S3) -> Store data as objects with versions in buckets (like a file equivalent). Can receave objects until 5TB!
S3 Lifecycle Policies -> Rules that can move data for s3 tiers automaticly for better storage and cost
S3 Classes aka Tiers ->
      Standard (999999999% prob of aviability in a year)
      Static Website Hosting
      Standard-Infrequent Access Data aka Standard-IA (not so frequently until we need it, like a backup)
      Glacier Flexible Retrieval (Retain data for audit or compliance in valts). Acept policies like Write one - read many (worm)
AWS Elastic File System (EFS) -> Scales automatically. Run in a region. Can be access by on-premisses by AWS Direct Connect
AWS Relational Database Service (RDS) -> Suport dbms with automated patching, backups, redundance, failover and disaster recovery
lift-and-shift -> Migrate for an onpremisses dbms
AWS RDS database engines ->
      AWS Aurora (compatible with MySQL and PostegreSQL)
      MySQL
      PostegreSQL
      MariaDB
      Oracle
      MSSQLServer
AWS DynamoDB -> Serverless database. NoSQL with item + attribute. Purpose built.
Data warehouses -> Storage of data to post ante analysis with focus in the past data and not real time updates.
AWS Redshift -> Focus in data analysis. Data warehouse as a service. 10x faster than traditional databases for queries in multiple databases.
AWS Database Migration Service (DMS) -> A way to migrate onpremisses databases to aws cloud solutions (with source db still in use!). Can be homogeneous or heterogeneous (with need a aditional convert step). Can be used to bring to dev env the prod data, consolidate multiple db into one and continous replication of on db into many targets.
Other Database Services -> AWS DocumentDB (with mongoDB compatibility), AWS Neptune (graph database), AWS Managed Blockchain, AWS QLDB (Quantum Ledger DB), Database Acelerators (with AWS Elasticache) or DAX (DynamoDB Acelerator)

Module 6 - Security
==============================================================
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

Module 7 - Monitoring
==============================================================
AWS CloudWatch -> Monitoring your aws infra by metrics. Reduce Mean Time To Resolution (MTTR) and improve Total Costume Ownership (TCO)
Cloudwatch Alarm -> An alert that can be integrated with sns
Cloudwatch Dashboard -> a dashboard, simple as it
AWS CloudTrail -> A compreensive api for audition. Every call in aws saves a log in cloudtrail that can be save in s3 buckets
CloudTrail Insigns -> Automatic detect unusual API activities in my aws account
AWS Trusted Advisor -> Avaluate by 5 pillars: Cost optmization, Performance, Security, Fault tolerance and Service limits. Some are free and others paid. 3 actions: Action recomendation, Investigation recomendation and alright.

Module 8 - Billing
==============================================================
AWS Free Tier -> 3 ways: aways free, 12 months free and trial