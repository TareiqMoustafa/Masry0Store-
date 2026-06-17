export const socData = {
  id: 'soc',
  title: 'SOC Analyst',
  emoji: '🟡',
  color: 'yellow',
  description: 'منهج متكامل من 3 مستويات - محلل مركز العمليات الأمنية',
  level: 'مبتدئ / متوسط / متقدم',
  chaptersCount: 27,
  pages: '~190 صفحة',
  icon: 'fa-eye',
  chapters: [
    // ==================== المستوى الأول: مبتدئ (الفصول 1-9) ====================
    {
      number: 1,
      title: '[مبتدئ] من هو محلل SOC؟ المهام والمسؤوليات',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: دور محلل SOC في المنظومة الأمنية</h2>
        <p>مركز العمليات الأمنية (SOC) هو الوحدة المسؤولة عن مراقبة وتحليل والاستجابة للتهديدات الأمنية على مدار الساعة. محلل SOC هو الشخص الذي يعمل داخل هذا المركز.</p>
        <p><strong>المسؤوليات الأساسية:</strong></p>
        <ul>
          <li>مراقبة لوحات SIEM وتحليل التنبيهات.</li>
          <li>التحقق من صحة الاختراقات (Triage) وتصنيفها (True Positive / False Positive).</li>
          <li>إثراء التنبيهات بمعلومات إضافية (مثل VirusTotal، AbuseIPDB).</li>
          <li>التصعيد (Escalation) للمستوى الثاني أو فريق الاستجابة للحوادث.</li>
          <li>إعداد تقارير دورية (يومية/أسبوعية/شهرية).</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-chart-line text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مسار التنبيه في SOC – من المصدر إلى الإغلاق أو التصعيد
        </div>
        <div class="note-box">
          📌 <strong>معلومة:</strong> غالباً ما تنقسم أدوار SOC إلى مستويات: Tier 1 (الفرز)، Tier 2 (التحقيق المتقدم)، Tier 3 (الصيد الرقمي والاستجابة).
        </div>
      `
    },
    {
      number: 2,
      title: '[مبتدئ] تجهيز بيئة عمل SOC محاكية (SIEM Open Source)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: بناء مختبرك الخاص لتحليل السجلات</h2>
        <p>للتطبيق العملي، سنستخدم <strong>Wazuh</strong> (منصة SIEM مفتوحة المصدر وسهلة التثبيت) أو <strong>ELK Stack</strong>.</p>
        <div class="code-block">
# تثبيت Wazuh عبر Docker (الطريقة الأسهل)
curl -sO https://packages.wazuh.com/4.7/docker/wazuh-docker.sh && bash wazuh-docker.sh
cd wazuh-docker
docker-compose -f generate-indexer-cluster.yml up -d

# بعد دقيقة، افتح المتصفح على https://localhost:443
# اسم المستخدم: admin، كلمة المرور موجودة في ملف wazuh-passwords.txt

# تثبيت وكيل Wazuh على جهاز Windows أو Linux لجمع السجلات
# (اتبع التعليمات من واجهة Wazuh → Agents → Add agent)
        </div>
        <div class="note-box">
          📌 <strong>نشاط 2:</strong> قم بتثبيت Wazuh على جهاز افتراضي أو على جهازك (معزول). أضف جهازاً واحداً (مثلاً Windows 10) كوكيل. تأكد من ظهور السجلات في لوحة التحكم.
        </div>
      `
    },
    {
      number: 3,
      title: '[مبتدئ] أساسيات الشبكات والبروتوكولات للمحلل',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: لغة حركة المرور</h2>
        <p>لفهم التنبيهات وتحليل الهجمات، يجب إتقان أساسيات الشبكات:</p>
        <ul>
          <li>نموذج OSI والطبقات المرتبطة بالهجمات (الطبقات 3،4،7).</li>
          <li>بروتوكولات TCP/IP، UDP، ICMP.</li>
          <li>المنافذ القياسية والخدمات المرتبطة (21،22،25،53،80،443،445،3389).</li>
          <li>DNS، HTTP، HTTPS، SMTP.</li>
        </ul>
        <div class="code-block">
# أوامر مفيدة لتحليل الشبكة للمحلل
netstat -an | findstr "ESTABLISHED"   # ويندوز
ss -tulpn                             # لينكس
nslookup google.com
        </div>
      `
    },
    {
      number: 4,
      title: '[مبتدئ] فهم السجلات الأساسية في ويندوز ولينكس',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: عيون المحلل – السجلات (Logs)</h2>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">سجلات ويندوز الرئيسية:</h3>
        <ul>
          <li><strong>Security:</strong> أحداث المصادقة، تغييرات الصلاحيات، إنشاء العمليات.</li>
          <li><strong>System:</strong> أحداث النظام، توقف الخدمات.</li>
          <li><strong>Application:</strong> أحداث التطبيقات المثبتة.</li>
          <li><strong>PowerShell:</strong> سجلات أوامر PowerShell (مهم للكشف عن الأنشطة الضارة).</li>
        </ul>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">سجلات لينكس الرئيسية:</h3>
        <ul>
          <li><code>/var/log/auth.log</code> – محاولات SSH، المصادقة، sudo.</li>
          <li><code>/var/log/syslog</code> – أحداث النظام العامة.</li>
          <li><code>/var/log/apache2/access.log</code> – سجلات خادم الويب.</li>
        </ul>
      `
    },
    {
      number: 5,
      title: '[مبتدئ] تحليل سجلات أمان ويندوز باستخدام PowerShell',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: استخراج الأحداث الحرجة</h2>
        <p>Event IDs الأساسية التي يجب أن تكون على دراية بها:</p>
        <ul>
          <li><strong>4624:</strong> تسجيل دخول ناجح.</li>
          <li><strong>4625:</strong> فشل تسجيل الدخول.</li>
          <li><strong>4648:</strong> محاولة تسجيل دخول باستخدام بيانات اعتماد صريحة (RunAs).</li>
          <li><strong>4688:</strong> إنشاء عملية جديدة.</li>
          <li><strong>4698:</strong> إنشاء مهمة مجدولة.</li>
          <li><strong>7034, 7035, 7036:</strong> تغييرات في حالة الخدمات.</li>
        </ul>
        <div class="code-block">
# أمثلة أوامر PowerShell
# عرض آخر 10 أحداث فشل تسجيل دخول
Get-EventLog -LogName Security -EntryType FailureAudit -Newest 10 | Format-Table -AutoSize

# البحث عن إنشاء عمليات جديدة (Event ID 4688)
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4688} | Select-Object TimeCreated, Message

# البحث عن عمليات تم تشغيلها من مجلد Temp (مؤشر على نشاط ضار)
Get-WinEvent -FilterXPath "*[System[EventID=4688]]" | Where-Object {$_.Message -like "*temp*"}
        </div>
        <div class="note-box">
          📌 <strong>نشاط 5:</strong> قم بتسجيل الدخول ببيانات خاطئة على جهاز ويندوز عدة مرات، ثم استخدم PowerShell لاستخراج أحداث Event ID 4625. كم مرة ظهرت؟
        </div>
      `
    },
    {
      number: 6,
      title: '[مبتدئ] تحليل سجلات أمان لينكس (auth.log و syslog)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: تتبّع الأحداث على لينكس</h2>
        <div class="code-block">
# تحليل سجلات المصادقة: البحث عن محاولات SSH فاشلة
sudo grep "Failed password" /var/log/auth.log

# البحث عن محاولات sudo فاشلة
sudo grep "sudo.*COMMAND" /var/log/auth.log

# متابعة سجل النظام في الوقت الحقيقي
sudo tail -f /var/log/syslog

# البحث عن نشاط غير عادي باستخدام awk
awk '/Failed password/ {print $1,$2,$3,$9,$11}' /var/log/auth.log | tail -20
        </div>
        <div class="note-box">
          📌 <strong>نشاط 6:</strong> قم بتسجيل الدخول إلى جهاز Ubuntu عبر SSH بكلمة مرور خاطئة 3 مرات، ثم استخدم <code>grep</code> لاستخراج السجلات. ما هي عناوين IP المسجلة؟
        </div>
      `
    },
    {
      number: 7,
      title: '[مبتدئ] مقدمة في SIEM – مكونات ELK و Wazuh',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: كيف يعمل نظام إدارة المعلومات والأحداث الأمنية؟</h2>
        <p>SIEM يقوم بـ:</p>
        <ul>
          <li>جمع السجلات من مصادر متعددة (خوادم، جدران حماية، أجهزة أمنية).</li>
          <li>تطبيع البيانات (Normalization) لجعلها بتنسيق موحد.</li>
          <li>تحليل السجلات في الوقت الفعلي (Correlation) واكتشاف الأنماط الشاذة.</li>
          <li>توليد تنبيهات وتخزين السجلات للبحث في المستقبل.</li>
        </ul>
        <p>في مختبرنا، سنستخدم <strong>Wazuh</strong> الذي يدمج ELK مع وكيل أمني متقدم.</p>
        <div class="fig-box">
          <i class="fas fa-server text-neon text-2xl mb-2 block"></i>
          الشكل 7.1: مكونات Wazuh – Indexer (Elasticsearch)، Dashboard (Kibana)، Server (Manager)، Agents.
        </div>
      `
    },
    {
      number: 8,
      title: '[مبتدئ] التنقل في واجهة Kibana وقراءة التنبيهات الأساسية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: أول لقاء مع لوحة التحكم</h2>
        <p>بعد تثبيت Wazuh، افتح Kibana (https://localhost:443). ستجد واجهة تحتوي على:</p>
        <ul>
          <li><strong>Discover:</strong> لاستكشاف السجلات الخام (الرسائل المرسلة من الوكلاء).</li>
          <li><strong>Dashboard:</strong> لوحات تحكم جاهزة (مثل "Security Events"، "Vulnerabilities").</li>
          <li><strong>Alerts:</strong> قائمة التنبيهات الأمنية (بناءً على قواعد Wazuh).</li>
          <li><strong>Modules:</strong> وحدات مثل الـ Vulnerability Detection و File Integrity Monitoring.</li>
        </ul>
        <div class="code-block">
# مثال على استعلام بسيط في Kibana (Discover)
rule.groups: "windows" AND data.win.eventdata.processName: "powershell.exe"
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
          <li>ما هي المسؤوليات الأساسية لمحلل SOC من المستوى الأول (Tier 1)؟</li>
          <li>ما هي الأدوات التي استخدمناها لتجميع السجلات في البيئة المحاكية؟</li>
          <li>اذكر Event ID واحداً لنجاح تسجيل الدخول وآخر لفشل تسجيل الدخول على ويندوز.</li>
          <li>كيف تبحث عن محاولات SSH فاشلة في سجل auth.log؟</li>
          <li>ما الفرق بين "True Positive" و "False Positive" في تحليل التنبيهات؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتثبيت Wazuh وأضف جهازين كوكلاء (Windows و Ubuntu). تأكد من ظهور السجلات في Kibana. اكتب تقريراً من صفحة واحدة يوضح خطوات التثبيت والمشكلات التي واجهتها.</p>
      `
    },
    // ==================== المستوى الثاني: متوسط (الفصول 10-18) ====================
    {
      number: 10,
      title: '[متوسط] تحليل التنبيهات والفرز (Triage) – تصنيف الخطر',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: كيف تتعامل مع سيل التنبيهات؟</h2>
        <p>المحلل من المستوى الأول يستقبل مئات أو آلاف التنبيهات يومياً. مهمته تحديد أيها حقيقي (True Positive) وأيها خاطئ (False Positive).</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">خطوات الفرز الفعالة:</h3>
        <ol>
          <li>قراءة التنبيه وفهم نوعه (مثل: "تسجيل دخول ناجح من موقع غير معتاد").</li>
          <li>جمع معلومات إضافية (IP المصدر، اسم المستخدم، التوقيت).</li>
          <li>البحث عن سياق الحدث (هل هذا المستخدم معتاد على السفر؟ هل IP المصدر مدرج في قوائم الحظر؟).</li>
          <li>استخدام أدوات إثراء (VirusTotal، AbuseIPDB، Whois).</li>
          <li>إغلاق التنبيه إذا كان إيجابياً كاذباً (مع تعليل)، أو ترقيته إلى Tier 2 إذا كان مشبوهاً.</li>
        </ol>
        <div class="note-box">
          📌 <strong>نشاط 10:</strong> قم بإنشاء تنبيه وهمي في مختبرك (مثل تشغيل PowerShell لتنزيل ملف من الإنترنت). طبق خطوات الفرز أعلاه وقرر ما إذا كان هذا النشاط طبيعياً (في سياق عملك) أم لا.
        </div>
      `
    },
    {
      number: 11,
      title: '[متوسط] إثراء التنبيهات باستخدام APIs (VirusTotal, AbuseIPDB)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: إضافة السياق إلى التنبيهات</h2>
        <p>استخدام واجهات برمجة التطبيقات (APIs) يجعل عملية الإثراء أسرع وأكثر دقة.</p>
        <div class="code-block">
# مثال: استخدام VirusTotal API للتحقق من عنوان IP
import requests

api_key = "YOUR_VT_API_KEY"
ip = "8.8.8.8"
url = f"https://www.virustotal.com/api/v3/ip_addresses/{ip}"
headers = {"x-apikey": api_key}
response = requests.get(url, headers=headers)
print(response.json()['data']['attributes']['last_analysis_stats'])

# مثال: استخدام AbuseIPDB لفحص عنوان IP
import requests

api_key = "YOUR_ABUSEIPDB_API_KEY"
url = "https://api.abuseipdb.com/api/v2/check"
params = {"ipAddress": "8.8.8.8", "maxAgeInDays": 90}
headers = {"Key": api_key, "Accept": "application/json"}
response = requests.get(url, headers=headers, params=params)
print(response.json())
        </div>
      `
    },
    {
      number: 12,
      title: '[متوسط] تحليل الحزم (PCAP) لاستكشاف الاختراقات',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: الغوص في تفاصيل الشبكة</h2>
        <p>في بعض الحالات، لا تكفي السجلات. تحتاج إلى تحليل حركة المرور الخام لاستخراج الأدلة.</p>
        <div class="code-block">
# التقاط الحزم باستخدام tcpdump وحفظها في ملف
sudo tcpdump -i eth0 -s 1500 -w capture.pcap

# تحليل ملف pcap باستخدام tcpdump (سطر أوامر)
tcpdump -r capture.pcap -n 'host 192.168.1.100'

# في Wireshark، استخدم عوامل التصفية التالية:
# http.request uri содержит "admin" - طلبات تحتوي على كلمة admin
# dns.qry.name contains "malware" - استعلامات DNS مشبوهة
# tcp.port == 4444 - اتصالات على منفذ غير معتاد
        </div>
        <div class="note-box">
          📌 <strong>نشاط 12:</strong> قم بتشغيل فحص Nmap على شبكتك (معزولة). التقط الحزم أثناء الفحص. افتح الملف في Wireshark وحاول التعرف على حزم SYN، SYN-ACK، RST.
        </div>
      `
    },
    {
      number: 13,
      title: '[متوسط] استخدام قواعد MITRE ATT&CK في التحليل',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: ربط التنبيهات بتكتيكات الهجوم</h2>
        <p>MITRE ATT&CK هو إطار يصف سلوكيات المهاجمين (تكتيكات، تقنيات، إجراءات). ربط التنبيهات بـ TTPs يساعد في فهم نية المهاجم.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أمثلة على الربط:</h3>
        <ul>
          <li>تنبيه عن تشغيل PowerShell لتنزيل ملف -> يتوافق مع تقنية T1059.001 (Command and Scripting Interpreter).</li>
          <li>تنبيه عن إنشاء مهمة مجدولة (schtasks) -> تقنية T1053.005 (Scheduled Task).</li>
          <li>تنبيه عن مسح سجل الأمان (Event ID 1102) -> تقنية T1070.001 (Indicator Removal on Host).</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-chart-network text-neon text-2xl mb-2 block"></i>
          الشكل 13.1: مصفوفة MITRE ATT&CK Enterprise (جزء من الـ Tactics)
        </div>
      `
    },
    {
      number: 14,
      title: '[متوسط] الاستجابة للحوادث (IR) للمحلل من المستوى الثاني',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: الانتقال من التحليل إلى الفعل</h2>
        <p>عند تأكيد الاختراق، يتم تفعيل خطة الاستجابة للحوادث (IRP). دور المحلل هنا يشمل:</p>
        <ul>
          <li>توثيق الحادثة (الطابع الزمني، الأدلة التي تم جمعها).</li>
          <li>احتواء أولي (مثل إيقاف حساب مستخدم مخترق، عزل جهاز عن الشبكة).</li>
          <li>جمع الأدلة الرقمية (نسخ الذاكرة، ملفات السجلات).</li>
          <li>التنسيق مع فريق الاستجابة للحوادث المتقدم.</li>
        </ul>
        <div class="code-block">
# أوامر لجمع الأدلة من ويندوز (قبل عزل الجهاز)
netstat -anob > netstat.txt
tasklist /v > processes.txt
wmic process get name,parentprocessid,processid > processes_wmic.txt

# عمل نسخة من سجل الأمان
wevtutil epl Security security_backup.evtx
        </div>
      `
    },
    {
      number: 15,
      title: '[متوسط] الصيد الرقمي الأساسي (Threat Hunting)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: البحث الاستباقي عن التهديدات</h2>
        <p>بدلاً من انتظار التنبيهات، يقوم الصياد الرقمي بالبحث عن أنشطة قد تشير إلى اختراق غير مكتشف.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">منهجية مبسطة:</h3>
        <ol>
          <li>اختر فرضية تستند إلى TTP شائع (مثل استخدام PowerShell لإنشاء اتصال شبكي خارجي).</li>
          <li>اكتب استعلاماً في Kibana (أداة البحث في Wazuh) للبحث عن هذا النمط.</li>
          <li>افحص النتائج يدوياً وتأكد من عدم وجود أنشطة ضارة.</li>
          <li>وثق النتائج وشاركها مع الفريق.</li>
        </ol>
        <div class="code-block">
# مثال استعلام في Kibana للبحث عن استخدام PowerShell لتنزيل ملف من الإنترنت
winlogbeat* AND process.name:powershell.exe AND process.command_line:(*WebClient* OR *DownloadString* OR *Invoke-Expression*)
        </div>
      `
    },
    {
      number: 16,
      title: '[متوسط] مراقبة النقاط الطرفية – Sysmon و Osquery',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: تفاصيل أكثر من سجلات ويندوز</h2>
        <p>Sysmon (System Monitor) يضيف أحداثاً غنية عن إنشاء العمليات، اتصالات الشبكة، تحميل الملفات، وتغييرات التسجيل.</p>
        <div class="code-block">
# تثبيت Sysmon مع تكوين من SwiftOnSecurity
sysmon64.exe -accepteula -i sysmonconfig.xml

# عرض أحداث Sysmon في Event Viewer (Applications and Services Logs/Microsoft/Windows/Sysmon/Operational)
        </div>
        <p>Osquery هي أداة لجمع معلومات النظام عبر لغة SQL.</p>
        <div class="code-block">
# استعلامات Osquery مفيدة:
SELECT pid, name, path FROM processes;
SELECT * FROM file WHERE path LIKE 'C:\\Windows\\Temp\\%' AND filename LIKE '%.exe';
SELECT * FROM listening_ports;
        </div>
      `
    },
    {
      number: 17,
      title: '[متوسط] إدارة الثغرات ضمن SOC',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: كيف تتعامل SOC مع الثغرات المكتشفة؟</h2>
        <p>غالباً ما يكون فريق SOC مسؤولاً عن تتبع الثغرات الأمنية في أنظمة المؤسسة بالتنسيق مع فريق إدارة الثغرات.</p>
        <ul>
          <li>استقبال نتائج الفحص من OpenVAS أو Nessus.</li>
          <li>تحديد أولوية المعالجة بناءً على CVSS (خطورة الثغرة) وأهمية الأصل المتأثر.</li>
          <li>إخطار الفرق المعنية (مسؤولي الخوادم، المطورين).</li>
          <li>متابعة إغلاق الثغرات وإعادة الفحص.</li>
        </ul>
        <div class="note-box">
          📌 <strong>نشاط 17:</strong> قم بتشغيل فحص OpenVAS على أحد أجهزة المختبر. اختر ثلاث ثغرات بدرجات خطورة مختلفة. اكتب تقريراً قصيراً يوضح كيف ستتعامل مع كل منها.
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
          <li>ما الفرق بين True Positive و False Positive؟ أعط مثالاً لكل منهما.</li>
          <li>كيف يمكن استخدام VirusTotal API في عملية الإثراء؟</li>
          <li>ما هي المعلومات التي يمكنك استخراجها من ملف pcap؟</li>
          <li>ما هو إطار MITRE ATT&CK وما فائدته للمحلل؟</li>
          <li>اذكر ثلاث أدوات لجمع الأدلة الرقمية أثناء الاستجابة للحوادث.</li>
          <li>اكتب استعلاماً بسيطاً في Kibana للبحث عن عمليات powershell.exe مع سطر أوامر يحتوي على "DownloadFile".</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> في مختبر Wazuh الخاص بك، قم بمحاكاة هجوم بسيط (مثل تشغيل سكريبت PowerShell لتنزيل ملف من الإنترنت). تأكد من ظهور التنبيه في Wazuh. قم بتطبيق خطوات الفرز (Triage) والإثراء باستخدام VirusTotal API، واكتب ملخصاً من صفحة واحدة عن الحادثة (النوع، المصدر، التوصيات).</p>
      `
    },
    // ==================== المستوى الثالث: متقدم (الفصول 19-27) ====================
    {
      number: 19,
      title: '[متقدم] أتمتة مهام SOC باستخدام Python و APIs',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: برمجة أدوات التحليل الخاصة بك</h2>
        <div class="code-block">
# سكريبت لسحب التنبيهات من Wazuh API
import requests
import json

# https://documentation.wazuh.com/current/user-manual/api/reference.html
api_url = "https://localhost:55000/security/user/authenticate?raw=true"
headers = {"Authorization": "Bearer YOUR_TOKEN"}
response = requests.get("https://localhost:55000/alerts", headers=headers, verify=False)
alerts = response.json()
for alert in alerts['data']['items']:
    print(alert['rule']['description'])

# سكريبت لإثراء تلقائي باستخدام VirusTotal
def enrich_ip(ip):
    # ... (مثل الكود السابق)
    return stats
        </div>
      `
    },
    {
      number: 20,
      title: '[متقدم] بناء قواعد مخصصة في Wazuh للكشف عن سلوكيات محددة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: تخصيص نظام SIEM لبيئتك</h2>
        <p>قواعد Wazuh مكتوبة بلغة XML. يمكنك إضافتها إلى ملف <code>/var/ossec/etc/rules/local_rules.xml</code>.</p>
        <div class="code-block">
<!-- مثال: قاعدة للكشف عن تشغيل PowerShell مع سطر أوامر يحتوي على "DownloadFile" -->
<group name="local,powershell">
  <rule id="100001" level="10">
    <if_sid>530</if_sid>
    <match>powershell\.exe</match>
    <regex>.*DownloadFile.*</regex>
    <description>PowerShell downloading file from internet</description>
  </rule>
</group>
        </div>
        <p>بعد إضافة القاعدة، أعد تشغيل Wazuh Manager: <code>sudo systemctl restart wazuh-manager</code>.</p>
        <div class="note-box">
          📌 <strong>نشاط 20:</strong> قم بإنشاء قاعدة مخصصة في Wazuh للتنبيه عند استخدام أمر <code>schtasks</code> (إنشاء مهمة مجدولة). اختبر القاعدة بتنفيذ الأمر على أحد الوكلاء.
        </div>
      `
    },
    {
      number: 21,
      title: '[متقدم] تحليل سجلات متقدمة – العثور على أنماط الهجوم المعقدة',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: البحث عن إبرة في كومة قش</h2>
        <p>استخدام تقنيات مثل ربط الأحداث (Event Correlation) وتحليل السلاسل الزمنية (Time Series).</p>
        <div class="code-block">
# مثال: استعلام في Kibana للبحث عن عدة أحداث مرتبطة
# حدث فشل تسجيل دخول متعدد (Event ID 4625) يتبعه حدث نجاح (4624) من نفس IP خلال 5 دقائق
winlogbeat* AND (event_id:4625 OR event_id:4624) | sort by @timestamp | bucket by src_ip
        </div>
      `
    },
    {
      number: 22,
      title: '[متقدم] أتمتة الاستجابة (SOAR) – TheHive و Cortex',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: الاستجابة التلقائية للحوادث</h2>
        <p>TheHive هي منصة مفتوحة المصدر لإدارة الحوادث الأمنية. Cortex هي أداة تحليل تابعة لها.</p>
        <div class="code-block">
# تثبيت TheHive عبر Docker
curl -sSL https://raw.githubusercontent.com/StrangeBeeCorp/docker/main/install-thehive.sh | bash
# بعد التثبيت، افتح http://localhost:9000

# إنشاء منظمة وربط Cortex لتحليل العناوين والملفات تلقائياً.
        </div>
      `
    },
    {
      number: 23,
      title: '[متقدم] الصيد الرقمي المتقدم (Hunting باستخدام Sigma و YARA)',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: أدوات الصيد الاحترافية</h2>
        <p><strong>Sigma:</strong> لغة لكتابة قواعد الكشف (مشتركة بين SIEM المختلفة).</p>
        <p><strong>YARA:</strong> لغة للتعرف على الملفات الخبيثة بناءً على أنماط (سلاسل، بايتات، تعابير منتظمة).</p>
        <div class="code-block">
# مثال على قاعدة Sigma (للكشف عن تشغيل Mimikatz)
title: Possible Mimikatz Execution
status: experimental
logsource:
    product: windows
    service: security
detection:
    selection:
        EventID: 4663
        ObjectType: "Process"
        AccessMask: "0x1010"
    condition: selection
        </div>
        <div class="code-block">
# مثال على قاعدة YARA للتعرف على ملفات Mimikatz
rule Mimikatz {
    meta:
        description = "Detects Mimikatz strings"
    strings:
        $a = "mimikatz"
        $b = "sekurlsa::logonpasswords"
        $c = "privilege::debug"
    condition:
        any of them
}
        </div>
      `
    },
    {
      number: 24,
      title: '[متقدم] تحليل الحوادث الكبرى وكتابة التقارير التنفيذية',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: التقارير التي تصنع الفارق</h2>
        <p>بعد انتهاء الحادثة، يقدم المحلل المتقدم تقريراً شاملاً للمديرين وللمختصين.</p>
        <ul>
          <li><strong>التقرير التنفيذي (لمدراء):</strong> ملخص باللغة العربية/الإنجليزية البسيطة، يوضح نطاق الضرر، الإجراءات المتخذة، والتوصيات العامة.</li>
          <li><strong>التقرير الفني (للفريق):</strong> التسلسل الزمني الكامل، الأدوات المستخدمة، مؤشرات الاختراق (IOCs)، التحليل الجنائي، والخطوات التصحيحية.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-file-alt text-neon text-2xl mb-2 block"></i>
          الشكل 24.1: نموذج لهيكل تقرير الحادثة الأمنية
        </div>
      `
    },
    {
      number: 25,
      title: '[متقدم] التعامل مع برامج الفدية (Ransomware) في بيئة SOC',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: سيناريو ساخن – هجوم Ransomware</h2>
        <p>تعتبر هجمات الفدية من أكثر الحوادث تدميراً. إجراءات SOC:</p>
        <ul>
          <li>اكتشاف: مراقبة مؤشرات التشفير الجماعي (تغيير ملحق الملفات، عمليات تشفير عالية في الـ CPU).</li>
          <li>احتواء: فصل الشبكة فوراً (عزل السويتش أو تعطيل بطاقة الشبكة).</li>
          <li>الاستئصال: تحديد نقطة الدخول (عادةً عبر RDP مكشوف أو تصيد).</li>
          <li>الاسترداد: استعادة الملفات من النسخ الاحتياطية (إذا كانت سليمة).</li>
        </ul>
      `
    },
    {
      number: 26,
      title: '[متقدم] خطة التعلم لمدة 12 شهراً لتصبح SOC Analyst',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من الصفر إلى محلل SOC محترف</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> CompTIA Security+ (أساسيات الأمن).</li>
          <li><strong>الشهر 3-4:</strong> التدريب على Blue Team Labs Online و Let's Defend (تمارين SOC مجانية).</li>
          <li><strong>الشهر 5-6:</strong> الحصول على شهادة BTL1 (Blue Team Level 1) – عملية جداً.</li>
          <li><strong>الشهر 7-9:</strong> دراسة CySA+ (CompTIA) أو CSA (EC-Council).</li>
          <li><strong>الشهر 10-12:</strong> بناء مختبر SOC متقدم (Wazuh + TheHive + Sigma) والبحث عن فرص عمل كـ "Tier 1 SOC Analyst".</li>
        </ul>
      `
    },
    {
      number: 27,
      title: '[متقدم] المشروع النهائي الشامل',
      content: `
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: اختراق ومقاومة – سيناريو متكامل</h2>
        <p><strong>السيناريو:</strong> استلمت شركة افتراضية تقريراً بوجود نشاط مشبوه. تم تزويدك بـ:</p>
        <ul>
          <li>سجلات Windows Event Logs (أمان، نظام، PowerShell).</li>
          <li>ملف PCAP لحركة المرور خلال فترة الحادثة.</li>
          <li>نسخة من سجل الأمان الـ Registry (NTUSER.dat).</li>
        </ul>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>تحليل السجلات (يدوياً وباستخدام أدوات SIEM) لتحديد النشاط الضار.</li>
          <li>إثبات أن الحادثة حدثت وتحديد الجذر (Root Cause).</li>
          <li>تقديم تقرير تحليل كامل (خطوات الهجوم، مؤشرات الاختراق).</li>
          <li>اقتراح إجراءات لمنع تكرار الحادثة.</li>
        </ol>
        <p>ستجد بيانات الحادثة (سجلات، pcap، ملفات ريجستري) في مجلد <code>data/incident</code> (يمكن تنزيلها من منصة التدريب المرتبطة). هذا المشروع يختبر جميع مهاراتك التي تعلمتها في الكورس.</p>
      `
    },
  ],
};
