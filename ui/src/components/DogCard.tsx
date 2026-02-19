import { FC } from 'react';
import { IDog } from '@/model.ts';
import '@/style.css';

interface DogCardProps {
  dog: IDog;
}

export const DogCard: FC<DogCardProps> = ({ dog }) => {
  return (
    <div className="dog-card">
      <img
        src={dog.dogImage}
        alt={dog.title}
        className="dog-card-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="250" height="250"%3E%3Crect fill="%23ecf0f1" width="250" height="250"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%237f8c8d"%3ENo Image%3C/text%3E%3C/svg%3E';
        }}
      />
      <div className="dog-card-content">
        <h3 className="dog-card-title">{dog.title}</h3>
        <p className="dog-card-breed">{dog.sex}</p>
        <span className="dog-card-age">Age: {dog.age} years</span>
        <p className="dog-card-description">{dog.description}</p>
      </div>
    </div>
  );
};
