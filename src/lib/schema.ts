// Shared schema.org nodes. Every page points at the same Person by @id so search engines
// connect the homepage, the service pages, LinkedIn and GitHub to one entity.
import { site } from '../site';

export const homeUrl = `${site.url}/`;
export const personId = `${homeUrl}#person`;
export const businessId = `${homeUrl}#service`;

export const knowsAbout = [
  'DevOps',
  'Site reliability engineering',
  'Cloud infrastructure',
  'Cloud cost optimization',
  'AWS',
  'Google Cloud',
  'Oracle Cloud Infrastructure',
  'Huawei Cloud',
  'Multi-cloud',
  'Kubernetes',
  'Terraform',
  'Ansible',
  'CI/CD',
  'GitHub Actions',
  'PCI DSS',
  'SOC 2',
  'ISO/IEC 27001',
  'HIPAA',
  'GDPR',
  'Compliance readiness',
  'TLS certificate automation',
  'AI integration',
  'LLM cost optimization',
  'Workflow automation',
];

const lahore = { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' };

export const personNode = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  alternateName: [site.brand, 'Usama'],
  url: homeUrl,
  image: `${site.url}/images/usama.jpg`,
  email: site.email,
  telephone: site.phone,
  jobTitle: 'Senior DevOps & Site Reliability Engineer',
  description:
    'Freelance DevOps, SRE and AI integration consultant based in Lahore, Pakistan, working remotely with clients worldwide.',
  address: lahore,
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Government College University Lahore' },
  knowsAbout,
  sameAs: [site.linkedin, site.github],
};

export function businessNode(description: string, offers: { name: string; min: number; max?: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: `${site.brand} — ${site.name}`,
    url: homeUrl,
    email: site.email,
    telephone: site.phone,
    image: `${site.url}/og.png`,
    description,
    address: lahore,
    areaServed: 'Worldwide',
    priceRange: '$500–$8,000',
    knowsAbout,
    founder: { '@id': personId },
    makesOffer: offers.map((o) => ({
      '@type': 'Offer',
      name: o.name,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: o.min,
        maxPrice: o.max,
      },
    })),
  };
}

export function faqNode(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
