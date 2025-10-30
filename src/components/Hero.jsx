import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden rounded-2xl bg-black/90">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur-sm">
          Premium B2B Fruit Beverages
        </span>
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
          PT AIDIA Makmur Indonesia
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80 sm:mt-4 sm:text-lg">
          High-quality fruit juices, buffet items, and simple syrups for hotels, restaurants, and distributors.
        </p>
      </div>
    </section>
  );
}
