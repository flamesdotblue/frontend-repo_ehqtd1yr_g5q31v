import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function PartnerCTA() {
  return (
    <section className="mx-auto my-16 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Partner with us</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Let’s align product formats and delivery schedules to your service model. Our responsive team ensures smooth onboarding and ongoing support.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:hello@aidia.co.id"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Email Us
            </a>
            <a
              href="tel:+621234567890"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent"
            >
              <Phone className="h-4 w-4" /> Call Sales
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-10 -top-10 aspect-square w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 aspect-square w-40 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        Prefer a brochure? <a className="inline-flex items-center gap-1 font-medium text-primary hover:underline" href="#">Request one <ArrowRight className="h-3 w-3" /></a>
      </p>
    </section>
  );
}
