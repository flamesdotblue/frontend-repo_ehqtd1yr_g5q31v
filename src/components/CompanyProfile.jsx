import React from 'react';
import { Building2, ShieldCheck, Package, Leaf } from 'lucide-react';

export default function CompanyProfile() {
  const items = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: 'B2B Focused',
      desc: 'Serving hotels, restaurants, and distributors with tailored product selections and reliable logistics.'
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: 'Flexible Packaging',
      desc: 'From buffet-ready formats to bulk supply, choose the packaging that fits your operation.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Quality & Food Safety',
      desc: 'Consistent taste, traceable sourcing, and strict safety standards across our product lines.'
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: 'Human-Centered Design',
      desc: 'Practical, efficient solutions that integrate seamlessly with your workflow and brand experience.'
    }
  ];

  return (
    <section className="mx-auto mt-14 max-w-7xl px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Company Profile</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            We produce and distribute premium fruit juice products, buffet items, and simple syrups designed for professional service environments.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-xl border border-border bg-background/60 p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
              {item.icon}
            </div>
            <h3 className="text-base font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
