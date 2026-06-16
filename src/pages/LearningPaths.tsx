import { Link } from 'react-router';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { allPaths } from '@/data/paths';
import {
  Download, BookOpen, FileText, Search, Filter,
  Zap, Shield, Eye, Lock, Wifi, Bug, GraduationCap
} from 'lucide-react';

const pathIcons: Record<string, { icon: typeof Zap; color: string; bg: string; border: string }> = {
  basics:    { icon: GraduationCap, color: 'text-neon',       bg: 'bg-neon/10',       border: 'border-neon/20' },
  redTeam:   { icon: Zap,           color: 'text-red-500',     bg: 'bg-red-500/10',    border: 'border-red-500/20' },
  blueTeam:  { icon: Shield,        color: 'text-blue-500',    bg: 'bg-blue-500/10',   border: 'border-blue-500/20' },
  soc:       { icon: Eye,           color: 'text-yellow-500',  bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  grc:       { icon: Lock,          color: 'text-purple-500',  bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  forensics: { icon: Wifi,          color: 'text-cyan-500',    bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20' },
  malware:   { icon: Bug,           color: 'text-orange-500',  bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
};

const levelFilters = ['الكل', 'مبتدئ', 'متوسط', 'متقدم'];

export default function LearningPaths() {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('الكل');

  const totalChapters = allPaths.reduce((sum, p) => sum + (p.chaptersCount || p.chapters.length), 0);
  const totalPages = allPaths.reduce((sum, p) => {
    const match = p.pages.match(/\d+/);
    return sum + (match ? parseInt(match[0], 10) : 0);
  }, 0);

  const filtered = allPaths.filter((p) => {
    const matchesSearch =
      search === '' ||
      p.title.includes(search) ||
      p.description.includes(search);
    const matchesLevel =
      levelFilter === 'الكل' || p.level.includes(levelFilter);
    return matchesSearch && matchesLevel;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden bg-cyber-surface/30">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon rounded-full blur-[200px]" />
        </div>
        <div className="max-w-6xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-6">
              <BookOpen className="w-4 h-4 text-neon" />
              <span className="text-neon text-sm font-semibold">المكتبة التعليمية</span>
            </div>
            <h1 className="neon-glow-text text-4xl sm:text-5xl mb-4">
              الخطط التعليمية المتخصصة
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              7 كتب تعليمية متكاملة – كل كتاب يحتوي على <strong>3 مستويات</strong> ومشاريع عملية.
              <br />
              <span className="text-neon font-semibold">جميع الخطط مجانية تماماً.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 border-y border-neon/10 bg-cyber-bg/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'كتاب تعليمي', value: allPaths.length.toString(), icon: BookOpen },
              { label: 'فصل تعليمي', value: totalChapters.toString() + '+', icon: FileText },
              { label: 'موضوع تدريبي', value: '50+', icon: Zap },
              { label: 'صفحة محتوى', value: totalPages.toString() + '+', icon: FileText },
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="glass-card rounded-2xl p-4 text-center">
                  <stat.icon className="w-6 h-6 text-neon mx-auto mb-2" />
                  <div className="text-2xl font-black text-neon neon-text">{stat.value}</div>
                  <div className="text-muted-foreground text-xs">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="ابحث في المسارات..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pr-10 bg-cyber-elevated border-neon/20 text-right"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-neon" />
              {levelFilters.map((level) => (
                <button
                  key={level}
                  onClick={() => setLevelFilter(level)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    levelFilter === level
                      ? 'bg-neon text-black'
                      : 'bg-cyber-elevated border border-neon/20 text-foreground/80 hover:border-neon/40'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Paths Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">لا توجد نتائج مطابقة للبحث</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((path, idx) => {
                const style = pathIcons[path.id] || pathIcons.basics;
                const Icon = style.icon;
                return (
                  <ScrollReveal key={path.id} delay={idx * 100}>
                    <Link
                      to={`/learning-paths/${path.id}`}
                      className="glass-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 group block h-full"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 w-16 h-16 rounded-2xl ${style.bg} border ${style.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-8 h-8 ${style.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h2 className="text-xl font-bold group-hover:text-neon transition-colors">
                              {path.emoji} {path.title}
                            </h2>
                            <Badge variant="outline" className={`${style.color} ${style.border} text-xs`}>
                              {path.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {path.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {path.chapters.slice(0, 3).map((ch, i) => (
                              <span key={i} className="text-xs bg-black/30 px-3 py-1 rounded-full text-foreground/50">
                                {ch.title.length > 30 ? ch.title.substring(0, 27) + '...' : ch.title}
                              </span>
                            ))}
                            {path.chapters.length > 3 && (
                              <span className="text-xs text-neon/60 px-2">+{path.chapters.length - 3}</span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <BookOpen className="w-3 h-3 text-neon/60" />
                              {path.chaptersCount || path.chapters.length} فصل
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <FileText className="w-3 h-3 text-neon/60" />
                              {path.pages}
                            </span>
                            <a
                              href={`/pdfs/${path.id}.pdf`}
                              download
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 bg-neon/10 hover:bg-neon/20 border border-neon/30 text-neon px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105"
                            >
                              <Download className="w-3 h-3" />
                              تحميل PDF
                            </a>
                            <span className="text-xs text-neon font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                              اقرأ الآن &larr;
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          <div className="note-box mt-12 text-center">
            <i className="fab fa-telegram-plane text-neon text-xl mb-2 block"></i>
            <p className="text-foreground/80 text-sm">
              جميع الخطط مجانية تماماً. انضم إلى{' '}
              <a href="https://t.me/Masry0Store" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline font-semibold">
                قناة التليجرام
              </a>{' '}
              للمناقشة والاستفسارات.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
