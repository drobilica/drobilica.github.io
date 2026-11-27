# Dušan Stanić

## Platform & Cloud Infrastructure Engineer

Belgrade, Serbia · [drobilica.com](https://drobilica.com) · [github.com/drobilica](https://github.com/drobilica) · [linkedin.com/in/dusan-stanic](https://linkedin.com/in/dusan-stanic)

---

### Summary

Cloud infrastructure engineer with 11 years building and operating production infrastructure and the software that runs it. I design AWS networking and isolated environments in Terraform, run Kubernetes/EKS, and write deployment tooling in Go and Python. I spent nearly four years on Frame, a multi-cloud desktop-streaming platform, across two owners: I co-developed and later owned Blaze, the Go CLI behind every release across AWS, Azure, and Nutanix AHV, and worked on deployments spanning a separate AWS GovCloud stack, on-prem customer clusters, and customer-owned cloud accounts. Now at HYPR, building LLM agents into CI/CD and platform operations.

---

### Experience

#### HYPR — Platform Engineer

**Sep 2026 – Present**

- Operate the Kubernetes/EKS platform, AWS infrastructure in Terraform, and CI/CD release tooling for an identity security product
- Deploy and upgrade the product inside customers' own cloud accounts alongside the hosted service
- Built an LLM service that triages failed CI/CD pipelines for five engineering teams: it groups duplicate failures, proposes a likely root cause and fix, and reuses previously verified fixes instead of paying for a new model call
- Added an agent review step to merge requests that flags security and code-quality issues before a human reviews
- Built an agent that enriches internal access requests with context on the requester, timing, and resource, so the human approver decides with more information

#### Dizzion / Frame — Staff Member of Technical Staff

**Jun 2024 – May 2026**<br />
_Rejoined the Frame team after Dizzion acquired Frame from Nutanix; promoted from Senior to Staff in Jan 2026. Role ended when Dizzion closed its Serbian entity._

- Primary owner of Blaze, the Go deployment CLI behind every Frame release: 40+ engineers used it to ship 12 services to 150+ servers across development, staging, and production in six AWS regions, Azure, and Nutanix AHV, orchestrating Terraform, Ansible, and generated inventories with sequential or parallel rollouts; rewrote its AWS provider
- Ran the control plane that launched and managed customers' Windows VDI workload VMs inside their own cloud accounts, while all orchestration stayed in Frame-owned infrastructure
- Built the Terraform and Blaze deployment path for Frame's separate AWS GovCloud stack, which shares no control plane, network, or KMS keys with the commercial regions and is operated by US-based staff
- Designed AWS VPCs in Terraform (subnets, route tables, NAT gateways, security groups, Route 53 DNS) and connected VPCs across multiple accounts through Transit Gateway
- Ran multi-region failover with standby stacks and DNS traffic shifting, and took part in disaster recovery drills
- Primary on-call for production; wrote the root-cause analyses and shipped the follow-up fixes
- Set deployment architecture and release standards for Frame engineering, including protected production workflows across US and EU environments
- Led 2–4 engineers through a zero-downtime migration of five production services (Python, Elixir, Java) from CentOS 7 to hardened Ubuntu AMIs
- Moved pipeline triggers from Jenkins to GitHub Actions behind an unchanged Blaze interface, so no team changed how it deployed
- Led the move from the TICK stack to New Relic and standardized APM adoption across teams
- Added Debian packaging to Blaze and led the company-wide migration of every shipped service from RPM to DEB

#### Vroom — Senior Software Engineer

**Nov 2022 – Jun 2024**<br />
_Left after Vroom wound down its e-commerce business._

- Managed three production EKS clusters across two AWS accounts with Terraform: version upgrades, node groups and autoscaling, RBAC, and secrets
- Consolidated dedicated per-service ALBs into six shared ALB ingress groups through the AWS Load Balancer Controller, cutting load-balancer spend by about $50K a year, and wrote the Python tool that raised the manifest changes as merge requests across service repos
- Debugged production incidents on call across networking, Kubernetes, and application layers, using Datadog
- Wrote Python tooling for Kubernetes upgrades, platform status reporting, and alerting automation
- Built protected GitLab CI workflows that gave teams a self-service path from branch deployments through tagged production releases, supporting daily production deployments

#### Nutanix (Frame team) — Member of Technical Staff 4

**Dec 2020 – Oct 2022**<br />
_Same product and team as Dizzion / Frame above._

- Co-developed Blaze, the Go CLI that gave Frame one deployment interface across AWS, Azure, and Nutanix AHV, including on-prem AHV clusters on customer premises; wrote its Azure provider
- Built and operated private connectivity between Nutanix AHV, AWS, and Azure environments using site-to-site VPN and AWS Direct Connect, with the AWS VPCs and Transit Gateway routing behind it defined in Terraform
- Ran the control-plane services that orchestrated GPU-backed desktop workloads for Frame, a VDI platform spanning public cloud and Nutanix AHV
- Traced a production incident to untested code reaching release, then added automated pre-deploy checks and protected deployment workflows that block unverified releases
- Migrated legacy services to containerized deployments on Docker and Kubernetes

#### Endava — Senior DevOps Engineer

**Aug 2018 – Dec 2020**

- Led application migrations to Azure and built Python and Flask backend systems and internal tools
- Standardized infrastructure and container delivery using Terraform, Puppet, Vault, Docker, and Kubernetes

#### Société Générale — System Engineer, Core Infrastructure

**Jan 2017 – Aug 2018**

- Built and tuned a redundant three-node Elasticsearch, Logstash, and Kibana deployment ingesting custom UDP and Beats sources, plus Python configuration automation and Grafana, Centreon/Nagios, and Percona monitoring

#### NetCast — Linux System Engineer

**Oct 2015 – Dec 2016**

- Ran Linux production hosting (RHEL, Ubuntu, Debian) on VMware vSphere, including storage, backups, and monitoring

---

### Projects

- **[tarlink](https://github.com/drobilica/tarlink)** (Go, Apache-2.0): rootless Linux application manager that verifies artifact bytes before install, activates atomically, and keeps the previous version for rollback
- **[opencode-agent-images](https://github.com/drobilica/opencode-agent-images)**: non-root container images for coding agents, pinned by digest with immutable version tags, SBOM and provenance attestations, and keyless Sigstore signatures
- **Home k3s cluster** (private): two nodes managed through Argo CD GitOps with cert-manager and Gateway API; local LLMs through Ollama on a 16 GB GPU

---

### Core Skills

- **Cloud & Compute:** AWS (commercial and GovCloud), Azure, Nutanix AHV, Kubernetes (EKS, multi-account), Docker
- **Networking:** AWS VPC design, Transit Gateway, Direct Connect, site-to-site VPN, hybrid and cross-cloud connectivity, L4/L7 load balancing, ingress, DNS
- **Languages & OS:** Go, Python, Linux (RHEL, Ubuntu, Debian)
- **AI & Agents:** LLM agents for CI/CD failure triage, merge-request review, and access-request context; daily work with Claude Code, Codex, and OpenCode across model providers; local models with Ollama
- **Infrastructure as Code & Delivery:** Terraform, Ansible, GitHub Actions, GitLab CI, Jenkins, Argo CD
- **Security & Isolation:** Customer-account (BYOC) and on-prem deployments, separate GovCloud stack, AWS KMS, Vault, RBAC, hardened OS images
- **Reliability & Observability:** Multi-region failover, disaster recovery drills, on-call incident response, root-cause analysis, New Relic, Datadog, Grafana

---

### Education

#### Singidunum University

Bachelor's degree, Software Engineering
