import vaultcoreImg from "../assets/projects/vaultcore.jpg";
import testSuiteImg from "../assets/projects/testautomation.jpg";
import bikeImg from "../assets/projects/licorneservice.png";
import adelImg from "../assets/projects/adelimpex.png";
import ipekyoluImg from "../assets/projects/ipekyolu.png";
import sahinlerImg from "../assets/projects/sahinlergrupteknik.png";
import feyatImg from "../assets/projects/feyatkabak.png";
import olsoImg from "../assets/projects/olsokimya.png";
import emlakImg from "../assets/projects/emlak-otomasyon.png";
import sneaksterImg from "../assets/projects/sneakster.png";

export const PERSONAL_INFO = {
  name: "Burak Akgün",
  title: "Software Engineer | Full Stack Developer",
  email: "akgun1087@gmail.com",
  phone: "(+90) 534 540 51 27",
  location: "İstanbul, Türkiye",
  portfolio: "burakakgun-portfolio.vercel.app",
  github: "https://github.com/burakakgun1",
  linkedin: "https://linkedin.com/in/burak-akgun",
  instagram: "https://www.instagram.com/burak.kgn/",
};

export const HERO_CONTENT = `Trakya Üniversitesi Bilgisayar Mühendisliği mezunuyum. .NET 9 (C#) ve Node.js/NestJS ekosisteminde Clean Architecture standartlarında, yüksek eşzamanlılıklı ve veri tutarlılığı odaklı RESTful servisler geliştiriyorum. Çekirdek bankacılık motoru tasarımı, Playwright ile test otomasyonu ve canlı müşteri platformları teslimatında uçtan uca mühendislik pratiklerine sahibim.`;

export const ABOUT_TEXT = `Trakya Üniversitesi Bilgisayar Mühendisliği bölümünden 3.06 / 4.00 not ortalaması ile mezun oldum. Mühendislik kariyerimde özellikle Clean Architecture, CQRS, çift taraflı muhasebe (double-entry bookkeeping) kuralları, dağıtık kilit mekanizmaları (Redis distributed locking) ve PostgreSQL xmin token ile concurrency yönetimi gibi kritik sistem mimarileri üzerine yoğunlaştım. .NET 9 ve NestJS ile kurumsal backend servisleri inşa ederken; Next.js, TypeScript ve modern CSS ile ticari müşteriler için SEO ve performans odaklı canlı web platformları teslim ettim. Sistemlerin güvenilirliğini ise Playwright ile inşa ettiğim Page Object Model (POM) mimarili E2E test otomasyon paketleri ve GitHub Actions CI/CD boru hatlarıyla garanti altına alıyorum.`;

export const EDUCATION = {
  degree: "Bilgisayar Mühendisliği (Lisans)",
  school: "Trakya Üniversitesi",
  years: "2021 – 2025",
  gpa: "3.06 / 4.00",
  description: "Clean Architecture, veri yapıları, dağıtık sistemler, veritabanı yönetimi ve görüntü işleme odaklı mühendislik eğitimi.",
};

export const EXPERIENCES = [
  {
    date: "07/2025 – 08/2025",
    role: "Yazılım Stajyeri",
    company: "Atez Yazılım Teknolojileri A.Ş.",
    location: "İstanbul",
    description: [
      "JavaScript/TypeScript ekosisteminde web uygulamaları geliştirme ve RESTful API entegrasyon süreçlerinde görev aldım.",
      "Jira ve GitHub araçları ile SDLC süreçlerine uyum sağladım; hata ayıklama (debugging) ve sistem dokümantasyonu aşamalarına katkı verdim.",
    ],
    technologies: ["JavaScript", "TypeScript", "RESTful APIs", "Jira", "GitHub", "SDLC", "Debugging"],
  },
  {
    date: "07/2024 – 08/2024",
    role: "Yazılım Stajyeri",
    company: "Vinya Bilişim ve Danışmanlık",
    location: "İstanbul",
    description: [
      "React.js ve TypeScript kullanarak modüler, tekrar kullanılabilir ve responsive frontend bileşenleri geliştirdim.",
      "Kullanıcı odaklı modern arayüz standartlarını uyguladım; ekip içi code review oturumlarına ve Agile/Scrum süreçlerine aktif katılım gösterdim.",
    ],
    technologies: ["React.js", "TypeScript", "Responsive Design", "Code Review", "Agile/Scrum"],
  },
  {
    date: "01/2024 – 07/2024",
    role: "Yazılım Geliştirici",
    company: "TEKNOFEST — İkatronik Takımı",
    location: "Edirne",
    description: [
      "Teknofest İKA (İnsansız Kara Aracı) kapsamında YOLOv8 modeli ile yararlı/zararlı bitki tespit pipeline'ı geliştirdim; tespit sonuçlarını karar mekanizmasına aktardım.",
      "ROS mimarisi üzerinde SLAM algoritmalarıyla 2D/3D haritalama gerçekleştirdim; sistemin simülasyon testlerini ve veri görselleştirmesini Gazebo ve RViz ortamlarında yürüttüm.",
    ],
    technologies: ["Python", "YOLOv8", "ROS", "SLAM", "Gazebo", "RViz", "C++"],
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages (Programlama Dilleri)",
    items: [
      { name: "C#", level: "İleri Düzey" },
      { name: "TypeScript", level: "İleri Düzey" },
      { name: "JavaScript", level: "İleri Düzey" },
      { name: "Python", level: "Yetkin" },
      { name: "SQL", level: "Yetkin" },
      { name: "C++", level: "Yetkin" },
    ],
  },
  {
    category: "Backend & Mimari",
    items: [
      { name: ".NET 9", level: "Clean Architecture" },
      { name: "ASP.NET Core", level: "Web API" },
      { name: "NestJS", level: "Modüler REST" },
      { name: "Node.js", level: "Backend Runtime" },
      { name: "RESTful APIs", level: "Servis Tasarımı" },
      { name: "CQRS & MediatR", level: "Tasarım Kalıpları" },
    ],
  },
  {
    category: "Database & Caching",
    items: [
      { name: "PostgreSQL", level: "İlişkisel DB" },
      { name: "Redis", level: "Dağıtık Kilit & Önbellek" },
      { name: "MongoDB", level: "NoSQL DB" },
      { name: "EF Core", level: "C# ORM" },
      { name: "Prisma ORM", level: "TypeScript ORM" },
    ],
  },
  {
    category: "Testing & DevOps / Tools",
    items: [
      { name: "Playwright", level: "E2E Test Otomasyonu" },
      { name: "Docker", level: "Konteynerizasyon" },
      { name: "Testcontainers", level: "Entegrasyon Testi" },
      { name: "GitHub Actions", level: "CI/CD Pipeline" },
      { name: "Postman", level: "API Doğrulama" },
      { name: "Git", level: "Sürüm Kontrol" },
    ],
  },
  {
    category: "Konuşma Dilleri",
    items: [
      { name: "Türkçe", level: "Anadil" },
      { name: "İngilizce", level: "B2 - Profesyonel Yetkinlik" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "vaultcore",
    title: "VaultCore — Core Banking & High-Performance Ledger Engine",
    category: "featured",
    badge: "Core Banking & Ledger Engine",
    previewType: "code-vaultcore",
    description: "Clean Architecture ve CQRS (MediatR) desenleriyle çift taraflı muhasebe (Double-Entry Bookkeeping) kurallarına tam uyumlu finansal işlem ve defter motoru.",
    highlights: [
      "Clean Architecture ve CQRS (MediatR) desenleriyle çift taraflı muhasebe kurallarına tam uyumlu finansal işlem ve defter motoru geliştirdim.",
      "PostgreSQL xmin concurrency token, sıralı kilitleme ve Redis dağıtık kilitleri ile bakiye yarış durumlarını (race condition) engelledim; Idempotency ara katmanı ile mükerrer çekimleri önledim.",
      "Docker Compose ile izole PostgreSQL ve Redis altyapısını konteynerize ettim; Testcontainers ve xUnit ile eşzamanlı istek içeren stres testlerini ve veri tutarlılığını doğruladım.",
    ],
    technologies: [".NET 9", "C#", "PostgreSQL", "EF Core", "Redis", "Docker", "xUnit", "GitHub Actions", "Testcontainers"],
    link: "https://github.com/burakakgun1/VaultCore",
    image: vaultcoreImg,
    isExternal: true,
  },
  {
    id: "licorne-bike",
    title: "Licorne Bike Service Center Platformu",
    category: "featured",
    badge: "Decoupled Full-Stack Platform",
    previewType: "browser",
    description: "Servis ve operasyon yönetimi için frontend ve backend mimarisi ayrık (decoupled) full-stack kurumsal servis platformu.",
    highlights: [
      "Servis ve operasyon yönetimi için frontend ve backend mimarisi ayrık (decoupled) full-stack bir platform geliştirdim.",
      "NestJS mimarisi üzerinde modüler RESTful API uç noktaları tasarladım; Cloudinary ile medya optimizasyonu ve Resend ile işlem bildirim servislerini entegre ettim.",
      "Frontend arayüzünü Vercel, NestJS API servisini Render üzerinde production ortamına alarak canlıda bakımını yürüttüm.",
    ],
    technologies: ["Next.js", "NestJS", "MongoDB", "Cloudinary", "Resend", "Vercel", "Render"],
    link: "https://bike-app-mu.vercel.app",
    image: bikeImg,
    isExternal: true,
  },
  {
    id: "e2e-test-suite",
    title: "End-to-End Test Automation Suite",
    category: "featured",
    badge: "E2E Test & CI/CD Pipeline",
    previewType: "code-playwright",
    description: "Web uygulamaları ve REST API'ler için Page Object Model (POM) mimarisine uygun uçtan uca (E2E) test otomasyon paketi ve otomatik CI boru hattı.",
    highlights: [
      "Web uygulamaları ve REST API'ler için Page Object Model (POM) mimarisine uygun uçtan uca (E2E) test otomasyon paketi inşa ettim.",
      "UI senaryoları, API doğrulama testleri ve veri mocking mekanizmalarını uyguladım.",
      "GitHub Actions üzerinde her push ve pull request anında testlerin otomatik koştuğu CI boru hattı yapılandırdım.",
    ],
    technologies: ["TypeScript", "Playwright", "GitHub Actions", "POM Architecture", "REST API Mocking"],
    link: "https://github.com/burakakgun1/playwright-e2e-suite",
    image: testSuiteImg,
    isExternal: true,
  },
  {
    id: "client-adelimpex",
    title: "Adel Impex",
    category: "client",
    badge: "Canlı Müşteri Platformu",
    description: "Uluslararası ticaret ve lojistik firması için SEO ve performans odaklı teslim edilen kurumsal web platformu.",
    highlights: [
      "Next.js ve Sanity CMS ile SEO ve yüksek performans odaklı mimari kuruldu.",
      "Resend entegrasyonu ile kurumsal formlar ve Vercel CI/CD süreçleri yönetildi.",
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Resend", "Vercel"],
    link: "https://www.adelimpex.com",
    image: adelImg,
    isExternal: true,
  },
  {
    id: "client-ipekyolu",
    title: "İpekyolu Market",
    category: "client",
    badge: "Canlı Müşteri Platformu",
    description: "Yapı market sektörü için modern, responsive ve Sanity CMS altyapısıyla içerik yönetimi sağlanan canlı ticari platform.",
    highlights: [
      "Kapsamlı ürün kategorileri ve modüler içerik yönetimi Sanity CMS ile bağlandı.",
      "Mobil öncelikli responsive tasarım ve yüksek Google Lighthouse skorları elde edildi.",
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
    link: "https://www.ipekyoluyapimarket.com",
    image: ipekyoluImg,
    isExternal: true,
  },
  {
    id: "client-sahinler",
    title: "Şahinler Grup Teknik",
    category: "client",
    badge: "Canlı Müşteri Platformu",
    description: "Endüstriyel teknik servis ve mühendislik hizmetleri için geliştirilen yüksek performanslı kurumsal kimlik ve hizmet vitrini.",
    highlights: [
      "Hızlı yükleme süreleri, SEO uyumluluğu ve kurumsal servis katalogları oluşturuldu.",
      "Sanity CMS ile teknik ekibin içerikleri dinamik yönetmesi sağlandı.",
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
    link: "https://sahinlergrupteknik.com",
    image: sahinlerImg,
    isExternal: true,
  },
  {
    id: "client-feyatkabak",
    title: "Feyat Kabak Mühendislik",
    category: "client",
    badge: "Canlı Müşteri Platformu",
    description: "Mühendislik ve proje yönetimi firması için hazırlanan profesyonel proje vitrini ve kurumsal çözüm merkezi.",
    highlights: [
      "Proje portföyü ve hizmet detayları Sanity CMS üzerinden anlık yönetilebilir kılındı.",
      "Vercel üretim ortamında optimize edilmiş SSR altyapısı uygulandı.",
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
    link: "https://www.feyatkabakmuhendislik.com",
    image: feyatImg,
    isExternal: true,
  },
  {
    id: "client-olso",
    title: "OLSO Kimya",
    category: "client",
    badge: "Canlı Müşteri Platformu",
    description: "Kimya ve sanayi sektöründeki ticari müşteri için Next.js ve headless CMS mimarisiyle teslim edilen kurumsal platform.",
    highlights: [
      "Kimyasal ürün ve hammadde katalogları için SEO dostu dinamik sayfalar inşa edildi.",
      "Vercel CI/CD hatları ile kesintisiz dağıtım ve bakım sağlandı.",
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
    link: "https://olso.com.tr",
    image: olsoImg,
    isExternal: true,
  },
  {
    id: "emlak-otomasyon",
    title: "Emlak Otomasyon Sistemi",
    category: "other",
    badge: "Full-Stack Web Uygulaması",
    description: "Filtreleme, kullanıcı yetkilendirme ve ilan yönetimi içeren web uygulaması. Prisma ORM kullanılarak veritabanı işlemleri optimize edildi.",
    highlights: [
      "Prisma ORM ile ilişkisel veri modellemesi ve sorgu optimizasyonları yapıldı.",
      "Yetkilendirme ve dinamik filtreleme mekanizmaları entegre edildi.",
    ],
    technologies: ["React", "Node.js", "Express", "Prisma ORM", "PostgreSQL"],
    link: "https://emlak-otomasyon.vercel.app",
    image: emlakImg,
    isExternal: true,
  },
  {
    id: "sneakster",
    title: "Sneakster E-Ticaret",
    category: "other",
    badge: "E-Ticaret Platformu",
    description: "Ürün listeleme, detay sayfaları ve sepet akışı içeren modern MERN stack e-ticaret platformu.",
    highlights: [
      "Sepet yönetimi ve kullanıcı oturum akışları uygulandı.",
      "Responsive katalog ve filtreleme bileşenleri geliştirildi.",
    ],
    technologies: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    link: "https://sneakster-frontend.vercel.app",
    image: sneaksterImg,
    isExternal: true,
  },
];

export const CONTACT = {
  address: "İstanbul, Türkiye",
  phoneNo: "(+90) 534 540 51 27",
  email: "akgun1087@gmail.com",
  portfolio: "https://burakakgun-portfolio.vercel.app",
  github: "https://github.com/burakakgun1",
  linkedin: "https://linkedin.com/in/burak-akgun",
};
