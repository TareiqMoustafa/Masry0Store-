import { useParams, Link } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { getPathById } from '@/data/paths';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Download, Menu, ChevronRight, ChevronLeft,
  BookOpen, Clock, Search, X, Check
} from 'lucide-react';

const colorMap: Record<string, string> = {
  red: 'text-red-500 border-red-500/30 bg-red-950/20',
  blue: 'text-blue-500 border-blue-500/30 bg-blue-950/20',
  yellow: 'text-yellow-500 border-yellow-500/30 bg-yellow-950/20',
  purple: 'text-purple-500 border-purple-500/30 bg-purple-950/20',
  cyan: 'text-cyan-500 border-cyan-500/30 bg-cyan-950/20',
  orange: 'text-orange-500 border-orange-500/30 bg-orange-950/20',
  green: 'text-neon border-neon/30 bg-neon/5',
};

export default function PathDetail() {
  const { pathId } = useParams<{ pathId: string }>();
  const [activeChapter, setActiveChapter] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchChapters, setSearchChapters] = useState('');
  const [completedChapters, setCompletedChapters] = useState<Set<number>>(new Set());
  const contentRef = useRef<HTMLDivElement>(null);
  const path = pathId ? getPathById(pathId) : undefined;

  useEffect(() => {
    setActiveChapter(0);
    setCompletedChapters(new Set());
    setSearchChapters('');
    window.scrollTo(0, 0);
  }, [pathId]);

  if (!path) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <i className="fas fa-exclamation-circle text-6xl text-muted-foreground mb-4"></i>
          <h1 className="text-2xl font-bold mb-4">المسار غير موجود</h1>
          <Link to="/learning-paths" className="text-neon hover:underline font-semibold">
            العودة إلى الخطط التعليمية
          </Link>
        </div>
      </Layout>
    );
  }

  const chapter = path.chapters[activeChapter];
  const totalChapters = path.chapters.length;
  const colorClass = colorMap[path.color] || colorMap.green;
  const progress = ((activeChapter + 1) / totalChapters) * 100;

  const goNext = () => {
    if (activeChapter < totalChapters - 1) {
      setActiveChapter(activeChapter + 1);
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goPrev = () => {
    if (activeChapter > 0) {
      setActiveChapter(activeChapter - 1);
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jumpToChapter = (index: number) => {
    setActiveChapter(index);
    setSidebarOpen(false);
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleCompleted = (num: number) => {
    setCompletedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  const filteredChapters = searchChapters
    ? path.chapters.filter((ch) => ch.title.includes(searchChapters))
    : path.chapters;

  const estimatedReadTime = Math.ceil(chapter.content.length / 1500);

  return (
    <Layout>
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full bg-neon text-black flex items-center justify-center shadow-neon lg:hidden"
        aria-label="قائمة الفصول"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex gap-6" ref={contentRef}>
        {/* Sidebar - Chapters List */}
        <aside
          className={`fixed lg:sticky lg:top-20 right-0 lg:right-auto h-[calc(100vh-5rem)] w-80 
            bg-cyber-elevated/95 backdrop-blur-xl border-l border-neon/10 z-50 lg:z-auto
            overflow-y-auto transition-transform duration-300 lg:translate-x-0
            ${sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-neon" />
                قائمة الفصول ({totalChapters})
              </h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-muted-foreground hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search chapters */}
            <div className="relative mb-4">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
              <Input
                placeholder="ابحث في الفصول..."
                value={searchChapters}
                onChange={(e) => setSearchChapters(e.target.value)}
                className="pr-8 text-sm h-9 bg-cyber-bg border-neon/15"
              />
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>تم إكماله</span>
                <span>{completedChapters.size} / {totalChapters}</span>
              </div>
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-neon transition-all"
                  style={{ width: `${(completedChapters.size / totalChapters) * 100}%` }}
                />
              </div>
            </div>

            {/* Chapters */}
            <div className="space-y-1">
              {filteredChapters.map((ch) => {
                const originalIdx = path.chapters.indexOf(ch);
                const isActive = originalIdx === activeChapter;
                const isCompleted = completedChapters.has(ch.number);

                return (
                  <button
                    key={ch.number}
                    onClick={() => jumpToChapter(originalIdx)}
                    className={`w-full text-right px-3 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-neon/10 border border-neon/30 text-neon'
                        : 'hover:bg-cyber-surface text-foreground/70'
                    }`}
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleCompleted(ch.number); }}
                      className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-neon border-neon text-black'
                          : 'border-muted-foreground/30'
                      }`}
                    >
                      {isCompleted && <Check className="w-3 h-3" />}
                    </button>
                    <span className="shrink-0 text-xs text-muted-foreground w-6">
                      {ch.number}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-8 border-b border-neon/10 pb-6">
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <Badge className={`${colorClass} text-xs`}>{path.level}</Badge>
                <Badge variant="outline" className="text-xs">{totalChapters} فصل</Badge>
                <Badge variant="outline" className="text-xs">{path.pages}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-neon mb-2">
                {path.emoji} {path.title}
              </h1>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                {path.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <a
                  href={`/pdfs/${path.id}.pdf`}
                  download
                  className="inline-flex items-center gap-1.5 bg-neon/10 hover:bg-neon/20 border border-neon/40 text-neon px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  تحميل PDF
                </a>
                <div className="inline-flex items-center gap-1.5 text-muted-foreground text-sm px-4 py-2">
                  <Clock className="w-4 h-4" />
                  وقت القراءة: ~{estimatedReadTime} دقيقة
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>الفصل {activeChapter + 1} من {totalChapters}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-neon to-neon-bright transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Chapter Content */}
          <ScrollReveal>
            <Card className="bg-cyber-elevated/40 backdrop-blur-sm border-border rounded-3xl overflow-hidden shadow-2xl">
              <CardContent className="p-6 sm:p-10 lg:p-12">
                <div className="mb-6">
                  <Badge className={`${colorClass} text-xs mb-3`}>
                    الفصل {chapter.number} من {totalChapters}
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                    {chapter.title}
                  </h2>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ~{estimatedReadTime} دقيقة قراءة
                    </span>
                  </div>
                </div>

                <div
                  className="prose prose-invert prose-lg max-w-none
                    [&_p]:leading-loose [&_p]:mb-5
                    [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-neon [&_h2]:mt-10 [&_h2]:mb-4
                    [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-neon/80 [&_h3]:mt-8 [&_h3]:mb-3
                    [&_ul]:space-y-2 [&_ul]:pr-6
                    [&_ol]:space-y-2 [&_ol]:pr-6
                    [&_li]:leading-relaxed
                    [&_.code-block]:my-5 [&_.code-block]:p-4 [&_.code-block]:rounded-xl [&_.code-block]:bg-black/50 [&_.code-block]:border-r-4 [&_.code-block]:border-neon [&_.code-block]:font-mono [&_.code-block]:text-sm
                    [&_.note-box]:my-5 [&_.note-box]:p-4 [&_.note-box]:rounded-xl [&_.note-box]:bg-neon/5 [&_.note-box]:border-r-4 [&_.note-box]:border-neon
                    [&_.warning-box]:my-5 [&_.warning-box]:p-4 [&_.warning-box]:rounded-xl [&_.warning-box]:bg-red-500/5 [&_.warning-box]:border-r-4 [&_.warning-box]:border-red-500
                    [&_.fig-box]:my-6 [&_.fig-box]:p-6 [&_.fig-box]:rounded-2xl [&_.fig-box]:bg-cyber-surface/50 [&_.fig-box]:border [&_.fig-box]:border-border [&_.fig-box]:text-center"
                  dangerouslySetInnerHTML={{ __html: chapter.content }}
                />

                <div className="mt-10 pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                  <span>الفصل {chapter.number} من {totalChapters}</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {path.title}
                  </span>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 gap-4">
            <Button
              onClick={goPrev}
              disabled={activeChapter === 0}
              variant="outline"
              className="border-neon/30 text-neon hover:bg-neon/10 disabled:opacity-30 px-6"
            >
              <ChevronRight className="w-4 h-4 ml-2" />
              السابق
            </Button>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => toggleCompleted(chapter.number)}
                variant="outline"
                className={`border-neon/30 px-4 ${completedChapters.has(chapter.number) ? 'bg-neon/20 text-neon' : 'text-neon hover:bg-neon/10'}`}
              >
                <Check className="w-4 h-4 ml-1" />
                {completedChapters.has(chapter.number) ? 'تم' : 'تم الإكمال'}
              </Button>
              <span className="text-sm text-muted-foreground">
                {activeChapter + 1} / {totalChapters}
              </span>
            </div>

            <Button
              onClick={goNext}
              disabled={activeChapter === totalChapters - 1}
              variant="outline"
              className="border-neon/30 text-neon hover:bg-neon/10 disabled:opacity-30 px-6"
            >
              التالي
              <ChevronLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>

          {/* Telegram CTA */}
          <div className="note-box mt-8 text-center">
            <i className="fab fa-telegram-plane text-neon text-xl mb-2 block"></i>
            <p className="text-sm text-foreground/80">
              هل لديك سؤال عن هذا الفصل؟ انضم إلى{' '}
              <a
                href="https://t.me/Masry0Store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon hover:underline font-semibold"
              >
                قناة التليجرام
              </a>{' '}
              للمناقشة.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
