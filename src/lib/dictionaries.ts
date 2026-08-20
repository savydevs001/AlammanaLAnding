import { Locale } from './i18n';

/**
 * UI translations.
 *
 * Scope note: this covers navigation, forms, buttons and recurring labels —
 * the chrome a visitor meets on every page. Long-form article bodies are NOT
 * translated here. See docs/ROADMAP.md Phase 7: machine-translating 12,000 words
 * of construction and legal guidance into Urdu produces confident-sounding text
 * with wrong terminology, and the approval wording in particular must never
 * drift ("NOC under process" is not "approved"). Those need a human reviewer.
 *
 * Keep keys flat and descriptive. If a string needs a variable, interpolate at
 * the call site rather than inventing a template syntax here.
 */

export interface Dictionary {
  nav: {
    home: string;
    societies: string;
    portfolio: string;
    constructions: string;
    rates: string;
    overseas: string;
    about: string;
    team: string;
    journal: string;
    contact: string;
    enquire: string;
    menu: string;
    close: string;
    call: string;
    freeConsultation: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    ctaRates: string;
    ctaWhatsapp: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  form: {
    fullName: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailOptional: string;
    emailPlaceholder: string;
    interest: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    failTitle: string;
    failBody: string;
    sendWhatsapp: string;
    sendEmail: string;
    tryAgain: string;
    replyNote: string;
  };
  common: {
    readMore: string;
    viewAll: string;
    getRates: string;
    downloadPdf: string;
    location: string;
    status: string;
    approved: string;
    inProcess: string;
    preLaunch: string;
    priceOnRequest: string;
    languageLabel: string;
  };
  tracking: {
    badge: string;
    title: string;
    body: string;
    cta: string;
    camera: string;
    stages: string;
    materials: string;
    documents: string;
  };
}

const en: Dictionary = {
  nav: {
    home: 'Home', societies: 'Societies', portfolio: 'Portfolio',
    constructions: 'Constructions', rates: 'Rates', overseas: 'Overseas',
    about: 'About', team: 'Team', journal: 'Journal', contact: 'Contact',
    enquire: 'Enquire', menu: 'Open menu', close: 'Close menu', call: 'Call us',
    freeConsultation: 'Free Consultation',
  },
  hero: {
    eyebrow: 'Faisal Hills · Faisal Town · Taxila',
    title: 'We build your house on',
    titleAccent: 'published rates',
    body: 'Gray structure or fully finished, in every block of Faisal Hills. Our rates are published and downloadable — so you know the cost before you commit, not after.',
    ctaRates: 'See Construction Rates',
    ctaWhatsapp: 'Ask on WhatsApp',
    trust1: '60+ projects completed',
    trust2: 'RDA-approved societies',
    trust3: 'Fixed, published rates',
  },
  form: {
    fullName: 'Full Name', namePlaceholder: 'Your name',
    phone: 'Phone / WhatsApp', phonePlaceholder: '03XX XXXXXXX',
    email: 'Email', emailOptional: '(optional)', emailPlaceholder: 'you@example.com',
    interest: 'Interested In', message: 'Message',
    messagePlaceholder: 'Tell us about your plot, budget or timeline…',
    submit: 'Send Enquiry', sending: 'Sending…',
    successTitle: 'Thank you — we have your enquiry',
    successBody: 'Our team will get back to you, usually within a few hours on a working day. There is nothing else you need to do.',
    sendAnother: 'Send another enquiry',
    failTitle: 'We could not send that just now',
    failBody: 'Something went wrong on our side, and we would rather tell you than lose your enquiry. Please send it directly.',
    sendWhatsapp: 'Send on WhatsApp', sendEmail: 'Send by Email', tryAgain: 'Try Again',
    replyNote: 'We reply on WhatsApp or by phone, usually the same working day.',
  },
  common: {
    readMore: 'Read more', viewAll: 'View all', getRates: 'Get Current Rates',
    downloadPdf: 'Download PDF', location: 'Location', status: 'Status',
    approved: 'Approved', inProcess: 'In Process', preLaunch: 'Pre-Launch',
    priceOnRequest: 'Price on request', languageLabel: 'Language',
  },
  tracking: {
    badge: 'Built On Technology',
    title: 'Watch your house being built, live',
    body: 'A 24/7 camera on your site and a private portal tracking every stage, material and document. Whether you are in Taxila or Toronto, you never have to phone someone to find out what happened today.',
    cta: 'See How It Works',
    camera: '24/7 live site camera',
    stages: 'Stage-by-stage tracking',
    materials: 'Materials & inventory log',
    documents: 'Documents handled for you',
  },
};

const ur: Dictionary = {
  nav: {
    home: 'صفحۂ اول', societies: 'سوسائٹیز', portfolio: 'پورٹ فولیو',
    constructions: 'تعمیرات', rates: 'ریٹس', overseas: 'بیرونِ ملک',
    about: 'ہمارے بارے میں', team: 'ٹیم', journal: 'مضامین', contact: 'رابطہ',
    enquire: 'رابطہ کریں', menu: 'مینو کھولیں', close: 'مینو بند کریں', call: 'ہمیں کال کریں',
    freeConsultation: 'مفت مشورہ',
  },
  hero: {
    eyebrow: 'فیصل ہلز · فیصل ٹاؤن · ٹیکسلا',
    title: 'ہم آپ کا گھر بناتے ہیں',
    titleAccent: 'شائع شدہ ریٹس پر',
    body: 'گرے سٹرکچر ہو یا مکمل فنشڈ، فیصل ہلز کے ہر بلاک میں۔ ہمارے ریٹس شائع شدہ اور ڈاؤن لوڈ کے قابل ہیں — تاکہ آپ کو لاگت پہلے معلوم ہو، بعد میں نہیں۔',
    ctaRates: 'تعمیراتی ریٹس دیکھیں',
    ctaWhatsapp: 'واٹس ایپ پر پوچھیں',
    trust1: '60+ منصوبے مکمل',
    trust2: 'RDA منظور شدہ سوسائٹیز',
    trust3: 'مقررہ، شائع شدہ ریٹس',
  },
  form: {
    fullName: 'پورا نام', namePlaceholder: 'آپ کا نام',
    phone: 'فون / واٹس ایپ', phonePlaceholder: '03XX XXXXXXX',
    email: 'ای میل', emailOptional: '(اختیاری)', emailPlaceholder: 'you@example.com',
    interest: 'کس چیز میں دلچسپی ہے', message: 'پیغام',
    messagePlaceholder: 'اپنے پلاٹ، بجٹ یا وقت کے بارے میں بتائیں…',
    submit: 'پیغام بھیجیں', sending: 'بھیجا جا رہا ہے…',
    successTitle: 'شکریہ — آپ کا پیغام موصول ہو گیا',
    successBody: 'ہماری ٹیم عام طور پر کاروباری دن میں چند گھنٹوں کے اندر آپ سے رابطہ کرے گی۔ آپ کو مزید کچھ کرنے کی ضرورت نہیں۔',
    sendAnother: 'ایک اور پیغام بھیجیں',
    failTitle: 'ہم ابھی یہ پیغام نہیں بھیج سکے',
    failBody: 'ہماری طرف سے کوئی مسئلہ پیش آیا ہے۔ ہم آپ کا پیغام ضائع کرنے کے بجائے آپ کو بتانا بہتر سمجھتے ہیں۔ براہِ کرم براہِ راست بھیجیں۔',
    sendWhatsapp: 'واٹس ایپ پر بھیجیں', sendEmail: 'ای میل کریں', tryAgain: 'دوبارہ کوشش کریں',
    replyNote: 'ہم عام طور پر اسی کاروباری دن واٹس ایپ یا فون پر جواب دیتے ہیں۔',
  },
  common: {
    readMore: 'مزید پڑھیں', viewAll: 'سب دیکھیں', getRates: 'موجودہ ریٹس حاصل کریں',
    downloadPdf: 'پی ڈی ایف ڈاؤن لوڈ کریں', location: 'مقام', status: 'حیثیت',
    approved: 'منظور شدہ', inProcess: 'زیرِ عمل', preLaunch: 'اجرا سے پہلے',
    priceOnRequest: 'قیمت درخواست پر', languageLabel: 'زبان',
  },
  tracking: {
    badge: 'ٹیکنالوجی پر مبنی',
    title: 'اپنا گھر بنتا ہوا براہِ راست دیکھیں',
    body: 'آپ کی سائٹ پر 24/7 کیمرہ اور ایک نجی پورٹل جو ہر مرحلے، ہر میٹریل اور ہر دستاویز کا ریکارڈ رکھتا ہے۔ آپ ٹیکسلا میں ہوں یا ٹورانٹو میں، آج کیا ہوا یہ جاننے کے لیے کسی کو فون کرنے کی ضرورت نہیں۔',
    cta: 'یہ کیسے کام کرتا ہے',
    camera: '24/7 لائیو سائٹ کیمرہ',
    stages: 'مرحلہ وار ٹریکنگ',
    materials: 'میٹریل اور انوینٹری ریکارڈ',
    documents: 'دستاویزات ہم سنبھالتے ہیں',
  },
};

const ar: Dictionary = {
  nav: {
    home: 'الرئيسية', societies: 'المجمعات السكنية', portfolio: 'المشاريع',
    constructions: 'أعمال البناء', rates: 'الأسعار', overseas: 'من الخارج',
    about: 'من نحن', team: 'الفريق', journal: 'المقالات', contact: 'اتصل بنا',
    enquire: 'استفسار', menu: 'فتح القائمة', close: 'إغلاق القائمة', call: 'اتصل بنا',
    freeConsultation: 'استشارة مجانية',
  },
  hero: {
    eyebrow: 'فيصل هيلز · فيصل تاون · تاكسيلا',
    title: 'نبني منزلك',
    titleAccent: 'بأسعار معلنة',
    body: 'هيكل خرساني أو تشطيب كامل، في كل بلوك من فيصل هيلز. أسعارنا معلنة وقابلة للتحميل — لتعرف التكلفة قبل الالتزام، لا بعده.',
    ctaRates: 'اطلع على أسعار البناء',
    ctaWhatsapp: 'اسأل عبر واتساب',
    trust1: 'أكثر من 60 مشروعاً منجزاً',
    trust2: 'مجمعات معتمدة من RDA',
    trust3: 'أسعار ثابتة ومعلنة',
  },
  form: {
    fullName: 'الاسم الكامل', namePlaceholder: 'اسمك',
    phone: 'الهاتف / واتساب', phonePlaceholder: '03XX XXXXXXX',
    email: 'البريد الإلكتروني', emailOptional: '(اختياري)', emailPlaceholder: 'you@example.com',
    interest: 'ما الذي يهمك', message: 'رسالتك',
    messagePlaceholder: 'أخبرنا عن قطعة أرضك أو ميزانيتك أو التوقيت…',
    submit: 'إرسال الاستفسار', sending: 'جارٍ الإرسال…',
    successTitle: 'شكراً لك — وصلنا استفسارك',
    successBody: 'سيتواصل معك فريقنا عادةً خلال ساعات في يوم العمل. لا حاجة لأي إجراء آخر منك.',
    sendAnother: 'إرسال استفسار آخر',
    failTitle: 'تعذّر الإرسال في الوقت الحالي',
    failBody: 'حدث خطأ لدينا، ونفضّل إخبارك بدل أن نفقد استفسارك. يرجى إرساله مباشرة.',
    sendWhatsapp: 'أرسل عبر واتساب', sendEmail: 'أرسل بالبريد', tryAgain: 'حاول مرة أخرى',
    replyNote: 'نرد عادةً عبر واتساب أو الهاتف في نفس يوم العمل.',
  },
  common: {
    readMore: 'اقرأ المزيد', viewAll: 'عرض الكل', getRates: 'احصل على الأسعار الحالية',
    downloadPdf: 'تحميل PDF', location: 'الموقع', status: 'الحالة',
    approved: 'معتمد', inProcess: 'قيد الإجراء', preLaunch: 'ما قبل الإطلاق',
    priceOnRequest: 'السعر عند الطلب', languageLabel: 'اللغة',
  },
  tracking: {
    badge: 'قائم على التقنية',
    title: 'شاهد منزلك يُبنى مباشرة',
    body: 'كاميرا تعمل على مدار الساعة في موقعك، وبوابة خاصة تتابع كل مرحلة ومادة ومستند. سواء كنت في تاكسيلا أو تورنتو، لن تحتاج للاتصال بأحد لتعرف ما حدث اليوم.',
    cta: 'كيف يعمل ذلك',
    camera: 'كاميرا مباشرة على مدار الساعة',
    stages: 'متابعة مرحلة بمرحلة',
    materials: 'سجل المواد والمخزون',
    documents: 'نتولى المستندات نيابة عنك',
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { en, ur, ar };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES.en;
}
