import { FC, useEffect, useState } from 'react';
import { IDog, DogService } from '@/model.ts';
import { DogCard } from '@/components/DogCard.tsx';
import '@/style.css';

export const App: FC = () => {
  const [dogs, setDogs] = useState<IDog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const dogService = new DogService();
        const data = await dogService.fetchDogs();
        setDogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load dogs');
        console.error('Error loading dogs:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDogs();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <main>
          <div className="loading">Loading adorable dogs...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h1>🐕 Dogs Gallery</h1>
        <p>A modern React showcase of wonderful dogs</p>
      </header>

      <main>
        {error && <div className="error">Error: {error}</div>}

        {dogs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🐕</div>
            <p>No dogs found. Please check back later!</p>
          </div>
        ) : (
          <div className="dogs-grid">
            {dogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
