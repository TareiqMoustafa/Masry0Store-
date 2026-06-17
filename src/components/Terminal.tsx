import { useState, useRef, useEffect, useCallback } from 'react';

interface Command {
  input: string;
  output: string[];
  isError?: boolean;
}

const pathData: Record<string, { title: string; desc: string; chapters: number; level: string }> = {
  'basics': { title: 'أساسيات أمن المعلومات', desc: 'مسار شامل من الصفر للمبتدئين', chapters: 27, level: 'مبتدئ / متوسط / متقدم' },
  'redTeam': { title: 'Red Team', desc: 'الهجوم الأخلاقي واختبار الاختراق', chapters: 27, level: 'مبتدئ / متوسط / متقدم' },
  'blueTeam': { title: 'Blue Team', desc: 'الدفاع والمراقبة والاستجابة', chapters: 27, level: 'مبتدئ / متوسط / متقدم' },
  'soc': { title: 'SOC Analyst', desc: 'محلل مركز العمليات الأمنية', chapters: 27, level: 'مبتدئ / متوسط / متقدم' },
  'grc': { title: 'GRC', desc: 'الحوكمة وإدارة المخاطر والامتثال', chapters: 27, level: 'مبتدئ / متوسط / متقدم' },
  'forensics': { title: 'Digital Forensics', desc: 'التحليل الجنائي الرقمي', chapters: 27, level: 'مبتدئ / متوسط / متقدم' },
  'malware': { title: 'Malware Analysis', desc: 'تحليل البرمجيات الخبيثة', chapters: 27, level: 'مبتدئ / متوسط / متقدم' },
};

const allCommands: Record<string, (args: string[]) => string[]> = {
  help: () => [
    '╔══════════════════════════════════════════════════════════════╗',
    '║  MASRY STORE TERMINAL - الأوامر المتاحة                      ║',
    '╠══════════════════════════════════════════════════════════════╣',
    '║  help              عرض قائمة الأوامر                          ║',
    '║  ls                عرض المسارات والكورسات المتاحة             ║',
    '║  ls paths          عرض الخطط التعليمية (7 مسارات)            ║',
    '║  ls courses        عرض الدورات الاحترافية                     ║',
    '║  cat <file>        عرض محتوى ملف (مثال: cat about)           ║',
    '║  cat <path>        عرض تفاصيل مسار (مثال: cat redTeam)       ║',
    '║  whoami            معلومات عن المدرب والمؤسس                 ║',
    '║  status            إحصائيات المنصة                            ║',
    '║  contact           طرق التواصل                                ║',
    '║  clear             مسح الشاشة                                 ║',
    '║  neofetch          عرض شعار MASRY STORE                       ║',
    '║  matrix            تفعيل تأثير Matrix Rain                    ║',
    '║  ping <url>        فحص الاتصال                                ║',
    '║  nmap              مسح الشبكة (محاكاة)                        ║',
    '╚══════════════════════════════════════════════════════════════╝',
  ],

  ls: (args) => {
    if (args[0] === 'paths') {
      return [
        '',
        '  📁 /learning-paths/',
        '  ────────────────────────────────────────────',
        ...Object.entries(pathData).map(([id, p]) =>
          `  📄 ${id.padEnd(12)} │ ${p.title.padEnd(24)} │ ${p.chapters} فصل │ ${p.level}`
        ),
        '',
        '  المجموع: 7 مسارات │ 189 فصل │ +1400 صفحة',
        '',
      ];
    }
    if (args[0] === 'courses') {
      return [
        '',
        '  📁 /courses/',
        '  ────────────────────────────────────────────',
        '  🎓 Red Hat Mastery       │ 299 ج.م │ أمن بنية تحتية',
        '  🤖 BOTs Development      │ 399 ج.م │ أتمتة أمنية',
        '  🌑 Dark Web Insights     │ 499 ج.م │ استخبارات',
        '  ────────────────────────────────────────────',
        '  للشراء: https://t.me/Masry0Store',
        '',
      ];
    }
    return [
      '',
      '  📁 المجلدات المتاحة:',
      '',
      '  📂 learning-paths/     7 خطط تعليمية مجانية',
      '  📂 courses/            3 دورات احترافية مدفوعة',
      '  📄 about               معلومات عن المدرب',
      '  📄 contact             طرق التواصل',
      '  📄 status              إحصائيات المنصة',
      '',
      '  اكتب: ls paths   أو   ls courses',
      '',
    ];
  },

  cat: (args) => {
    const file = args[0];
    if (!file) return ['⚠️  الاستخدام: cat <filename>'];

    if (file === 'about') {
      return [
        '',
        '  ╔══════════════════════════════════════════════╗',
        '  ║            MASRY STORE                       ║',
        '  ║      النخبة في الأمن السيبراني              ║',
        '  ╚══════════════════════════════════════════════╝',
        '',
        '  المدرب: Tareiq Moustafa',
        '  الخبرة: +5 سنوات في الأمن السيبراني',
        '',
        '  الشهادات:',
        '    • Certified Ethical Hacker (CEH)',
        '    • CompTIA Security+',
        '    • Linux Hardening & Red Hat',
        '    • Digital Forensics',
        '    • Dark Web Intelligence & OSINT',
        '    • Malware Analysis',
        '',
        '  "التعليم الأمني يجب أن يكون عملياً ومباشراً"',
        '',
      ];
    }

    if (file === 'contact') {
      return [
        '',
        '  📬 طرق التواصل الرسمية:',
        '',
        '  📱 تليجرام (المجموعة):  @Masry0Store',
        '  📱 تليجرام (المدرب):    @THE0AN2',
        '',
        '  ⚠️  لا يوجد واتساب - فقط تليجرام',
        '',
      ];
    }

    if (file === 'status') {
      return [
        '',
        '  ╔══════════════════════════════════════════════╗',
        '  ║           MASRY STORE STATUS                 ║',
        '  ╠══════════════════════════════════════════════╣',
        '  ║  المسارات التعليمية:      7 مسارات          ║',
        '  ║  الفصول التعليمية:       189+ فصل          ║',
        '  ║  كتب PDF مجانية:         7 كتب             ║',
        '  ║  الدورات الاحترافية:     3 دورات            ║',
        '  ║  إجمالي صفحات المحتوى:   +1400 صفحة       ║',
        '  ║  مستويات الصعوبة:        3 (مبتدئ→متقدم)  ║',
        '  ║  حالة الدعم:             ∞ مفتوح          ║',
        '  ║  السنة:                  2026              ║',
        '  ╚══════════════════════════════════════════════╝',
        '',
      ];
    }

    const path = pathData[file];
    if (path) {
      return [
        '',
        `  📖 ${path.title}`,
        '  ' + '─'.repeat(50),
        `  📝 الوصف: ${path.desc}`,
        `  📊 المستوى: ${path.level}`,
        `  📑 عدد الفصول: ${path.chapters} فصل`,
        `  📄 رابط القراءة: /learning-paths/${file}`,
        `  💾 تحميل PDF: /pdfs/${file}.pdf`,
        '',
      ];
    }

    return [`⚠️  الملف "${file}" غير موجود. اكتب: ls`];
  },

  whoami: () => [
    '',
    '  👤 أنت زائر لـ MASRY STORE',
    '',
    '  🎯 نصيحة: ابدأ بمسار "basics" لو أنت مبتدئ',
    '     ثم انتقل لـ "redTeam" أو "blueTeam"',
    '',
    '  💡 اكتب: cat basics',
    '          ls paths',
    '',
  ],

  contact: () => [
    '',
    '  ╔══════════════════════════════════════════════╗',
    '  ║              CONTACT INFO                    ║',
    '  ╠══════════════════════════════════════════════╣',
    '  ║  📱 Telegram (Group):  @Masry0Store         ║',
    '  ║  📱 Telegram (Private): @THE0AN2            ║',
    '  ║                                              ║',
    '  ║  ⚠️  No WhatsApp - Telegram Only            ║',
    '  ╚══════════════════════════════════════════════╝',
    '',
  ],

  neofetch: () => [
    '',
    '         🛡️           visitor@masry-store',
    '        ██████        ────────────────────',
    '       ██    ██       OS: MASRY STORE Cyber Platform',
    '      ██  🟢  ██      Kernel: Security-Elite-v2026',
    '       ██    ██       Uptime: Always Online',
    '        ██████        Shell: cyber-bash',
    '       ██    ██       Resolution: 1920x1080',
    '      ██      ██      DE: Neon-Cyber',
    '     ██        ██     CPU: Ethical-Hacker-Brain',
    '    ██████████████    Memory: 7 Paths Loaded',
    '                       Storage: 189+ Chapters',
    '',
  ],

  clear: () => [],

  matrix: () => [
    '',
    '  🟢 Matrix Rain Effect: ACTIVATED',
    '  💡 انزل لأعلى الصفحة عشان تشوف التأثير!',
    '',
  ],

  ping: (args) => {
    const host = args[0] || 'masry-store.vercel.app';
    return [
      '',
      `  PING ${host} (133.7.4.2): 56 data bytes`,
      `  64 bytes from ${host}: icmp_seq=1 ttl=64 time=0.42 ms`,
      `  64 bytes from ${host}: icmp_seq=2 ttl=64 time=0.38 ms`,
      `  64 bytes from ${host}: icmp_seq=3 ttl=64 time=0.41 ms`,
      '',
      `  --- ${host} ping statistics ---`,
      `  3 packets transmitted, 3 received, 0% packet loss`,
      `  rtt min/avg/max = 0.38/0.40/0.42 ms`,
      '',
    ];
  },

  nmap: () => [
    '',
    '  🔍 Starting Nmap scan (simulation)...',
    '  ',
    '  PORT     STATE   SERVICE',
    '  22/tcp   open    SSH',
    '  80/tcp   open    HTTP',
    '  443/tcp  open    HTTPS',
    '  1337/tcp open    CYBER-ELITE',
    '  ',
    '  Service Info: MASRY STORE - Secure Platform',
    '  ',
    '  😎 هذه مجرد محاكاة تعليمية!',
    '     تعلم الفحص الحقيقي في مسار Red Team',
    '',
  ],
};

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([
    {
      input: '',
      output: [
        '',
        '  🛡️  MASRY STORE Cyber Terminal v2.6',
        '  ──────────────────────────────────────────',
        '  مرحباً! اكتب "help" عشان تشوف الأوامر المتاحة',
        '',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commands]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = useCallback((cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const parts = trimmed.split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    if (!cmd) return;

    setHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    if (cmd === 'clear') {
      setCommands([]);
      return;
    }

    const handler = allCommands[cmd];
    let output: string[];
    let isError = false;

    if (handler) {
      output = handler(args);
    } else {
      output = [
        `⚠️  أمر غير معروف: "${cmd}"`,
        '   اكتب "help" عشان تشوف الأوامر المتاحة',
      ];
      isError = true;
    }

    setCommands((prev) => [...prev, { input: cmdStr, output, isError }]);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIdx = prev < history.length - 1 ? prev + 1 : prev;
        setInput(history[history.length - 1 - newIdx] || '');
        return newIdx;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIdx = prev > 0 ? prev - 1 : -1;
        setInput(newIdx >= 0 ? history[history.length - 1 - newIdx] : '');
        return newIdx;
      });
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const suggestions = Object.keys(allCommands).filter((c) => c.startsWith(input.toLowerCase()));
      if (suggestions.length === 1) {
        setInput(suggestions[0]);
      }
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
              Cyber Terminal
            </h2>
            <p className="text-muted-foreground text-sm">
              جرب أوامر الترمنال التفاعلي - اكتب help للمساعدة
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            ref={terminalRef}
            className="rounded-2xl overflow-hidden border border-neon/20 bg-[#0a0e0a] shadow-2xl shadow-neon/5"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#121612] border-b border-neon/10">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-neon/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                visitor@masry-store: ~/cyber-terminal
              </span>
            </div>

            {/* Terminal Body */}
            <div
              className="p-4 sm:p-6 h-[400px] overflow-y-auto font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
              dir="ltr"
            >
              {commands.map((cmd, idx) => (
                <div key={idx}>
                  {cmd.input && (
                    <div className="flex items-center gap-2 mb-1 text-neon/80">
                      <span className="text-neon shrink-0">➜</span>
                      <span className="text-cyan-400 shrink-0">~</span>
                      <span>{cmd.input}</span>
                    </div>
                  )}
                  {cmd.output.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={`leading-relaxed ${
                        line.includes('╔') || line.includes('╠') || line.includes('╚')
                          ? 'text-neon/70'
                          : line.includes('MASRY') || line.includes('🛡️')
                          ? 'text-neon font-bold'
                          : line.startsWith('⚠️')
                          ? 'text-yellow-400'
                          : line.includes('📱') || line.includes('📬')
                          ? 'text-cyan-400'
                          : 'text-gray-300'
                      }`}
                    >
                      {line || '\u00A0'}
                    </div>
                  ))}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-neon shrink-0">➜</span>
                <span className="text-cyan-400 shrink-0">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-gray-200 outline-none font-mono"
                  placeholder="اكتب أمر هنا..."
                  autoComplete="off"
                  spellCheck={false}
                />
                <span className="w-2 h-4 bg-neon animate-pulse" />
              </div>
              <div ref={bottomRef} />
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Buttons */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {['help', 'ls paths', 'status', 'neofetch', 'whoami'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                executeCommand(cmd);
                inputRef.current?.focus();
              }}
              className="px-3 py-1.5 rounded-full bg-neon/5 border border-neon/15 text-neon/70 text-xs font-mono hover:bg-neon/10 hover:border-neon/30 transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
