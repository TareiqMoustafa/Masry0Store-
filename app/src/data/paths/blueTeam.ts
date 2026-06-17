export const blueTeamData = {
  id: 'blue-team',
  title: 'Blue Team',
  emoji: '🔵',
  color: 'blue',
  description: 'منهج متكامل من 3 مستويات - الدفاع والمراقبة والاستجابة للحوادث',
  level: 'مبتدئ / متوسط / متقدم',
  chaptersCount: 27,
  pages: '~190 صفحة',
  icon: 'fa-shield-alt',
  chapters: [
    // ==================== المستوى الأول: مبتدئ (الفصول 1-9) ====================
    {
      number: 1,
      title: '[مبتدئ] ما هو Blue Team؟ مقدمة في الدفاع السيبراني',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: دور المدافع في الأمن السيبراني</h2>
        <p><strong>Blue Team:</strong> هو فريق الدفاع المسؤول عن حماية أنظمة وشبكات وبيانات المؤسسة من الهجمات الإلكترونية. تشمل مسؤولياته المراقبة المستمرة، تحليل التنبيهات، إدارة الثغرات، والاستجابة للحوادث.</p>
        <p>يختلف دور Blue Team عن SOC Analyst (محلل مركز العمليات الأمنية) في أن الأول أوسع ويشمل هندسة الدفاع، بينما الثاني يركز على المراقبة والتحليل.</p>
        <div class="fig-box">
          <i class="fas fa-shield-alt text-neon text-4xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مكونات فريق Blue Team – المراقبة، الدفاع، الاستجابة، التحصين
        </div>
        <div class="note-box">
          📌 <strong>معلومة:</strong> فرق Blue Team تعمل غالباً بنظام الورديات (24/7) لضمان استمرارية الحماية.
        </div>
      `
    },
    {
      number: 2,
      title: '[مبتدئ] تجهيز بيئة عمل Blue Team',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: أدوات المدافع الأولى</h2>
        <p>لبدء ممارسة الدفاع، ستحتاج إلى:</p>
        <ul>
          <li><strong>جهاز افتراضي (VirtualBox أو VMware)</strong> – لتشغيل أنظمة الاختبار بأمان.</li>
          <li><strong>توزيعة Linux (Ubuntu 22.04 أو 24.04)</strong> – ستكون بيئة العمل الأساسية للتحليل.</li>
          <li><strong>Windows 10/11 (نسخة تجريبية)</strong> – لفهم بيئة الأنظمة المستهدفة التي ستدافع عنها.</li>
          <li><strong>أدوات المراقبة الأساسية:</strong> Wireshark، tcpdump، Sysmon، PowerShell.</li>
        </ul>
        <div class="code-block">
# تحديث النظام وتثبيت الأدوات الأساسية على Ubuntu
sudo apt update && sudo apt upgrade -y
sudo apt install wireshark tcpdump syslog-ng clamav openssh-server -y
        </div>
        <div class="note-box">
          📌 <strong>نشاط 1:</strong> قم بتثبيت Ubuntu على جهاز افتراضي، وشغّل الأمر <code>sudo apt update</code>. دوّن النتيجة.
        </div>
      `
    },
    {
      number: 3,
      title: '[مبتدئ] أساسيات الشبكات للمدافع',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: كيف تتحرك البيانات في الشبكة؟</h2>
        <p>لفهم الهجمات وكيفية اكتشافها، يجب فهم أساسيات الشبكات.</p>
        <ul>
          <li><strong>نموذج OSI:</strong> الطبقات السبع – من الطبقة المادية (1) إلى طبقة التطبيقات (7). معظم الهجمات تستهدف الطبقات 3 (الشبكة)، 4 (النقل)، 7 (التطبيقات).</li>
          <li><strong>بروتوكولات مهمة:</strong> TCP (اتصال موثوق)، UDP (اتصال سريع)، ICMP (التحكم والخطأ).</li>
          <li><strong>المنافذ الشائعة:</strong> 80 (HTTP)، 443 (HTTPS)، 22 (SSH)، 53 (DNS)، 3389 (RDP).</li>
        </ul>
        <div class="code-block">
# أوامر لتحليل الشبكة من منظور دفاعي
netstat -tulpn           # عرض المنافذ المفتوحة والخدمات
ss -tulpn               # بديل حديث لـ netstat
tcpdump -i eth0 -c 100  # التقاط أول 100 حزمة على واجهة eth0
        </div>
      `
    },
    {
      number: 4,
      title: '[مبتدئ] أساسيات لينكس للمدافع',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: السيطرة على نظام التشغيل</h2>
        <p>المدافع يحتاج إلى معرفة جيدة بلينكس، لأن معظم أدوات المراقبة والتحليل تعمل عليه.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أوامر أساسية:</h3>
        <ul>
          <li><code>ls -la</code> – عرض الملفات والمجلدات مع الصلاحيات.</li>
          <li><code>ps aux</code> – عرض العمليات الجارية.</li>
          <li><code>grep</code> – البحث داخل النصوص.</li>
          <li><code>tail -f /var/log/syslog</code> – متابعة السجلات في الوقت الحقيقي.</li>
          <li><code>sudo</code> – تنفيذ أوامر بصلاحيات مرتفعة.</li>
        </ul>
        <div class="code-block">
# أمثلة عملية للمدافع
sudo systemctl status ssh      # التحقق من حالة خدمة SSH
sudo ufw enable                # تشغيل جدار الحماية البسيط
sudo ufw allow 22/tcp          # السماح بـ SSH فقط
        </div>
      `
    },
    {
      number: 5,
      title: '[مبتدئ] مقدمة في تحليل السجلات (Logs)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: عيون المراقبة – السجلات</h2>
        <p>السجلات (Logs) هي المصدر الأساسي للمعلومات عند التحقيق في حادثة أمنية.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">سجلات مهمة في لينكس:</h3>
        <ul>
          <li><code>/var/log/auth.log</code> – محاولات تسجيل الدخول، استخدام sudo.</li>
          <li><code>/var/log/syslog</code> – أحداث النظام العامة.</li>
          <li><code>/var/log/apache2/access.log</code> – طلبات خادم الويب.</li>
        </ul>
        <div class="code-block">
# تحليل سجلات المصادقة (البحث عن محاولات فاشلة)
sudo grep "Failed password" /var/log/auth.log

# متابعة سجل النظام في الوقت الحقيقي
sudo tail -f /var/log/syslog
        </div>
        <div class="note-box">
          📌 <strong>نشاط 5:</strong> حاول تسجيل الدخول إلى جهاز Ubuntu بكلمة مرور خاطئة عدة مرات، ثم استخدم <code>grep</code> لاستخراج المحاولات الفاشلة من سجل المصادقة.
        </div>
      `
    },
    {
      number: 6,
      title: '[مبتدئ] جدران الحماية الأساسية (ufw و iptables)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: منع الدخول غير المصرح به</h2>
        <p>جدار الحماية (Firewall) هو خط الدفاع الأول الذي يصفف حركة المرور بناءً على قواعد (السماح/المنع).</p>
        <div class="code-block">
# استخدام ufw (Uncomplicated Firewall) - بسيط للمبتدئين
sudo ufw status verbose
sudo ufw default deny incoming    # منع كل الاتصالات الواردة افتراضياً
sudo ufw default allow outgoing   # السماح بالاتصالات الصادرة
sudo ufw allow 22/tcp             # السماح بـ SSH
sudo ufw enable

# استخدام iptables (متقدم)
sudo iptables -L -n -v            # عرض القواعد الحالية
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT   # السماح بـ SSH
sudo iptables -A INPUT -j DROP    # منع كل شيء آخر
        </div>
      `
    },
    {
      number: 7,
      title: '[مبتدئ] تحديث الأنظمة وإدارة التصحيحات (Patch Management)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: سد الثغرات قبل استغلالها</h2>
        <p>معظم الاختراقات تستغل ثغرات معروفة تم إصدار تصحيحات لها. لذلك، تطبيق التصحيحات بانتظام هو أحد أهم مهام Blue Team.</p>
        <div class="code-block">
# تحديث لينكس
sudo apt update && sudo apt upgrade -y

# تحديث ويندوز (عبر PowerShell)
Get-WindowsUpdate -Install -AcceptAll

# أتمتة التحديثات (عبر cron job في لينكس)
sudo crontab -e
# أضف السطر التالي لتشغيل التحديث كل يوم أحد الساعة 2 صباحاً
0 2 * * 0 sudo apt update && sudo apt upgrade -y
        </div>
      `
    },
    {
      number: 8,
      title: '[مبتدئ] حماية كلمات المرور والمصادقة متعددة العوامل (MFA)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: أقوى خط دفاع هو الهوية</h2>
        <p>إدارة الهوية والوصول (IAM) هي جوهر الأمن.</p>
        <ul>
          <li>استخدم كلمات مرور طويلة ومعقدة (12 حرفاً على الأقل).</li>
          <li>فعّل المصادقة متعددة العوامل (MFA) على جميع الحسابات الهامة.</li>
          <li>استخدم مدير كلمات مرور (مثل Bitwarden) لتخزينها بشكل آمن.</li>
          <li>طبق سياسة الحد من محاولات تسجيل الدخول (Account Lockout Policy).</li>
        </ul>
        <div class="code-block">
# مثال على سياسة كلمات المرور في Linux (تعديل /etc/login.defs)
PASS_MAX_DAYS 90
PASS_MIN_DAYS 7
PASS_WARN_AGE 14
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
          <li>ما هي المسؤوليات الأساسية لفريق Blue Team؟</li>
          <li>كيف يمكنك عرض المنافذ المفتوحة على جهاز لينكس؟</li>
          <li>ما الفرق بين <code>ufw</code> و <code>iptables</code>؟</li>
          <li>كيف تبحث عن محاولات تسجيل دخول فاشلة في سجل auth.log؟</li>
          <li>لماذا تعتبر إدارة التصحيحات مهمة؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتثبيت Ubuntu على جهاز افتراضي، وشغّل جدار الحماية ufw، واسمح فقط بـ SSH. ثم حاول الاتصال بالجهاز عبر SSH من جهاز آخر (أو من نفس الجهاز باستخدام localhost). دوّن الخطوات.</p>
      `
    },
    // ==================== المستوى الثاني: متوسط (الفصول 10-18) ====================
    {
      number: 10,
      title: '[متوسط] تحليل سجلات ويندوز باستخدام PowerShell و Event Viewer',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: التحقيق في سجلات ويندوز</h2>
        <p>تعتبر سجلات ويندوز (Windows Event Logs) من أغنى مصادر المعلومات للمحلل الأمني.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">الأحداث الرئيسية (Event IDs) التي يجب مراقبتها:</h3>
        <ul>
          <li><strong>4624:</strong> تسجيل دخول ناجح.</li>
          <li><strong>4625:</strong> فشل تسجيل الدخول.</li>
          <li><strong>4688:</strong> إنشاء عملية جديدة (يمكن أن تكشف عن تشغيل برامج ضارة).</li>
          <li><strong>7045:</strong> تثبيت خدمة جديدة.</li>
          <li><strong>1102:</strong> مسح سجل الأمان (قد يشير إلى محاولة إزالة الأدلة).</li>
        </ul>
        <div class="code-block">
# أوامر PowerShell لتحليل السجلات
# عرض آخر 10 أحداث فشل تسجيل دخول
Get-EventLog -LogName Security -EntryType FailureAudit -Newest 10 | Format-Table -AutoSize

# استخدام Get-WinEvent للبحث عن Event ID 4688 (إنشاء عمليات)
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4688} | Select-Object TimeCreated, Message

# البحث عن عمليات تم تشغيلها من مجلد Temp
Get-WinEvent -FilterXPath "*[System[EventID=4688]]" | Where-Object {$_.Message -like "*temp*"}
        </div>
      `
    },
    {
      number: 11,
      title: '[متوسط] مقدمة في SIEM – ELK Stack (Elasticsearch, Logstash, Kibana)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: تجميع وتحليل السجلات مركزياً</h2>
        <p>SIEM (Security Information and Event Management) يجمع السجلات من مصادر متعددة ويكشف الأنماط الشاذة. سنستخدم ELK Stack (مفتوح المصدر).</p>
        <div class="code-block">
# تثبيت ELK Stack عبر Docker (أسهل طريقة)
curl -fsSL https://get.docker.com | sh
sudo docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:8.8.0
sudo docker run -d --name kibana -p 5601:5601 --link elasticsearch:elasticsearch kibana:8.8.0

# إرسال سجلات من جهاز لينكس إلى Logstash (بحاجة تكوين إضافي)
# يمكن أيضاً استخدام Wazuh (بديل متكامل مبني على ELK)
        </div>
      `
    },
    {
      number: 12,
      title: '[متوسط] تحليل الحزم باستخدام Wireshark و tcpdump',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: الغوص في حركة الشبكة</h2>
        <p>تحليل الحزم يكشف الهجمات التي قد لا تترك أثراً في السجلات.</p>
        <div class="code-block">
# التقاط الحزم باستخدام tcpdump وحفظها في ملف
sudo tcpdump -i eth0 -s 1500 -w capture.pcap

# فتح الملف في Wireshark
wireshark capture.pcap

# مرشحات Wireshark مفيدة للمدافع:
# http.request - عرض طلبات HTTP
# dns.qry.name contains "malware" - البحث عن استعلامات DNS مشبوهة
# tcp.flags.syn == 1 and tcp.flags.ack == 0 - محاولات إنشاء اتصال (قد تشير إلى هجوم)
# ip.src == 192.168.1.100 - تصفية حركة من عنوان IP محدد
        </div>
      `
    },
    {
      number: 13,
      title: '[متوسط] أنظمة كشف ومنع التسلل (IDS/IPS) – Snort و Suricata',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: كشف الهجمات في الوقت الفعلي</h2>
        <p>IDS (نظام كشف التسلل) يراقب حركة المرور ويصدر تنبيهاً عند اكتشاف هجوم. IPS (نظام منع التسلل) يمكنه منع الهجوم تلقائياً.</p>
        <div class="code-block">
# تثبيت Snort على Ubuntu
sudo apt install snort -y

# تكوين Snort (اختر واجهة الشبكة المناسبة)
sudo dpkg-reconfigure snort

# تشغيل Snort في وضع التنبيه على الطرفية
sudo snort -A console -q -c /etc/snort/snort.conf -i eth0

# تجربة: قم بمسح الجهاز باستخدام Nmap من جهاز آخر وسترى تنبيهات Snort
        </div>
        <p>Suricata هو بديل حديث يدعم معالجة GPU وبروتوكولات أكثر.</p>
      `
    },
    {
      number: 14,
      title: '[متوسط] إدارة الثغرات باستخدام OpenVAS و Nessus',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: البحث عن نقاط الضعف قبل المهاجم</h2>
        <p>إدارة الثغرات (Vulnerability Management) هي عملية دورية لاكتشاف وتقييم وعلاج الثغرات الأمنية.</p>
        <div class="code-block">
# تثبيت OpenVAS (Greenbone Vulnerability Management)
sudo apt install gvm -y
sudo gvm-setup
sudo gvm-check-setup
sudo gvm-start
# بعد التثبيت، افتح المتصفح على https://127.0.0.1:9392
# تسجيل الدخول (admin/admin) ثم قم بتغيير كلمة المرور.

# إجراء مسح: Targets → New Target → أدخل عنوان IP الهدف.
# ثم Scans → New Scan → اختر الهدف وابدأ المسح.
        </div>
      `
    },
    {
      number: 15,
      title: '[متوسط] مراقبة النقاط الطرفية (EDR) باستخدام Sysmon و Osquery',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: اكتشاف الأنشطة الضارة على الأجهزة</h2>
        <p>EDR (Endpoint Detection and Response) يراقب السلوكيات على الأجهزة الفردية. أدوات مجانية مثل Sysmon و Osquery تضيف رؤية عميقة.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Sysmon (Windows):</h3>
        <div class="code-block">
# تحميل وتثبيت Sysmon (مع ملف تكوين من SwiftOnSecurity)
sysmon64.exe -accepteula -i sysmonconfig.xml

# عرض أحداث Sysmon في Event Viewer (Applications and Services Logs/Microsoft/Windows/Sysmon/Operational)
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Osquery (لينكس وويندوز):</h3>
        <div class="code-block">
# تثبيت Osquery على Ubuntu
sudo apt install osquery -y
sudo osqueryi   # الدخول إلى واجهة SQL

# استعلامات مفيدة:
SELECT pid, name, path FROM processes;
SELECT * FROM file WHERE path LIKE '/tmp/%' AND filename LIKE '%.sh';
SELECT * FROM listening_ports;
        </div>
      `
    },
    {
      number: 16,
      title: '[متوسط] الاستجابة للحوادث (Incident Response) – مراحل PICERL',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: ماذا تفعل عند حدوث اختراق؟</h2>
        <p>الاستجابة للحوادث هي عملية منظمة للتعامل مع الاختراقات. تعتمد على أطر مثل <strong>NIST SP 800-61</strong> أو <strong>SANS PICERL</strong>.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مراحل PICERL:</h3>
        <ol>
          <li><strong>التحضير (Preparation):</strong> تجهيز الأدوات والفرق والخطط.</li>
          <li><strong>التحديد (Identification):</strong> اكتشاف الاختراق وجمع الأدلة الأولية.</li>
          <li><strong>الاحتواء (Containment):</strong> عزل الأنظمة المتأثرة لمنع انتشار الهجوم (احتواء قصير وطويل الأمد).</li>
          <li><strong>الاستئصال (Eradication):</strong> إزالة السبب الجذري للاختراق (حذف الملفات الضارة، إغلاق الثغرات).</li>
          <li><strong>الاسترداد (Recovery):</strong> استعادة الأنظمة والبيانات من النسخ الاحتياطية.</li>
          <li><strong>الدروس المستفادة (Lessons Learned):</strong> توثيق الحادثة وتحسين الإجراءات المستقبلية.</li>
        </ol>
        <div class="note-box">
          📌 <strong>نشاط 16:</strong> قم بإنشاء خطة استجابة للحوادث من صفحة واحدة لمؤسسة صغيرة (5-10 موظفين). حدد فريق الاستجابة، قنوات الاتصال، وإجراءات الاحتواء الأولى.
        </div>
      `
    },
    {
      number: 17,
      title: '[متوسط] الصيد الرقمي (Threat Hunting) – البحث عن التهديدات المخفية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: استباق الهجمات</h2>
        <p>الصيد الرقمي هو عملية بحث استباقي عن التهديدات التي قد تكون تجاوزت أدوات الأمن التقليدية.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">منهجية الصيد:</h3>
        <ol>
          <li><strong>الفرضية:</strong> بدءاً من TTP معين (مثل استخدام PowerShell للتحميل من الإنترنت).</li>
          <li><strong>البحث:</strong> كتابة استعلام في SIEM للبحث عن أنماط تطابق الفرضية.</li>
          <li><strong>التحليل:</strong> فحص النتائج يدوياً لتحديد الأنشطة الضارة المحتملة.</li>
          <li><strong>الإفادة:</strong> مشاركة النتائج مع الفريق وتحديث القواعد الأمنية.</li>
        </ol>
        <div class="code-block">
# مثال استعلام في Kibana (ELK) للبحث عن PowerShell تنزيل ملفات
winlogbeat* AND process.name:powershell.exe AND process.command_line:(*WebClient* OR *DownloadString* OR *Invoke-Expression*)
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
          <li>ما هي Event IDs المهمة في سجلات أمان ويندوز؟</li>
          <li>اشرح مكونات ELK Stack بإيجاز.</li>
          <li>كيف يمكنك التقاط الحزم باستخدام tcpdump وتحليلها في Wireshark؟</li>
          <li>ما الفرق بين IDS و IPS؟</li>
          <li>اذكر خطوات تثبيت OpenVAS وبدء مسح بسيط.</li>
          <li>ما هو دور Sysmon في مراقبة النقاط الطرفية؟</li>
          <li>اشرح مراحل الاستجابة للحوادث وفق نموذج PICERL.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> قم بتثبيت Snort IDS على أحد أجهزة Ubuntu في شبكتك المنزلية. شغّل فحص Nmap من جهاز آخر، وسجل التنبيهات التي يولدها Snort. ثم التقط حزمة باستخدام tcpdump وافتحها في Wireshark للتحقق من طلبات الفحص. دوّن ملاحظاتك.</p>
      `
    },
    // ==================== المستوى الثالث: متقدم (الفصول 19-27) ====================
    {
      number: 19,
      title: '[متقدم] أتمتة تحليل السجلات باستخدام Python و ELK',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: كتابة أدوات تحليل مخصصة</h2>
        <p>الأتمتة تقلل من زمن الاستجابة وتزيد من كفاءة المحلل.</p>
        <div class="code-block">
# سكريبت بايثون لقراءة سجلات Linux والبحث عن محاولات تسجيل دخول فاشلة
import re

with open('/var/log/auth.log', 'r') as f:
    for line in f:
        if 'Failed password' in line:
            ip = re.search(r'from (\\d+\\.\\d+\\.\\d+\\.\\d+)', line)
            if ip:
                print(f'Failed login attempt from {ip.group(1)}')

# استخدام API الخاص بـ Elasticsearch لسحب التنبيهات
from elasticsearch import Elasticsearch
es = Elasticsearch(['http://localhost:9200'])
res = es.search(index='winlogbeat-*', body={'query': {'match': {'event_id': 4625}}})
for hit in res['hits']['hits']:
    print(hit['_source']['message'])
        </div>
      `
    },
    {
      number: 20,
      title: '[متقدم] تكوين وتحسين Snort/Suricata لقواعد مخصصة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: كتابة قواعد كشف الهجمات بنفسك</h2>
        <p>قواعد IDS/IPS تحدد الأنماط التي يجب تنبيهها. يمكنك كتابة قواعد مخصصة لتناسب بيئتك.</p>
        <div class="code-block">
# مثال على قاعدة Snort للكشف عن فحص المنافذ (port scan)
alert tcp $EXTERNAL_NET any -> $HOME_NET 1:1024 (msg:"PORT SCAN DETECTED"; flags:S; threshold: type both, track by_src, count 5, seconds 10; sid:1000001; rev:1;)

# قاعدة للكشف عن طلب SQL Injection (بسيط)
alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS (msg:"SQL Injection Attempt"; content:"' OR '1'='1"; http_uri; sid:1000002; rev:1;)
        </div>
        <p>بعد كتابة القاعدة، ضعها في ملف <code>/etc/snort/rules/local.rules</code> وأعد تشغيل Snort.</p>
      `
    },
    {
      number: 21,
      title: '[متقدم] الأمن السحابي – مراقبة AWS/Azure/GCP',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: حماية البيئات السحابية</h2>
        <p>مع التحول إلى السحابة، يجب فهم نموذج المسؤولية المشتركة (Shared Responsibility Model).</p>
        <ul>
          <li><strong>AWS CloudTrail:</strong> يسجل جميع استدعاءات API في حساب AWS.</li>
          <li><strong>Azure Monitor:</strong> يجمع السجلات من موارد Azure.</li>
          <li><strong>Google Cloud Logging:</strong> مشابه.</li>
        </ul>
        <div class="code-block">
# مثال: استخدام AWS CLI لتحليل سجلات CloudTrail والبحث عن تسجيلات دخول غير عادية
aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin

# استخدام Prowler (أداة مفتوحة المصدر) للكشف عن التكوينات الخاطئة في AWS
git clone https://github.com/prowler-cloud/prowler
cd prowler
./prowler -M csv
        </div>
      `
    },
    {
      number: 22,
      title: '[متقدم] تطبيق مبادئ Zero Trust في البنية التحتية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: لا تثق أبداً، تحقق دائماً</h2>
        <p>مبدأ Zero Trust يفترض أن الشبكة قد تكون مخترقة بالفعل، لذلك يجب التحقق من كل طلب وصول بغض النظر عن موقعه.</p>
        <ul>
          <li><strong>الهوية (Identity):</strong> استخدام MFA قوية وإدارة الوصول الدقيقة (Least Privilege).</li>
          <li><strong>الأجهزة (Devices):</strong> التحقق من حالة الجهاز قبل السماح بالوصول (Device Compliance).</li>
          <li><strong>الشبكة (Network):</strong> تقسيم الشبكة إلى قطاعات صغيرة (Micro-segmentation) واستخدام التشفير.</li>
          <li><strong>التطبيقات والبيانات (Apps & Data):</strong> التحكم في الوصول حتى داخل التطبيق نفسه.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-lock text-neon text-2xl mb-2 block"></i>
          الشكل 22.1: مبادئ Zero Trust – لا تثق أبداً، تحقق دائماً
        </div>
      `
    },
    {
      number: 23,
      title: '[متقدم] أمن البنية التحتية للـ Active Directory',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: حماية العمود الفقري للشركات</h2>
        <p>Active Directory (AD) هو قلب معظم شبكات الشركات. اختراقه يعني اختراق كل شيء. لذا يجب حمايته بشدة.</p>
        <ul>
          <li><strong>تطبيق التصحيحات بانتظام:</strong> خاصة الثغرات الحرجة (مثل ZeroLogon).</li>
          <li><strong>مراقبة الأحداث الحرجة:</strong> Event ID 4768 (طلب TGT)، 4776 (التحقق من كلمة المرور)، 4662 (تغيير الصلاحيات).</li>
          <li><strong>استخدام حسابات خدمة مدارة (gMSA).</strong></li>
          <li><strong>تنفيذ مبدأ Least Privilege على جميع المستخدمين والخدمات.</strong></li>
        </ul>
        <div class="code-block">
# PowerShell: البحث عن حسابات لديها صلاحيات مرتفعة غير ضرورية
Get-ADUser -Filter {AdminCount -eq 1} | Select-Object Name, Enabled

# البحث عن أحداث تغيير كلمة المرور (Event ID 4723) في سجل الأمان
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4723}
        </div>
      `
    },
    {
      number: 24,
      title: '[متقدم] تحليل الذاكرة (Memory Forensics) للكشف عن البرامج الضارة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: التحقيق في ذاكرة الوصول العشوائي</h2>
        <p>تحليل الذاكرة يكشف العمليات المخفية والاتصالات المشبوهة التي قد لا تظهر في القرص الصلب.</p>
        <div class="code-block">
# تثبيت Volatility
git clone https://github.com/volatilityfoundation/volatility.git
cd volatility
python setup.py install

# جمع ملف ذاكرة من جهاز ويندوز (باستخدام WinPMem)
winpmem.exe -o memdump.raw

# تحليل الملف
volatility -f memdump.raw imageinfo
volatility -f memdump.raw --profile=Win10x64 pslist   # عرض العمليات
volatility -f memdump.raw --profile=Win10x64 netscan  # عرض الاتصالات الشبكية
volatility -f memdump.raw --profile=Win10x64 malfind  # البحث عن عمليات محقونة
        </div>
      `
    },
    {
      number: 25,
      title: '[متقدم] أتمتة الاستجابة (SOAR) باستخدام TheHive و Shuffle',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: الاستجابة التلقائية للحوادث</h2>
        <p>SOAR (Security Orchestration, Automation and Response) هي منصات تعمل على أتمتة سير عمل الاستجابة.</p>
        <div class="code-block">
# تثبيت TheHive (مفتوح المصدر) عبر Docker
curl -sSL https://raw.githubusercontent.com/StrangeBeeCorp/docker/main/install-thehive.sh | bash

# بعد التثبيت، افتح المتصفح على http://localhost:9000
# أنشئ منظمة وقم بإضافة تنبيه يدوي أو من SIEM.

# استخدام Shuffle (بديل سحابي) لإنشاء playbooks بسيطة دون برمجة.
        </div>
        <p>مثال على playbook: عند استقبال تنبيه من Snort، يقوم Shuffle بإنشاء تذكرة في TheHive، ثم يستدعي VirusTotal API لفحص IP المصدر، ويرسل البريد لفريق الأمن.</p>
      `
    },
    {
      number: 26,
      title: '[متقدم] خطة التعلم لمدة 12 شهراً لتصبح Blue Team Specialist',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من الصفر إلى محلل دفاعي</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> شهادة CompTIA Network+ و Security+ (أساسيات).</li>
          <li><strong>الشهر 3-4:</strong> دراسة منصة Blue Team Labs Online (تمارين تحليل سجلات و pcap).</li>
          <li><strong>الشهر 5-6:</strong> الحصول على شهادة Blue Team Level 1 (BTL1) – عملية بالكامل.</li>
          <li><strong>الشهر 7-9:</strong> دراسة دورة SEC450 من SANS (SOC Analyst) أو CySA+ (CompTIA).</li>
          <li><strong>الشهر 10-12:</strong> بناء مختبر SOC منزلي (ELK + Wazuh)، وأتمتة جزء من المهام باستخدام Python و TheHive.</li>
        </ul>
        <div class="note-box">
          🎯 <strong>هدف نهائي:</strong> بعد 12 شهراً، يمكنك التقدم لوظائف "Security Analyst" أو "SOC Analyst" أو "Blue Team Specialist".
        </div>
      `
    },
    {
      number: 27,
      title: '[متقدم] المشروع النهائي الشامل',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: بناء مركز عمليات أمني (SOC) مصغر</h2>
        <p><strong>السيناريو:</strong> أنت مسؤول عن تأمين شبكة صغيرة تحتوي على 3 أجهزة (Ubuntu، Windows 10، خادم ويب Apache).</p>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>تثبيت ELK Stack (أو Wazuh) على جهاز منفصل لتجميع السجلات من جميع الأجهزة.</li>
          <li>تثبيت Snort IDS على جهاز Ubuntu وجمع تنبيهاته أيضاً.</li>
          <li>إنشاء لوحة تحكم (Dashboard) في Kibana تعرض: عدد محاولات تسجيل الدخول الفاشلة، المناطق الجغرافية للعناوين المهاجمة، وأفضل الأحداث الأمنية.</li>
          <li>محاكاة هجوم بسيط (مثل فحص Nmap أو محاولة تسجيل دخول بـ SSH بكلمة مرور خاطئة) وتأكيد ظهور التنبيهات في لوحة التحكم.</li>
          <li>كتابة تقرير (3-5 صفحات) يوضح هيكل المختبر، الأدوات المستخدمة، وكيفية تحسين الأمن بناءً على النتائج.</li>
        </ol>
        <p>بعد إتمام هذا المشروع، ستكون قد طبقت عملياً معظم مفاهيم الدفاع السيبراني التي تعلمتها.</p>
      `
    },
  ],
};
