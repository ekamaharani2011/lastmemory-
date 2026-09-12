'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',

  '/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',

'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',

'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',

'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
'/IMG-20260818-WA0008.jpg',
'/IMG-20260818-WA0001.jpg',
'/IMG-20260804-WA0000.jpg',
];





    
    
    
    
    
    
  
    
    
    
    
  
  

  
    <main className="min-h-screen bg-black text-white overflow-hidden planar-background">
      {!showGallery ? (
        <InteractionFlow onComplete={() => setShowGallery(true)} />
      ) : (
        <DomeGallery images={userImages} />
      )}
    </main>
  );
}
