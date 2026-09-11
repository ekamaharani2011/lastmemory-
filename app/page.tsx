'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg',
    '/1.jpeg'
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden planar-background">
      {!showGallery ? (
        <InteractionFlow onComplete={() => setShowGallery(true)} />
      ) : (
        <DomeGallery images={userImages} />
      )}
    </main>
  );
}
