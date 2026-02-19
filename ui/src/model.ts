/**
 * Types and interfaces for Dog data
 */
export enum Sex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export interface IDog {
  id: number;
  title: string;
  sex: Sex;
  age: number;
  description: string;
  dogImage: string;
}

/**
 * API service for fetching dog data
 */
export class DogService {
  private baseUrl = '';

  async fetchDogs(): Promise<IDog[]> {
    try {
      const response = await fetch(`${this.baseUrl}/dogs`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data as IDog[];
    } catch (error) {
      console.error('Failed to fetch dogs:', error);
      // Return mock data for development
      return this.getMockData();
    }
  }

  private getMockData(): IDog[] {
    return [
      {
        id: 1,
        title: 'Monty',
        sex: Sex.MALE,
        age: 14,
        description: 'Monty enjoys chicken treats and cuddling while watching Seinfeld.',
        dogImage: '/images/dog/p1.jpeg',
      },
      {
        id: 2,
        title: 'Jubilee',
        sex: Sex.FEMALE,
        age: 6,
        description: 'Jubilee enjoys thoughtful discussions by the campfire.',
        dogImage: '/images/dog/p2.jpeg',
      },
    ];
  }
}
