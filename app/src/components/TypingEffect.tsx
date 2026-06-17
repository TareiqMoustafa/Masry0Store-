import { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

export default function TypingEffect({
  text,
  speed = 60,
  delay = 0,
  onComplete,
  className = '',
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    indexRef.current = 0;
    setDisplayed('');

    const timer = setInterval(() => {
      if (indexRef.current < text.length) {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
      } else {
        clearInterval(timer);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-neon ml-1 animate-pulse align-middle" />
    </span>
  );
}
