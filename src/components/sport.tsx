'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/fussball1.WEBP',
      alt: 'Bild von mir',
      caption: '',
    },
    {
      src: '/fussball2.WEBP',
      alt: 'Bild von mir',
      caption: '',
    },
    {
      src: '/fussball3.webp',
      alt: 'Bild von mir',
      caption: '',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Meine Sportlaufbahn
        </h2>
        <p className="mt-4 text-muted-foreground">
        Seit ich denken kann spiele ich Fußball - dabei war ich schon bei verschiedenen Vereinen wie dem VfB Eichstätt, TSV Weißenburg oder SV Marienstein und nun auch in München beim SC München.
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;