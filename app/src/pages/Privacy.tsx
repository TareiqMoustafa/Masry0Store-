import Layout from '@/components/layout/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-cyber-elevated border border-border rounded-3xl p-8 sm:p-12">
            <h1 className="neon-glow-text text-3xl text-center mb-2">
              <i className="fas fa-lock ml-2"></i>
              سياسة الخصوصية
            </h1>
            <p className="text-center text-muted-foreground mb-10">آخر تحديث: 14 يونيو 2026</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-neon mb-3">1. مقدمة</h2>
                <p className="text-foreground/80 leading-relaxed">
                  نحن في <strong>MASRY STORE</strong> نلتزم بحماية خصوصية بياناتك الشخصية. توضح هذه السياسة كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدام موقعنا الإلكتروني والخدمات المرتبطة به.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">2. المعلومات التي نجمعها</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>معلومات الاتصال:</strong> عندما تتواصل معنا عبر تليجرام أو البريد الإلكتروني.</li>
                  <li><strong>بيانات الاستخدام:</strong> معلومات عن زياراتك للموقع (الصفحات، الوقت، نوع المتصفح).</li>
                  <li><strong>ملفات تعريف الارتباط (Cookies):</strong> نستخدمها لتحسين تجربة التصفح.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">3. كيفية استخدام معلوماتك</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li>للرد على استفساراتك وتقديم الدعم الفني.</li>
                  <li>لتحسين محتوى الموقع وخدماته.</li>
                  <li>لإرسال تحديثات وعروض (فقط إذا وافقت على ذلك).</li>
                  <li>لمنع الاحتيال وضمان أمن المنصة.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">4. مشاركة المعلومات</h2>
                <p className="text-foreground/80 leading-relaxed">
                  نحن <strong>لا نبيع أو نؤجر أو نشارك</strong> بياناتك الشخصية مع أي طرف ثالث لأغراض تسويقية.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">5. أمان البيانات</h2>
                <p className="text-foreground/80 leading-relaxed">
                  نستخدم إجراءات أمنية تقنية وإدارية لحماية بياناتك من الوصول غير المصرح به.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">6. حقوقك</h2>
                <p className="text-foreground/80 leading-relaxed">
                  لديك الحق في الوصول إلى بياناتك الشخصية، وتصحيحها، أو طلب حذفها. يمكنك ممارسة هذه الحقوق عن طريق التواصل معنا عبر تليجرام <strong>@THE0AN2</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neon mb-3">7. التواصل معنا</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>تليجرام:</strong> <a href="https://t.me/Masry0Store" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">@Masry0Store</a></li>
                  <li><strong>المدرب:</strong> <a href="https://t.me/THE0AN2" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">@THE0AN2</a></li>
                </ul>
              </section>
            </div>

            <div className="note-box mt-8 text-center">
              <i className="fas fa-check-circle text-neon text-lg mb-2 block"></i>
              <p className="text-sm text-foreground/80">
                باستخدامك لموقعنا، فإنك توافق على هذه السياسة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
