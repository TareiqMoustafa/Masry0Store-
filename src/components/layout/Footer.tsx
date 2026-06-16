import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-cyber-bg border-t border-cyber-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 MASRY STORE - جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://t.me/Masry0Store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon hover:text-neon-bright transition-colors text-sm flex items-center gap-1"
            >
              <i className="fab fa-telegram-plane"></i>
              <span>قناة التليجرام</span>
            </a>
            <Link
              to="/contact"
              className="text-neon hover:text-neon-bright transition-colors text-sm flex items-center gap-1"
            >
              <i className="fas fa-headset"></i>
              <span>اتصل بنا</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-neon transition-colors">سياسة الخصوصية</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-neon transition-colors">شروط الاستخدام</Link>
        </div>
      </div>
    </footer>
  );
}
