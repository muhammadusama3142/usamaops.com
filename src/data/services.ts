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
  max?: number;
  payment?: string; // payment terms line under the price; defaults to 50/50
  guarantee?: string;
  noun: string; // completes "Signs you need …"
  signs: string[];
  approachTitle: string;
  approach: { title: string; body: string }[];
  deliverables: string[];
  packages?: { name: string; time: string; price: string; body: string }[];
  note?: string;
  proof?: { kicker: string; title: string; body: string };
  proofHeading?: string; // section heading when the proof is a method, not a production story
  getTitle?: string; // 'What you get' heading override
  contactHeading: string;
  contactText: string;
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
      'A read-only DevOps and cloud infrastructure audit: cloud, CI/CD, security, monitoring and certificates, with a risk-scored plan. From $500.',
    eyebrow: 'DevOps & cloud infrastructure audit',
    h1: 'Know exactly where your infrastructure stands, in five days.',
    lead: 'A read-only audit of your cloud, CI/CD, security, monitoring and certificates. You get a risk-scored report, a 30/60/90-day plan with a quote for each step, and a walkthrough with your team. It’s the fastest way to find out what to fix first.',
    summary:
      'A five-day, read-only review of your cloud, CI/CD, security, monitoring and certificates, with a risk-scored plan.',
    bestFor: 'Teams without a dedicated DevOps engineer, or before a launch, audit or funding round',
    timeline: '5 business days',
    price: 'From $500',
    priceNote: 'Depends on the size of your setup. The fee is credited in full if you book implementation.',
    min: 500,
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
        body: 'Cloud architecture and cost (on AWS, Google Cloud, Oracle Cloud, Huawei Cloud or several at once), CI/CD and releases, identity and access, network and data security, monitoring and incident response, and TLS certificates and secrets.',
      },
      {
        title: 'Score every risk',
        body: 'Each finding gets a severity, its business impact in plain language and the effort to fix it, so you can see what matters most.',
      },
      {
        title: 'Plan and walk through it',
        body: 'A 30/60/90-day plan with a quote for each step, presented on a 60-minute call with your team. Do the work yourselves or with me.',
      },
    ],
    deliverables: [
      'Written report with every finding, its severity and how to fix it',
      'An overview of the architecture you run today',
      'Quick wins you can apply the same week',
      '30/60/90-day plan with a quote for each step',
      '60-minute walkthrough call with your team',
    ],
    proof: {
      kicker: 'Why this works',
      title: 'A checklist built from running regulated production',
      body: 'I run PCI DSS-scoped payment infrastructure in production. The review covers what audits and incidents in that environment have taught me to check, not a generic template, and it works the same on any cloud.',
    },
    faqs: [
      {
        q: 'What access do you need for a DevOps audit?',
        a: 'Read-only access to your cloud accounts, CI/CD system and repositories, ideally through SSO with MFA. I never ask for root or admin keys, and access is removed when the audit ends.',
      },
      {
        q: 'How much does an infrastructure audit cost?',
        a: 'The Health Check starts from $500, depending on the size of your setup, and you get a clear quote before work starts. If you then book implementation with me, the fee is credited in full.',
      },
      {
        q: 'Which clouds and tools do you cover?',
        a: 'AWS, Google Cloud, Oracle Cloud and Huawei Cloud, including multi-cloud setups, plus Kubernetes, Docker, Terraform, Ansible and GitHub Actions.',
      },
      {
        q: 'Do we have to hire you after the audit?',
        a: 'No. The plan is yours to keep. Many teams fix the quick wins themselves and bring me in only for the bigger items.',
      },
    ],
    related: ['cloud-cost-optimization', 'compliance-readiness', 'fractional-devops-engineer'],
    proofHeading: 'Why it works.',
    contactHeading: 'Book your Infrastructure Health Check.',
    contactText: 'Tell me what you run and what worries you most. I’ll reply with the scope and a quote for the Health Check.',
  },
  {
    slug: 'cloud-cost-optimization',
    name: 'Cloud Cost Optimization',
    serviceType: 'Cloud cost optimization',
    title: 'AWS, GCP & Oracle Cloud Cost Optimization | UsamaOps',
    description:
      'Cloud cost optimization for AWS, Google Cloud, Oracle Cloud and multi-cloud: rightsizing, commitments, storage and idle resources. 2× savings guarantee.',
    eyebrow: 'Cloud cost optimization · AWS, Google Cloud, Oracle Cloud',
    h1: 'Cut your cloud bill without slowing your team down.',
    lead: 'Whether you run on AWS, Google Cloud, Oracle Cloud, Huawei Cloud or a mix of them, most cloud bills carry waste nobody has had time to chase: idle resources, oversized instances, missing commitments and data transfer nobody planned for. Flexera’s 2026 State of the Cloud survey puts wasted cloud spend at 29%. In one to two weeks I find that waste and implement the quick wins, not just list them.',
    summary:
      'Rightsizing, commitments, storage, data transfer and idle resources, with quick wins implemented and a 2× savings guarantee.',
    bestFor: 'Teams spending $3,000 or more a month on any cloud, or across several',
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
      'You pay full on-demand prices with no committed-use discounts or reserved capacity',
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
        body: 'Commitment discounts sized to your real baseline, such as AWS Savings Plans or Google Cloud committed use discounts, cheaper ARM-based machines where they fit, and spot or preemptible capacity for work that can be interrupted.',
      },
      {
        title: 'Fix storage, transfer and logs',
        body: 'Storage lifecycle rules, cheaper storage classes and disk types, sensible log retention, and the NAT and cross-zone or cross-region traffic that quietly inflate bills.',
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
      kicker: 'Payments · cloud cost',
      title: 'From over $15,000 to about $4,000 a month',
      body: 'A payments platform’s cloud bill had grown past $15,000 a month. I went through it service by service and cut the spend the platform didn’t need, bringing it to about $4,000 a month: more than 70% lower, and over $130,000 a year saved.',
    },
    faqs: [
      {
        q: 'How much can you save on our cloud bill?',
        a: 'It depends on how the account has grown, so I won’t promise a number before looking. On one payments platform I took the bill from over $15,000 to about $4,000 a month. For teams spending at least $3,000 a month, I guarantee annualised savings of at least twice my fee, or you don’t pay.',
      },
      {
        q: 'Will cutting costs hurt performance or reliability?',
        a: 'It shouldn’t. I start with waste that has no performance impact, test rightsizing against real usage data, and schedule riskier changes with your team, with a rollback plan.',
      },
      {
        q: 'Which cloud providers do you work with?',
        a: 'AWS, Google Cloud, Oracle Cloud and Huawei Cloud, and multi-cloud setups that mix them. The approach is the same everywhere: real usage data, rightsizing, commitment discounts, storage and data transfer.',
      },
      {
        q: 'Can you reduce our AI or GPU costs too?',
        a: 'Yes. Model choice, caching, batching and spend limits often cut AI bills sharply. That work is covered on the AI integration page.',
      },
    ],
    related: ['infrastructure-audit', 'ai-integration', 'fractional-devops-engineer'],
    contactHeading: 'Let’s cut your cloud bill.',
    contactText: 'Send me a rough idea of your monthly cloud spend and which providers you use. I’ll tell you where I’d look first.',
  },
  {
    slug: 'ci-cd-terraform-kubernetes',
    name: 'CI/CD, Terraform & Kubernetes',
    serviceType: 'CI/CD and infrastructure as code',
    title: 'CI/CD, Terraform & Kubernetes Consultant | UsamaOps',
    description:
      'CI/CD pipelines with GitHub Actions, infrastructure as code with Terraform, and Kubernetes set up for safe, repeatable deploys. From $3,000.',
    eyebrow: 'CI/CD · Terraform · Kubernetes',
    h1: 'Deploys your team trusts, from commit to production.',
    lead: 'Manual deploy steps, environments that drift apart and one person who knows how it all works. I set up CI/CD pipelines with GitHub Actions, infrastructure as code with Terraform, and Kubernetes or container deployments on AWS, Google Cloud, Oracle Cloud, Huawei Cloud or several at once, so every release is repeatable, reviewed and easy to roll back.',
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
        body: 'Terraform modules for networks, compute, databases and IAM on any major cloud, or across several, with remote state, locking and a plan-and-apply workflow in pull requests.',
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
        q: 'Do you work with multi-cloud setups?',
        a: 'Yes. Terraform, Kubernetes and GitHub Actions work across AWS, Google Cloud, Oracle Cloud and Huawei Cloud, so one consistent setup can manage infrastructure on several providers at once.',
      },
      {
        q: 'Can you bring hand-built infrastructure under Terraform?',
        a: 'Yes. I import existing resources into Terraform step by step, so nothing has to be rebuilt or taken down.',
      },
      {
        q: 'Which CI/CD tools do you use?',
        a: 'Mostly GitHub Actions, which is what I run in production. If you’re on another CI system that already does the job, I’ll keep it, and tell you up front how well I know it.',
      },
      {
        q: 'Will my team be able to maintain it?',
        a: 'That’s the goal. Everything lives in your repository with documentation, and the handover includes a walkthrough so your developers can change it without me.',
      },
    ],
    related: ['infrastructure-audit', 'fractional-devops-engineer', 'tls-certificate-automation'],
    contactHeading: 'Let’s make your deploys boring.',
    contactText: 'Tell me how you deploy today and what keeps going wrong. I’ll suggest the smallest setup that fixes it.',
  },
  {
    slug: 'compliance-readiness',
    name: 'Compliance Readiness',
    serviceType: 'Compliance infrastructure readiness',
    title: 'Compliance Readiness: SOC 2, PCI DSS & ISO 27001 | UsamaOps',
    description:
      'Compliance readiness for SOC 2, PCI DSS, ISO 27001, HIPAA and GDPR. I fix the infrastructure controls auditors check: IAM, MFA, logging and backups.',
    eyebrow: 'SOC 2 · PCI DSS · ISO 27001 · HIPAA · GDPR',
    h1: 'Get your infrastructure audit-ready for whichever framework your customers ask for.',
    lead: 'Compliance platforms collect evidence, but someone still has to fix what they flag. Whether it’s SOC 2, PCI DSS, ISO 27001, HIPAA or GDPR, I fix the infrastructure controls auditors check (identity and access, MFA, logging, encryption, backups and access reviews), drawing on experience running PCI DSS-scoped payment infrastructure in production.',
    summary:
      'SOC 2, PCI DSS, ISO 27001, HIPAA or GDPR: I fix the infrastructure controls auditors check, from IAM and MFA to logging, encryption and backups.',
    bestFor: 'B2B SaaS chasing enterprise deals, fintech and payments teams, and anyone facing a security audit',
    timeline: '2–4 weeks',
    price: '$3,000–8,000',
    min: 3000,
    max: 8000,
    noun: 'compliance infrastructure work',
    signs: [
      'Your compliance platform shows a wall of failing infrastructure checks',
      'An enterprise customer sent a security questionnaire you can’t fully answer',
      'A customer or partner now asks for SOC 2, ISO 27001, HIPAA or GDPR evidence',
      'Shared accounts, missing MFA, or access nobody has reviewed in months',
      'Logs are missing, kept too briefly or not protected from tampering',
      'You handle card data and aren’t sure what is in PCI DSS scope',
    ],
    approachTitle: 'How I get your infrastructure audit-ready',
    approach: [
      {
        title: 'Gap review',
        body: 'I map your infrastructure against the controls your framework, auditor or compliance platform checks, and rank the gaps by risk and effort.',
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
    note: 'I cover the infrastructure side of each framework. I don’t issue audit reports or certifications; that’s your auditor’s job. Policies and legal obligations, such as GDPR’s, stay with your team and your lawyers.',
    proof: {
      kicker: 'Payments · PCI DSS scope',
      title: 'Regulated infrastructure, run day to day',
      body: 'I run PCI DSS-scoped payment infrastructure in production: credential and role-expiry controls, bastion access with per-user MFA, encrypted card-file transfers with a card-production bureau, and an ISO/IEC 27001 risk assessment.',
    },
    faqs: [
      {
        q: 'Which compliance frameworks do you cover?',
        a: 'SOC 2, PCI DSS, ISO 27001, HIPAA and GDPR, on the infrastructure side: identity and access, logging, encryption, backups, network security and the evidence auditors ask for. Many controls overlap, so one well-built setup often serves several frameworks.',
      },
      {
        q: 'Do you issue SOC 2 reports or certifications?',
        a: 'No. SOC 2 reports come from licensed CPA firms, PCI DSS assessments from a Qualified Security Assessor or your own self-assessment questionnaire, and ISO 27001 certificates from an accredited certification body. I get your infrastructure ready for them.',
      },
      {
        q: 'Do you work with compliance platforms?',
        a: 'Yes. The fix is the same whichever platform flags it. Tools such as Vanta, Drata or Secureframe list failing infrastructure tests; I work through that list and fix the underlying setup.',
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
    contactHeading: 'Let’s get you audit-ready.',
    contactText: 'Tell me which framework you’re working towards and your deadline. I’ll tell you what the infrastructure side involves.',
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
    related: ['compliance-readiness', 'ci-cd-terraform-kubernetes', 'infrastructure-audit'],
    contactHeading: 'Let’s automate your certificates.',
    contactText: 'Tell me roughly how many domains and services you run, and how certificates are renewed today.',
  },
  {
    slug: 'fractional-devops-engineer',
    name: 'Fractional DevOps Engineer',
    serviceType: 'Fractional DevOps and SRE support',
    title: 'Fractional & Remote DevOps Engineer for Hire | UsamaOps',
    description:
      'Hire a remote, fractional DevOps and SRE engineer: 20–30 hours a week, business-hours support and a monthly report. From $1,000 a month, no minimum term.',
    eyebrow: 'Fractional & remote DevOps engineer',
    h1: 'A senior DevOps engineer on your team, without a full-time hire.',
    lead: 'Most growing companies need senior DevOps and SRE judgement every week, but not 40 hours of it. Hire me as your fractional DevOps engineer: 20–30 hours a week across infrastructure, reliability, security, cost and AI operations on AWS, Google Cloud, Oracle Cloud, Huawei Cloud or multi-cloud, with business-hours support and a monthly report.',
    summary:
      '20–30 hours a week across DevOps, SRE and AI operations, with business-hours support and a monthly report.',
    bestFor: 'Companies without a DevOps engineer, or waiting for one to start',
    timeline: 'Monthly, no minimum term',
    price: 'From $1,000 / month',
    min: 1000,
    payment: 'Prices in USD, billed monthly in advance.',
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
      '20–30 hours a week, agreed in advance',
      'Business-hours support over email, Slack or WhatsApp',
      'Pull requests and documentation for every change',
      'A monthly report on changes, costs and risks',
      'Billed monthly in advance, with no minimum term',
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
        a: 'My fractional retainer starts from $1,000 a month for 20–30 hours a week, depending on scope, with no minimum term. Project-based work is also available.',
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
    proofHeading: 'Why it works.',
    getTitle: 'What you get each month.',
    contactHeading: 'Add a senior DevOps engineer to your team.',
    contactText: 'Tell me about your team, your stack and what’s on your plate this quarter. We’ll see whether a monthly retainer fits.',
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
    contactHeading: 'Let’s put AI to work in your business.',
    contactText: 'Tell me which tasks eat your team’s time, or which AI feature you want to ship. I’ll tell you what it would take and roughly what it would cost to run.',
  },
];

export function getService(slug: string): Service {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}

export const servicePath = (slug: string) => `/services/${slug}/`;
