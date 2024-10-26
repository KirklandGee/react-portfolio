import React from 'react';

const stats = [
  { value: '$1M+', label: 'Revenue Generated' },
  { value: '100+', label: 'Happy Clients' },
  { value: '2m+', label: 'Monthly Organic Traffic' },
];

export default function KeyStats() {
  return (
    <section className="bg-licorice text-isabelline py-16 rounded-lg border-licorice dark:border-isabelline dark:bg-foreground dark:text-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-florent font-bold mb-8 text-center">Why Work With Me?</h2>
        <div className="flex flex-wrap justify-around items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4 mb-8 md:mb-0">
              <div className="text-5xl font-bold mb-2 text-moonstone">{stat.value}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}