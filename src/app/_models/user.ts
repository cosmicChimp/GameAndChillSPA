import { Photo } from './photo';

export interface User {
  id: number;
  username: string;
  gender: string;
  age: number;
  gamerHandle: string;
  platforms: string;
  games: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string;
  intro?: string;
  lookingFor?: string;
  photos?: Photo[];
}
