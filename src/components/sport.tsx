'use client';

import React from 'react';
import { Photos } from './photos';
import { sport } from '@/data/portfolio';

const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          {sport.title}
        </h2>
        <p className="mt-4 text-muted-foreground">
          {sport.description}
        </p>
      </div>
      <Photos photos={sport.photos} />
    </div>
  );
};

export default Sports;