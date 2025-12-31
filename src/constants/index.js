import sneaksterImg from "../assets/projects/sneakster.png";
import emlakImg from "../assets/projects/emlak-otomasyon.png";
import adelImg from "../assets/projects/adelimpex.png";
import ipekyoluImg from "../assets/projects/ipekyolu.png";
import sahinlerImg from "../assets/projects/sahinlergrupteknik.png";
import feyatImg from "../assets/projects/feyatkabak.png";
import bikeImg from "../assets/projects/licorneservice.png";
import sergiImg from "../assets/projects/sergi.png";

export const HERO_CONTENT = `Next.js ve React ekosisteminde üretim ortamına alınmış (production) projeler geliştiren Full Stack Web Geliştiricisiyim. Headless CMS (Sanity), REST API mimarileri, performans optimizasyonu ve SEO odaklı uygulamalar üzerine çalışıyorum. Gerçek müşteriler için canlıya alınmış kurumsal web siteleri, servis merkezleri ve içerik yönetim platformları geliştirdim. Ölçeklenebilir, bakımı kolay ve kullanıcı deneyimi güçlü web uygulamaları üretmeyi hedefliyorum.`;

export const ABOUT_TEXT = `Trakya Üniversitesi Bilgisayar Mühendisliği'nden 3.06/4.00 not ortalaması ile mezun oldum. Eğitim sürecimde Python, C, Assembly, Java, Swift ve ReactJS gibi dillerde temel attım. Kariyerime React ve Next.js odaklı Full Stack geliştirici olarak devam ediyorum. Kurumsal projelerde SEO uyumluluğu, sunucu taraflı render (SSR) ve modern CMS sistemleri konularında deneyim kazandım. Öğrenmeye ve gelişime açık yapımla, modern teknolojileri kullanarak kullanıcı deneyimini en üst seviyeye taşıyan projeler üretmeyi hedefliyorum.`;

export const EXPERIENCES = [
  {
    date: "Temmuz 2025 - Halen",
    role: "Yazılım Stajyeri",
    company: "Atez Yazılım Teknolojileri A.Ş.",
    description: `JavaScript ekosisteminde frontend ve backend geliştirmeleri üzerine çalıştım. Jira ve GitHub kullanarak yazılım yaşam döngüsü (SDLC) süreçlerine dahil oldum.`,
    technologies: ["JavaScript", "Frontend", "Backend", "Jira", "GitHub"],
  },
  {
    date: "Temmuz 2024 - Ağustos 2024",
    role: "Yazılım Stajyeri",
    company: "Vinya Bilişim ve Danışmanlık",
    description: `React.js ve TypeScript kullanarak modüler ve sürdürülebilir arayüzler geliştirdim. Responsive tasarım prensiplerine uygun frontend geliştirmeleri yaptım. Code review süreçlerine aktif olarak katıldım.`,
    technologies: ["React.js", "TypeScript", "Responsive Design"],
  },
  {
    date: "Ocak 2024 - Temmuz 2024",
    role: "Yazılım Geliştirici",
    company: "Ikatronik",
    description: `Teknofest 2024 İnsansız Kara Aracı (İKA) projesi kapsamında otonom sürüş ve görüntü işleme algoritmaları geliştirdim. Python ve C++ kullanarak ROS üzerinde sensör verileri ile gerçek zamanlı karar mekanizmaları tasarladım.`,
    technologies: ["Python", "C++", "ROS", "Otonom Sürüş"],
  },
];

export const PROJECTS = [
  {
    title: "Licorne Bike Service Center Platformu",
    description: "Almanca ve İngilizce dil desteği sunan, bisiklet montaj ve servis bilgilendirme platformu. Geliştirilen Admin Paneli sayesinde teknik içerikler ve ürün bilgileri servis ekibi tarafından kolayca güncellenebilir. Next.js ve Nest.js mimarisinde, Cloudinary ve Resend entegrasyonlarıyla yüksek performanslı bir yapı kuruldu.",
    technologies: ["Next.js", "Nest.js", "MongoDB", "Cloudinary", "Resend"],
    link: "https://bike-app-mu.vercel.app",
    image: bikeImg
  },
  {
    title: "Adel Impex",
    description: "Lojistik firması için geliştirilen kurumsal web platformu. Sanity CMS ile içerik yönetimi ve Resend entegrasyonu ile iletişim formları sağlandı. SEO uyumlu ve yüksek performanslı.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Resend"],
    link: "https://www.adelimpex.com",
    image: adelImg
  },
  {
    title: "İpekyolu Yapı Market",
    description: "Yapı market sektörü için geliştirilen modern ve responsive web sitesi. Sanity CMS altyapısı sayesinde ürün ve içerik yönetimi kolaylaştırıldı.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    link: "https://www.ipekyoluyapimarket.com",
    image: ipekyoluImg
  },
  {
    title: "Şahinler Grup Teknik",
    description: "Teknik servis ve mühendislik hizmetleri için oluşturulan kurumsal kimlik sitesi. Hızlı yükleme süreleri ve mobil uyumluluk odaklı geliştirildi.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    link: "https://sahinlergrupteknik.com",
    image: sahinlerImg
  },
  {
    title: "Feyat Kabak Mühendislik",
    description: "Mühendislik firması için hazırlanan profesyonel web platformu. Proje vitrini ve hizmet detayları Sanity CMS üzerinden yönetilebilir yapıda tasarlandı.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    link: "https://www.feyatkabakmuhendislik.com",
    image: feyatImg
  },
  {
    title: "Emlak Otomasyon Sistemi",
    description: "Filtreleme, kullanıcı yetkilendirme ve ilan yönetimi içeren web uygulaması. Prisma ORM kullanılarak veritabanı işlemleri optimize edildi.",
    technologies: ["MERN Stack", "Prisma ORM"],
    link: "https://emlak-otomasyon.vercel.app",
    image: emlakImg
  },
  {
    title: "Sneakster",
    description: "Ürün listeleme, ürün detay sayfaları ve temel sepet yapısı içeren e-ticaret platformu.",
    technologies: ["React", "MongoDB", "MERN"],
    link: "https://sneakster-frontend.vercel.app",
    image: sneaksterImg
  },
  {
    title: "Proje Vitrini & Koleksiyonu",
    description: "Geliştirdiğim tüm projelerin, demoların ve konsept çalışmaların interaktif bir şekilde sergilendiği, modern tasarıma sahip showcase platformu.",
    technologies: ["Showcase", "Interactive UI", "Portfolio"],
    link: "https://our-projects-eosin.vercel.app",
    image: sergiImg
  }
];

export const CONTACT = {
  address: "Küçükçekmece/İstanbul",
  phoneNo: "+90 534 540 51 27 ",
  email: "akgun1087@gmail.com",
};
