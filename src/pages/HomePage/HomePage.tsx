import './HomePage.scss';
import { Categories } from './components/Categories/Categories';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Place } from '../../models/place';
import { PlaceCard } from './components/PlaceCard/PlaceCard';
import { TopCreators } from './components/TopCreators/TopCreators';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch('http://194.87.210.5:5000/api/v1/places')
      .then((response) => response.json())
      .then((places) => {
        setPlaces(places); // [{id: 1, ...}, {id: 2, ...}, {id: 3, ...}, {id: 4, ...}, {id: 5, ...}, {id: 6, ...} ]
        setTimeout(() => {
          setPlaces(places.map((place: Place) => (place.id === 3 ? { ...place, id: 1 } : place)));
          // [{id: 1, ...}, {id: 2, ...}, {id: 1, ...}, {id: 4, ...}, {id: 5, ...}, {id: 6, ...} ]
        }, 2000);
      });
  }, []);

  return (
    <>
      {places.map((place) => (
        <div key={place.name}>
          <PlaceCard id={place.id} />
          <img src={place.image} alt="" />
        </div>
      ))}
      <HeroSection clickHandler={setData} />
      <TopCreators data={data} />
      <Categories />
    </>
  );
};
