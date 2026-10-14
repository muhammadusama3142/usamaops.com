// Single place for contact details and links used across the site.
export const site = {
  name: 'Muhammad Usama',
  brand: 'UsamaOps',
  url: 'https://usamaops.com',
  email: 'hello@usamaops.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-usama-8894b4201/',
  github: 'https://github.com/muhammadusama3142',
  repo: 'https://github.com/muhammadusama3142/usamaops.com',
};

export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
