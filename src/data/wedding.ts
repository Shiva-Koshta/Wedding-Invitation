/**
 * Structured wedding data (typed). Human-readable source of truth: ./details.md
 */

export interface Person {
  name: string
  nickname?: string
  grandfather: string
  father: string
}

export interface WeddingEvent {
  name: string
  date: string
  day: string
  time?: string
  mapUrl?: string
}

export interface Venue {
  name: string
  address: string
  mapUrl?: string
}

/** Google Maps short links for the two locations. */
const CEREMONY_MAP_URL = 'https://maps.app.goo.gl/kBRbxa1CD8g3pDNg8'
const RECEPTION_MAP_URL = 'https://maps.app.goo.gl/8mtwZgpfbALnatJX9'

export const COUPLE: { groom: Person; bride: Person } = {
  groom: {
    name: 'Vishal',
    grandfather: 'Late Shri Nanhe Lal Koshta',
    father: 'Late Shri Jagdish Prasad Koshta',
  },
  bride: {
    name: 'Monika',
    nickname: 'Muskan',
    grandfather: 'Shri Chandra Kripal Koshta',
    father: 'Shri Dhruv Kumar Koshta',
  },
}

export const EVENTS: WeddingEvent[] = [
  { name: 'Satyanarayan Katha', date: '19 June 2026', day: 'Friday', time: '5:00 PM', mapUrl: CEREMONY_MAP_URL },
  { name: 'Mandap', date: '20 June 2026', day: 'Saturday', mapUrl: CEREMONY_MAP_URL },
  { name: 'Badi Haldi & Sangeet', date: '21 June 2026', day: 'Sunday', mapUrl: CEREMONY_MAP_URL },
]

export const RECEPTION: WeddingEvent = {
  name: 'Reception / Main Wedding',
  date: '22 June 2026',
  day: 'Monday',
  time: '7:00 PM onwards',
  mapUrl: RECEPTION_MAP_URL,
}

export const VENUE: Venue = {
  name: 'Agrawal Barat Ghar',
  address: 'Baldeobagh, Jabalpur, Madhya Pradesh',
  mapUrl: RECEPTION_MAP_URL,
}

/** Contact numbers for queries and RSVP. */
export const CONTACTS: string[] = ['9981042180', '7879991099']

/** Countdown target — the main wedding function (Reception), 22 June 2026 at 7:00 PM. */
export const WEDDING_DATE = new Date('2026-06-22T19:00:00')
