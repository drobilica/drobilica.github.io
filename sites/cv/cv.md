# Dušan Stanić

## Staff Software Engineer, Platform Infrastructure

Belgrade, Serbia · [drobilica.com](https://drobilica.com) · [github.com/drobilica](https://github.com/drobilica) · [linkedin.com/in/dusan-stanic](https://linkedin.com/in/dusan-stanic)

---

### Summary

Staff Software Engineer focused on platform infrastructure, Kubernetes, cloud systems, CI/CD, and observability. Own production infrastructure across 3 EKS clusters, ~300 pods, ~50 services, and ~60 repositories.

Build internal platforms, deployment systems, automation, and reliability tooling that improve developer productivity and reduce operational overhead. Led zero-downtime migrations, CI/CD modernization, infrastructure standardization, and cost optimization on a ~$20k/month AWS baseline.

Strong background in distributed cloud infrastructure, production debugging, Python/Go automation, Kubernetes operations, networking, and secure multi-team platform design.

---

### Core Skills

- **Platform Engineering:** Kubernetes (EKS), Helm, Docker, GitOps workflows, multi-cluster operations
- **Cloud:** AWS (EKS, EC2, ALB/NLB, Route53, CloudFront), Azure (VMs, Blob Storage, Azure DevOps)
- **Infrastructure as Code:** Terraform, Ansible
- **CI/CD:** GitHub Actions, GitLab CI, Jenkins (legacy to modern migration), deployment gating, policy enforcement
- **Observability:** Prometheus, Grafana, New Relic, Datadog, Zabbix, Elasticsearch, Logstash (alerting, dashboards, centralized logging)
- **Networking:** VPC design, load balancing (L4/L7), ingress patterns, private networking, hybrid connectivity
- **Security & Secrets:** Vault, AWS Secrets Manager, RBAC
- **Languages & Scripting:** Python, Go

---

### Experience

#### Dizzion / Frame — Staff Software Engineer

**Jan 2026 – Present** · _promoted from Platform / Senior Software Engineer_

- Own technical direction for AWS platform infrastructure, including EKS, networking, CI/CD, and observability
- Standardize platform tooling, delivery workflows, and infrastructure patterns across engineering teams
- Lead platform initiatives that reduce operational overhead and improve developer self-service
- Guide architectural decisions through reviews, migration planning, and system-wide improvements

#### Dizzion / Frame — Platform / Senior Software Engineer

**Jun 2024 – Dec 2025**

- Led zero-downtime migration from CentOS 7 to Ubuntu across ~50 services using phased DNS cutovers, improving security posture and patch compliance
- Standardized multi-branch GitHub Actions and packaging workflows, moving legacy Jenkins pipelines and RPM builds to DEB packaging
- Reduced infrastructure cost on a ~$20k/month baseline through rightsizing, instance modernization, and bastion consolidation with NLB and cross-zone load balancing
- Led New Relic adoption with observability standards, dashboards, alerts, and TICK stack migration to reduce incident noise
- Built reusable CI/CD components across repositories and services, including builders, notifications, and controlled deployment gates
- Supported hybrid networking, VPC peering, and secure service connectivity across environments
- Participated in on-call rotation, debugging production issues across infrastructure, networking, and application layers

#### VROOM — Senior Software Engineer

**Nov 2022 – Jun 2024**

- Owned Kubernetes platform infrastructure across 3 AWS EKS clusters, supporting ~300 pods and ~50 microservices
- Managed cluster lifecycle with Terraform, including provisioning, upgrades, HPA, and node groups
- Consolidated per-service NLB usage into shared load balancer patterns, reducing cost and operational complexity
- Built and enforced GitLab CI policies across ~60 repositories, including production deployment approvals
- Enabled self-service deployments for engineering teams from branch to staging to tagged release to production, supporting daily releases
- Operated Datadog-backed monitoring and alerting across Kubernetes, infrastructure, and application workloads
- Implemented RBAC access control and AWS Secrets Manager for secure multi-team platform usage
- Designed ingress and traffic routing strategies for scalable multi-service deployments
- Participated in production on-call rotation, diagnosing Kubernetes, networking, and application issues during peak traffic periods

#### Nutanix (Frame team) — Senior Software Engineer

**Dec 2020 – Oct 2022**

- Designed and implemented automated CI/CD pipelines using Jenkins, Docker, and Kubernetes, reducing time to production by ~30%
- Automated cloud infrastructure provisioning and operational tasks using Terraform and Ansible
- Migrated legacy systems to containerized deployments, improving scalability and resilience
- Spearheaded New Relic adoption for platform and application observability across engineering workflows
- Integrated Vault into delivery workflows for secrets management and improved security posture
- Worked across AWS and Azure environments on cloud-based platform engineering initiatives
- Collaborated with cross-functional stakeholders to improve software delivery efficiency and DevOps practices

#### Endava — Senior DevOps Engineer

**Aug 2018 – Dec 2020**

- Led migration of major applications to Azure, improving scalability and availability
- Built backend systems and internal tooling using Python and Flask
- Migrated Graphite and Whisper-based monitoring to Zabbix for clearer service visibility
- Designed infrastructure with Terraform, Puppet, and Vault to improve security and reduce downtime
- Led containerization efforts using Docker and Kubernetes to improve delivery speed and system scalability

#### Société Générale — System Engineer, Core Infrastructure

**Jan 2017 – Aug 2018**

- Engineered monitoring and alerting systems using Grafana, Centreon/Nagios, and Percona Monitoring and Management
- Implemented Elasticsearch centralized logging and Logstash transformations for custom UDP log streams
- Automated infrastructure and configuration workflows using Ansible and Puppet
- Improved server reliability through upgrades, tuning, and resource optimization
- Developed automation scripts in Python and C++ to reduce manual operational work
- Contributed to disaster recovery readiness for critical infrastructure services

#### NetCast — Linux System Engineer

**Oct 2015 – Dec 2016**

- Managed Linux servers across RHEL, Ubuntu, and Debian environments
- Worked with VMware vSphere, web services, storage, backups, and monitoring tooling
- Supported system security, patching, and day-to-day infrastructure operations

---

### Selected Projects

#### Self-Hosted Kubernetes Platform

- Operate a 3-node Kubernetes lab to validate platform patterns before production use
- Manage infrastructure with Terraform and Ansible, including ingress, service isolation, and deployment workflows

#### [CyphonFilter](https://drobilica.com/cyphonfilter/)

- Built an offline-capable browser utility suite for developers, including Base64, hashing, JWT decoding, password generation, and AES-GCM encryption
- Implemented a client-side PWA using Vite, Web Crypto API, and vanilla JavaScript with no backend dependency

---

### Education

#### Singidunum University

Software Engineering
