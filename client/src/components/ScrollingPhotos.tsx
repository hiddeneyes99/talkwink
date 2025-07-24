import React from 'react';

const photos = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export function ScrollingPhotos() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      <div className="flex animate-scroll-left space-x-4 md:space-x-8">
        {[...photos, ...photos].map((photo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-36 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={photo}
              alt=""
              className="w-full h-full object-cover brightness-110 contrast-110"
            />
          </div>
        ))}
      </div>
      <div className="flex animate-scroll-right space-x-4 md:space-x-8 mt-4 md:mt-8">
        {[...photos.reverse(), ...photos].map((photo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-36 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={photo}
              alt=""
              className="w-full h-full object-cover brightness-110 contrast-110"
            />
          </div>
        ))}
      </div>
      <div className="flex animate-scroll-left space-x-4 md:space-x-8 mt-4 md:mt-8">
        {[...photos, ...photos].map((photo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-36 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={photo}
              alt=""
              className="w-full h-full object-cover brightness-110 contrast-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}