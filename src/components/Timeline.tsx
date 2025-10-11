import { useState } from 'react';
import { Check } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1950',
    title: 'Foundation',
    description: 'HRT Group established by Mr. Thondepu V Hanumantha Rao with a vision for quality business.',
  },
  {
    year: '1974',
    title: 'Textile Distribution Begins',
    description: 'Started as authorized distributor for Bombay Dyeing in coastal Andhra Pradesh.',
  },
  {
    year: '1977',
    title: 'Pharmaceutical Entry',
    description: 'Expanded into pharmaceutical distribution with Sarabhai Chemicals partnership.',
  },
  {
    year: '1982',
    title: 'Real Estate Ventures',
    description: 'First major commercial real estate project completed in Vijayawada.',
  },
  {
    year: '1990',
    title: 'Regional Expansion',
    description: 'Extended operations to Telangana and Tamil Nadu regions.',
  },
  {
    year: '1996',
    title: 'Franchise Network',
    description: 'Established 25+ exclusive franchise outlets for textile distribution.',
  },
  {
    year: '2007',
    title: 'Municipal Projects',
    description: 'Won first major municipal contract for public infrastructure development.',
  },
  {
    year: '2019',
    title: 'Digital Transformation',
    description: 'Implemented modern ERP and logistics management systems across all verticals.',
  },
  {
    year: '2025',
    title: 'Continued Excellence',
    description: 'Leading family-owned business with 45+ franchise outlets and expanding real estate portfolio.',
  },
];

interface TimelineProps {
  compact?: boolean;
}

const Timeline = ({ compact = false }: TimelineProps) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const displayEvents = compact ? timelineEvents.slice(0, 5) : timelineEvents;

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

      {/* Timeline Events */}
      <div className="space-y-12">
        {displayEvents.map((event, index) => (
          <div
            key={event.year}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            onMouseEnter={() => setSelectedYear(event.year)}
            onMouseLeave={() => setSelectedYear(null)}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
              <div
                className={`inline-block bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                  selectedYear === event.year ? 'scale-105 border-accent border-2' : 'border border-border'
                }`}
              >
                <div className="text-accent font-bold text-lg mb-2">{event.year}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
              <div
                className={`w-8 h-8 rounded-full border-4 border-background flex items-center justify-center transition-all duration-300 ${
                  selectedYear === event.year ? 'bg-accent scale-125' : 'bg-primary'
                }`}
              >
                <Check size={16} className="text-primary-foreground" />
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
