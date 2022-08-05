export interface Character {
  created: string;
  episode: Array<any>;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  id: number;
  image: string;
  location: any;
  name: string;
  origin: any;
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  type: string;
  url: string
}
