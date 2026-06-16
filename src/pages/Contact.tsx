import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { MessageCircle, User, Clock, Shield } from 'lucide-react';

const guidelines = [
  { num: '1', text: 'عند التواصل للمرة الأولى، يرجى ذكر الغرض بوضوح (شراء كورس، استفسار فني، اقتراح).' },
  { num: '2', text: 'لا نقدم دعمًا عبر الواتساب أو أي تطبيق آخر - الاعتماد فقط على التليجرام.' },
  { num: '3', text: 'متوسط وقت الرد: أقل من 24 ساعة (غالبًا أسرع بكثير).' },
  { num: '4', text: 'للحصول على تحديثات دورية، انضم إلى المجموعة الأساسية أولاً.' },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden bg-cyber-surface/30">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-neon" />
            </div>
            <h1 className="neon-glow-text text-4xl sm:text-5xl mb-4">طرق التواصل الرسمية</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              جميع خدمات المبيعات والدعم الفني والاستفسارات تتم عvia <strong className="text-neon">التليجرام فقط</strong> - لا واتساب، لا أرقام هواتف، لضمان السرعة والأمان.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal delay={0}>
              <Card className="glass-card border-neon/20 rounded-3xl text-center transition-all hover:-translate-y-2 hover:border-neon/50 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#0088cc]/10 border border-[#0088cc]/20 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[#0088cc]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">المجموعة الأساسية</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    انضم إلى مجتمع الطلاب - أخبار، عروض، دعم جماعي، مناقشات فنية، وملفات تعليمية.
                  </p>
                  <a
                    href="https://t.me/Masry0Store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                  >
                    <i className="fab fa-telegram-plane"></i>
                    انضمام فوري
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="glass-card border-neon/20 rounded-3xl text-center transition-all hover:-translate-y-2 hover:border-neon/50 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-neon" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">التواصل الخاص مع المدرب</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    للاستفسارات الشخصية، شراء الكورسات، أو الدعم التقني الخاص (الرد خلال ساعات).
                  </p>
                  <a
                    href="https://t.me/THE0AN2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                  >
                    <i className="fab fa-telegram-plane"></i>
                    @THE0AN2
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Guidelines */}
          <ScrollReveal>
            <Card className="bg-cyber-elevated border-border rounded-3xl mb-8">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-neon" />
                  إرشادات هامة
                </h3>
                <div className="space-y-4">
                  {guidelines.map((g) => (
                    <div key={g.num} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-bold flex items-center justify-center">
                        {g.num}
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed">{g.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal>
            <div className="note-box text-center">
              <Clock className="w-6 h-6 text-neon mx-auto mb-2" />
              <p className="text-sm text-foreground/80">
                أوقات الدعم المباشر: السبت - الخميس (10 صباحًا - 10 مساءً بتوقيت القاهرة).
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
