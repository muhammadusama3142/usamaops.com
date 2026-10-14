// Content for the service pages at /services/<slug>/.
// Each page targets one group of searches; keep titles under ~60 characters and descriptions under ~155.

export interface Service {
  slug: string;
  name: string; // short name for cards, breadcrumbs and schema
  serviceType: string;
  title: string; // <title>
  description: string; // meta description
  eyebrow: string;
  h1: string;
  lead: string;
  summary: string; // one line for the services index and related cards
  bestFor: string;
  timeline: string;
  price: string;
  priceNote?: string;
  min: number;
  max: number;
  guarantee?: string;
  noun: string; // completes "Signs you need …"
  signs: string[];
  approachTitle: string;
  approach: { title: string; body: string }[];
  deliverables: string[];
  packages?: { name: string; time: string; price: string; body: string }[];
  note?: string;
  proof?: { kicker: string; title: string; body: string };
  faqs: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'infrastructure-audit',
    name: 'Infrastructure Health Check',
    serviceType: 'DevOps and cloud infrastructure audit',
    title: 'DevOps & Cloud Infrastructure Audit | UsamaOps',
    description:
      'A fixed-price, read-only DevOps and cloud infrastructure audit: cloud, CI/CD, security, monitoring and certificates, with a risk-scored plan. From $750.',
    eyebrow: 'DevOps & cloud infrastructure audit',
    h1: 'Know exactly where your infrastructure stands, in five days.',
    lead: 'A fixed-price, read-only audit of your cloud, CI/CD, security, monitoring and certificates. You get a risk-scored report, a 30/60/90-day plan with a fixed price for each step, and a walkthrough with your team. It’s the fastest way to find out what to fix first.',
    summary:
      'A five-day, read-only review of your cloud, CI/CD, security, monitoring and certificates, with a risk-scored plan.',
    bestFor: 'Teams without a dedicated DevOps engineer, or before a launch, audit or funding round',
    timeline: '5 business days',
    price: '$750',
    priceNote: 'Intro price for my first 3 clients, then $1,500. The fee is credited in full if you book implementation.',
    min: 750,
    max: 1500,
    noun: 'an infrastructure audit',
    signs: [
      'Nobody can say with confidence what is running, who has access to it or what it costs',
      'The person who built your infrastructure has left, or is about to',
      'A security questionnaire, audit or enterprise customer is asking questions you can’t answer yet',
      'Deploys, outages or the cloud bill keep surprising you',
      'You want a second opinion before hiring a DevOps engineer or an agency',
    ],
    approachTitle: 'How the audit works',
    approach: [
      {
        title: 'Read-only access',
        body: 'I ask for least-privilege, read-only roles through your SSO with MFA, and sign an NDA first. Nothing in your environment changes during the audit.',
      },
      {
        title: 'Review six areas',
        body: 'Cloud architecture and cost, CI/CD and releases, identity and access, network and data security, monitoring and incident response, and TLS certificates and secrets.',
      },
      {
        title: 'Score every risk',
        body: 'Each finding gets a severity, its business impact in plain language and the effort to fix it, so you can see what matters most.',
      },
      {
        title: 'Plan and walk through it',
        body: 'A 30/60/90-day plan with a fixed price for each step, presented on a 60-minute call with your team. Do the work yourselves or with me.',
      },
    ],
    deliverables: [
      'Written report with every finding, its severity and how to fix it',
      'An overview of the architecture you run today',
      'Quick wins you can apply the same week',
      '30/60/90-day plan with a fixed price per step',
      '60-minute walkthrough call with your team',
    ],
    proof: {
      kicker: 'Why this works',
      title: 'A checklist built from running regulated production',
      body: 'I run PCI DSS-scoped payment infrastructure on AWS, Huawei Cloud and Kubernetes. The review covers what audits and incidents in that environment have taught me to check, not a generic template.',
    },
    faqs: [
      {
        q: 'What access do you need for a DevOps audit?',
        a: 'Read-only access to your cloud accounts, CI/CD system and repositories, ideally through SSO with MFA. I never ask for root or admin keys, and access is removed when the audit ends.',
      },
      {
        q: 'How much does an infrastructure audit cost?',
        a: 'The Health Check is a fixed $750 for my first three clients and $1,500 after that. If you then book implementation with me, the fee is credited in full.',
      },
      {
        q: 'Which clouds and tools do you cover?',
        a: 'AWS and Huawei Cloud in depth, plus Kubernetes, Docker, Terraform, Ansible and GitHub Actions. If you run something I know less well, I’ll tell you before we start.',
      },
      {
        q: 'Do we have to hire you after the audit?',
        a: 'No. The plan is yours to keep. Many teams fix the quick wins themselves and bring me in only for the bigger items.',
      },
    ],
    related: ['cloud-cost-optimization', 'soc2-pci-dss-compliance', 'fractional-devops-engineer'],
  },
  {
    slug: 'cloud-cost-optimization',
    name: 'Cloud Cost Optimization',
    serviceType: 'Cloud cost optimization',
    title: 'AWS & Cloud Cost Optimization Consultant | UsamaOps',
    description:
      'Freelance AWS and cloud cost optimization: rightsizing, Savings Plans, storage, data transfer and idle resources. Fixed price with a 2× savings guarantee.',
    eyebrow: 'AWS & cloud cost optimization',
    h1: 'Cut your AWS and cloud bill without slowing your team down.',
    lead: 'Most cloud bills carry waste nobody has had time to chase: idle resources, oversized instances, missing commitments and data transfer nobody planned for. Flexera’s 2026 State of the Cloud survey puts wasted cloud spend at 29%. In a fixed-price Cloud Cost Teardown I find that waste and implement the quick wins, not just list them.',
    summary:
      'Rightsizing, commitments, storage, data transfer and idle resources, with quick wins implemented and a 2× savings guarantee.',
    bestFor: 'Teams spending $3,000 or more a month on AWS or another cloud',
    timeline: '1–2 weeks',
    price: '$1,200–2,000',
    min: 1200,
    max: 2000,
    guarantee:
      'At least 2× the fee in annualised savings, or no charge. For teams spending $3,000 or more a month on cloud.',
    noun: 'a cloud cost review',
    signs: [
      'The bill grows faster than your traffic or revenue',
      'Nobody owns cloud cost, and nobody can explain last month’s spike',
      'Dev and staging run around the clock on production-sized machines',
      'You pay full on-demand prices with no Savings Plans or reserved capacity',
      'Data transfer, NAT gateway or log storage charges keep creeping up',
      'AI or GPU workloads arrived and the bill jumped',
    ],
    approachTitle: 'How I cut cloud costs',
    approach: [
      {
        title: 'Break down the bill',
        body: 'I map spend by service, environment and team from your billing data and tags, and find where the money actually goes.',
      },
      {
        title: 'Rightsize and clean up',
        body: 'Oversized instances and databases, idle load balancers, unattached volumes, old snapshots and forgotten environments, checked against real usage before anything changes.',
      },
      {
        title: 'Buy smarter',
        body: 'Savings Plans and reserved capacity sized to your real baseline, newer instance families such as Graviton where they fit, and spot capacity for work that can be interrupted.',
      },
      {
        title: 'Fix storage, transfer and logs',
        body: 'Storage lifecycle rules and cheaper storage classes, gp2 to gp3 volumes, sensible log retention, and the NAT gateway and cross-zone traffic that quietly inflate bills.',
      },
    ],
    deliverables: [
      'Cost breakdown by service, environment and team',
      'Savings report with each action, its monthly saving and its risk',
      'Quick wins implemented through code review or infrastructure as code',
      'Budgets and anomaly alerts so surprises are caught early',
      'A short plan for the bigger, riskier savings',
    ],
    proof: {
      kicker: 'How I work',
      title: 'Savings that don’t break production',
      body: 'Every change goes through code review or infrastructure as code with a rollback plan, and anything risky is scheduled with your team. It’s how I work on payment infrastructure, where downtime isn’t an option.',
    },
    faqs: [
      {
        q: 'How much can you save on our AWS bill?',
        a: 'It depends on how the account has grown, so I won’t promise a number before looking. For teams spending at least $3,000 a month, I guarantee annualised savings of at least twice my fee, or you don’t pay.',
      },
      {
        q: 'Will cutting costs hurt performance or reliability?',
        a: 'It shouldn’t. I start with waste that has no performance impact, test rightsizing against real usage data, and schedule riskier changes with your team, with a rollback plan.',
      },
      {
        q: 'Do you work with clouds other than AWS?',
        a: 'Yes. I work hands-on with AWS and Huawei Cloud, and the same approach (usage data, rightsizing, commitments, storage and transfer) applies to other providers. If yours is one I know less well, I’ll say so up front.',
      },
      {
        q: 'Can you reduce our AI or GPU costs too?',
        a: 'Yes. Model choice, caching, batching and spend limits often cut AI bills sharply. That work is covered under AI integration and LLM cost control.',
      },
    ],
    related: ['infrastructure-audit', 'ai-integration', 'fractional-devops-engineer'],
  },
  {
    slug: 'ci-cd-terraform-kubernetes',
    name: 'CI/CD, Terraform & Kubernetes',
    serviceType: 'CI/CD and infrastructure as code',
    title: 'CI/CD, Terraform & Kubernetes Consultant | UsamaOps',
    description:
      'CI/CD pipelines with GitHub Actions, infrastructure as code with Terraform, and Kubernetes set up for safe, repeatable deploys. Fixed price from $3,000.',
    eyebrow: 'CI/CD · Terraform · Kubernetes',
    h1: 'Deploys your team trusts, from commit to production.',
    lead: 'Manual deploy steps, environments that drift apart and one person who knows how it all works. I set up CI/CD pipelines with GitHub Actions, infrastructure as code with Terraform, and Kubernetes or container deployments, so every release is repeatable, reviewed and easy to roll back.',
    summary:
      'GitHub Actions pipelines, Terraform modules, consistent environments, secrets management and rollback your team can trust.',
    bestFor: 'Teams shipping every week or more with manual or fragile deploys',
    timeline: '2–4 weeks',
    price: '$3,000–6,000',
    min: 3000,
    max: 6000,
    noun: 'better CI/CD and infrastructure as code',
    signs: [
      'Deploys need a checklist, a particular laptop or a particular person',
      'Staging and production behave differently and nobody knows why',
      'Infrastructure was built by clicking around the cloud console',
      'Secrets live in environment files, chat messages or the repository',
      'A bad release means a late night instead of a one-click rollback',
    ],
    approachTitle: 'How I set up CI/CD, Terraform and Kubernetes',
    approach: [
      {
        title: 'Infrastructure as code',
        body: 'Terraform modules for networks, compute, databases and IAM, with remote state, locking and a plan-and-apply workflow in pull requests.',
      },
      {
        title: 'CI/CD pipelines',
        body: 'GitHub Actions that test, build and scan every change, then deploy to each environment with approvals where you need them, using short-lived cloud credentials through OIDC instead of long-lived keys.',
      },
      {
        title: 'Kubernetes and containers',
        body: 'Small, reproducible Docker images, Kubernetes manifests or Helm charts, health checks, autoscaling and resource limits. Or a simpler container platform if Kubernetes is more than you need.',
      },
      {
        title: 'Secrets and rollback',
        body: 'Secrets in a secrets manager rather than in code, versioned releases with tested rollback, and a runbook your team can follow.',
      },
    ],
    deliverables: [
      'Terraform code for your infrastructure, in your repository',
      'CI/CD pipelines for build, test, security scanning and deploy',
      'Separate, consistent environments such as dev, staging and production',
      'Secrets moved into a secrets manager',
      'Rollback procedure, runbooks and a handover session',
    ],
    proof: {
      kicker: 'Payments · private network',
      title: 'CI/CD into private production with zero inbound access',
      body: 'Production servers sat on private IPs, so push-based deploys meant opening the network. I built pull-based GitHub Actions deploys instead: artifacts land in object storage, and a serverless trigger tells an on-host agent to pull and deploy, with no inbound access.',
    },
    faqs: [
      {
        q: 'Do we need Kubernetes?',
        a: 'Not always. Kubernetes pays off when you run many services or need fine-grained scaling. For a handful of services, a managed container platform is often simpler and cheaper, and I’ll recommend that when it fits better.',
      },
      {
        q: 'Can you bring hand-built infrastructure under Terraform?',
        a: 'Yes. I import existing resources into Terraform step by step, so nothing has to be rebuilt or taken down.',
      },
      {
        q: 'Which CI/CD tools do you use?',
        a: 'Mostly GitHub Actions, which is what I run in production. If you’re on another CI system, I’ll tell you up front how well I know it, or keep it if it already does the job.',
      },
      {
        q: 'Will my team be able to maintain it?',
        a: 'That’s the goal. Everything lives in your repository with documentation, and the handover includes a walkthrough so your developers can change it without me.',
      },
    ],
    related: ['infrastructure-audit', 'fractional-devops-engineer', 'tls-certificate-automation'],
  },
  {
    slug: 'soc2-pci-dss-compliance',
    name: 'SOC 2 & PCI DSS Readiness',
    serviceType: 'Compliance infrastructure readiness',
    title: 'SOC 2 & PCI DSS Infrastructure Readiness | UsamaOps',
    description:
      'I fix the infrastructure controls SOC 2 and PCI DSS auditors check: IAM, MFA, logging, encryption, backups and access reviews. Fixed price from $3,000.',
    eyebrow: 'SOC 2 & PCI DSS infrastructure readiness',
    h1: 'Get your infrastructure ready for SOC 2 or PCI DSS.',
    lead: 'Compliance platforms collect evidence, but someone still has to fix what they flag. I fix the infrastructure controls auditors check (identity and access, MFA, logging, encryption, backups and access reviews), drawing on experience running PCI DSS-scoped payment infrastructure in production.',
    summary:
      'I fix the infrastructure controls auditors check: IAM, MFA, logging, encryption, backups and access reviews.',
    bestFor: 'B2B SaaS chasing enterprise deals, and fintech or payments teams in PCI DSS scope',
    timeline: '2–4 weeks',
    price: '$3,000–8,000',
    min: 3000,
    max: 8000,
    noun: 'compliance infrastructure work',
    signs: [
      'Your compliance platform shows a wall of failing infrastructure checks',
      'An enterprise customer sent a security questionnaire you can’t fully answer',
      'Shared accounts, missing MFA, or access nobody has reviewed in months',
      'Logs are missing, kept too briefly or not protected from tampering',
      'You handle card data and aren’t sure what is in PCI DSS scope',
    ],
    approachTitle: 'How I get your infrastructure audit-ready',
    approach: [
      {
        title: 'Gap review',
        body: 'I map your infrastructure against the controls your auditor or compliance platform checks, and rank the gaps by risk and effort.',
      },
      {
        title: 'Identity and access',
        body: 'SSO and MFA everywhere, least-privilege roles, no shared or long-lived credentials, and access reviews you can show an auditor.',
      },
      {
        title: 'Logging and monitoring',
        body: 'Centralised, retained and tamper-resistant logs, with alerts on the events auditors ask about.',
      },
      {
        title: 'Data protection and recovery',
        body: 'Encryption in transit and at rest, key management, network segmentation, and backups that are tested, not just scheduled.',
      },
    ],
    deliverables: [
      'Gap list mapped to the controls you’re assessed on',
      'Infrastructure fixes implemented as code where possible',
      'Evidence your auditor or compliance platform can use',
      'Runbooks for access reviews, backups and incident response',
      'A handover so your team keeps the controls passing',
    ],
    note: 'I don’t issue audit reports or certifications; that’s your auditor’s job. I get your infrastructure ready for them.',
    proof: {
      kicker: 'Payments · PCI DSS scope',
      title: 'Regulated infrastructure, run day to day',
      body: 'I run PCI DSS-scoped payment infrastructure in production: credential and role-expiry controls, bastion access with per-user MFA, encrypted card-file transfers with a card-production bureau, and an ISO/IEC 27001 risk assessment.',
    },
    faqs: [
      {
        q: 'Do you issue SOC 2 reports or PCI DSS certifications?',
        a: 'No. SOC 2 reports come from licensed CPA firms, and PCI DSS assessments from a Qualified Security Assessor or your own self-assessment questionnaire. I fix the infrastructure side so you’re ready for them.',
      },
      {
        q: 'Do you work with compliance platforms?',
        a: 'The fix is the same whichever platform flags it. Tools such as Vanta, Drata or Secureframe list failing infrastructure tests; I work through that list and fix the underlying setup.',
      },
      {
        q: 'How long does SOC 2 readiness take?',
        a: 'The infrastructure work usually takes two to four weeks. The audit itself is separate: a Type I report looks at one point in time, while a Type II report covers a period, often 3 to 12 months.',
      },
      {
        q: 'Can you help if we handle card data?',
        a: 'Yes. Shrinking what is in PCI DSS scope, for example with your payment provider’s hosted fields or tokenisation, is often the biggest win. Then I harden what remains.',
      },
    ],
    related: ['infrastructure-audit', 'tls-certificate-automation', 'ci-cd-terraform-kubernetes'],
  },
  {
    slug: 'tls-certificate-automation',
    name: 'TLS Certificate Automation',
    serviceType: 'TLS certificate lifecycle automation',
    title: 'TLS Certificate Automation & 100-Day Readiness | UsamaOps',
    description:
      'Public TLS certificates max out at 100 days from March 15, 2027. I inventory certificates, automate renewal with ACME and cert-manager, and add alerts.',
    eyebrow: 'TLS certificate & secrets automation',
    h1: 'Automate your certificates before they expire every 100 days.',
    lead: 'The maximum life of a public TLS certificate fell to 200 days on March 15, 2026. It drops to 100 days on March 15, 2027, and to 47 days in March 2029. Manual renewal stops scaling long before then. I find every certificate you have and automate its renewal, so expiry stops causing outages.',
    summary:
      'Inventory every certificate, automate renewal with ACME and cert-manager, and add expiry alerts. Ready for 100-day certificates.',
    bestFor: 'Teams renewing certificates by hand, or running mTLS between services',
    timeline: '1–2 weeks',
    price: '$2,000–4,000',
    min: 2000,
    max: 4000,
    noun: 'certificate automation',
    signs: [
      'Certificates are renewed from a calendar reminder by whoever remembers',
      'You’ve had an outage, or a near miss, from an expired certificate',
      'Nobody has a full list of your certificates or where they are installed',
      'Your services talk over mTLS with certificates you manage yourself',
      'Keys and secrets are copied by hand between servers and environments',
    ],
    approachTitle: 'How I automate your certificates',
    approach: [
      {
        title: 'Inventory',
        body: 'Every public and internal certificate: where it is installed, who issued it, when it expires and what breaks if it does.',
      },
      {
        title: 'Automate renewal',
        body: 'ACME clients with Let’s Encrypt or your CA’s automation, cert-manager on Kubernetes, and managed certificates on your cloud load balancers where they fit.',
      },
      {
        title: 'Alert before it hurts',
        body: 'Expiry monitoring with alerts well before the deadline, sent where your team will actually see them.',
      },
      {
        title: 'Rotate safely',
        body: 'A tested rotation runbook for internal and mTLS certificates and keys, with secrets moved into a secrets manager.',
      },
    ],
    deliverables: [
      'Certificate inventory with owners and expiry dates',
      'Automated renewal for every certificate that can be automated',
      'Expiry alerts and a dashboard',
      'Rotation runbook for mTLS and internal certificates',
      'A 100-day readiness check you can re-run',
    ],
    proof: {
      kicker: 'Payments · PCI DSS scope',
      title: 'Emergency mTLS rotation across ~30 microservices',
      body: 'A critical mTLS certificate expiry hit around 30 services at once, along with the wildcard certificate on the load balancer. I rotated certificates across every affected service and the load balancer, and brought service-to-service traffic back up.',
    },
    faqs: [
      {
        q: 'When do TLS certificates move to 100 days?',
        a: 'Under the CA/Browser Forum schedule, the maximum validity of public TLS certificates is 200 days from March 15, 2026, 100 days from March 15, 2027 and 47 days from March 15, 2029.',
      },
      {
        q: 'Does this affect internal or mTLS certificates?',
        a: 'The limits apply to publicly trusted certificates. Certificates from your own private CA aren’t bound by them, but they still expire, and automating them prevents the same outages.',
      },
      {
        q: 'We already use Let’s Encrypt. Are we covered?',
        a: 'Mostly, for the sites it covers, since those certificates already renew automatically. The risk is usually everything else: certificates bought from other CAs, internal and mTLS certificates, and appliances or load balancers renewed by hand.',
      },
      {
        q: 'Can you automate secrets and keys too?',
        a: 'Yes. Secrets move into a secrets manager with access controls and rotation, instead of living in files, environment variables or chat.',
      },
    ],
    related: ['soc2-pci-dss-compliance', 'ci-cd-terraform-kubernetes', 'infrastructure-audit'],
  },
  {
    slug: 'fractional-devops-engineer',
    name: 'Fractional DevOps Engineer',
    serviceType: 'Fractional DevOps and SRE support',
    title: 'Fractional & Remote DevOps Engineer for Hire | UsamaOps',
    description:
      'Hire a remote, fractional DevOps and SRE engineer: up to 20–30 hours a month, business-hours support and a monthly report. $1,500–3,000 a month.',
    eyebrow: 'Fractional & remote DevOps engineer',
    h1: 'A senior DevOps engineer on your team, without a full-time hire.',
    lead: 'Most growing companies need senior DevOps and SRE judgement every week, but not 40 hours of it. Hire me as your fractional DevOps engineer: up to 20–30 hours a month across infrastructure, reliability, security, cost and AI operations, with business-hours support and a monthly report.',
    summary:
      'Up to 20–30 hours a month across DevOps, SRE and AI operations, with business-hours support and a monthly report.',
    bestFor: 'Companies without a DevOps engineer, or waiting for one to start',
    timeline: 'Monthly, 3-month minimum',
    price: '$1,500–3,000 / month',
    min: 1500,
    max: 3000,
    noun: 'a fractional DevOps engineer',
    signs: [
      'Your developers lose days to infrastructure work they don’t enjoy',
      'You can’t justify a full-time DevOps salary yet',
      'Your DevOps hire is months away, or just left',
      'Nobody owns uptime, alerts or the on-call runbook',
      'You want senior review of infrastructure changes before they ship',
    ],
    approachTitle: 'What a month looks like',
    approach: [
      {
        title: 'Hands-on work every week',
        body: 'Infrastructure changes, pipeline fixes, upgrades and cost or security improvements, delivered as pull requests your team can review.',
      },
      {
        title: 'Reliability',
        body: 'Monitoring, alerting and runbooks so problems are caught before customers see them, plus help with incidents during business hours.',
      },
      {
        title: 'Advice when you need it',
        body: 'Architecture reviews, vendor and tooling choices, and a second opinion on anything infrastructure-related.',
      },
      {
        title: 'Monthly report',
        body: 'What changed, what it cost, open risks and the plan for next month, in plain language.',
      },
    ],
    deliverables: [
      'Up to 20–30 hours a month, agreed in advance',
      'Business-hours support over email, Slack or WhatsApp',
      'Pull requests and documentation for every change',
      'A monthly report on changes, costs and risks',
      'Three-month minimum, billed monthly in advance',
    ],
    proof: {
      kicker: 'Time zones',
      title: 'Overlap with US, UK, European and Gulf hours',
      body: 'I work from Lahore, Pakistan (UTC+5): US East Coast mornings, most of the UK and European working day, and the full Gulf working day. Updates are written down, so nothing depends on being online at the same moment.',
    },
    faqs: [
      {
        q: 'What is a fractional DevOps engineer?',
        a: 'A senior engineer who works with you part-time on a monthly retainer instead of as a full-time employee. You get the experience for a fraction of the cost of a full-time hire.',
      },
      {
        q: 'How much does it cost to hire a remote DevOps engineer?',
        a: 'My fractional retainer is $1,500–3,000 a month for up to 20–30 hours, depending on scope, with a three-month minimum. Fixed-price projects are also available.',
      },
      {
        q: 'Can companies outside Pakistan hire you?',
        a: 'Yes. I work with clients worldwide, invoice in USD and sign an NDA before any access.',
      },
      {
        q: 'What happens when we hire a full-time DevOps engineer?',
        a: 'I’ll help you hire and onboard them, and hand everything over with documentation, so they start with a clean, well-understood setup.',
      },
    ],
    related: ['infrastructure-audit', 'ci-cd-terraform-kubernetes', 'cloud-cost-optimization'],
  },
  {
    slug: 'ai-integration',
    name: 'AI Integration & LLM Cost Control',
    serviceType: 'AI integration consulting',
    title: 'AI Integration Consultant & LLM Cost Control | UsamaOps',
    description:
      'AI integration for businesses: find the use cases worth paying for, automate workflows and ship LLM features to production with privacy and spend controls.',
    eyebrow: 'AI integration & LLM cost control',
    h1: 'Put AI to work in your business, without runaway costs.',
    lead: 'Most AI projects stall at the demo, or ship and then surprise everyone with the bill. I help you pick the use cases worth paying for, automate real workflows, and run AI features in production with the same security and cost discipline I apply to payment infrastructure.',
    summary:
      'Find the AI use cases worth paying for, automate workflows and ship LLM features with privacy and spend controls.',
    bestFor: 'Businesses exploring AI, and product teams shipping LLM features',
    timeline: '3 days to 4 weeks',
    price: 'From $750',
    min: 750,
    max: 8000,
    noun: 'help with AI',
    signs: [
      'An AI pilot worked in a demo but never reached production',
      'Your team spends hours on repetitive work: triage, data entry, documents or reports',
      'The model bill grows and nobody can say which feature or customer drives it',
      'Customer data goes to AI providers without clear rules',
      'You’re not sure whether to use an API, an open-weight model or neither',
    ],
    approachTitle: 'How I help you use AI',
    approach: [
      {
        title: 'Pick the right use cases',
        body: 'I map your workflows and estimate, for each candidate, the hours saved and the monthly model cost, so you fund the ones that pay back.',
      },
      {
        title: 'Automate workflows',
        body: 'Support triage, document and invoice processing, lead research or reporting, with human review where it matters and full logging.',
      },
      {
        title: 'Ship to production safely',
        body: 'API keys in a secrets manager, rate limits, per-customer spend caps, PII redaction, fallbacks across providers, evaluations and monitoring.',
      },
      {
        title: 'Keep the bill low',
        body: 'Simple tasks go to small, cheap models, prompts and responses are cached, non-urgent work is batched, and open-weight models are self-hosted only when your volume makes it cheaper.',
      },
    ],
    deliverables: [],
    packages: [
      {
        name: 'AI Opportunity & Cost Review',
        time: '3–5 days',
        price: '$750',
        body: 'I map your workflows, find the 3–5 tasks where AI saves real hours, estimate the monthly model cost of each and pick models and vendors that meet your privacy needs. You get a costed build plan.',
      },
      {
        name: 'AI Workflow Automation',
        time: '1–3 weeks',
        price: '$1,500–4,000',
        body: 'One business process automated end to end: support triage, document and invoice processing, lead research or internal reporting. Human review where it matters, full logging and hard spend caps.',
      },
      {
        name: 'Production AI Integration',
        time: '2–4 weeks',
        price: '$3,000–8,000',
        body: 'LLM features shipped into your product safely: keys in a secrets manager, rate limits and per-customer spend caps, PII redaction, provider fallbacks, evaluations, and cost and latency dashboards.',
      },
    ],
    proof: {
      kicker: 'Payments · AI-assisted build',
      title: 'Automated, PAN-free reporting pipeline',
      body: 'Card-network reports arrived encrypted over SFTP and were handled by hand. I built a Node.js pipeline with Claude Code that pulls, decrypts and emails the reports, verified to carry no card numbers.',
    },
    faqs: [
      {
        q: 'How do you keep AI costs low in production?',
        a: 'By sending each task to the cheapest model that does it well, caching prompts and responses, batching work that isn’t urgent, and putting hard spend limits on every feature and customer. Self-hosting open-weight models only makes sense at high volume, and I’ll tell you when it does.',
      },
      {
        q: 'Is our data safe with AI providers?',
        a: 'I use API settings that don’t retain or train on your data where providers offer them, redact personal data before it leaves your systems, and log every call. For the most sensitive data, a self-hosted model may be the right answer.',
      },
      {
        q: 'Which AI models and providers do you work with?',
        a: 'I’m not tied to one. I choose per task between hosted models from providers such as Anthropic, OpenAI and Google, and open-weight models you can run yourself, based on quality, cost and privacy.',
      },
      {
        q: 'Do we need to train our own model?',
        a: 'Almost never. Existing models, good prompts, your own data through retrieval and solid evaluation cover most business needs at a fraction of the cost.',
      },
    ],
    related: ['cloud-cost-optimization', 'fractional-devops-engineer', 'infrastructure-audit'],
  },
];

export function getService(slug: string): Service {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}

export const servicePath = (slug: string) => `/services/${slug}/`;
