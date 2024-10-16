import React from 'react';
import { useParams } from 'react-router-dom';

const AttractionPage = () => {
  const { id } = useParams();
  const attraction = attractionsData.flat().find((attr) => attr.id === parseInt(id));

  if (!attraction) return <div>Attraction not found.</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{attraction.name}</h1>
      <img src={attraction.photo} alt={attraction.name} className="mb-4 w-full h-48 object-cover rounded" />
      <p>{attraction.description}</p>
      <p className="mt-4">Location: {attraction.latitude}, {attraction.longitude}</p>
    </div>
  );
};

export default AttractionPage;
