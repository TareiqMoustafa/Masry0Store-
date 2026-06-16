# 🔐 MASRY STORE | النخبة في الأمن السيبراني

[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-black?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

> **منصة تعليمية عربية متخصصة في الأمن السيبراني والهكر الأخلاقي — من الصفر حتى الاحتراف.**

🌐 **الموقع المباشر:** [https://masry0-store.vercel.app](https://masry0-store.vercel.app)

---

## 📋 جدول المحتويات

- [المميزات](#-المميزات)
- [التقنيات المستخدمة](#-التقنيات-المستخدمة)
- [هيكل المشروع](#-هيكل-المشروع)
- [طريقة التشغيل محلياً](#-طريقة-التشغيل-محلياً)
- [خريطة الموقع](#-خريطة-الموقع)
- [التصميم والهوية البصرية](#-التصميم-والهوية-البصرية)
- [التطوير المستقبلي](#-التطوير-المستقبلي)
- [تنويه قانوني](#-تنويه-قانوني)
- [التواصل](#-التواصل)
- [الترخيص](#-الترخيص)

---

## ✨ المميزات

- 🎯 **7 مسارات تعليمية شاملة** — Red Team, Blue Team, SOC, GRC, Forensics, Malware, Basics
- 📄 **خطط تعليمية مجانية بصيغة PDF** — منظمة وجاهزة للطباعة
- 🛡️ **محتوى عملي 100%** — مشاريع حقيقية وثغرات حقيقية، لا نظريات مملة
- 🧑‍🏫 **مدرب واحد مباشر** — دعم فني شخصي عبر Telegram
- ⚡ **أداء فائق** — بناءً على React 19 + Vite + Tailwind CSS
- 🌙 **تصميم داكن احترافي** — هوية بصرية مخصصة (Neon Cyber Theme)
- 📱 **تصميم متجاوب بالكامل** — يعمل بسلاسة على جميع الأجهزة
- 🌍 **محتوى عربي متخصص** — يعالج الفجوة في المحتوى التعليمي العربي للأمن السيبراني

---

## 🛠️ التقنيات المستخدمة

| الطبقة | التقنية | الغرض |
|--------|---------|-------|
| **Framework** | React 19 | بناء واجهة المستخدم |
| **Language** | TypeScript 5.9 | كتابة كود آمن وقابل للصيانة |
| **Build Tool** | Vite 7 | بناء وتجميع المشروع بسرعة |
| **Styling** | Tailwind CSS 3.4 | تصميم CSS سريع ومرن |
| **UI Components** | shadcn/ui + Radix UI | مكونات واجهة مستخدم متسقة وAccessible |
| **Routing** | React Router v7 | التنقل بين صفحات الموقع |
| **Forms** | React Hook Form | إدارة النماذج بكفاءة |
| **Validation** | Zod | التحقق من صحة البيانات |
| **Icons** | Lucide React + Font Awesome | الأيقونات |
| **Charts** | Recharts | الرسوم البيانية والإحصائيات |
| **Animations** | Tailwind CSS Animations | الحركات والتأثيرات البصرية |
| **Deployment** | Vercel | الاستضافة والنشر المباشر |

---

## 📁 هيكل المشروع

```
Masry0Store-/
├── public/                    # الأصول الثابتة
│   ├── screenshots/           # لقطات شاشة للعرض
│   ├── pdfs/                  # الخطط التعليمية PDF
│   └── favicon.ico            # أيقونة الموقع
│
├── src/
│   ├── components/            # مكونات UI reusable
│   │   ├── ui/                # مكونات shadcn/ui الأصلية
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── Navbar.tsx         # شريط التنقل العلوي
│   │   ├── Footer.tsx         # تذييل الصفحة
│   │   └── ...
│   │
│   ├── pages/                 # صفحات التطبيق (Routes)
│   │   ├── Home.tsx           # الصفحة الرئيسية
│   │   ├── About.tsx          # عن المدرب والمؤسس
│   │   ├── Courses.tsx        # الدورات الاحترافية
│   │   ├── LearningPaths.tsx  # الخطط التعليمية المتخصصة
│   │   ├── PathDetail.tsx     # تفاصيل مسار محدد
│   │   ├── Contact.tsx        # التواصل
│   │   ├── Privacy.tsx        # سياسة الخصوصية
│   │   └── Terms.tsx          # شروط الاستخدام
│   │
│   ├── lib/                   # utilities, helpers
│   │   └── utils.ts           # دوال مساعدة (cn, إلخ)
│   │
│   ├── App.tsx                # التوجيه الرئيسي (Routing)
│   ├── main.tsx               # نقطة الدخول (Entry Point)
│   └── index.css              # الأنماط العامة + Tailwind directives
│
├── tailwind.config.js         # إعدادات التصميم المخصصة
│                              # (Neon colors, Cyber theme, Animations)
├── vite.config.ts             # إعدادات Vite
├── tsconfig.json              # إعدادات TypeScript
├── tsconfig.app.json          # إعدادات TypeScript للتطبيق
├── tsconfig.node.json         # إعدادات TypeScript للـ Node
├── index.html                 # HTML الأساسي + Meta tags
├── package.json               # الاعتماديات والسكربتات
├── eslint.config.js           # إعدادات ESLint
└── README.md                  # هذا الملف
```

---

## 🚀 طريقة التشغيل محلياً

### المتطلبات

- [Node.js](https://nodejs.org/) >= 18.0.0
- [npm](https://www.npmjs.com/) >= 9.0.0 (أو [yarn](https://yarnpkg.com/))

### 1. استنساخ المستودع

```bash
git clone https://github.com/TareiqMoustafa/Masry0Store-.git
cd Masry0Store-
```

### 2. تثبيت الاعتماديات

```bash
npm install
# أو
yarn install
```

### 3. تشغيل خادم التطوير

```bash
npm run dev
# أو
yarn dev
```

> يفتح الموقع تلقائياً على: `http://localhost:5173`

### 4. بناء النسخة الإنتاجية

```bash
npm run build
# أو
yarn build
```

> الناتج يُحفظ في مجلد `dist/` جاهزاً للنشر على Vercel أو أي استضافة أخرى.

### 5. معاينة النسخة الإنتاجية

```bash
npm run preview
# أو
yarn preview
```

---

## 🗺️ خريطة الموقع (Routes)

| المسار | الصفحة | الوصف |
|--------|--------|-------|
| `/` | Home | الصفحة الرئيسية — Hero, المميزات, المسارات, آراء المتدربين |
| `/about` | About | عن المدرب والمؤسس — الشهادات، الخبرات، التواصل |
| `/courses` | Courses | الدورات الاحترافية المتاحة |
| `/learning-paths` | LearningPaths | الخطط التعليمية المتخصصة (7 مسارات) |
| `/learning-paths/:id` | PathDetail | تفاصيل مسار محدد مع محتوى PDF |
| `/contact` | Contact | صفحة التواصل |
| `/privacy` | Privacy | سياسة الخصوصية |
| `/terms` | Terms | شروط الاستخدام والتنويه القانوني |

---

## 🎨 التصميم والهوية البصرية

### الألوان المخصصة (Tailwind Config)

| اللون | الكود | الاستخدام |
|-------|-------|-----------|
| **Neon Green** | `#0f0` | الأزرار، العناوين، التأكيد |
| **Neon Dim** | `#2a5a2a` | الخلفيات الثانوية |
| **Neon Bright** | `#8fff8f` | التأثيرات والـ hover |
| **Cyber BG** | `#020402` | الخلفية الرئيسية (داكنة) |
| **Cyber Surface** | `#0a100a` | بطاقات المحتوى |
| **Cyber Elevated** | `#121912` | الطبقات العلوية |

### الخطوط

- **Cairo** — الخط الرئيسي للمحتوى العربي
- **Segoe UI** — fallback للنصوص اللاتينية

### الحركات (Animations)

| Animation | الوصف | الاستخدام |
|-----------|-------|-----------|
| `pulse-glow` | توهج نيون متقطع | الأزرار والعناصر المهمة |
| `float` | حركة عائمة لأعلى وأسفل | الأيقونات والعناصر التزيينية |
| `accordion-down/up` | فتح/إغلاق أكورديون | المحتوى القابل للطي |

---

## 📈 التطوير المستقبلي (Roadmap)

- [ ] إضافة SEO كامل (React Helmet Async + Meta Tags)
- [ ] إضافة Open Graph tags للمشاركة على وسائل التواصل
- [ ] إضافة Google Analytics / Plausible Analytics
- [ ] تحسين أداء الصور (WebP, Lazy Loading)
- [ ] إضافة Dark/Light mode toggle
- [ ] إضافة صفحة Blog للمقالات التقنية
- [ ] إضافة نظام تسجيل الدخول (Firebase/Supabase)
- [ ] إضافة لوحة تحكم للطلاب لمتابعة التقدم
- [ ] إضافة نظام اختبارات تفاعلية (Quizzes)
- [ ] دعم اللغة الإنجليزية (i18n)

---

## ⚖️ تنويه قانوني

جميع المواد التعليمية المقدمة عبر هذه المنصة مخصصة **للهكر الأخلاقي (Ethical Hacking) واختبار الاختراق بإذن مسبق فقط**.

- أي استخدام غير قانوني للأدوات أو التقنيات المُعلَّمة يتحمل المستخدم مسؤوليته القانونية الكاملة.
- **MASRY STORE غير مسؤول عن أي سوء استخدام** للمحتوى التعليمي.
- يجب الحصول على **موافقة كتابية صريحة** من صاحب النظام قبل أي اختبار اختراق.
- المحتوى يهدف إلى التعليم والتوعية الأمنية فقط.

---

## 🤝 المساهمة

المشروع حالياً مفتوح للعرض (Showcase). للاقتراحات أو التحسينات:

1. افتح [Issue](https://github.com/TareiqMoustafa/Masry0Store-/issues) لو عندك اقتراح أو مشكلة
2. لو حابب تساهم بالكود، افتح Pull Request مع وصف واضح للتغييرات

---

## 📬 التواصل

| القناة | الرابط | الغرض |
|--------|--------|-------|
| **الموقع المباشر** | [masry0-store.vercel.app](https://masry0-store.vercel.app) | المنصة الرئيسية |
| **Telegram (المجموعة)** | [@Masry0Store](https://t.me/Masry0Store) | المناقشات، الملفات، الدعم |
| **Telegram (خاص)** | [@THE0AN2](https://t.me/THE0AN2) | التواصل الشخصي مع المدرب |

> ⚠️ **لا يوجد واتساب أو أرقام هواتف** — جميع الخدمات عبر Telegram فقط.

---

## 👤 عن المؤسس

**Tareiq Moustafa** — مؤسس MASRY STORE

خبرة تمتد لسنوات في الأمن السيبراني، الهكر الأخلاقي، وتحليل الأنظمة. المشرف الوحيد على المحتوى، التدريب، والدعم الفني. لا وسطاء — معك خطوة بخطوة لتصبح خبيراً في هذا المجال.

> *"أنا أؤمن بأن التعليم الأمني يجب أن يكون عملياً ومباشراً. لذلك أضع كل خبرتي في هذه المنصة لتكون مرجعك الأول في الأمن السيبراني."*

---

## 📄 الترخيص

هذا المشروع مرخص بموجب [MIT License](LICENSE).

```
MIT License

Copyright (c) 2026 Tareiq Moustafa — MASRY STORE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  <sub>بُني بـ ❤️ و ☕ بواسطة <strong>Tareiq Moustafa</strong> — MASRY STORE</sub>
  <br>
  <sub>🛡️ النخبة في الأمن السيبراني</sub>
</p>
