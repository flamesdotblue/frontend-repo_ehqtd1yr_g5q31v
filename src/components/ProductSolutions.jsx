import React from 'react';
import { CupSoda, FlaskConical, Droplets, Boxes } from 'lucide-react';

export default function ProductSolutions() {
  const solutions = [
    {
      icon: <CupSoda className="h-6 w-6" />,
      title: 'Premium Fruit Juices',
      points: ['Consistent taste profile', 'Service-ready formats', 'Cold-pressed options']
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: 'Simple Syrups',
      points: ['Bar & buffet applications', 'Balanced sweetness', 'Stable shelf life']
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'Buffet Items',
      points: ['Quick prep and pour', 'Food-safety compliant', 'Reduced waste']
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: 'Packaging Options',
      points: ['Single-serve to bulk', 'Labeling for NH/HoReCa', 'Distributor-friendly pallets']
    }
  ];

  return (
    <section className="mx-auto mt-14 max-w-7xl px-6">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Products & Solutions</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Choose from a broad portfolio designed for efficiency, consistency, and guest satisfaction in professional settings.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((s, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-background/60 p-5 shadow-sm">
            <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
              {s.icon}
            </div>
            <h3 className="text-base font-medium">{s.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {s.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
