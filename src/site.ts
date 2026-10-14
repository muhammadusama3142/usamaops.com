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
  // Cal.com booking page for the free 20-minute call. Empty = buttons fall back to email.
  // Visitors see slots in their own time zone; bookings land on the Google Calendar.
  booking: 'https://cal.com/usamaops/free-review',
};

export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// wa.me opens a WhatsApp chat with the number; the optional text pre-fills the first message.
export function whatsapp(text?: string): string {
  const base = `https://wa.me/${site.phone.replace(/\D/g, '')}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// Where every "Book …" button points: the Cal.com page once set, otherwise an email with a subject.
// Buttons for a specific service pre-fill the "What would you like to discuss?" answer
// (Cal.com field id `notes`), so each booking says which page it came from. Visitors can edit it.
export function book(subject: string): string {
  if (!site.booking) return mailto(subject);
  if (subject.startsWith('Free 20-minute')) return site.booking;
  return `${site.booking}?notes=${encodeURIComponent(`I'm interested in ${subject}. `)}`;
}
