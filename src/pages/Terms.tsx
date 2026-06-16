import Layout from '@/components/layout/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-cyber-elevated border border-border rounded-3xl p-8 sm:p-12">
            <h1 className="neon-glow-text text-3xl text-center mb-2">
              <i className="fas fa-gavel ml-2"></i>
              شروط وأحكام الاستخدام
            </h1>
            <p className="text-center text-muted-foreground mb-10">آخر تحديث: 14 يونيو 2026</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-neon mb-3">1. قبول الشروط</h2>
                <p className="text-foreground/80 leading-relaxed">
                  باستخدامك لموقع <strong>MASRY STORE</strong>، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام الموقع.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">2. الاستخدام الأخلاقي والقانوني</h2>
                <div className="warning-box">
                  <p className="text-foreground/80">
                    جميع المواد التعليمية مخصصة لأغراض <strong>الهكر الأخلاقي واختبار الاختراق بإذن قانوني فقط</strong>. يتحمل المستخدم المسؤولية الكاملة عن أي استخدام غير قانوني.
                  </p>
                </div>
                <ul className="space-y-2 text-foreground/80 mt-4">
                  <li>يحظر استخدام المحتوى لاختراق أنظمة لا تملك إذنًا كتابيًا باختبارها.</li>
                  <li>يحظر إنشاء برمجيات ضارة لأغراض ضارة.</li>
                  <li>يحظر انتهاك خصوصية الآخرين.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">3. الملكية الفكرية</h2>
                <p className="text-foreground/80 leading-relaxed">
                  جميع المحتويات المنشورة على الموقع هي ملك حصري لـ <strong>MASRY STORE</strong>. لا يُسمح بنسخ أو توزيع أو إعادة نشر أي جزء دون إذن كتابي مسبق. الخطط التعليمية PDF المقدمة مجانًا هي للاستخدام الشخصي فقط.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">4. الدورات المدفوعة</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li>شراء الدورة يعني ترخيصًا شخصيًا للوصول إلى المحتوى، وليس نقل الملكية.</li>
                  <li>لا يُسمح بمشاركة معلومات الدخول مع الآخرين.</li>
                  <li>بعد تفعيل الوصول، لا يمكن استرداد المبلغ ما لم تكن هناك مشكلة تقنية.</li>
                  <li>جميع عمليات الشراء تتم عبر التليجرام يدويًا.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">5. إخلاء المسؤولية</h2>
                <p className="text-foreground/80 leading-relaxed">
                  يتم تقديم المواد التعليمية "كما هي" (AS IS) دون أي ضمانات ضمنية. لا نضمن أن المحتوى خالٍ من الأخطاء. في حدود ما يسمح به القانون، لا يكون MASRY STORE مسؤولاً عن أي أضرار ناتجة عن استخدام الموقع.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">6. التعديلات</h2>
                <p className="text-foreground/80 leading-relaxed">
                  قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرارك في استخدام الموقع بعد التغييرات يعني قبولك للشروط المعدلة.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">7. القانون الواجب التطبيق</h2>
                <p className="text-foreground/80 leading-relaxed">
                  تخضع هذه الشروط وأي نزاعات ناشئة عنها لقوانين جمهورية مصر العربية.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">8. الاتصال بنا</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>تليجرام:</strong> <a href="https://t.me/Masry0Store" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">@Masry0Store</a></li>
                  <li><strong>المدرب:</strong> <a href="https://t.me/THE0AN2" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">@THE0AN2</a></li>
                </ul>
              </section>
            </div>

            <div className="note-box mt-8 text-center">
              <i className="fas fa-gavel text-neon text-lg mb-2 block"></i>
              <p className="text-sm text-foreground/80">
                باستخدامك للموقع، فإنك تقر بأنك قرأت وفهمت هذه الشروط وتوافق على الالتزام بها.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
