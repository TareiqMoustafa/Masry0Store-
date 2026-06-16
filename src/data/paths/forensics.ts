export const forensicsData = {
  id: 'forensics',
  title: 'Digital Forensics',
  emoji: '🔍',
  color: 'cyan',
  description: 'منهج متكامل من 3 مستويات - التحليل الجنائي الرقمي وجمع الأدلة',
  level: 'مبتدئ / متوسط / متقدم',
  chaptersCount: 27,
  pages: '~195 صفحة',
  icon: 'fa-search',
  chapters: [
    // ==================== المستوى الأول: مبتدئ (الفصول 1-9) ====================
    {
      number: 1,
      title: '[مبتدئ] مقدمة في التحليل الجنائي الرقمي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: ما هو الطب الشرعي الرقمي؟</h2>
        <p>التحليل الجنائي الرقمي (Digital Forensics) هو فرع من علوم الطب الشرعي يهتم بجمع وتحليل وتقديم الأدلة الرقمية بطريقة مقبولة قانونياً. يمكن تطبيقه في التحقيقات الجنائية (اختراق، سرقة بيانات، جرائم إلكترونية) وكذلك في التحقيقات الداخلية للشركات (انتهاك السياسات، تسريب بيانات).</p>
        <div class="note-box">
          <i class="fas fa-gavel text-neon"></i> <strong>مبادئ أساسية:</strong> الأدلة يجب أن تكون محفوظة من التغيير (سلسلة الحفظ)، كل إجراء يتم توثيقه، ويتم التحليل على نسخة طبق الأصل وليس على الأدلة الأصلية.
        </div>
        <div class="fig-box">
          <i class="fas fa-microchip text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مراحل التحليل الجنائي: الجمع، الحفظ، التحليل، التقرير.
        </div>
      `
    },
    {
      number: 2,
      title: '[مبتدئ] تجهيز بيئة معمل الطب الشرعي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: أدوات المحقق الرقمي</h2>
        <ul>
          <li><strong>جهاز معمل معزول (Forensic Workstation):</strong> لا يتصل بالإنترنت، مع منافذ مادية مؤمنة لمنع العبث بالأدلة.</li>
          <li><strong>أدوات كتابة مانعة للكتابة (Write-blocker):</strong> جهاز يمنع أي تعديل على القرص الأصلي عند توصيله (مثل Tableau، أو برمجي مثل mount -o ro).</li>
          <li><strong>برامج جنائية:</strong>
            <ul><li>Autopsy (مفتوح المصدر) – منصة تحليل شاملة.</li>
            <li>FTK Imager (مجاني) – لإنشاء صور (images) للقرص.</li>
            <li>Volatility Framework – لتحليل الذاكرة.</li>
            <li>Wireshark – لتحليل ملفات pcap.</li></ul>
          </li>
          <li><strong>قوالب التوثيق:</strong> سجل سلسلة الحفظ، تقرير التحليل.</li>
        </ul>
        <div class="code-block">
# تثبيت Autopsy على Ubuntu
sudo apt update
sudo apt install autopsy -y
# تثبيت Volatility (يتطلب Python)
git clone https://github.com/volatilityfoundation/volatility.git
cd volatility
python setup.py install
        </div>
      `
    },
    {
      number: 3,
      title: '[مبتدئ] مبادئ سلسلة الحفظ وجمع الأدلة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: من مسرح الجريمة إلى المختبر</h2>
        <p>سلسلة الحفظ (Chain of Custody) هي وثائق تسجل كل من تعامل مع الدليل منذ لحظة جمعها حتى عرضها في المحكمة. أي فجوة في السلسلة قد تؤدي إلى رفض الدليل.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">خطوات جمع الأدلة الرقمية:</h3>
        <ol>
          <li>تحديد موقع الأدلة: قرص صلب، USB، هاتف، سحابة.</li>
          <li>توثيق حالة الجهاز: التصوير الفوتوغرافي، الطوابع الزمنية، الأسماء.</li>
          <li>فصل الجهاز عن الشبكة: منع التغييرات عن بعد.</li>
          <li>حساب تجزئة (Hash) للقرص الأصلي: باستخدام SHA256 أو MD5 للتأكد من سلامة البيانات.</li>
          <li>إنشاء صورة قطاعية (Forensic Image): نسخة طبق الأصل محفوظة في ملف (E01 أو DD).</li>
          <li>توقيع سلسلة الحفظ وتوثيق كل خطوة.</li>
        </ol>
        <div class="code-block">
# حساب تجزئة SHA256 لملف أو قرص
sha256sum /dev/sdb
# إنشاء صورة قرص باستخدام dd
sudo dd if=/dev/sdb of=/mnt/evidence/image.dd bs=4096
        </div>
      `
    },
    {
      number: 4,
      title: '[مبتدئ] أنظمة الملفات من منظور جنائي (FAT، NTFS، ext4)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: هيكل البيانات تحت المجهر</h2>
        <ul>
          <li><strong>FAT (File Allocation Table):</strong> قديم، يستخدم في الأجهزة الصغيرة. عند حذف ملف، يتم تغيير أول حرف من اسم الملف إلى E5، وتظل البيانات موجودة حتى يتم الكتابة فوقها.</li>
          <li><strong>NTFS (ويندوز):</strong> يحتوي على Master File Table (MFT) حيث يتم تخزين معلومات الملفات (الاسم، التواريخ، حجم البيانات). الملفات المحذوفة تبقى في MFT مع تمييزها محذوفة حتى تتم إعادة استخدام الإدخال.</li>
          <li><strong>ext4 (لينكس):</strong> يستخدم inodes لتخزين البيانات الوصفية. الحذف يؤدي إلى إزالة المؤشرات لكن البيانات تبقى على القرص حتى يتم الكتابة فوقها.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-database text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 4.1:</strong> هيكل MFT في نظام NTFS.
        </div>
      `
    },
    {
      number: 5,
      title: '[مبتدئ] تحليل القرص الصلب باستخدام Autopsy',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: أول تحقيق باستخدام Autopsy</h2>
        <div class="code-block">
# فتح Autopsy وإنشاء قضية جديدة
autopsy
# إنشاء قضية باسم "Case_001"
# إضافة الصورة "image.dd"
# اختيار ملف التعريف (Ingest Profile) للبحث عن الملفات والمحذوفات والكلمات المفتاحية
# استعراض النتائج في الواجهة الرسومية
        </div>
        <p>ما الذي تبحث عنه؟</p>
        <ul>
          <li>الملفات المحذوفة في سلة المحذوفات أو الممتدة.</li>
          <li>ملفات الصور والمستندات المشبوهة.</li>
          <li>سجل التطبيقات (Recent documents).</li>
          <li>بصمات الأجهزة الخارجية (USB).</li>
        </ul>
      `
    },
    {
      number: 6,
      title: '[مبتدئ] استعادة الملفات المحذوفة (Foremost، PhotoRec)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: إحياء البيانات المفقودة</h2>
        <p>بعد الحذف العادي، لا تختفي البيانات من القرص فعلياً. يمكن استعادتها باستخدام أدوات مثل PhotoRec أو Foremost.</p>
        <div class="code-block">
# تثبيت Foremost
sudo apt install foremost -y
foremost -i image.dd -o recovered -t jpg,pdf,docx,zip

# استخدام PhotoRec (جزء من TestDisk)
sudo apt install testdisk -y
photorec image.dd
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تقم أبداً بالكتابة على القرص الأصلي أثناء عملية الاستعادة. استخدم نسخة صورة (image) فقط.
        </div>
      `
    },
    {
      number: 7,
      title: '[مبتدئ] تحليل سجلات ويندوز (Event Viewer الأساسي)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: قراءة سجلات الأحداث</h2>
        <p>الأحداث الرئيسية في سجل الأمان (Security Log):</p>
        <ul>
          <li><strong>4624:</strong> تسجيل دخول ناجح.</li>
          <li><strong>4625:</strong> فشل تسجيل الدخول.</li>
          <li><strong>4688:</strong> إنشاء عملية جديدة.</li>
          <li><strong>1102:</strong> مسح سجل الأمان (قد يشير إلى إزالة أدلة).</li>
        </ul>
        <div class="code-block">
# تصدير سجل الأمان كملف .evtx
wevtutil epl Security security_backup.evtx
# فتحه في Event Viewer على جهاز آخر (لمنع التلوث)
        </div>
      `
    },
    {
      number: 8,
      title: '[مبتدئ] تحليل سجلات لينكس (syslog، auth.log)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: تتبع النشاط على لينكس</h2>
        <div class="code-block">
# عرض سجل المصادقة
cat /var/log/auth.log | grep "session opened"

# البحث عن محاولات SSH فاشلة
grep "Failed password" /var/log/auth.log

# نسخ سجل آمن
cp /var/log/auth.log /mnt/evidence/auth_log_copy
        </div>
      `
    },
    {
      number: 9,
      title: '[مبتدئ] مراجعة المستوى الأول واختبار',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي سلسلة الحفظ (Chain of Custody) ولماذا هي مهمة؟</li>
          <li>ما الفرق بين صورة القراصنة (Forensic Image) والنسخة العادية من الملفات؟</li>
          <li>ما هو نظام الملفات المستخدم في ويندوز الحديث؟ اذكر خاصيتين جنائيتين له.</li>
          <li>كيف يمكن استعادة ملف محذوف من قرص NTFS؟</li>
          <li>اذكر Event ID لنجاح تسجيل الدخول وفشل تسجيل الدخول في ويندوز.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بإنشاء قرص USB أو قسم صغير (1GB). انسخ بعض الملفات النصية والصور ثم احذفها. استخدم PhotoRec لاستعادة الملفات المحذوفة. دوّن الخطوات والملفات التي تم استردادها. اكتب تقريراً من صفحة واحدة.</p>
      `
    },
    // ==================== المستوى الثاني: متوسط (الفصول 10-18) ====================
    {
      number: 10,
      title: '[متوسط] تحليل الذاكرة (Memory Forensics) باستخدام Volatility',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: ما تخفيه ذاكرة الوصول العشوائي</h2>
        <p>تحليل الذاكرة (RAM) يكشف العمليات الجارية، الاتصالات الشبكية النشطة، الأوامر التي تم تنفيذها، وأحياناً كلمات المرور غير المشفرة.</p>
        <div class="code-block">
# الحصول على ملف ذاكرة (مثال: memdump.mem)
# استخدام Volatility لتحديد ملف التعريف (profile)
volatility -f memdump.mem imageinfo
# عرض العمليات الجارية وقت الالتقاط
volatility -f memdump.mem --profile=Win10x64 pslist
# عرض اتصالات الشبكة
volatility -f memdump.mem --profile=Win10x64 netscan
# استخراج أوامر PowerShell التي تم تشغيلها
volatility -f memdump.mem --profile=Win10x64 cmdscan
        </div>
        <div class="note-box">
          📌 <strong>نشاط 10:</strong> التقط ذاكرة جهاز ويندوز (باستخدام winpmem). حلل الملف باستخدام Volatility وحدد العمليات الخبيثة المحتملة (مثل استهلاك عالي للـ CPU، اتصالات غير عادية).
        </div>
      `
    },
    {
      number: 11,
      title: '[متوسط] تحليل الـ Registry في ويندوز',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: قاعدة بيانات النظام</h2>
        <p>سجل ويندوز (Registry) يحتوي على إعدادات النظام والمستخدمين. يمكن تحليله لاكتشاف:</p>
        <ul>
          <li>آخر التطبيقات المفتوحة (RecentDocs).</li>
          <li>الأجهزة المتصلة USB (USBSTOR).</li>
          <li>حسابات المستخدمين وكلمات المرور المخزنة (SAM).</li>
          <li>شبكات Wi-Fi المتصلة سابقاً.</li>
          <li>مفاتيح بدء التشغيل (Run, RunOnce).</li>
        </ul>
        <div class="code-block">
# استخدام RegRipper (أداة مفتوحة المصدر)
rip -r NTUSER.DAT -p userassist
rip -r SYSTEM -p usbstor
        </div>
      `
    },
    {
      number: 12,
      title: '[متوسط] تحليل المتصفحات (History، Cookies، Cache)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: تتبع نشاط المستخدم على الإنترنت</h2>
        <p>المتصفحات تحتفظ بتاريخ التصفح، ملفات تعريف الارتباط، كلمات المرور المحفوظة، والتنزيلات. الأدلة الجنائية تقوم بتحليل ملفات SQLite الخاصة بها.</p>
        <div class="code-block">
# تحليل ملف History في Chrome (SQLite)
sqlite3 History "SELECT * FROM urls"

# تحليل ملف Login Data للبحث عن كلمات مرور محفوظة
sqlite3 "Login Data" "SELECT action_url, username_value, password_value FROM logins"
        </div>
      `
    },
    {
      number: 13,
      title: '[متوسط] تحليل البريد الإلكتروني (PST، EML)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: فك تشفير الاتصالات</h2>
        <p>تحليل البريد الإلكتروني يمكن أن يكشف عن هجمات التصيد، تسريب بيانات، أو أدلة على التواصل مع أطراف خارجية.</p>
        <ul>
          <li>ملفات PST (Outlook): يمكن فتحها في أداة مثل Kernel PST Viewer.</li>
          <li>ملفات EML (رسائل فردية): يمكن قراءتها كنص عادي (تحتوي على الهيدر والمحتوى).</li>
        </ul>
        <div class="code-block">
# استخراج الهيدر من ملف EML
cat email.eml | grep -E "From:|To:|Subject:|Date:"
        </div>
      `
    },
    {
      number: 14,
      title: '[متوسط] تحليل الشبكة (PCAP) لاستخراج الأدلة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: التنقل في حزم الشبكة</h2>
        <p>تحليل ملفات PCAP يكشف عن هجمات شبكية، تحميل ملفات خبيثة، اتصالات C2، وأنشطة غير عادية. الأدوات الأساسية: Wireshark، tcpdump، ngrep.</p>
        <div class="code-block">
# تحليل ملف pcap باستخدام tcpdump للبحث عن زيارات لموقع معين
tcpdump -r capture.pcap -n 'host example.com'

# في Wireshark، استخدام مرشح http.request لفحص طلبات HTTP
# استخراج الملفات المنقولة: File → Export Objects → HTTP
        </div>
      `
    },
    {
      number: 15,
      title: '[متوسط] تحليل الأجهزة المحمولة (أساسيات)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: استخراج الأدلة من الهواتف الذكية</h2>
        <ul>
          <li>تحليل Android: استخدام ADB لاستخراج نسخة احتياطية، ثم تحليلها باستخدام tools مثل Android Forensics.</li>
          <li>تحليل iOS: استخراج نسخة احتياطية من iTunes، واستخدام iLEAPP.</li>
        </ul>
        <div class="code-block">
# استخراج نسخة احتياطية من جهاز Android (يتطلب تمكين تصحيح USB)
adb backup -apk -shared -all -f backup.ab
# تحويل الملف إلى تنسيق قابل للقراءة
dd if=backup.ab bs=1 skip=24 | python -c "import zlib; import sys; sys.stdout.write(zlib.decompress(sys.stdin.read()))" > backup.tar
        </div>
      `
    },
    {
      number: 16,
      title: '[متوسط] توثيق الأدلة وإعداد التقارير الأولية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: من الأدلة إلى التقرير</h2>
        <p>التقرير الجنائي يجب أن يكون واضحاً، محايداً، ومقبولاً من قبل الجهات القضائية. هيكل التقرير:</p>
        <ul>
          <li><strong>مقدمة:</strong> هوية المحلل، طلب التحليل، نطاق التحقيق.</li>
          <li><strong>سلسلة الحفظ:</strong> وثيقة تتبع الأدلة (نسخة منها).</li>
          <li><strong>الملخص:</strong> نتائج عالية المستوى (2-3 فقرات).</li>
          <li><strong>المنهجية:</strong> الأدوات المستخدمة، الخطوات، الأوامر.</li>
          <li><strong>النتائج بالتفصيل:</strong> الأدلة المكتشفة (ملفات، سجلات، اتصالات) مع لقطات شاشة.</li>
          <li><strong>الاستنتاج والتوصيات.</strong></li>
        </ul>
      `
    },
    {
      number: 17,
      title: '[متوسط] أدوات جنائية متخصصة (FTK Imager، X-Ways)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: أدوات احترافية للتحليل</h2>
        <ul>
          <li><strong>FTK Imager:</strong> أداة مجانية لإنشاء الصور وعرضها وتحليلها. تتميز بالسرعة وسهولة الاستخدام.</li>
          <li><strong>X-Ways Forensics:</strong> بديل مدفوع لـ EnCase، يحتوي على ميزات متقدمة (توقيع الملفات، البحث العكسي).</li>
        </ul>
      `
    },
    {
      number: 18,
      title: '[متوسط] مراجعة المستوى الثاني واختبار',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي المعلومات التي يمكن استخراجها من تحليل الذاكرة (Volatility)؟</li>
          <li>أين يخزن ويندوز مفاتيح بدء التشغيل (Startup)؟</li>
          <li>كيف يمكن استخراج تاريخ تصفح Chrome من ملف SQLite؟</li>
          <li>ما الفرق بين ملف PST و EML؟</li>
          <li>ما هو "مرشح" Wireshark المناسب لاستخراج صور من حركة HTTP؟</li>
          <li>ما هي المعلومات الأساسية التي يجب أن يحتوي عليها تقرير جنائي؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> قم بتحميل ملف PCAP من موقع Malware Traffic Analysis (مثل سيناريو هجوم تصيد). حلل الملف باستخدام Wireshark لاستخراج: عنوان IP للمهاجم، الملف الذي تم تحميله، وعنوان البريد الإلكتروني للضحية (إن وُجد). اكتب تقريراً من صفحتين يشرح الخطوات والنتائج.</p>
      `
    },
    // ==================== المستوى الثالث: متقدم (الفصول 19-27) ====================
    {
      number: 19,
      title: '[متقدم] التحليل العكسي للملفات الضارة (Reverse Engineering)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: تفكيك البرامج الخبيثة</h2>
        <p>الهندسة العكسية (Reverse Engineering) تساعد في فهم كيفية عمل المالفير دون تشغيله. أدوات: Ghidra، IDA Pro (مجاني محدود).</p>
        <div class="code-block">
# استخدام Ghidra: إنشاء مشروع جديد، استيراد ملف PE/ELF، تشغيل التحليل التلقائي.
# البحث عن سلسلة (string) معينة
# متابعة دالة main أو WinMain
        </div>
      `
    },
    {
      number: 20,
      title: '[متقدم] تحليل الـ Slack Space و Alternate Data Streams',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: أماكن إخفاء الأدلة</h2>
        <ul>
          <li><strong>Slack Space:</strong> المساحة غير المستخدمة في آخر قطاع (cluster) من الملف. يمكن إخفاء بيانات هنا.</li>
          <li><strong>Alternate Data Streams (ADS):</strong> ميزة في NTFS تسمح بإرفاق تيارات بيانات إضافية بملف (مثال: file.txt:hidden).</li>
        </ul>
        <div class="code-block">
# الكشف عن ADS باستخدام dir /r
dir /r
# استخراج ADS باستخدام تستخدم أداة مثل streams.exe من Sysinternals
streams.exe -s C:\\path\\to\\file
        </div>
      `
    },
    {
      number: 21,
      title: '[متقدم] تحليل الأجهزة المحمولة المتقدم (Android/iOS)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: التعامل مع القيود الحديثة</h2>
        <ul>
          <li>استخراج بيانات من أجهزة Android مع تشفير (Full Disk Encryption) – قد يتطلب استغلال ثغرات أو الحصول على رمز PIN.</li>
          <li>استخراج بيانات من iOS (بدون كسر الحماية) عبر استخراج نسخة احتياطية مشفرة أو استخدام أدوات مثل Cellebrite (مدفوعة).</li>
        </ul>
      `
    },
    {
      number: 22,
      title: '[متقدم] التعامل مع التشفير (البحث عن المفاتيح)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: فك تشفير البيانات المشفرة</h2>
        <p>عند مواجهة أقراص مشفرة (BitLocker، VeraCrypt، FileVault)، المحقق يحتاج إلى العثور على المفاتيح في الذاكرة أو في ملفات النظام.</p>
        <ul>
          <li>تحليل الذاكرة لاستخراج مفاتيح التشفير (Volatility plugin: bitlocker).</li>
          <li>البحث عن ملفات مفاتيح (keyfiles).</li>
          <li>استخدام كلمة مرور المستخدم إذا كانت متوفرة (من خلال الهندسة الاجتماعية أو من سجلات أخرى).</li>
        </ul>
      `
    },
    {
      number: 23,
      title: '[متقدم] تحليل السحابة (Cloud Forensics)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: الأدلة في السماء</h2>
        <p>التحليل الجنائي في السحابة (مثل O365، Google Workspace، AWS) يتطلب الوصول إلى السجلات عبر APIs:</p>
        <ul>
          <li>استخدام AWS CloudTrail لتحليل الأحداث.</li>
          <li>استخدام Google Takeout لاستخراج بيانات المستخدم.</li>
          <li>استخدام أدوات مثل 'o365reports' لجمع سجلات Exchange.</li>
        </ul>
      `
    },
    {
      number: 24,
      title: '[متقدم] إعداد الشهادات القانونية والإدلاء بالشهادة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: كمحقق أمام القاضي</h2>
        <p>في بعض الحالات، قد يُطلب من المحقق الإدلاء بشهادته في المحكمة. المبادئ الأساسية:</p>
        <ul>
          <li>التحدث بوضوح وثقة، فقط عن الحقائق المثبتة.</li>
          <li>شرح المصطلحات التقنية بلغة مفهومة للقاضي وهيئة المحلفين.</li>
          <li>الإقرار بأي أخطاء في المنهجية (إن وجدت) وشرح كيف تم معالجتها.</li>
          <li>إحضار وثائق سلسلة الحفظ والأدلة الأصلية.</li>
        </ul>
      `
    },
    {
      number: 25,
      title: '[متقدم] أخلاقيات المهنة والخصوصية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: الحدود الأخلاقية والقانونية</h2>
        <p>المحقق الرقمي قد يطلع على بيانات حساسة جداً (رسائل خاصة، صور، ملفات مالية). يجب:</p>
        <ul>
          <li>الالتزام بأمر التفتيش (Warrant) أو الاتفاقية بدقة.</li>
          <li>عدم الكشف عن معلومات غير متعلقة بالقضية.</li>
          <li>الحفاظ على خصوصية الأفراد غير المتورطين.</li>
        </ul>
      `
    },
    {
      number: 26,
      title: '[متقدم] خطة التعلم لمدة 12 شهراً لتصبح محلل جنائي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من المبتدئ إلى الخبير</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> إتقان أساسيات ويندوز ولينكس والشبكات (Security+).</li>
          <li><strong>الشهر 3-4:</strong> دراسة منهج CHFI (Computer Hacking Forensic Investigator) من EC-Council.</li>
          <li><strong>الشهر 5-6:</strong> تدريب عملي على منصات مثل Blue Team Labs Online (وحدات Forensics).</li>
          <li><strong>الشهر 7-9:</strong> بناء مختبر جنائي: تثبيت Autopsy، Volatility، Wireshark، وممارسة على أقراص صورية من إنترنت (مثل Digital Corpora).</li>
          <li><strong>الشهر 10-12:</strong> الحصول على شهادة GCFE (GIAC Certified Forensic Examiner) أو GCFA (المتقدمة).</li>
        </ul>
      `
    },
    {
      number: 27,
      title: '[متقدم] المشروع النهائي الشامل',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: تحقيق كامل في حادثة اختراق</h2>
        <p><strong>السيناريو:</strong> شركة اشتكت من اختراق بيانات. تم تزويدك بـ:</p>
        <ul>
          <li>صورة قرص (image.dd) لجهاز الموظف المشتبه به.</li>
          <li>ملف ذاكرة (memdump.mem) تم التقاطه أثناء الاختراق.</li>
          <li>ملف PCAP لحركة المرور خلال فترة الاختراق.</li>
          <li>سجلات ويندوز (Security.evtx) و (System.evtx).</li>
        </ul>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>استخراج جميع الأدلة من الصورة: الملفات المحذوفة، تاريخ المتصفح، مفاتيح التسجيل التي تم تغييرها.</li>
          <li>تحليل الذاكرة للعثور على العمليات الخبيثة والاتصالات الشبكية.</li>
          <li>تحليل PCAP لتحديد عنوان IP الخاص بـ C2.</li>
          <li>تجميع كل الأدلة في تقرير كامل (10-15 صفحة) مع سلسلة الحفظ، المنهجية، النتائج، والتوصيات.</li>
          <li>تقديم التقرير بصيغة PDF جاهز للتقديم للمديرين أو الجهات القضائية.</li>
        </ol>
        <p>هذا المشروع يحاكي تحقيقاً حقيقياً ويختبر جميع المهارات التي اكتسبتها في هذا الكورس.</p>
      `
    },
  ],
};
