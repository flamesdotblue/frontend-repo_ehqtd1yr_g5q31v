import React from 'react';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import ProductSolutions from './components/ProductSolutions';
import PartnerCTA from './components/PartnerCTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20" />
          <span className="text-sm font-semibold tracking-tight sm:text-base">PT AIDIA Makmur Indonesia</span>
        </div>
        <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#about" className="hover:text-foreground">Company</a>
          <a href="#products" className="hover:text-foreground">Products</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Company profile */}
      <div id="about">
        <CompanyProfile />
      </div>

      {/* Products & solutions */}
      <div id="products">
        <ProductSolutions />
      </div>

      {/* Partner CTA */}
      <div id="contact">
        <PartnerCTA />
      </div>

      {/* Footer */}
      <footer className="mt-10 border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PT AIDIA Makmur Indonesia. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Committed to quality, taste consistency, and food safety.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
