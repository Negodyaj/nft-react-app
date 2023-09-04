import React, { useEffect, useState } from 'react';
import { Place } from '../../../../models/place';

interface PlaceCardProps {
  id: number;
  id2?: number;
}

export const PlaceCard = (props: PlaceCardProps) => {
  const [place, setPlace] = useState<Place | undefined>(undefined);

  useEffect(() => {
    fetch(`http://194.87.210.5:5000/api/v1/places/${props.id}`)
      .then((response) => response.json())
      .then((place) => setPlace(place));
  }, [props.id]);

  // useEffect(() => {
  //   fetch(`http://194.87.210.5:5000/api/v1/places/${props.id2}`)
  //     .then((response) => response.json())
  //     .then((place) => setPlace(place));
  // }, [props.id2]);

  return (
    <>
      <div>{props.id}</div>
      <div>{place?.info.about}</div>
    </>
  );
};
