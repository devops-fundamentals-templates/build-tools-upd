import { describe, it, expect } from 'vitest';
import { DogService, IDog } from '@/model';

describe('DogService', () => {
  it('should be able to instantiate DogService', () => {
    const service = new DogService();
    expect(service).toBeDefined();
  });

  it('should have fetchDogs method', () => {
    const service = new DogService();
    expect(service.fetchDogs).toBeDefined();
  });

  it('should return array of dogs', async () => {
    const service = new DogService();
    const dogs = await service.fetchDogs();
    expect(Array.isArray(dogs)).toBe(true);
    expect(dogs.length).toBeGreaterThan(0);
  });

  it('should return valid dog objects', async () => {
    const service = new DogService();
    const dogs = await service.fetchDogs();

    dogs.forEach((dog: IDog) => {
      expect(dog).toHaveProperty('id');
      expect(dog).toHaveProperty('name');
      expect(dog).toHaveProperty('breed');
      expect(dog).toHaveProperty('image');
    });
  });
});
