import { useRef, useEffect, useState } from 'react';

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: 'fa-route', value: '7', label: 'مسار تعليمي' },
  { icon: 'fa-book-open', value: '189+', label: 'فصل تعليمي' },
  { icon: 'fa-file-pdf', value: '7', label: 'كتب PDF مجانية' },
  { icon: 'fa-infinity', value: '\u221E', label: 'دعم مستمر' },
];

function AnimatedCounter({ target, inView }: { target: string; inView: boolean }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;

    const numMatch = target.match(/^\d+/);
    if (!numMatch) {
      setDisplay(target);
      return;
    }

    const num = parseInt(numMatch[0], 10);
    const suffix = target.replace(/^\d+/, '');
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), num);
      setDisplay(current + suffix);
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(target);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{display}</>;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${idx * 150}ms`,
              }}
            >
              <div className="glass-card rounded-4xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-neon/60">
                <i
                  className={`fas ${stat.icon} text-neon text-3xl mb-3 block group-hover:scale-110 transition-transform`}
                ></i>
                <div className="text-3xl md:text-4xl font-black text-neon mb-1 neon-text">
                  <AnimatedCounter target={stat.value} inView={inView} />
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
