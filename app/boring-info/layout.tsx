import React from 'react';
import type { Metadata } from 'next';

interface BoringInfoLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Boring Info | Kirkland Gee",
  description: "Boring info for payment processing and data privacy.",
};

export default function BoringInfoLayout({ children }: BoringInfoLayoutProps) {
  return (
    <div className="boring-info-layout min-h-screen flex flex-col text-ink px-6 py-16 max-w-3xl mx-auto">
      {children}
    </div>
  );
}

