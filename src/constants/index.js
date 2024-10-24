import CaffeMood from "../assets/projects/caffemood.jpg";
import portfolio from "../assets/projects/Portfolio.png";
import dummy from "../assets/projects/dummy.png";
import kisisel from "../assets/projects/kisisel.png";

export const HERO_CONTENT = `Dayanıklı ve ölçeklenebilir web uygulamaları geliştirme konusunda tutkulu bir front-end geliştiriciyim. Stajımı React, TypeScript, Bootstrap ve Redux gibi front-end teknolojilerinde kendimi geliştirerek tamamladım.Sürekli bu alanda yeni şeyler öğrenerek kendimi geliştirmeye çalışıyorum.`
export const ABOUT_TEXT = `Trakya Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim ve lisans eğitimime devam ediyorum. Eğitim sürecimde Python, C, Assembly, Java, Flutter ve ReactJS gibi yazılım dillerini öğrendim. Özellikle front-end geliştirme alanında kendimi geliştiriyorum. ReactJS, TypeScript, Redux gibi teknolojiler üzerine yoğunlaşıyorum ve bu alanda ilerlemek istiyorum. Gelişime açık ve meraklı biriyim; öğrendiklerimi uygulamaya geçirerek daha fazla detay öğrenebileceğim, kendimi geliştirebileceğim bir iş arayışındayım. Farklı alanlarda da kendimi deniyorum ve geliştirmeye çalışıyorum. Önceliğim, alanında uzman kişilerle çalışarak her gün yeni şeyler öğrenmek, sahip olduğum bilgi ve yetenekleri gösterebilmek.`;

export const EXPERIENCES = [
  {
    date: "30.11.2023 - Günümüz",
    role: "Yazılım Geliştirici",
    company: "İkatronik",
    description: `Teknofest yarışmasına, tarımda kullanılacak insansız kara aracı projesi ile katıldım. Bu projede görüntü işleme, haritalama ve otonom sürüş algoritmaları üzerine çalıştım. Görevlerim arasında, aracın çevresel verileri algılayarak doğru şekilde yönlendirilmesi ve otonom sürüş kabiliyetlerinin geliştirilmesi yer aldı. Bu süreçte, ileri düzey algoritmalar ve yapay zeka uygulamaları ile ilgili değerli deneyimler kazandım.`,
    technologies: ["Python", "ROS" , "Gazebo" , "RViz"],
  },
  {
    date: "09.07.2024 - 23.08.2024",
    role: "Yazılım Stajyeri",
    company: "Vinya Bilişim ve Danışmanlık Hizmetleri",
    description: `Stajım süresince React, TypeScript, Redux, Redux Toolkit ve Bootstrap gibi modern web teknolojilerini kullanarak çeşitli geliştirmelerde bulundum. Bu projelerde, front-end uygulamalarının yapılandırılması, durum yönetimi, kullanıcı arayüzlerinin optimize edilmesi gibi alanlarda aktif rol aldım. `,
    technologies: ["React", "TypeScript", "Redux", "Bootstrap"],
  },
  {
    date: "01.08.2022 - 26.08.2022",
    role: "Yazılım Stajyeri",
    company: "Atez Yazılım Teknolojileri A.Ş.",
    description: `Javascript , Github , Veritabanı , Blockchain ve ERP alanlarında bilgi ve deneyim sahibi oldum. Aynı zamanda farklı konularda eğitime tabi tutuldum.`,
    technologies: ["Javascript", "Github", "Blockchain"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Projeleri, becerileri ve iletişim bilgilerini sergileyen kişisel bir portföy web sitesi.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    link: "https://burak-portfolio.vercel.app",
  },
  {
    title: "Dummy Website",
    image: dummy,
    description:
      "DummyJSON API kullanılarak yemek ve ürün tanıtımı yapan bir web sitesi.",
    technologies: ["React", "TypeScript", "Redux", "Bootstrap"],
    link: "https://dummy-three-theta.vercel.app",
  },  
  {
    title: "Kişisel Planlayıcı",
    image: kisisel,
    description:
      "Takvim üzerinden günlük işlerin kontrolünü yapmamızı sağlayan bir web sitesi.",
    technologies: ["React","Ant Design"],
    link: "https://kisisel-planlayici-xi.vercel.app",
  },  
  {
    title: "CaffeMood",
    image: CaffeMood,
    description:
      "Kahve tariflerini müzikle birleştiren bir kahve tarif uygulaması.",
    technologies: ["Flutter"],
  },

];

export const CONTACT = {
  address: "Küçükçekmece/İstanbul",
  phoneNo: "+90 534 540 51 27 ",
  email: "akgun1087@gmail.com",
};
