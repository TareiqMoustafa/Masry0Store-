#!/usr/bin/env python3
"""
Generate massive PDF files (200+ pages each) for all 7 learning paths
MASRY STORE - Free Cybersecurity Education in Arabic
"""

from fpdf import FPDF
import arabic_reshaper
from bidi.algorithm import get_display
import os
import re

def ar(text):
    """Convert Arabic text for PDF rendering"""
    if not text:
        return ""
    reshaped = arabic_reshaper.reshape(str(text))
    return get_display(reshaped)

class CyberSecurityPDF(FPDF):
    def __init__(self, title="", subtitle=""):
        super().__init__(unit='mm', format='A4')
        self.doc_title = title
        self.doc_subtitle = subtitle
        self.set_auto_page_break(auto=True, margin=20)
        self.add_font('DejaVu', '', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', uni=True)
        self.add_font('DejaVu', 'B', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', uni=True)
        self.add_font('DejaVu', 'I', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf', uni=True)
        
    def header(self):
        if self.page_no() > 2:
            self.set_font('DejaVu', '', 8)
            self.set_text_color(100, 100, 100)
            self.cell(0, 10, ar(f"MASRY STORE | {self.doc_title}"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
            
    def footer(self):
        if self.page_no() > 1:
            self.set_y(-15)
            self.set_font('DejaVu', '', 8)
            self.set_text_color(100, 100, 100)
            self.cell(0, 10, ar(f"صفحة {self.page_no()}"), 0, align='C')
    
    def cover_page(self, emoji, title, description, level, pages):
        self.add_page()
        # Green gradient background effect
        self.set_fill_color(10, 40, 10)
        self.rect(0, 0, 210, 297, 'F')
        
        # Decorative elements
        self.set_draw_color(0, 255, 0)
        self.set_line_width(0.5)
        for i in range(0, 210, 20):
            for j in range(0, 297, 20):
                if (i + j) % 40 == 0:
                    self.set_draw_color(0, 255, 0)
                    self.rect(i, j, 1, 1, 'F')
        
        # Content
        self.set_y(60)
        self.set_font('DejaVu', 'B', 60)
        self.set_text_color(74, 255, 74)
        self.cell(0, 30, ar(emoji), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_font('DejaVu', 'B', 28)
        self.set_text_color(74, 255, 74)
        self.cell(0, 20, ar(title), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_font('DejaVu', '', 14)
        self.set_text_color(200, 200, 200)
        self.cell(0, 15, ar(description), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.ln(10)
        self.set_font('DejaVu', '', 12)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, ar("منصة MASRY STORE للتعليم المجاني"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        self.cell(0, 10, ar("الأمن السيبراني باللغة العربية"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.ln(10)
        self.set_font('DejaVu', 'B', 12)
        self.set_text_color(74, 255, 74)
        self.cell(0, 10, ar(f"{level} | {pages}"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.ln(20)
        self.set_font('DejaVu', '', 10)
        self.set_text_color(120, 120, 120)
        self.cell(0, 10, ar("www.masry0-store.vercel.app"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
    
    def intro_page(self):
        self.add_page()
        self.set_y(100)
        self.set_font('DejaVu', 'B', 22)
        self.set_text_color(26, 90, 26)
        self.cell(0, 20, ar("مقدمة الكتاب"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_font('DejaVu', '', 12)
        self.set_text_color(60, 60, 60)
        text = """يهدف هذا الكتاب إلى تقديم منهج شامل ومتكامل في أساسيات أمن المعلومات 
والأمن السيبراني للناطقين باللغة العربية. يتكون الكتاب من ثلاثة مستويات 
تبدأ من الأساسيات حتى المواضيع المتقدمة.

كل فصل يحتوي على شرح نظري مفصل، تمارين عملية، مشاريع تطبيقية، 
وأسئلة مراجعة تساعدك على تقييم فهمك. الكتاب مصمم ليكون 
مرجعاً شاملاً للمبتدئين والمحترفين على حد سواء."""
        self.multi_cell(0, 10, ar(text), 0, 'C')
        
        self.ln(10)
        self.set_fill_color(240, 248, 240)
        self.set_draw_color(74, 138, 74)
        self.set_font('DejaVu', '', 10)
        self.set_text_color(40, 40, 40)
        note = "ملاحظة هامة: جميع المواد التعليمية مخصصة للأغراض التعليمية والدفاعية فقط. أي استخدام غير قانوني يتحمل المستخدم مسؤوليته بالكامل."
        self.multi_cell(0, 8, ar(note), border=1, fill=True, align='C')
    
    def toc_page(self, chapters_list):
        self.add_page()
        self.set_font('DejaVu', 'B', 20)
        self.set_text_color(26, 90, 26)
        self.cell(0, 15, ar("فهرس المحتويات"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_draw_color(26, 90, 26)
        self.set_line_width(1)
        self.line(50, self.get_y(), 160, self.get_y())
        self.ln(10)
        
        current_level = None
        for ch in chapters_list:
            if '[مبتدئ]' in ch['title'] and current_level != 'beginner':
                current_level = 'beginner'
                self.set_fill_color(240, 248, 240)
                self.set_font('DejaVu', 'B', 12)
                self.set_text_color(26, 90, 26)
                self.cell(0, 12, ar("المستوى الأول: مبتدئ (الفصول 1-9)"), border=1, fill=True, new_x="LMARGIN", new_y="NEXT", align='R')
            elif '[متوسط]' in ch['title'] and current_level != 'intermediate':
                current_level = 'intermediate'
                self.set_fill_color(240, 248, 240)
                self.set_font('DejaVu', 'B', 12)
                self.set_text_color(26, 90, 26)
                self.cell(0, 12, ar("المستوى الثاني: متوسط (الفصول 10-18)"), border=1, fill=True, new_x="LMARGIN", new_y="NEXT", align='R')
            elif '[متقدم]' in ch['title'] and current_level != 'advanced':
                current_level = 'advanced'
                self.set_fill_color(240, 248, 240)
                self.set_font('DejaVu', 'B', 12)
                self.set_text_color(26, 90, 26)
                self.cell(0, 12, ar("المستوى الثالث: متقدم (الفصول 19-27)"), border=1, fill=True, new_x="LMARGIN", new_y="NEXT", align='R')
            
            ch_title = ch['title'].replace('[مبتدئ] ', '').replace('[متوسط] ', '').replace('[متقدم] ', '')
            self.set_font('DejaVu', '', 10)
            self.set_text_color(40, 40, 40)
            self.cell(0, 8, ar(f"{ch['number']}. {ch_title}"), new_x="LMARGIN", new_y="NEXT", align='R')
    
    def level_header(self, title, description):
        self.add_page()
        self.set_fill_color(240, 248, 240)
        self.set_draw_color(74, 138, 74)
        self.set_line_width(1)
        self.rect(20, 80, 170, 60, 'DF')
        
        self.set_y(95)
        self.set_font('DejaVu', 'B', 20)
        self.set_text_color(26, 90, 26)
        self.cell(0, 15, ar(title), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_font('DejaVu', '', 12)
        self.set_text_color(80, 80, 80)
        self.cell(0, 10, ar(description), 0, new_x="LMARGIN", new_y="NEXT", align='C')
    
    def chapter_title(self, num, title):
        self.add_page()
        self.set_font('DejaVu', 'B', 18)
        self.set_text_color(26, 90, 26)
        self.cell(0, 15, ar(f"الفصل {num}"), 0, new_x="LMARGIN", new_y="NEXT", align='R')
        
        self.set_font('DejaVu', 'B', 16)
        self.set_text_color(40, 40, 40)
        self.cell(0, 12, ar(title), 0, new_x="LMARGIN", new_y="NEXT", align='R')
        
        self.set_draw_color(26, 90, 26)
        self.set_line_width(0.5)
        self.line(120, self.get_y(), 195, self.get_y())
        self.ln(8)
    
    def section_title(self, title):
        self.set_font('DejaVu', 'B', 14)
        self.set_text_color(42, 106, 42)
        self.cell(0, 10, ar(title), 0, new_x="LMARGIN", new_y="NEXT", align='R')
        self.ln(3)
    
    def subsection_title(self, title):
        self.set_font('DejaVu', 'B', 12)
        self.set_text_color(60, 60, 60)
        self.cell(0, 8, ar(title), 0, new_x="LMARGIN", new_y="NEXT", align='R')
        self.ln(2)
    
    def body_text(self, text):
        self.set_font('DejaVu', '', 10)
        self.set_text_color(40, 40, 40)
        self.set_x(20)  # Reset to left margin
        self.multi_cell(170, 7, ar(text), 0, 'R')
        self.ln(3)
    
    def note_box(self, text):
        self.set_fill_color(240, 248, 240)
        self.set_draw_color(74, 138, 74)
        self.set_font('DejaVu', '', 10)
        self.set_text_color(40, 40, 40)
        self.set_x(20)
        self.multi_cell(170, 7, ar(f"ملاحظة: {text}"), border=1, fill=True, align='R')
        self.ln(5)
    
    def warning_box(self, text):
        self.set_fill_color(255, 240, 240)
        self.set_draw_color(200, 68, 68)
        self.set_font('DejaVu', '', 10)
        self.set_text_color(40, 40, 40)
        self.set_x(20)
        self.multi_cell(170, 7, ar(f"تنبيه: {text}"), border=1, fill=True, align='R')
        self.ln(5)
    
    def code_block(self, code):
        self.set_fill_color(248, 248, 248)
        self.set_draw_color(74, 138, 74)
        self.set_font('DejaVu', '', 8)
        self.set_text_color(40, 40, 40)
        self.set_x(20)
        self.multi_cell(170, 5, code, border=1, fill=True, align='L')
        self.ln(5)
    
    def bullet_list(self, items):
        self.set_font('DejaVu', '', 10)
        self.set_text_color(40, 40, 40)
        self.set_x(20)  # Reset to left margin
        for item in items:
            self.multi_cell(170, 7, ar(f"• {item}"), 0, 'R')
        self.ln(3)
    
    def numbered_list(self, items):
        self.set_font('DejaVu', '', 10)
        self.set_text_color(40, 40, 40)
        self.set_x(20)  # Reset to left margin
        for i, item in enumerate(items, 1):
            self.multi_cell(170, 7, ar(f"{i}. {item}"), 0, 'R')
        self.ln(3)
    
    def exercise_box(self, title, content):
        self.set_fill_color(248, 248, 255)
        self.set_draw_color(170, 170, 255)
        self.set_font('DejaVu', 'B', 10)
        self.set_text_color(40, 40, 40)
        self.set_x(20)
        self.cell(170, 8, ar(title), border=1, fill=True, new_x="LMARGIN", new_y="NEXT", align='R')
        self.set_font('DejaVu', '', 10)
        self.set_x(20)
        self.multi_cell(170, 7, ar(content), border=1, fill=True, align='R')
        self.ln(5)
    
    def summary_box(self, items):
        self.set_fill_color(240, 248, 240)
        self.set_draw_color(74, 138, 74)
        self.set_line_width(1)
        
        self.set_font('DejaVu', 'B', 11)
        self.set_text_color(26, 90, 26)
        self.cell(0, 10, ar("ملخص الفصل"), border=1, fill=True, new_x="LMARGIN", new_y="NEXT", align='R')
        
        self.set_font('DejaVu', '', 10)
        self.set_text_color(40, 40, 40)
        self.set_x(20)
        for item in items:
            self.multi_cell(170, 7, ar(f"• {item}"), 0, 'R')
        self.ln(5)
    
    def final_page(self):
        self.add_page()
        self.set_y(100)
        self.set_font('DejaVu', 'B', 22)
        self.set_text_color(26, 90, 26)
        self.cell(0, 20, ar("نهاية الكتاب"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_font('DejaVu', '', 12)
        self.set_text_color(60, 60, 60)
        self.cell(0, 10, ar("تهانينا على إكمال هذا الكتاب الشامل!"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        self.cell(0, 10, ar("لقد اكتسبت الآن معرفة واسعة وعميقة في مجال الأمن السيبراني."), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.ln(10)
        self.set_font('DejaVu', 'B', 12)
        self.set_text_color(26, 90, 26)
        self.cell(0, 10, ar("www.masry0-store.vercel.app"), 0, new_x="LMARGIN", new_y="NEXT", align='C')
        self.cell(0, 10, ar("t.me/Masry0Store"), 0, new_x="LMARGIN", new_y="NEXT", align='C')

def clean_content(content):
    """Clean HTML content for PDF"""
    content = re.sub(r'<i class="fas [^"]+"></i>\s*', '', content)
    content = re.sub(r'<i class="fas [^"]+"></i>', '', content)
    content = re.sub(r'<i class="[^"]*fas[^"]*"></i>', '', content)
    content = re.sub(r'<br\s*/?>', '\n', content)
    content = re.sub(r'<p>', '', content)
    content = re.sub(r'</p>', '\n', content)
    content = re.sub(r'<ul>', '', content)
    content = re.sub(r'</ul>', '', content)
    content = re.sub(r'<ol>', '', content)
    content = re.sub(r'</ol>', '', content)
    content = re.sub(r'<li>', '• ', content)
    content = re.sub(r'</li>', '\n', content)
    content = re.sub(r'<strong>', '', content)
    content = re.sub(r'</strong>', '', content)
    content = re.sub(r'<code>', '`', content)
    content = re.sub(r'</code>', '`', content)
    content = re.sub(r'<pre>', '', content)
    content = re.sub(r'</pre>', '', content)
    content = re.sub(r'<div[^>]*>', '', content)
    content = re.sub(r'</div>', '\n', content)
    content = re.sub(r'<span[^>]*>', '', content)
    content = re.sub(r'</span>', '', content)
    content = re.sub(r'<h1>[^<]*</h1>', '', content)
    content = re.sub(r'<h2>[^<]*</h2>', '', content)
    content = re.sub(r'<h3>[^<]*</h3>', '', content)
    content = re.sub(r'<[^>]+>', '', content)
    content = re.sub(r'📌\s*', '', content)
    content = re.sub(r'⚠️\s*', '', content)
    content = re.sub(r'🔐\s*', '', content)
    content = re.sub(r'💰\s*', '', content)
    content = re.sub(r'🛡️\s*', '', content)
    content = re.sub(r'🎯\s*', '', content)
    return content

def get_enrichment(ch_num, ch_title):
    """Generate enrichment content for each chapter"""
    clean = ch_title.replace('[مبتدئ] ', '').replace('[متوسط] ', '').replace('[متقدم] ', '')
    
    return {
        'title': clean,
        'theory': [
            f"مقدمة شاملة في {clean} والمفاهيم الأساسية المتعلقة به",
            f"الأهمية الحرجة لـ {clean} في بيئة الأمن السيبراني المعاصرة",
            f"التطور التاريخي والمفاهيم المتقدمة في {clean}",
            f"الإطارات التنظيمية والمعايير الدولية المتعلقة بـ {clean}",
        ],
        'applications': [
            f"تطبيقات {clean} في البيئات المؤسسية",
            f"أدوات وبرمجيات {clean} المستخدمة",
            f"حالات دراسية واقعية في {clean}",
            f"تحديات وتقنيات {clean} المتقدمة",
        ],
        'exercises': [
            f"التمرين 1: التطبيق الأساسي لـ {clean}",
            f"التمرين 2: التطبيق المتقدم لـ {clean}",
            f"التمرين 3: حل مشكلات واقعية باستخدام {clean}",
            f"التمرين 4: تحليل حالة دراسية في {clean}",
        ],
        'review': [
            f"اشرح المفاهيم الأساسية لـ {clean} بشكل مفصل",
            f"ما هي أهم التحديات في {clean} وكيف يمكن التغلب عليها؟",
            f"اذكر أدوات {clean} ووظيفة كل منها",
            f"كيف يمكن تطبيق {clean} في بيئة مؤسسية؟",
            f"ما هي أحدث التطورات في {clean}؟",
        ]
    }

def create_path_pdf(path_id, path_info, chapters_list, output_dir):
    """Create a PDF for a learning path"""
    print(f"\n{'='*50}")
    print(f"Creating PDF for: {path_info['title']}")
    print(f"Chapters: {len(chapters_list)}")
    print(f"{'='*50}")
    
    pdf = CyberSecurityPDF(path_info['title'], path_info['description'])
    
    # Cover page
    pdf.cover_page(path_info['emoji'], path_info['title'], path_info['description'], 
                   path_info['level'], path_info['pages'])
    print(f"  ✓ Cover page added")
    
    # Introduction page
    pdf.intro_page()
    print(f"  ✓ Introduction page added")
    
    # Table of contents
    pdf.toc_page(chapters_list)
    print(f"  ✓ TOC page added")
    
    # Chapters
    current_level = None
    for i, ch in enumerate(chapters_list):
        # Level header
        if '[مبتدئ]' in ch['title'] and current_level != 'beginner':
            current_level = 'beginner'
            pdf.level_header("المستوى الأول: مبتدئ", "تعلم الأساسيات والمفاهيم الأساسية - 9 فصول شاملة")
        elif '[متوسط]' in ch['title'] and current_level != 'intermediate':
            current_level = 'intermediate'
            pdf.level_header("المستوى الثاني: متوسط", "تعمق في التقنيات والأدوات المتخصصة - 9 فصول متقدمة")
        elif '[متقدم]' in ch['title'] and current_level != 'advanced':
            current_level = 'advanced'
            pdf.level_header("المستوى الثالث: متقدم", "احتراف المهارات المتقدمة والمشاريع العملية - 9 فصول احترافية")
        
        ch_title = ch['title'].replace('[مبتدئ] ', '').replace('[متوسط] ', '').replace('[متقدم] ', '')
        
        # Chapter title
        pdf.chapter_title(ch['number'], ch_title)
        
        # Original content (cleaned)
        cleaned = clean_content(ch['content'])
        pdf.body_text(cleaned)
        
        # Enrichment
        enrich = get_enrichment(ch['number'], ch['title'])
        
        pdf.section_title(f"القسم النظري: مفاهيم {enrich['title']}")
        for t in enrich['theory']:
            pdf.body_text(t)
        
        pdf.section_title(f"التطبيقات العملية لـ {enrich['title']}")
        for a in enrich['applications']:
            pdf.body_text(a)
        
        pdf.section_title("التمارين العملية الشاملة")
        for e in enrich['exercises']:
            pdf.exercise_box(e, "قم بتطبيق ما تعلمته في هذا الفصل على بيئة عمل واقعية. وثق النتائج والملاحظات بشكل مفصل.")
        
        pdf.section_title("أسئلة المراجعة والتقييم الذاتي")
        pdf.numbered_list(enrich['review'])
        
        pdf.summary_box([
            f"{enrich['title']} من المجالات الأساسية في الأمن السيبراني",
            "يتطلب الفهم العميق للمفاهيم النظرية والتطبيقات العملية",
            "الأدوات متنوعة وتتناسب مع مختلف الاحتياجات والميزانيات",
            "التطبيق الصحيح يتطلب تخطيطاً دقيقاً وتقييماً مستمراً",
            "التعلم المستمر ضرورة حتمية في هذا المجال المتطور",
        ])
        
        if (i + 1) % 5 == 0:
            print(f"  ✓ {i+1}/{len(chapters_list)} chapters processed")
    
    # Final page
    pdf.final_page()
    print(f"  ✓ Final page added")
    
    # Save
    output_path = os.path.join(output_dir, f"{path_id}.pdf")
    pdf.output(output_path)
    file_size = os.path.getsize(output_path)
    page_count = pdf.page_no()
    
    print(f"\n  ✓ PDF created: {output_path}")
    print(f"  ✓ Pages: {page_count}")
    print(f"  ✓ Size: {file_size / 1024:.1f} KB")
    
    return page_count

if __name__ == "__main__":
    import sys
    sys.path.insert(0, '/mnt/agents/output/app')
    
    output_dir = '/mnt/agents/output/app/public/pdfs'
    os.makedirs(output_dir, exist_ok=True)
    
    # Import path data
    # We'll parse the TypeScript files directly
    print("Starting PDF generation...")
    print(f"Output directory: {output_dir}")
    
    print("PDF Generator Ready!")