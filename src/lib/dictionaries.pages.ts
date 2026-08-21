import { Locale } from './i18n';

/**
 * Page-level translations for the five routes that exist in all three languages.
 *
 * Kept separate from `dictionaries.ts` (which covers the chrome: nav, forms,
 * recurring labels) because this file grows with each page that gets a real
 * translation, and mixing the two made the chrome dictionary hard to scan.
 *
 * Every string here was written for the language, not translated word-for-word
 * from the English. Urdu real-estate vocabulary in Pakistan is heavily
 * code-mixed — buyers say "gray structure", "installment", "possession" and
 * "NOC" in English even mid-Urdu-sentence — so those terms are left in English
 * inside the Urdu strings on purpose. Replacing them with formal Urdu
 * equivalents would read as a translation and lose search intent.
 *
 * Approval wording is fixed vocabulary. "NOC under process" must never become
 * "approved" in any language. See docs/ROADMAP.md Phase 7.
 */

export interface PageDictionary {
  /** Shown on English-only pages reached from a translated one. */
  notice: {
    englishOnly: string;
    readInEnglish: string;
  };
  footer: {
    tagline: string;
    explore: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    attribution: string;
    links: {
      rates: string;
      overseas: string;
      blocks: string;
      constructions: string;
      portfolio: string;
      guides: string;
    };
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    servicesTitle: string;
    servicesBody: string;
    services: { title: string; body: string }[];
    societiesTitle: string;
    societiesBody: string;
    ctaTitle: string;
    ctaBody: string;
    formTitle: string;
  };
  rates: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    grayTitle: string;
    grayBody: string;
    finishedTitle: string;
    finishedBody: string;
    howTitle: string;
    how: string[];
    note: string;
    viewAll: string;
  };
  societies: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    approvalNote: string;
    viewDetail: string;
  };
  overseas: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    points: { title: string; body: string }[];
    everyoneNote: string;
    poaTitle: string;
    poaBody: string;
    ctaTitle: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    officeLabel: string;
    hoursLabel: string;
    hours: string;
    phoneLabel: string;
    emailLabel: string;
  };
}

const en: PageDictionary = {
  notice: {
    englishOnly: 'This page is available in English only.',
    readInEnglish: 'Read it in English',
  },
  footer: {
    tagline:
      'Building in Faisal Hills and Faisal Town with published rates, live site cameras and documentation handled end to end.',
    explore: 'Explore',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: '© 2026 Alammana Developers. Architecting Legacies.',
    attribution:
      'Location map imagery © OpenStreetMap contributors. Project renders and progress photographs remain the property of their respective developers.',
    links: {
      rates: 'Construction Rates',
      overseas: 'Building From Abroad',
      blocks: 'Faisal Hills Blocks',
      constructions: 'Homes We Are Building',
      portfolio: 'Partner Projects',
      guides: 'Guides & Articles',
    },
  },
  home: {
    metaTitle: 'Faisal Hills Construction & Real Estate',
    metaDescription:
      'Alammana Developers builds houses on published block-wise rates in Faisal Hills, Taxila, and sells plots and partner-project inventory across Faisal Town and Islamabad.',
    servicesTitle: 'What we do',
    servicesBody:
      'Two things, done properly: we build houses, and we sell property in societies we actually work in.',
    services: [
      {
        title: 'House Construction',
        body: 'Gray structure or fully finished, priced per square foot of covered area on rates we publish before you commit.',
      },
      {
        title: 'Live Project Tracking',
        body: 'A 24/7 camera on your site and a portal showing stages completed, work in progress, materials and staff.',
      },
      {
        title: 'Plots & Inventory',
        body: 'Faisal Hills, Faisal Town, Faisal Town Phase 2 and DHA Gandhara, plus apartments and shops in partner projects.',
      },
      {
        title: 'Documentation',
        body: 'Society transfers, approvals and construction paperwork handled for you, including under power of attorney.',
      },
    ],
    societiesTitle: 'Societies we work in',
    societiesBody:
      'Approval status is stated exactly as it stands today. We do not soften it.',
    ctaTitle: 'Tell us about your plot',
    ctaBody:
      'Send your plot size and block and we will come back with a written cost estimate on our published rates.',
    formTitle: 'Send an enquiry',
  },
  rates: {
    metaTitle: 'Construction Rates & Payment Plans',
    metaDescription:
      'Published block-wise construction rates for Faisal Hills — gray structure and fully finished — downloadable as PDFs.',
    title: 'Construction rates, published',
    lead:
      'Our rates are on this page as downloadable PDFs, block by block. You can read the cost before you talk to us, not after.',
    grayTitle: 'Gray structure',
    grayBody:
      'Structure, brickwork, roof and plaster complete — everything up to the point where finishing begins.',
    finishedTitle: 'Fully finished',
    finishedBody:
      'Handed over ready to live in: flooring, woodwork, paint, electrical, plumbing and fixtures included.',
    howTitle: 'How the price is worked out',
    how: [
      'The price is per square foot of covered area, not per marla of plot.',
      'Covered area is the total of every floor you build, not the plot size.',
      'Payment follows construction milestones, not a fixed calendar.',
      'The rate list states what is included and what is not. Read it before you sign.',
    ],
    note:
      'Rates are dated on each PDF. Confirm the current figure with us before budgeting.',
    viewAll: 'View all rate lists',
  },
  societies: {
    metaTitle: 'Housing Societies We Work In',
    metaDescription:
      'Faisal Hills, Faisal Town, Faisal Town Phase 2 and DHA Gandhara — blocks, plot sizes and approval status.',
    title: 'Societies, block by block',
    lead:
      'Where we build and sell, with the blocks, plot sizes and the approval position as it stands.',
    approvalNote:
      'Approval status is written exactly as it stands. "NOC under process" is not the same as approved, and we will not describe it as though it were.',
    viewDetail: 'View blocks and plot sizes',
  },
  overseas: {
    metaTitle: 'Building From Abroad',
    metaDescription:
      'Live site cameras, a client tracking portal and documentation handled end to end — build in Faisal Hills from anywhere.',
    title: 'Watch your house being built, from anywhere',
    lead:
      'The hardest part of building from abroad is not the money. It is not knowing what happened on site today. We fixed that with a camera and a portal, not with promises.',
    points: [
      {
        title: '24/7 live site camera',
        body: 'Open the feed whenever you want and look at your own plot. No appointment, no phone call, no waiting for someone to send a photo.',
      },
      {
        title: 'Client tracking portal',
        body: 'Stages completed, work in progress, what comes next, who is responsible, which materials went in, and what is sitting in site inventory.',
      },
      {
        title: 'Documentation handled',
        body: 'Society transfer, approvals and construction paperwork done here, so you are not flying back for a signature.',
      },
      {
        title: 'Published rates, milestone payments',
        body: 'You pay against completed milestones on rates that were published before you started, so distance never becomes leverage.',
      },
    ],
    everyoneNote:
      'The camera and the portal are standard on every Alammana project. They are not an overseas package — a client in Taxila gets exactly the same access.',
    poaTitle: 'On power of attorney',
    poaBody:
      'We do act under power of attorney and we have done it many times. Take independent legal advice first, keep the scope narrow, and put an expiry date on it. Anyone who tells you not to bother with those three things is not looking after you.',
    ctaTitle: 'Start from wherever you are',
  },
  contact: {
    metaTitle: 'Contact Us',
    metaDescription:
      'Talk to Alammana Developers about construction rates, plots or a project in Faisal Hills and Faisal Town, Taxila.',
    title: 'Talk to us',
    lead:
      'Tell us your plot size and block, or just ask a question. We reply on WhatsApp or by phone, usually the same working day.',
    officeLabel: 'Office',
    hoursLabel: 'Hours',
    hours: 'Monday to Saturday, 10:00 to 19:00. Closed Sunday.',
    phoneLabel: 'Phone / WhatsApp',
    emailLabel: 'Email',
  },
};

const ur: PageDictionary = {
  notice: {
    englishOnly: 'یہ صفحہ فی الحال صرف انگریزی میں دستیاب ہے۔',
    readInEnglish: 'انگریزی میں پڑھیں',
  },
  footer: {
    tagline:
      'فیصل ہلز اور فیصل ٹاؤن میں تعمیرات — شائع شدہ ریٹس، سائٹ پر لائیو کیمرہ، اور تمام دستاویزی کام ہمارے ذمے۔',
    explore: 'صفحات',
    contact: 'رابطہ',
    privacy: 'پرائیویسی پالیسی',
    terms: 'شرائط و ضوابط',
    rights: '© 2026 الامانہ ڈویلپرز۔ جملہ حقوق محفوظ ہیں۔',
    attribution:
      'نقشہ جات © OpenStreetMap contributors۔ پروجیکٹ رینڈرز اور تعمیراتی تصاویر متعلقہ ڈویلپرز کی ملکیت ہیں۔',
    links: {
      rates: 'تعمیراتی ریٹس',
      overseas: 'بیرونِ ملک سے تعمیر',
      blocks: 'فیصل ہلز کے بلاکس',
      constructions: 'زیرِ تعمیر گھر',
      portfolio: 'پارٹنر پروجیکٹس',
      guides: 'رہنما مضامین',
    },
  },
  home: {
    metaTitle: 'فیصل ہلز میں تعمیرات اور رئیل اسٹیٹ',
    metaDescription:
      'الامانہ ڈویلپرز فیصل ہلز، ٹیکسلا میں شائع شدہ بلاک وائز ریٹس پر گھر تعمیر کرتے ہیں، اور فیصل ٹاؤن و اسلام آباد میں پلاٹس اور پارٹنر پروجیکٹس کی انوینٹری فروخت کرتے ہیں۔',
    servicesTitle: 'ہم کیا کرتے ہیں',
    servicesBody:
      'دو کام، پورے دیانت کے ساتھ: ہم گھر تعمیر کرتے ہیں، اور انہی سوسائٹیز میں پراپرٹی فروخت کرتے ہیں جہاں ہم خود کام کر رہے ہیں۔',
    services: [
      {
        title: 'گھر کی تعمیر',
        body: 'گرے اسٹرکچر ہو یا مکمل فنشڈ — قیمت کورڈ ایریا کے فی مربع فٹ کے حساب سے، اور ریٹ پہلے سے شائع شدہ۔',
      },
      {
        title: 'لائیو پروجیکٹ ٹریکنگ',
        body: 'آپ کی سائٹ پر 24/7 کیمرہ اور ایک پورٹل جس میں مکمل مراحل، جاری کام، میٹریل اور ذمہ دار عملہ سب درج ہوتا ہے۔',
      },
      {
        title: 'پلاٹس اور انوینٹری',
        body: 'فیصل ہلز، فیصل ٹاؤن، فیصل ٹاؤن فیز 2 اور ڈی ایچ اے گندھارا، اور ساتھ ہی پارٹنر پروجیکٹس میں اپارٹمنٹس اور دکانیں۔',
      },
      {
        title: 'دستاویزی کام',
        body: 'سوسائٹی ٹرانسفر، منظوریاں اور تعمیراتی کاغذات ہمارے ذمے — بشمول پاور آف اٹارنی کے تحت۔',
      },
    ],
    societiesTitle: 'وہ سوسائٹیز جہاں ہم کام کرتے ہیں',
    societiesBody:
      'منظوری کی صورتحال بالکل وہی لکھی ہے جو آج ہے۔ ہم اسے نرم کر کے نہیں دکھاتے۔',
    ctaTitle: 'اپنے پلاٹ کے بارے میں بتائیں',
    ctaBody:
      'اپنے پلاٹ کا سائز اور بلاک بھیجیں، ہم اپنے شائع شدہ ریٹس پر تحریری تخمینہ بھیج دیں گے۔',
    formTitle: 'استفسار بھیجیں',
  },
  rates: {
    metaTitle: 'تعمیراتی ریٹس اور پیمنٹ پلان',
    metaDescription:
      'فیصل ہلز کے لیے شائع شدہ بلاک وائز تعمیراتی ریٹس — گرے اسٹرکچر اور مکمل فنشڈ — پی ڈی ایف میں ڈاؤن لوڈ کریں۔',
    title: 'تعمیراتی ریٹس، کھلے عام',
    lead:
      'ہمارے ریٹس اسی صفحے پر بلاک وائز پی ڈی ایف کی صورت میں موجود ہیں۔ آپ ہم سے بات کرنے سے پہلے قیمت پڑھ سکتے ہیں، بعد میں نہیں۔',
    grayTitle: 'گرے اسٹرکچر',
    grayBody:
      'اسٹرکچر، اینٹوں کا کام، چھت اور پلستر مکمل — یعنی وہ سب کچھ جہاں سے فنشنگ شروع ہوتی ہے۔',
    finishedTitle: 'مکمل فنشڈ',
    finishedBody:
      'رہائش کے لیے تیار حوالگی: فلورنگ، لکڑی کا کام، پینٹ، بجلی، پلمبنگ اور فکسچرز شامل۔',
    howTitle: 'قیمت کیسے بنتی ہے',
    how: [
      'قیمت کورڈ ایریا کے فی مربع فٹ پر ہے، پلاٹ کے فی مرلہ پر نہیں۔',
      'کورڈ ایریا سے مراد ہر منزل کا مجموعی رقبہ ہے، پلاٹ کا سائز نہیں۔',
      'ادائیگی تعمیر کے مراحل کے ساتھ جڑی ہے، کسی مقررہ کیلنڈر کے ساتھ نہیں۔',
      'ریٹ لسٹ میں لکھا ہے کیا شامل ہے اور کیا نہیں۔ دستخط سے پہلے پڑھ لیں۔',
    ],
    note:
      'ہر پی ڈی ایف پر تاریخ درج ہے۔ بجٹ بنانے سے پہلے موجودہ ریٹ ہم سے تصدیق کر لیں۔',
    viewAll: 'تمام ریٹ لسٹس دیکھیں',
  },
  societies: {
    metaTitle: 'وہ ہاؤسنگ سوسائٹیز جہاں ہم کام کرتے ہیں',
    metaDescription:
      'فیصل ہلز، فیصل ٹاؤن، فیصل ٹاؤن فیز 2 اور ڈی ایچ اے گندھارا — بلاکس، پلاٹ سائز اور منظوری کی صورتحال۔',
    title: 'سوسائٹیز، بلاک در بلاک',
    lead:
      'جہاں ہم تعمیر اور فروخت کرتے ہیں — بلاکس، پلاٹ سائز اور منظوری کی موجودہ پوزیشن کے ساتھ۔',
    approvalNote:
      'منظوری کی صورتحال بالکل وہی درج ہے جو حقیقت ہے۔ "NOC under process" اور "approved" ایک چیز نہیں، اور ہم اسے منظور شدہ ظاہر نہیں کریں گے۔',
    viewDetail: 'بلاکس اور پلاٹ سائز دیکھیں',
  },
  overseas: {
    metaTitle: 'بیرونِ ملک سے تعمیر',
    metaDescription:
      'لائیو سائٹ کیمرہ، کلائنٹ ٹریکنگ پورٹل اور مکمل دستاویزی خدمات — دنیا میں کہیں سے بھی فیصل ہلز میں تعمیر کریں۔',
    title: 'اپنا گھر بنتا ہوا دیکھیں، دنیا میں کہیں سے بھی',
    lead:
      'بیرونِ ملک سے گھر بنوانے میں سب سے مشکل چیز پیسہ نہیں ہوتی۔ مشکل یہ ہے کہ آپ کو معلوم ہی نہیں ہوتا کہ آج سائٹ پر کیا ہوا۔ ہم نے اس کا حل وعدوں سے نہیں، کیمرے اور پورٹل سے نکالا ہے۔',
    points: [
      {
        title: '24/7 لائیو سائٹ کیمرہ',
        body: 'جب چاہیں فیڈ کھولیں اور اپنا پلاٹ خود دیکھیں۔ نہ اپائنٹمنٹ، نہ فون، نہ کسی کے تصویر بھیجنے کا انتظار۔',
      },
      {
        title: 'کلائنٹ ٹریکنگ پورٹل',
        body: 'مکمل مراحل، جاری کام، اگلا مرحلہ، ذمہ دار شخص، استعمال شدہ میٹریل، اور سائٹ پر موجود انوینٹری — سب ایک جگہ۔',
      },
      {
        title: 'دستاویزات ہمارے ذمے',
        body: 'سوسائٹی ٹرانسفر، منظوریاں اور تعمیراتی کاغذات یہیں مکمل ہوتے ہیں، تاکہ آپ کو ایک دستخط کے لیے سفر نہ کرنا پڑے۔',
      },
      {
        title: 'شائع شدہ ریٹس، مرحلہ وار ادائیگی',
        body: 'آپ مکمل شدہ مراحل کے عوض ادائیگی کرتے ہیں، اور وہ بھی ان ریٹس پر جو کام شروع ہونے سے پہلے شائع ہو چکے تھے۔ فاصلہ کبھی دباؤ کا ذریعہ نہیں بنتا۔',
      },
    ],
    everyoneNote:
      'کیمرہ اور پورٹل الامانہ کے ہر پروجیکٹ پر معیاری سہولت ہیں۔ یہ صرف بیرونِ ملک کلائنٹس کے لیے نہیں — ٹیکسلا میں بیٹھے کلائنٹ کو بھی بالکل یہی رسائی ملتی ہے۔',
    poaTitle: 'پاور آف اٹارنی کے بارے میں',
    poaBody:
      'ہم پاور آف اٹارنی کے تحت کام کرتے ہیں اور کئی بار کر چکے ہیں۔ پہلے آزاد قانونی مشورہ لیں، اس کا دائرہ محدود رکھیں، اور اس پر ختم ہونے کی تاریخ ضرور ڈلوائیں۔ جو شخص آپ سے کہے کہ ان تین باتوں کی ضرورت نہیں، وہ آپ کا خیرخواہ نہیں۔',
    ctaTitle: 'جہاں بھی ہیں، وہیں سے شروع کریں',
  },
  contact: {
    metaTitle: 'ہم سے رابطہ',
    metaDescription:
      'فیصل ہلز اور فیصل ٹاؤن، ٹیکسلا میں تعمیراتی ریٹس، پلاٹس یا کسی پروجیکٹ کے بارے میں الامانہ ڈویلپرز سے بات کریں۔',
    title: 'ہم سے بات کریں',
    lead:
      'اپنے پلاٹ کا سائز اور بلاک بتائیں، یا صرف سوال پوچھ لیں۔ ہم واٹس ایپ یا فون پر جواب دیتے ہیں، عموماً اسی کام کے دن۔',
    officeLabel: 'دفتر',
    hoursLabel: 'اوقاتِ کار',
    hours: 'پیر تا ہفتہ، صبح 10:00 سے شام 7:00 بجے تک۔ اتوار بند۔',
    phoneLabel: 'فون / واٹس ایپ',
    emailLabel: 'ای میل',
  },
};

const ar: PageDictionary = {
  notice: {
    englishOnly: 'هذه الصفحة متاحة بالإنجليزية فقط في الوقت الحالي.',
    readInEnglish: 'اقرأها بالإنجليزية',
  },
  footer: {
    tagline:
      'نبني في فيصل هيلز وفيصل تاون بأسعار معلنة، وكاميرات مباشرة في الموقع، وإدارة كاملة للمعاملات الرسمية.',
    explore: 'الصفحات',
    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    rights: '© 2026 الأمانة ديفلوبرز. جميع الحقوق محفوظة.',
    attribution:
      'صور الخرائط © OpenStreetMap contributors. تبقى التصاميم وصور التقدم ملكاً لمطوريها.',
    links: {
      rates: 'أسعار البناء',
      overseas: 'البناء من الخارج',
      blocks: 'بلوكات فيصل هيلز',
      constructions: 'المنازل قيد الإنشاء',
      portfolio: 'مشاريع الشركاء',
      guides: 'أدلة ومقالات',
    },
  },
  home: {
    metaTitle: 'البناء والعقارات في فيصل هيلز',
    metaDescription:
      'الأمانة ديفلوبرز تبني المنازل بأسعار معلنة لكل بلوك في فيصل هيلز، تكسيلا، وتبيع الأراضي ووحدات مشاريع الشركاء في فيصل تاون وإسلام آباد.',
    servicesTitle: 'ماذا نفعل',
    servicesBody:
      'أمران اثنان، ننفذهما بإتقان: نبني المنازل، ونبيع العقارات في المجمعات التي نعمل فيها فعلياً.',
    services: [
      {
        title: 'بناء المنازل',
        body: 'هيكل رمادي أو تشطيب كامل، بسعر القدم المربع من المساحة المبنية، وفق أسعار ننشرها قبل التعاقد.',
      },
      {
        title: 'متابعة مباشرة للمشروع',
        body: 'كاميرا تعمل على مدار الساعة في موقعك، وبوابة تعرض المراحل المنجزة والعمل الجاري والمواد والفريق المسؤول.',
      },
      {
        title: 'أراضٍ ووحدات',
        body: 'فيصل هيلز وفيصل تاون وفيصل تاون المرحلة الثانية ودي إتش إيه غاندهارا، إضافة إلى شقق ومحلات في مشاريع الشركاء.',
      },
      {
        title: 'المعاملات الرسمية',
        body: 'نقل الملكية والموافقات وأوراق البناء ننجزها نيابة عنك، بما في ذلك بموجب وكالة قانونية.',
      },
    ],
    societiesTitle: 'المجمعات السكنية التي نعمل فيها',
    societiesBody: 'حالة الاعتماد مذكورة كما هي اليوم بالضبط. لا نُلطّفها.',
    ctaTitle: 'أخبرنا عن أرضك',
    ctaBody:
      'أرسل مساحة الأرض والبلوك، وسنعود إليك بتقدير تكلفة مكتوب وفق أسعارنا المعلنة.',
    formTitle: 'أرسل استفساراً',
  },
  rates: {
    metaTitle: 'أسعار البناء وخطط الدفع',
    metaDescription:
      'أسعار البناء المعلنة لكل بلوك في فيصل هيلز — هيكل رمادي وتشطيب كامل — متاحة للتحميل بصيغة PDF.',
    title: 'أسعار البناء، معلنة',
    lead:
      'أسعارنا موجودة على هذه الصفحة كملفات PDF لكل بلوك. يمكنك قراءة التكلفة قبل أن تتحدث إلينا، لا بعد ذلك.',
    grayTitle: 'الهيكل الرمادي',
    grayBody:
      'الهيكل والبناء بالطوب والسقف واللياسة مكتملة — أي كل شيء حتى النقطة التي يبدأ عندها التشطيب.',
    finishedTitle: 'التشطيب الكامل',
    finishedBody:
      'يُسلَّم جاهزاً للسكن: أرضيات وأعمال خشبية ودهان وكهرباء وسباكة وتجهيزات.',
    howTitle: 'كيف تُحتسب التكلفة',
    how: [
      'السعر لكل قدم مربع من المساحة المبنية، وليس لكل مرلة من الأرض.',
      'المساحة المبنية هي مجموع كل الطوابق التي تبنيها، وليست مساحة الأرض.',
      'الدفع مرتبط بمراحل البناء المنجزة، لا بجدول زمني ثابت.',
      'قائمة الأسعار تبيّن ما هو مشمول وما هو غير مشمول. اقرأها قبل التوقيع.',
    ],
    note: 'كل ملف PDF يحمل تاريخه. تأكد من السعر الحالي معنا قبل إعداد ميزانيتك.',
    viewAll: 'عرض جميع قوائم الأسعار',
  },
  societies: {
    metaTitle: 'المجمعات السكنية التي نعمل فيها',
    metaDescription:
      'فيصل هيلز وفيصل تاون وفيصل تاون المرحلة الثانية ودي إتش إيه غاندهارا — البلوكات ومساحات الأراضي وحالة الاعتماد.',
    title: 'المجمعات، بلوكاً بلوكاً',
    lead:
      'حيث نبني ونبيع، مع البلوكات ومساحات الأراضي وموقف الاعتماد كما هو قائم.',
    approvalNote:
      'حالة الاعتماد مكتوبة كما هي تماماً. عبارة "NOC under process" ليست "approved"، ولن نصفها وكأنها كذلك.',
    viewDetail: 'عرض البلوكات ومساحات الأراضي',
  },
  overseas: {
    metaTitle: 'البناء من الخارج',
    metaDescription:
      'كاميرات مباشرة في الموقع وبوابة متابعة للعميل وإدارة كاملة للمعاملات — ابنِ في فيصل هيلز من أي مكان.',
    title: 'شاهد منزلك وهو يُبنى، من أي مكان',
    lead:
      'أصعب ما في البناء من الخارج ليس المال، بل ألا تعرف ما الذي حدث في الموقع اليوم. عالجنا ذلك بكاميرا وبوابة، لا بالوعود.',
    points: [
      {
        title: 'كاميرا مباشرة على مدار الساعة',
        body: 'افتح البث متى شئت وانظر إلى أرضك بنفسك. بلا موعد ولا مكالمة ولا انتظار صورة من أحد.',
      },
      {
        title: 'بوابة متابعة للعميل',
        body: 'المراحل المنجزة، والعمل الجاري، والخطوة التالية، والمسؤول عنها، والمواد المستخدمة، والمخزون الموجود في الموقع.',
      },
      {
        title: 'المعاملات ننجزها عنك',
        body: 'نقل الملكية والموافقات وأوراق البناء تُنجز هنا، فلا تضطر للسفر من أجل توقيع.',
      },
      {
        title: 'أسعار معلنة ودفع بالمراحل',
        body: 'تدفع مقابل مراحل منجزة وبأسعار نُشرت قبل بدء العمل، حتى لا تتحول المسافة إلى ورقة ضغط.',
      },
    ],
    everyoneNote:
      'الكاميرا والبوابة معيار في كل مشاريع الأمانة، وليستا باقة خاصة بعملاء الخارج — العميل في تكسيلا يحصل على الوصول نفسه تماماً.',
    poaTitle: 'بخصوص الوكالة القانونية',
    poaBody:
      'نعمل بموجب وكالة قانونية وقد فعلنا ذلك مراراً. احصل على استشارة قانونية مستقلة أولاً، واجعل نطاقها ضيقاً، وضع لها تاريخ انتهاء. ومن يقول لك إن هذه الأمور الثلاثة غير ضرورية فهو لا يحرص على مصلحتك.',
    ctaTitle: 'ابدأ من حيث أنت',
  },
  contact: {
    metaTitle: 'اتصل بنا',
    metaDescription:
      'تحدث إلى الأمانة ديفلوبرز حول أسعار البناء أو الأراضي أو أي مشروع في فيصل هيلز وفيصل تاون، تكسيلا.',
    title: 'تحدث إلينا',
    lead:
      'أخبرنا بمساحة أرضك والبلوك، أو اطرح سؤالك فقط. نرد عبر واتساب أو الهاتف، عادة في يوم العمل نفسه.',
    officeLabel: 'المكتب',
    hoursLabel: 'ساعات العمل',
    hours: 'من الاثنين إلى السبت، 10:00 صباحاً حتى 7:00 مساءً. مغلق يوم الأحد.',
    phoneLabel: 'الهاتف / واتساب',
    emailLabel: 'البريد الإلكتروني',
  },
};

const PAGE_DICTIONARIES: Record<Locale, PageDictionary> = { en, ur, ar };

export function getPageDictionary(locale: Locale): PageDictionary {
  return PAGE_DICTIONARIES[locale] ?? en;
}
