import { Link } from 'react-router';
import { allPaths } from '@/data/paths';

const marqueeItems = [
  ...allPaths.map((p) => ({
    emoji: p.emoji,
    title: p.title,
    chapters: p.chapters.length,
  })),
  ...allPaths.map((p) => ({
    emoji: p.emoji,
    title: p.title,
    chapters: p.chapters.length,
  })),
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-neon/20 bg-cyber-surface/60 py-3">
      <div className="flex animate-marquee-rtl whitespace-nowrap" style={{ width: 'max-content' }}>
        {marqueeItems.map((item, idx) => (
          <Link
            key={idx}
            to="/learning-paths"
            className="inline-flex items-center gap-2 px-5 py-2 mx-3 rounded-full bg-cyber-elevated/80 border border-cyber-border hover:border-neon/40 transition-all hover:scale-105"
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="text-sm font-semibold text-foreground/90">{item.title}</span>
            <span className="text-xs text-muted-foreground">({item.chapters} فصل)</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
