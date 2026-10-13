import React, { useState, useMemo } from 'react';
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  Download,
  CheckCircle2,
  ChevronDown,
  Search,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Menu,
  X,
  Eye,
  Check,
  Send,
  Instagram
} from 'lucide-react';

/* ==========================================================================
   1. HAVOLALAR VA SOZLAMALAR (Karimov DevOps profillari)
   ========================================================================== */

// Shaxsiy Telegram akkaunt (Plus a'zoligi uchun)
export const TELEGRAM_PROFILE_URL = "https://t.me/Karimov_devops";
export const TELEGRAM_USERNAME = "@Karimov_devops";

// Shaxsiy Instagram profil
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/karimov_devops?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==";
export const INSTAGRAM_USERNAME = "@karimov_devops";

// Plus paketi narxi
export const PLUS_PRICE = "59 000 so'm";

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  category: 'word' | 'excel' | 'powerpoint';
  format: string;
  size: string;
  pagesOrSlides: string;
  fileName: string;
  downloadUrl: string;
  features: string[];
  sampleContent: string;
}

/* ==========================================================================
   2. ZIP PAPKADAGI 3 TA NAMUNAVIY SHABLON
   ========================================================================== */
export const TEMPLATES_DATA: TemplateItem[] = [
  // 1. WORD SHABLON
  {
    id: 'word-sinf-royxati',
    title: "Sinf O'quvchilari Ro'yxati",
    description: "Sinf rahbari uchun to'liq namunaviy o'quvchilar ro'yxati, tug'ilgan sanasi, ota-onasining ma'lumotlari va telefon raqamlari jadvali.",
    category: 'word',
    format: 'DOCX',
    size: '1.4 KB',
    pagesOrSlides: 'A4 Rasmiy format',
    fileName: 'sinf_royxati.docx',
    downloadUrl: '/namuna/sinf_royxati.docx',
    features: [
      "Standart maktab jadvali (№, F.I.SH., Sana, Ota-onasi, Tel)",
      "Sinf rahbari va maktab raqami kiritiladigan sarlavha",
      "Bir klik bilan Word dasturida o'zgartirish",
      "Chop etishga (A4) 100% tayyor hoshiyalar"
    ],
    sampleContent: `SINF O'QUVCHILARI RO'YXATI
Maktab: [Maktab raqami] | Sinf: [Sinf raqami] | Sinf rahbari: [O'qituvchi F.I.SH.]

№ | O'quvchining F.I.SH.          | Tug'ilgan sanasi | Ota-onasining F.I.SH. | Telefon raqami
1 | Abdullayev Jasur Olimjon o'g'li| 12.04.2012       | Abdullayev Olimjon    | +998 90 123-45-67
2 | Karimova Shahzoda Rustam qizi  | 05.08.2012       | Karimov Rustam        | +998 93 987-65-43
3 | Nazarov Behruz Dilshod o'g'li  | 21.11.2012       | Nazarov Dilshod       | +998 97 555-12-34

* Faylni yuklab olib, o'z sinfingiz o'quvchilarini kiritishingiz mumkin.`
  },

  // 2. EXCEL SHABLON
  {
    id: 'excel-sinf-royxati',
    title: "Sinf Ro'yxati va Davomat Jurnali",
    description: "O'quvchilar ro'yxati, choraklik baholar va o'rtacha ballni avtomatik hisoblovchi, formulalari kiritilgan tayyor Excel jadvali.",
    category: 'excel',
    format: 'XLSX',
    size: '2.3 KB',
    pagesOrSlides: 'Avtomatik hisob-kitob',
    fileName: 'sinf_royxati.xlsx',
    downloadUrl: '/namuna/sinf_royxati.xlsx',
    features: [
      "Avtomatik o'rtacha ball (AVERAGE) formulasi",
      "1, 2, 3 va 4-chorak baholari kataklari",
      "Katakchalarni to'ldirish juda oddiy",
      "Boshqa fanlar va sinflar uchun oson ko'paytiriladi"
    ],
    sampleContent: `[EXCEL AVTOMAT JURNAL TUZILMASI]
№ | O'quvchi F.I.SH.             | Tug'ilgan yili | 1-Chorak | 2-Chorak | 3-Chorak | 4-Chorak | Yillik Baho
1 | Abdullayev Jasur Olimjon o'g'li| 2012           | 5        | 5        | 4        | 5        | 4.75 (Avtomatik)
2 | Karimova Shahzoda Rustam qizi  | 2012           | 4        | 5        | 5        | 5        | 4.75 (Avtomatik)
3 | Nazarov Behruz Dilshod o'g'li  | 2012           | 5        | 4        | 5        | 4        | 4.50 (Avtomatik)

* Baholarni kiritishingiz bilan yillik o'rtacha ballni dastur o'zi hisoblaydi!`
  },

  // 3. POWERPOINT SHABLON
  {
    id: 'powerpoint-vatan',
    title: "Vatan — Muqaddas Sajdagoh",
    description: "Tarbiyaviy soat, ma'naviyat darsi va ochiq darslar uchun mo'ljallangan 'Vatan' mavzusidagi namunaviy slayd taqdimoti.",
    category: 'powerpoint',
    format: 'PPTX',
    size: '1.9 KB',
    pagesOrSlides: 'Prezentatsiya formati',
    fileName: 'vatan.pptx',
    downloadUrl: '/namuna/vatan.pptx',
    features: [
      "Ochiq dars va tarbiyaviy soatga to'liq mos",
      "Chiroyli va professional sarlavha sahifasi",
      "Katta ekran va proyektorlarda tiniq ko'rinish",
      "O'zingiz qo'shimcha slaydlar qo'shishingiz mumkin"
    ],
    sampleContent: `[POWERPOINT TAQDIMOT TUZILMASI]
Slayd 1: VATAN — MUQADDAS SAJDAGOH
         O'zbekiston tarixi va tarbiyaviy soat darsi taqdimoti

Slayd 2: Vatan nima? Vatan — kindik qonimiz to'kilgan muqaddas tuproq.
Slayd 3: Buyuk ajdodlarimiz merosi va vatanparvarlik burchi.
Slayd 4: O'quvchilar uchun savol-javob va mulohaza.
Slayd 5: Xulosa va e'tiboringiz uchun rahmat!`
  }
];

export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: "Ushbu 3 ta shablonni qanday to'ldiraman? Menga maxsus bilim kerakmi?",
    answer: "Yo'q, mutlaqo murakkab bilim kerak emas! Fayllarni yuklab olib, Word, Excel yoki PowerPoint dasturida ochasiz. Hujjat ichidagi kataklarga o'z maktabingiz, sinfingiz va o'quvchilaringiz ism-familiyasini yozib qo'ysangiz kifoya."
  },
  {
    id: 'faq-2',
    question: "Plus versiyaga qanday ulanaman va to'lov qanday bo'ladi?",
    answer: "Plus bo'limidagi \"Telegram orqali yozish\" (@Karimov_devops) yoki \"Instagram orqali yozish\" (@karimov_devops) tugmasini bosing. Menga xabar yozing, Click yoki Payme orqali 59 000 so'm to'lov qiling. To'lovdan so'ng darhol barcha fanlar uchun 150+ dan ortiq shablonlar jamlangan yopiq VIP Telegram kanalga qo'shib qo'yilasiz."
  },
  {
    id: 'faq-3',
    question: "Kompyuterimda Microsoft Office bo'lmasa nima qilaman?",
    answer: "Hech qanday muammo yo'q! Barcha shablonlar telefoningizdagi bepul WPS Office, Google Docs, Google Sheets hamda planshet va kompyuterlarda to'liq ochiladi va o'zgartiriladi."
  },
  {
    id: 'faq-4',
    question: "Shablonlarni printerdan chiqarish (chop etish) mumkinmi?",
    answer: "Albatta! Word va Excel fayllari standart A4 qog'oz o'lchamiga to'liq moslashtirilgan. To'ldirib bo'lib to'g'ridan-to'g'ri chop etishingiz mumkin."
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'word' | 'excel' | 'powerpoint'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [previewTemplate, setPreviewTemplate] = useState<TemplateItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filtr va qidiruv bo'yicha shablonlarni saralash
  const filteredTemplates = useMemo(() => {
    return TEMPLATES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Shablonni yuklab olish funksiyasi (Haqiqiy .docx, .xlsx, .pptx fayllarni yuklaydi)
  const handleDownload = (template: TemplateItem) => {
    const link = document.createElement('a');
    link.href = template.downloadUrl;
    link.download = template.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`"${template.fileName}" muvaffaqiyatli yuklab olindi!`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'word':
        return { label: 'Word (DOCX)', icon: FileText };
      case 'excel':
        return { label: 'Excel (XLSX)', icon: FileSpreadsheet };
      case 'powerpoint':
        return { label: 'PowerPoint (PPT)', icon: Presentation };
      default:
        return { label: 'Hujjat', icon: FileText };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* Toast Bildirishnomasi */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-black px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-neutral-300">
          <Check className="w-5 h-5 text-black shrink-0" />
          <p className="text-sm font-semibold">{toastMessage}</p>
        </div>
      )}

      {/* 1. YUQORI MENYU (Sticky Navbar) */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-neutral-900 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold font-display text-xl tracking-tighter group-hover:scale-105 transition-transform">
              U
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                Ustoz 2030
              </span>
              <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium">
                Ta'lim Shablonlari
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
            <a href="#qanday-ishlaydi" className="hover:text-white transition-colors">
              Qanday ishlaydi
            </a>
            <a href="#shablonlar" className="hover:text-white transition-colors">
              Namunalar (3 ta)
            </a>
            <a href="#plus" className="hover:text-white transition-colors flex items-center space-x-1">
              <span>Plus</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-white font-mono">
                {PLUS_PRICE}
              </span>
            </a>
            <a href="#savollar" className="hover:text-white transition-colors">
              Savollar
            </a>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href={TELEGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </a>
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#plus"
              className="text-sm font-semibold bg-white text-black hover:bg-neutral-200 px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95 flex items-center space-x-1.5"
            >
              <span>Plus'ga qo'shilish</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-900 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#qanday-ishlaydi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900"
            >
              Qanday ishlaydi
            </a>
            <a
              href="#shablonlar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900"
            >
              Namunaviy shablonlar (3 ta)
            </a>
            <a
              href="#plus"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900"
            >
              Ustoz 2030 Plus ({PLUS_PRICE})
            </a>
            <a
              href="#savollar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900"
            >
              Ko'p beriladigan savollar
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href={TELEGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-white text-black font-semibold rounded-xl text-sm flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Telegram: {TELEGRAM_USERNAME}</span>
              </a>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-neutral-800 text-neutral-200 font-semibold rounded-xl text-sm hover:bg-neutral-900 flex items-center justify-center space-x-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: {INSTAGRAM_USERNAME}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BO'LIM (Qora fon, futuristik kontrast) */}
      <section className="relative overflow-hidden bg-black pt-16 pb-24 md:pt-28 md:pb-36 border-b border-neutral-900">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 mb-8 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-semibold font-mono">
              O'zbekiston Ustozlari Uchun Tayyor Hujjatlar
            </span>
          </div>

          {/* Sarlavha */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[1.05] mb-8">
            Ustoz 2030
          </h1>

          {/* Shior */}
          <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed mb-10">
            Word, Excel, PowerPoint'ni bilmasangiz ham muammo yo'q.{' '}
            <span className="text-white font-medium underline underline-offset-4 decoration-neutral-700">
              Tayyor shablonni oling, to'ldiring, ishlating.
            </span>
          </p>

          {/* CTA Tugmalari */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <a
              href="#shablonlar"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center space-x-2 text-base shadow-lg group active:scale-95"
            >
              <span>Namunaviy shablonlar (3 ta)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#plus"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-900 hover:border-neutral-500 transition-all duration-200 flex items-center justify-center space-x-2 text-base active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <span>Plus'ga qo'shilish</span>
            </a>
          </div>

          {/* 3 ta namuna vizual paneli */}
          <div className="relative mx-auto max-w-4xl p-2 sm:p-4 rounded-3xl border border-neutral-800 bg-neutral-950/70 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4 px-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <span className="text-xs text-neutral-400 font-mono ml-2">namuna-paket.zip</span>
              </div>
              <div className="text-xs text-neutral-400 font-mono hidden sm:block">
                3 ta asosiy namunaviy fayl
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
              <div className="p-4 rounded-2xl bg-black border border-neutral-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">WORD • DOCX</span>
                  <FileText className="w-4 h-4 text-neutral-400" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">sinf_royxati.docx</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Sinf o'quvchilari, ota-onalari va telefon raqamlari jadvali.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-neutral-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">EXCEL • XLSX</span>
                  <FileSpreadsheet className="w-4 h-4 text-neutral-400" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">sinf_royxati.xlsx</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Choraklik baholar va o'rtacha ballni avtomatik hisoblovchi jurnal.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-neutral-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">POWERPOINT • PPTX</span>
                  <Presentation className="w-4 h-4 text-neutral-400" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">vatan.pptx</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Tarbiyaviy soat va ochiq darslar uchun "Vatan" mavzusidagi slaydlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QANDAY ISHLAYDI (Oq fon, 3 qadam) */}
      <section id="qanday-ishlaydi" className="py-24 md:py-32 bg-white text-black border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              Oddiy va tushunarli jarayon
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-black mt-4 mb-5 uppercase">
              Qanday ishlaydi?
            </h2>
            <p className="text-neutral-600 text-lg sm:text-xl font-normal">
              Ortiqcha qiyinchiliksiz, 3 daqiqa ichida maktab hujjatingizni tayyor holatga keltiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-black transition-all duration-300 hover:shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-display font-black text-2xl mb-6 group-hover:scale-105 transition-transform">
                01
              </div>
              <h3 className="font-display text-xl font-bold text-black mb-3">
                Shablonni tanlang
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                O'zingizga kerakli hujjat turini (Word ro'yxat, Excel avtomat jurnal yoki PowerPoint dars taqdimoti) tanlaysiz.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-black transition-all duration-300 hover:shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-display font-black text-2xl mb-6 group-hover:scale-105 transition-transform">
                02
              </div>
              <h3 className="font-display text-xl font-bold text-black mb-3">
                Yuklab oling
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                "Yuklab olish" tugmasini bitta bosish orqali .docx, .xlsx yoki .pptx faylini to'g'ridan-to'g'ri qabul qilasiz.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-black transition-all duration-300 hover:shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-display font-black text-2xl mb-6 group-hover:scale-105 transition-transform">
                03
              </div>
              <h3 className="font-display text-xl font-bold text-black mb-3">
                O'zingizga moslab yozing
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Faylni ochib, faqat o'quvchilaringiz ismini, baholarini yoki darsingizni yozasiz va printerdan chiqarasiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHABLONLAR BO'LIMI (Faqat 3 ta namuna, filtrlar bilan) */}
      <section id="shablonlar" className="py-24 md:py-32 bg-neutral-100 text-black border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sarlavha */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-600 bg-white px-3 py-1 rounded-full border border-neutral-300">
                Namunaviy To'plam
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-black mt-3 uppercase">
                Namunaviy Shablonlar
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg mt-2 max-w-xl">
                Zip papkadagi 3 ta asosiy namunaviy hujjat (Word, Excel va PowerPoint).
              </p>
            </div>

            {/* Qidiruv */}
            <div className="mt-6 md:mt-0 relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Shablon izlash..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded-full pl-10 pr-4 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors shadow-sm"
              />
            </div>
          </div>

          {/* Filtr Tugmalari (Hammasi, Word, Excel, PowerPoint) */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              Hammasi ({TEMPLATES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('word')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5 ${
                selectedCategory === 'word'
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Word (1)</span>
            </button>
            <button
              onClick={() => setSelectedCategory('excel')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5 ${
                selectedCategory === 'excel'
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Excel (1)</span>
            </button>
            <button
              onClick={() => setSelectedCategory('powerpoint')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5 ${
                selectedCategory === 'powerpoint'
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>PowerPoint (1)</span>
            </button>
          </div>

          {/* 3 ta Shablon Kartochkalari */}
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-300 p-8">
              <p className="text-neutral-500 text-lg">Bunday shablon topilmadi.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-6 py-2 bg-black text-white text-xs font-semibold rounded-full uppercase"
              >
                Barcha shablonlarni ko'rsatish
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => {
                const badge = getCategoryBadge(template.category);
                const IconComponent = badge.icon;

                return (
                  <div
                    key={template.id}
                    className="bg-white rounded-3xl p-6 border border-neutral-300 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl group"
                  >
                    <div>
                      {/* Kartochka tepasi */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-700">
                          <IconComponent className="w-3.5 h-3.5 text-black" />
                          <span>{badge.label}</span>
                        </div>
                        <span className="text-xs font-mono text-neutral-600 bg-neutral-50 px-2.5 py-0.5 rounded border border-neutral-200">
                          {template.fileName}
                        </span>
                      </div>

                      {/* Nomi */}
                      <h3 className="font-display text-xl font-bold text-black mb-2 group-hover:text-neutral-700 transition-colors">
                        {template.title}
                      </h3>

                      {/* Tavsifi */}
                      <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                        {template.description}
                      </p>

                      {/* Xususiyatlari */}
                      <div className="space-y-1.5 mb-6">
                        {template.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start text-xs text-neutral-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 mr-2 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tugmalar: Ko'rish va Yuklab olish */}
                    <div className="pt-4 border-t border-neutral-200 flex items-center space-x-2">
                      <button
                        onClick={() => setPreviewTemplate(template)}
                        className="p-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-700 hover:text-black transition-colors"
                        title="Shablonni ko'rish"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDownload(template)}
                        className="flex-1 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>Yuklab olish ({template.format})</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Plus haqida tezkor eslatma */}
          <div className="mt-16 p-8 rounded-3xl bg-black text-white border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-xl font-bold mb-1">
                Barcha fanlar va 150+ to'liq shablonlar kerakmi?
              </h4>
              <p className="text-neutral-400 text-sm">
                Ustoz 2030 Plus to'plamida barcha fanlarning dars ishlanmalari va monitoring jadvallari jamlangan.
              </p>
            </div>
            <a
              href="#plus"
              className="shrink-0 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
            >
              Plus to'plamini ko'rish →
            </a>
          </div>
        </div>
      </section>

      {/* 5. PLUS BO'LIMI (Qora fon, 59 000 so'm, Telegram va Instagram orqali sotib olish) */}
      <section id="plus" className="py-24 md:py-36 bg-black text-white relative overflow-hidden border-b border-neutral-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-neutral-900 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-neutral-800/80 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neutral-700 bg-neutral-900 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-200">
              Eksklyuziv Ta'lim To'plami
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase mb-6">
            Ustoz 2030 Plus
          </h2>

          <p className="text-neutral-300 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-12">
            Hujjat to'ldirishga soatlab vaqt sarflamang. Tayyor professional to'plam bilan butun o'quv yili ishlarini bir necha soatda yakunlang.
          </p>

          {/* Plus Kartochkasi */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border-2 border-neutral-700 text-left relative shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-800 pb-8 mb-8 gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                  Bir martalik to'lov • Cheklovsiz a'zolik
                </span>
                <div className="flex items-baseline space-x-3 mt-1">
                  <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight">
                    {PLUS_PRICE}
                  </span>
                  <span className="text-sm text-neutral-400 font-medium">
                    / umrbod foydalanish
                  </span>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="inline-block px-3 py-1 bg-white text-black font-bold text-xs uppercase rounded-full">
                  150+ Shablonlar
                </span>
                <p className="text-xs text-neutral-400 mt-1">
                  Yopiq VIP Telegram kanal
                </p>
              </div>
            </div>

            {/* Imkoniyatlar */}
            <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-6 font-bold">
              Plus obunasi ichiga nimalar kiradi:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">150+ dan ortiq barcha fanlar shablonlari</h5>
                  <p className="text-xs text-neutral-400 mt-0.5">Aniq, tabiiy va gumanitar fanlarning to'liq dars ishlanmalari</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Har hafta yangi shablonlar</h5>
                  <p className="text-xs text-neutral-400 mt-0.5">Eng so'nggi pedagogik talablar asosida muntazam yangilanadi</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Yopiq VIP Telegram kanal</h5>
                  <p className="text-xs text-neutral-400 mt-0.5">Barcha fayllar qulay tartiblangan va telefoningizga yuklanadi</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Attestatsiya va ochiq dars to'plami</h5>
                  <p className="text-xs text-neutral-400 mt-0.5">Toifa oshirish va monitoringga 100% mos rasmiy hujjatlar</p>
                </div>
              </div>
            </div>

            {/* Sotib olish tugmalari: Telegram va Instagram */}
            <div className="pt-2">
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-3 text-center sm:text-left font-semibold">
                Plus'ni sotib olish uchun quyidagi havolalar orqali yozing:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telegram tugmasi */}
                <a
                  href={TELEGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-white text-black font-display font-bold text-base rounded-2xl hover:bg-neutral-200 transition-all duration-200 active:scale-98 shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Telegram orqali yozish</span>
                </a>

                {/* Instagram tugmasi */}
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-transparent border-2 border-white text-white font-display font-bold text-base rounded-2xl hover:bg-white hover:text-black transition-all duration-200 active:scale-98 shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Instagram orqali yozish</span>
                </a>
              </div>

              {/* Talab qilingan kichik eslatma matni */}
              <p className="mt-5 text-sm text-neutral-300 text-center font-normal">
                Menga Telegram (<span className="text-white font-mono">{TELEGRAM_USERNAME}</span>) yoki Instagram (<span className="text-white font-mono">{INSTAGRAM_USERNAME}</span>) orqali yozing, to'lovdan so'ng sizni yopiq kanalga qo'shaman.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 border-t border-neutral-900 pt-5">
                <span className="flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1 text-white" /> Xavfsiz to'lov (Click / Payme)
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-white" /> Tezkor tasdiqlash va kanalga qo'shish
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KO'P BERILADIGAN SAVOLLAR (FAQ) (Oq fon) */}
      <section id="savollar" className="py-24 md:py-32 bg-white text-black border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              Yordam va Tushuntirish
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-black mt-4 mb-4 uppercase">
              Ko'p Beriladigan Savollar
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg">
              Ustozlarning eng ko'p so'raydigan savollariga batafsil javoblar.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-black bg-neutral-50 shadow-sm' : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-black">
                      {item.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-black text-white border-black' : 'bg-neutral-100 text-black'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-neutral-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PASTKI QISM (FOOTER) (Qora fon, Telegram va Instagram havolalari) */}
      <footer className="bg-black text-white pt-20 pb-14 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between pb-16 border-b border-neutral-900 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-bold font-display text-lg">
                  U
                </div>
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  Ustoz 2030
                </span>
              </div>
              <p className="text-neutral-400 text-sm max-w-sm">
                O'zbekiston ustozlarining vaqtini tejash va sifatli ta'lim hujjatlarini osonlashtirish platformasi.
              </p>
            </div>

            {/* Aloqa tugmalari: Telegram va Instagram */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={TELEGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-200 flex items-center space-x-2 text-sm shadow-md active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Telegram: {TELEGRAM_USERNAME}</span>
              </a>

              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-900 transition-all duration-200 flex items-center space-x-2 text-sm active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: {INSTAGRAM_USERNAME}</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
            <p>
              © 2026 Ustoz 2030. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#shablonlar" className="hover:text-white transition-colors">Namunalar</a>
              <a href="#plus" className="hover:text-white transition-colors">Plus ({PLUS_PRICE})</a>
              <a href={TELEGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Telegram
              </a>
              <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* SHABLONNI OLDINDAN KO'RISH MODAL OYNASI */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-white">
            <div className="p-6 border-b border-neutral-900 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-neutral-400">
                  {previewTemplate.format} • {previewTemplate.fileName}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {previewTemplate.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-sm text-neutral-300">
                {previewTemplate.description}
              </p>

              <div className="p-4 rounded-xl bg-black border border-neutral-800 font-mono text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                {previewTemplate.sampleContent}
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase text-neutral-400 mb-2 font-semibold">
                  Tarkibidagi qulayliklar:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {previewTemplate.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 border-t border-neutral-900 bg-black flex items-center justify-end space-x-3">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-5 py-2.5 rounded-full border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold uppercase transition-colors"
              >
                Yopish
              </button>
              <button
                onClick={() => {
                  handleDownload(previewTemplate);
                  setPreviewTemplate(null);
                }}
                className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase transition-all flex items-center space-x-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Yuklab olish ({previewTemplate.fileName})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
