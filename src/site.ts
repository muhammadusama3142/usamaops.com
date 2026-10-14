// Single place for contact details and links used across the site.
export const site = {
  name: 'Muhammad Usama',
  brand: 'UsamaOps',
  url: 'https://usamaops.com',
  email: 'hello@usamaops.com',
  phone: '+923134236974',
  phoneDisplay: '+92 313 4236974',
  linkedin: 'https://www.linkedin.com/in/muhammad-usama-8894b4201/',
  github: 'https://github.com/muhammadusama3142',
  repo: 'https://github.com/muhammadusama3142/usamaops.com',
};

export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// wa.me opens a WhatsApp chat with the number; the optional text pre-fills the first message.
export function whatsapp(text?: string): string {
  const base = `https://wa.me/${site.phone.replace(/\D/g, '')}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
