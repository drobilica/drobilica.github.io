# Dušan Stanić

## Platform & Cloud Infrastructure Engineer

Belgrade, Serbia · [drobilica.com](https://drobilica.com) · [github.com/drobilica](https://github.com/drobilica) · [linkedin.com/in/dusan-stanic](https://linkedin.com/in/dusan-stanic)

---

### Summary

Cloud infrastructure engineer with 11 years building and operating production infrastructure. Currently Platform Engineer at HYPR, where I build AI agents into platform workflows; previously Staff Software Engineer at Dizzion / Frame. I design AWS networking and infrastructure in Terraform, operate Kubernetes/EKS, and write infrastructure software in Go and Python. At Frame I built Blaze, the Go CLI every engineering team used to deploy across AWS, Azure, and Nutanix AHV, and ran isolated AWS GovCloud and commercial stacks for government and enterprise customers.

---

### Experience

#### HYPR — Platform Engineer

**Sep 2026 – Present**

- Operate the Kubernetes/EKS platform, AWS infrastructure in Terraform, and CI/CD release tooling for an identity security product
- Built a central service that investigates CI/CD failures for pipelines across 5 engineering teams, grouping duplicate failures, finding root causes, and proposing fixes, and reusing verified fixes to keep LLM costs low
- Added AI agent review to merge requests, checking for security issues and code quality before human review
- Built AI-assisted approval workflows for internal access requests

#### Dizzion / Frame — Senior, then Staff Software Engineer

**Jun 2024 – May 2026**<br />
_Rejoined the Frame team after Dizzion acquired Frame from Nutanix; promoted to Staff Software Engineer in Jan 2026._

- Owned Blaze, the deployment interface 40+ engineers used to release 12 services to 150+ servers across 6 AWS regions, Azure, and Nutanix AHV
- Deployed and operated fully separate, isolated stacks for government customers in AWS GovCloud and for commercial customers in AWS commercial regions, each with its own control plane, per-environment AWS KMS keys, and KMS-encrypted data at rest
- Designed AWS VPCs in Terraform (subnets, route tables, NAT gateways, security groups, Route 53 DNS) and connected VPCs across multiple accounts through Transit Gateway
- Operated multi-region failover with standby stacks and DNS-based traffic shifting, ran disaster recovery drills, and served in the primary on-call rotation, writing root-cause analyses for production incidents
- Owned the platform roadmap and set the deployment standards followed by all engineering teams, including protected workflows for production rollouts across US and EU environments
- Led 2–4 engineers through the zero-downtime migration of five production services from CentOS 7 to hardened Ubuntu images, splitting the work and reviewing their implementation
- Led the cross-team moves from Jenkins to GitHub Actions and from TICK to New Relic, keeping Blaze as the release interface so engineers kept the same workflow
- Built provisioning and day-2 automation orchestrating Terraform, Ansible, inventory generation, environment creation, and multi-server deployment, with sequential and parallel rollouts

#### VROOM — Senior Software Engineer

**Nov 2022 – Jun 2024**

- Engineered the lifecycle of three production EKS clusters across two AWS accounts with Terraform, including upgrades, autoscaling, node groups, RBAC, and secrets integration
- Redesigned service networking on AWS by consolidating per-service NLBs into shared load-balancing and ingress patterns
- Debugged production incidents on call across networking, Kubernetes, and application layers, using Datadog
- Developed Python tooling for Kubernetes upgrades, platform status reporting, and alerting automation
- Built protected GitLab CI workflows that gave teams a self-service path from branch deployments through tagged production releases, supporting daily production deployments

#### Nutanix (Frame team) — Senior Software Engineer

**Dec 2020 – Oct 2022**

- Designed and built Blaze, a Go CLI for multi-cloud deployments across AWS, Azure, and Nutanix AHV, including on-prem AHV clusters on customer premises
- Built and operated private connectivity between Nutanix AHV, AWS, and Azure environments using site-to-site VPN and AWS Direct Connect, with the AWS VPCs and Transit Gateway routing behind it defined in Terraform
- Ran the control-plane services that orchestrated GPU-backed desktop workloads for Frame, a VDI platform spanning public cloud and Nutanix AHV
- Traced a production incident to untested code reaching release, then added automated pre-deploy checks and protected deployment workflows that block unverified releases
- Automated AWS and Azure infrastructure provisioning and delivery workflows with Terraform and Ansible
- Integrated Vault for secure secret handling and repeatable delivery workflows
- Migrated legacy services to containerized deployments on Docker and Kubernetes

#### Endava — Senior DevOps Engineer

**Aug 2018 – Dec 2020**

- Led application migrations to Azure and built Python and Flask backend systems and internal tools
- Standardized infrastructure and container delivery using Terraform, Puppet, Vault, Docker, and Kubernetes

#### Société Générale — System Engineer, Core Infrastructure

**Jan 2017 – Aug 2018**

- Developed Python automation for configuration workflows and transformed custom UDP log streams with Logstash for centralized Elasticsearch logging
- Engineered monitoring and alerting with Grafana, Centreon/Nagios, and Percona Monitoring and Management; improved server reliability through upgrades and tuning

#### NetCast — Linux System Engineer

**Oct 2015 – Dec 2016**

- Supported Linux production environments across RHEL, Ubuntu, and Debian
- Managed VMware vSphere, storage, backups, web services, and monitoring for day-to-day reliability

---

### Core Skills

- **Cloud & Compute:** AWS (commercial and GovCloud), Azure, Nutanix AHV, multi-account Kubernetes (EKS), autoscaling, Docker, Helm
- **Networking:** AWS VPC design, Transit Gateway, Direct Connect, site-to-site VPN, hybrid and cross-cloud connectivity, L4/L7 load balancing, ingress, TCP/IP, DNS
- **Languages:** Go, Python
- **AI Agents:** LLM agents for code review, CI/CD failure investigation, and access-request review
- **Infrastructure as Code & Delivery:** Terraform, Ansible, GitHub Actions, GitLab CI, Jenkins
- **Security & Isolation:** AWS KMS, isolated GovCloud and commercial environments, on-prem customer deployments, Vault, AWS Secrets Manager, RBAC, hardened OS images
- **Reliability & Observability:** Multi-region failover, disaster recovery drills, on-call incident debugging, root-cause analysis, New Relic, Datadog, Prometheus, Grafana

---

### Education

#### Singidunum University

Bachelor's degree, Software Engineering
