import { Link } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import MatrixRain from '@/components/MatrixRain';
import StatsSection from '@/components/StatsSection';
import Marquee from '@/components/Marquee';
import ScrollReveal from '@/components/ScrollReveal';
import TypingEffect from '@/components/TypingEffect';
import { allPaths } from '@/data/paths';
import {
  Download, BookOpen, Shield, Microchip, FileText,
  Zap, Lock, Wifi, Bug, Eye, GraduationCap
} from 'lucide-react';

const featureCards = [
  {
    icon: Shield,
    title: 'خبرة حقيقية',
    desc: 'مشاريع عملية وثغرات حقيقية، لا نظريات مملة. تعلم من خلال التطبيق العملي في بيئات محاكاة آمنة.',
    color: 'from-green-500/10 to-green-900/10',
    borderColor: 'border-green-500/20',
    bg: 'bg-green-500/10',
  },
  {
    icon: Microchip,
    title: 'أدوات 2026',
    desc: 'أحدث تقنيات الأمن السيبراني والهكر الأخلاقي. محتوى يتم تحديثه باستمرار لمواكبة التطورات.',
    color: 'from-cyan-500/10 to-cyan-900/10',
    borderColor: 'border-cyan-500/20',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: FileText,
    title: 'خطط PDF مجانية',
    desc: 'مناهج مفصلة لكل تخصص (Red Team, Blue Team, SOC, GRC, Forensics, Malware, Basics).',
    color: 'from-purple-500/10 to-purple-900/10',
    borderColor: 'border-purple-500/20',
    bg: 'bg-purple-500/10',
  },
];

const pathCards = [
  { icon: Zap, title: 'Red Team', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', desc: 'الهجوم الأخلاقي واختبار الاختراق' },
  { icon: Shield, title: 'Blue Team', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', desc: 'الدفاع والمراقبة والاستجابة' },
  { icon: Eye, title: 'SOC Analyst', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', desc: 'محلل مركز العمليات الأمنية' },
  { icon: Lock, title: 'GRC', color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20', desc: 'الحوكمة وإدارة المخاطر' },
  { icon: Wifi, title: 'Forensics', color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', desc: 'التحليل الجنائي الرقمي' },
  { icon: Bug, title: 'Malware', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', desc: 'تحليل البرمجيات الخبيثة' },
  { icon: GraduationCap, title: 'أساسيات', color: 'text-neon', bg: 'bg-neon/10', border: 'border-neon/20', desc: 'مسار عام للمبتدئين' },
];

const testimonials = [
  {
    quote: 'أقوى محتوى عربي في الأمن السيبراني. الخطط التعليمية PDF غيرت طريقة تعلمي. المحتوى منظم وممتاز.',
    name: 'أحمد ك.',
    role: 'مهندس أمن',
    avatar: 'AK',
  },
  {
    quote: 'الدعم عبر التليجرام ممتاز، والمناهج منظمة وجاهزة للطباعة. شكراً MASRY STORE على هذا الجهد الرائع.',
    name: 'سلمى ر.',
    role: 'محللة أمنية',
    avatar: 'SR',
  },
  {
    quote: 'من أفضل المنصات العربية في مجال الأمن السيبراني. المحتوى العملي والمشاريع الحقيقية غيرت مسار مهنتي.',
    name: 'محمد ع.',
    role: 'مختبر اختراق',
    avatar: 'MO',
  },
];

export default function Home() {
  return (
    <Layout>
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-black">
        <MatrixRain opacity={0.18} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95 z-[1]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-6 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-neon" />
              <span className="text-neon text-sm font-semibold">
                منصة الأمن السيبراني العربية #1
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="neon-glow-text leading-tight mb-6">
              أمن سيبراني
              <br />
              <span className="gradient-text">بمنهجية النخبة</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed h-[3em]">
              <TypingEffect
                text="تدريب احترافي، خطط تعليمية مجانية PDF، ومجتمع تليجرام نشط"
                speed={50}
                delay={800}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              انطلق من الصفر حتى الاحتراف في عالم الأمن السيبراني.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/learning-paths"
                className="inline-flex items-center justify-center gap-2 bg-neon text-black font-extrabold px-8 py-4 rounded-full shadow-neon hover:shadow-neon-lg hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                استكشف الخطط المجانية
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-neon text-neon font-bold px-8 py-4 rounded-full hover:bg-neon/10 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                الدورات الاحترافية
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <Marquee />

      {/* ===== STATS SECTION ===== */}
      <StatsSection />

      {/* ===== VALUE PROPOSITION ===== */}
      <section className="py-24 px-4 bg-cyber-surface/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-neon rounded-full blur-[150px]" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-neon rounded-full blur-[150px]" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-neon text-sm font-semibold mb-2 block">لماذا نحن؟</span>
              <h2 className="text-3xl sm:text-5xl font-bold">
                لماذا <span className="neon-text">MASRY STORE</span>؟
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 200}>
                <Card className={`bg-gradient-to-br ${feature.color} ${feature.borderColor} border backdrop-blur rounded-3xl transition-all duration-300 hover:-translate-y-3 hover:border-neon/40 hover:shadow-neon h-full`}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl ${feature.bg} border ${feature.borderColor} flex items-center justify-center mx-auto mb-5`}>
                      <feature.icon className={`w-8 h-8 ${feature.icon === Shield ? 'text-green-400' : feature.icon === Microchip ? 'text-cyan-400' : 'text-purple-400'}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEARNING PATHS PREVIEW ===== */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-neon text-sm font-semibold mb-2 block">المسارات</span>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 gradient-text">
                الخطط التعليمية المتخصصة
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                7 مسارات تعليمية شاملة، كل مسار يحتوي على منهج كامل من الصفر حتى الاحتراف
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pathCards.map((path, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Link
                  to="/learning-paths"
                  className={`${path.bg} ${path.border} border backdrop-blur rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 group block`}
                >
                  <div className={`w-14 h-14 rounded-xl ${path.bg} border ${path.border} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <path.icon className={`w-7 h-7 ${path.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-neon transition-colors">{path.title}</h3>
                  <p className="text-muted-foreground text-xs">{path.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/learning-paths"
              className="inline-flex items-center gap-2 bg-neon/10 hover:bg-neon/20 border border-neon/30 text-neon font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              عرض جميع المسارات
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PDF BOOKS DOWNLOAD ===== */}
      <section className="py-24 px-4 bg-cyber-surface/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-neon text-sm font-semibold mb-2 block">المكتبة</span>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 gradient-text">
                كتب التعليمية المجانية PDF
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                7 كتب تعليمية شاملة، كل كتاب يحتوي على +200 صفحة من الصفر حتى الاحتراف - تحميل مجاني
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allPaths.map((path, idx) => (
              <ScrollReveal key={path.id} delay={idx * 100}>
                <Card className="glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{path.emoji}</span>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-neon transition-colors">{path.title}</h3>
                        <p className="text-xs text-muted-foreground">{path.level}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {path.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-neon/60" />
                        {path.chapters.length} فصل
                      </span>
                      <a
                        href={`/pdfs/${path.id}.pdf`}
                        download
                        className="inline-flex items-center gap-1.5 bg-neon/10 hover:bg-neon/20 border border-neon/30 text-neon px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
                      >
                        <Download className="w-3 h-3" />
                        تحميل PDF
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-neon text-sm font-semibold mb-2 block">الآراء</span>
              <h2 className="text-3xl sm:text-5xl font-bold gradient-text">
                آراء المتدربين
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <Card className="bg-cyber-elevated/80 backdrop-blur border-r-4 border-neon rounded-3xl relative h-full">
                  <CardContent className="p-8">
                    <i className="fas fa-quote-right text-neon/20 text-4xl absolute top-4 right-4"></i>
                    <div className="mb-6 flex items-center gap-3 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-neon/20 border border-neon/30 flex items-center justify-center text-neon font-bold">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="font-bold">{review.name}</div>
                        <div className="text-xs text-muted-foreground">{review.role}</div>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-sm">
                      "{review.quote}"
                    </p>
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-neon text-xs"></i>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TELEGRAM CTA ===== */}
      <section className="py-20 px-4 border-y border-neon/30 bg-gradient-to-r from-cyber-bg via-cyber-surface to-cyber-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0088cc] rounded-full blur-[150px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-2xl bg-[#0088cc]/20 border border-[#0088cc]/30 flex items-center justify-center mx-auto mb-6">
              <i className="fab fa-telegram-plane text-[#0088cc] text-3xl"></i>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              انضم إلى مجتمع التليجرام الرسمي
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              جميع المناقشات، الملفات، والدعم المباشر تتم هناك. لا واتساب، فقط تليجرام.
            </p>
            <a
              href="https://t.me/Masry0Store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0088cc]/20"
            >
              <i className="fab fa-telegram-plane text-xl"></i>
              انضم إلى المجموعة الأساسية
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="warning-box text-center">
              <h3 className="text-red-400 font-bold text-lg mb-2">
                <i className="fas fa-exclamation-triangle ml-2"></i>
                تنويه قانوني
              </h3>
              <p className="text-foreground/80 text-sm">
                جميع المواد التعليمية مخصصة للهكر الأخلاقي واختبار الاختراق بإذن فقط. أي استخدام غير قانوني يتحمل المستخدم مسؤوليته بالكامل. MASRY STORE غير مسؤول عن سوء الاستخدام.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
