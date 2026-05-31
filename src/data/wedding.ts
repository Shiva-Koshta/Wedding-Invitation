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
}

export interface Venue {
  name: string
  address: string
}

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
  { name: 'Satyanarayan Katha', date: '19 June 2026', day: 'Friday', time: '5:00 PM' },
  { name: 'Mandap', date: '20 June 2026', day: 'Saturday' },
  { name: 'Badi Haldi & Sangeet', date: '21 June 2026', day: 'Sunday' },
]

export const RECEPTION: WeddingEvent = {
  name: 'Reception / Main Wedding',
  date: '22 June 2026',
  day: 'Monday',
  time: '7:00 PM onwards',
}

export const VENUE: Venue = {
  name: 'Agrawal Barat Ghar',
  address: 'Baldeobagh, Jabalpur, Madhya Pradesh',
}
