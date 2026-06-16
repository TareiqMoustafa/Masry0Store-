import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Shield, Award, Users, BookOpen, Clock, Globe
} from 'lucide-react';

const certifications = [
  'Certified Ethical Hacker (CEH) - EC-Council',
  'CompTIA Security+',
  'Linux Hardening & Red Hat Administration',
  'Digital Forensics with Autopsy & Volatility',
  'Dark Web Intelligence & OSINT',
  'Malware Analysis (Static & Dynamic)',
];

const stats = [
  { icon: Users, value: '1,500+', label: 'متدرب' },
  { icon: BookOpen, value: '7', label: 'مسار تعليمي' },
  { icon: Clock, value: '5+', label: 'سنوات خبرة' },
  { icon: Globe, value: '10+', label: 'دولة' },
];

const timeline = [
  { year: '2021', event: 'انطلاق MASRY STORE كمجتمع تعليمي' },
  { year: '2022', event: 'إطلاق أول مسار Red Team' },
  { year: '2023', event: 'وصول عدد المتدربين لأكثر من 500' },
  { year: '2024', event: 'إطلاق منصة الويب وخطط PDF المجانية' },
  { year: '2025', event: 'توسيع المحتوى لـ 7 مسارات متخصصة' },
  { year: '2026', event: 'إعادة تصميم المنصة بتجربة مستخدم محسنة' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden bg-cyber-surface/30">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="w-24 h-24 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-neon" />
            </div>
            <h1 className="neon-glow-text text-4xl mb-4">المدرب والمؤسس</h1>
            <p className="text-neon font-semibold text-lg mb-4">MASRY STORE</p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              خبرة تمتد لسنوات في الأمن السيبراني، الهكر الأخلاقي، وتحليل الأنظمة.
              المشرف الوحيد على المحتوى، التدريب، والدعم الفني.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-neon/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="glass-card rounded-2xl p-4 text-center">
                  <stat.icon className="w-6 h-6 text-neon mx-auto mb-2" />
                  <div className="text-2xl font-black text-neon">{stat.value}</div>
                  <div className="text-muted-foreground text-xs">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Card className="bg-cyber-elevated/90 backdrop-blur border-neon/20 rounded-3xl overflow-hidden mb-8">
              <CardContent className="p-8 sm:p-10">
                <p className="text-foreground/80 leading-relaxed text-lg mb-8">
                  أنا المشرف الوحيد على المحتوى، التدريب، والدعم الفني. لا وسطاء،
                  أنا معك خطوة بخطوة لتصبح خبيراً في هذا المجال. أسعى لتقديم محتوى عربي
                  متخصص يسد الفجوة في التعليم الأمني للناطقين بالعربية.
                </p>

                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-neon" />
                  الشهادات والخبرات
                </h3>
                <ul className="space-y-3 mb-8">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-neon mt-1 shrink-0"></i>
                      <span className="text-foreground/80">{cert}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-xl mb-4">للتواصل الخاص</h3>
                <a
                  href="https://t.me/THE0AN2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105"
                >
                  <i className="fab fa-telegram-plane"></i>
                  @THE0AN2 على تليجرام
                </a>

                <p className="mt-6 text-sm text-muted-foreground">
                  المجموعة الأساسية لجميع الطلاب:{' '}
                  <a
                    href="https://t.me/Masry0Store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon hover:underline font-semibold"
                  >
                    @Masry0Store
                  </a>
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-8 gradient-text">رحلتنا</h3>
              <div className="relative border-r-2 border-neon/20 pr-8 space-y-8">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -right-[41px] w-5 h-5 rounded-full bg-neon/20 border-2 border-neon" />
                    <div className="glass-card rounded-2xl p-4">
                      <span className="text-neon font-bold text-sm">{item.year}</span>
                      <p className="text-foreground/80 text-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal>
            <div className="note-box text-center">
              <i className="fas fa-quote-right text-neon/40 text-2xl mb-3 block"></i>
              <p className="text-foreground/80 italic text-lg leading-relaxed">
                "أنا أؤمن بأن التعليم الأمني يجب أن يكون عملياً ومباشراً. لذلك أضع كل خبرتي
                في هذه المنصة لتكون مرجعك الأول في الأمن السيبراني."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
