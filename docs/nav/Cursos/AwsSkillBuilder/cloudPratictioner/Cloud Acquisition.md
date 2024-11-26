# Procurement Foundations

The cloud can be bought in different ways:

1. Direct (AWS) aka you do the work to build
2. Indirect (Cloud-managed service providers aka "CSP" or resellers) who do the work for you (for a price)

Selling a single model -> the contract of a Cloud service is one-to-many so the buyer is responsible either building the services in cloud or find a AWS Partner Network (APN) to do the job

procurement of cloud services x procurement of labor to use cloud services

Cloud Service Providers (CSP):

1. Cloud XaaS
2. Professional Services
3. Training
4. Support
5. Marketplace

CSP Partner/Resellers:

1. Requirement Analysis
2. Strategy and Roadmap
3. Solution Design
4. Tech Review and Audit
5. Migration and Implementation

# Key Aspects of Procurement

## Pricing

1. Format of pricing
	1. Based on vendor not on customer
	2. Same price structure for all costumers
	3. Price is variable
2. Format of reserve
	1. On-demand (no reserved instance at all, pay full price by usage)
	2. Reserved Instances
		1. No upfront\adiantado payment, billed by hour of use (little less then price of on-demand)
		2. Partial upfront (pay a % upfront with a discount, the rest by hour of use)
		3. All upfront (pay all in advance with a great discount, use without adicional cost)
3. Discount
	1. AWS Enterprise Discount Program (EDP)
		1. For big enterprises that uses A LOT of aws resources
	2. Reserved Instances
		1. After a while of use, you can learn the patterns of demand and reserve some resources to access discounts (upfront payment over a 1 or 3 year term)
	3. Saving Plans
		1. Flexible pricing model that can save up to 72% in EC2 , Fargate and Lambda in exchange for a commitment to use specific amount of compute power for a 1 or 3 year period

## Security

1. Shared security responsibilities
2. Customer Responsibility
	1. Customer data
	2. Identity and Access management
	3. OS, Network and Firewall
3. AWS Responsibility
	1. Global infra
	2. Compute
	3. Storage
	4. Database
	5. Networking

## Data Sovereignty and Data Residency

1. Customers continue to own their data
2. Customers choose the geographic location in which to store their data
3. Customers can download or delete their data whenever they like
4. Customer can "crypto-delete" their data

## Governance and Operationalization

### Traditional Way of Thinking
Business case -> Finance sign-off -> sec and legal check -> Start a new project. A lot of steps before the real deploy of project.

### Cloud Way of Thinking
All the steps are include in the AWS tools and cloud offerings. This way you can deploy a new project in minutes.

##  Terms and Condition

1. One-to-many scale and terms of service
2. AWS has 2 agreement forms
	1. Online Customer Agreement
		1. The vast majority uses
		2. AWS can update these terms anytime
	2. AWS Enterprise Agreement
		1. For big clients that needs a tailor agreement for a better suit

# Working with AWS Partner Network (APN)

A Global Partner Program for consulting businesses that use Amazon Web Services to build solutions and services for customers. The APN helps customers to find a AWS Partner with expertise.

## Partner types

1. Consulting Partners - professional services
2. Technology Partners - software solutions