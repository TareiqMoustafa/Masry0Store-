import { Link } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Shield, Bot, Globe, Check, Zap, Clock, Users, Star
} from 'lucide-react';

const courses = [
  {
    tag: 'أمن بنية تحتية',
    title: 'Red Hat Mastery',
    icon: Shield,
    iconColor: 'text-red-500',
    bg: 'from-red-500/10 to-red-900/10',
    border: 'border-red-500/20',
    desc: 'إدارة وتأمين خوادم لينكس، اكتشاف الثغرات، تحصين الشبكات ضد الاختراقات.',
    features: [
      'تأمين الخوادم ضد الهجمات',
      'مراقبة الشبكات واكتشاف الدخول غير المصرح به',
      'مشاريع عملية لمحاكاة بيئات الشركات',
    ],
    price: '299 ج.م',
    originalPrice: '499 ج.م',
    students: 120,
    duration: '8 أسابيع',
  },
  {
    tag: 'أتمتة أمنية',
    title: 'BOTs Development',
    icon: Bot,
    iconColor: 'text-cyan-500',
    bg: 'from-cyan-500/10 to-cyan-900/10',
    border: 'border-cyan-500/20',
    desc: 'بناء أدوات أتمتة لتحليل البيانات واختبار الاختراق القانوني باستخدام Python.',
    features: [
      'أتمتة مهام الأمن السيبراني',
      'تطوير بوتات لفحص الثغرات',
      'برمجة موجهة للأداء والدقة',
    ],
    price: '399 ج.م',
    originalPrice: '599 ج.م',
    students: 85,
    duration: '10 أسابيع',
  },
  {
    tag: 'استخبارات',
    title: 'Dark Web Insights',
    icon: Globe,
    iconColor: 'text-purple-500',
    bg: 'from-purple-500/10 to-purple-900/10',
    border: 'border-purple-500/20',
    desc: 'تحليل تور، تشفير، وأدوات التحليل الجنائي للويب المظلم واستخبارات المصادر المفتوحة.',
    features: [
      'تحليل شبكة Tor وتقنيات الإخفاء',
      'أدوات التحليل الجنائي الرقمي',
      'استخبارات مكافحة الجريمة الإلكترونية',
    ],
    price: '499 ج.م',
    originalPrice: '799 ج.م',
    students: 64,
    duration: '12 أسبوع',
  },
];

export default function Courses() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden bg-cyber-surface/30">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon rounded-full blur-[200px]" />
        </div>
        <div className="max-w-5xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-6">
              <Zap className="w-4 h-4 text-neon" />
              <span className="text-neon text-sm font-semibold">تدريب احترافي</span>
            </div>
            <h1 className="neon-glow-text text-4xl sm:text-5xl mb-4">الدورات الاحترافية</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              تدريب عملي معتمد - الدفع والتواصل عبر التليجرام فقط. احصل على شهادة إتمام بعد كل كورس.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <Card
                  className={`bg-gradient-to-br ${course.bg} ${course.border} border backdrop-blur rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:border-neon/50 h-full`}

                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-2xl ${course.bg} border ${course.border} flex items-center justify-center mb-4`}>
                      <course.icon className={`w-7 h-7 ${course.iconColor}`} />
                    </div>

                    <Badge className="bg-neon text-black font-extrabold text-xs mb-3 w-fit hover:bg-neon">
                      {course.tag}
                    </Badge>

                    <h2 className="text-2xl font-bold mb-3">{course.title}</h2>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {course.desc}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {course.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-neon mt-0.5 shrink-0" />
                          <span className="text-foreground/80">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.students}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-neon" />
                        4.9
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-neon text-2xl font-black">{course.price}</span>
                      <span className="text-muted-foreground line-through text-sm">{course.originalPrice}</span>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                        خصم
                      </Badge>
                    </div>

                    <a
                      href="https://t.me/Masry0Store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold py-3 rounded-full transition-all duration-200 hover:scale-105"
                    >
                      <i className="fab fa-telegram-plane ml-2"></i>
                      شراء عبر التليجرام
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="note-box mt-10 text-center max-w-3xl mx-auto">
            <i className="fab fa-telegram-plane text-neon text-xl mb-2 block"></i>
            <p className="text-sm text-foreground/80">
              بعد إتمام عملية الشراء عبر التليجرام، سيتم تفعيل حسابك وستحصل على رابط المحتوى الكامل وشهادة الإتمام.{' '}
              <a href="https://t.me/Masry0Store" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline font-semibold">
                انقر هنا للتواصل
              </a>
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/learning-paths"
              className="inline-flex items-center gap-2 text-neon font-bold hover:underline"
            >
              أو استكشف خططنا التعليمية المجانية
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
