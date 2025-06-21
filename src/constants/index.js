import sneaksterImg from "../assets/projects/sneakster.png";
import emlakImg from "../assets/projects/emlak-otomasyon.png";
import portfolioImg from "../assets/projects/Portfolio.png";
import caffemoodImg from "../assets/projects/caffemood.jpg";

export const HERO_CONTENT = `Dayanıklı ve ölçeklenebilir web uygulamaları geliştirme konusunda tutkulu bir full stack developer'ım. Stajımı React, TypeScript, Bootstrap ve Redux gibi front-end teknolojilerinde kendimi geliştirerek tamamladım. Backend tarafında Node.js, Express.js, MongoDB ve SQL teknolojilerini kullanarak tam kapsamlı web uygulamaları geliştiriyorum. Sürekli bu alanda yeni şeyler öğrenerek kendimi geliştirmeye çalışıyorum.`
export const ABOUT_TEXT = `Trakya Üniversitesi Bilgisayar Mühendisliği'nden 3.06/4 ortalama ile mezun oldum. Eğitim sürecimde Python, C, Assembly, Java, Swift, Flutter ve ReactJS gibi yazılım dillerini öğrendim. Şu anda full stack web geliştirme alanında kendimi geliştiriyorum. ReactJS, TypeScript, Redux gibi front-end teknolojilerinin yanı sıra Node.js, Express.js, MongoDB ve SQL gibi backend teknolojilerini de kullanarak tam kapsamlı web uygulamaları geliştiriyorum. Gelişime açık ve meraklı biriyim; öğrendiklerimi uygulamaya geçirerek daha fazla detay öğrenebileceğim, kendimi geliştirebileceğim bir iş arayışındayım. Farklı alanlarda da kendimi deniyorum ve geliştirmeye çalışıyorum. Önceliğim, alanında uzman kişilerle çalışarak her gün yeni şeyler öğrenmek, sahip olduğum bilgi ve yetenekleri gösterebilmek.`;

export const EXPERIENCES = [
  {
    date: "Ocak 2024 - Temmuz 2024",
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
    description: `Javascript , Github , Veritabanı , Blockchain ve ERP alanlarında bilgi ve deneyim sahibi oldum. Aynı zamanda farklı konularda eğitime tabi tutuldum`,
    technologies: ["Javascript", "Github", "Blockchain"],
  },
];

export const PROJECTS = [
  {
    title: "Sneakster - Ayakkabı Satış Sitesi",
    description: "MERN stack kullanılarak geliştirilmiş modern ayakkabı satış platformu. Kullanıcı dostu arayüz ve gelişmiş e-ticaret özellikleri ile donatılmış.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "MERN"],
    link: "https://sneakster-frontend.vercel.app/",
    image: sneaksterImg
  },
  {
    title: "Emlak Otomasyon - Gayrimenkul Kiralama",
    description: "Gayrimenkul kiralama ve satış işlemleri için geliştirilmiş kapsamlı web uygulaması. İlan yönetimi ve kullanıcı etkileşimi özellikleri.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "MERN"],
    link: "https://emlak-otomasyon.vercel.app",
    image: emlakImg
  },
  {
    title: "Portfolio - Kişisel Web Sitesi",
    description: "Modern ve responsive tasarımla geliştirilmiş kişisel portfolio web sitesi. React ve Tailwind CSS kullanılarak oluşturulmuş, animasyonlar ve interaktif bileşenlerle zenginleştirilmiş.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://burak-portfolio.vercel.app",
    image: portfolioImg
  },
  {
    title: "CaffeMood - Kahve Tarif Uygulaması",
    description: "Flutter ile geliştirilmiş mobil kahve tarif uygulaması. Kullanıcılara kahve türlerine göre müzik önerileri ve playlist'ler sunan interaktif bir platform.",
    technologies: ["Flutter", "Dart", "Mobile Development"],
    link: "https://github.com/burakakgun1/CaffeMood",
    image: caffemoodImg
  }
];

export const CONTACT = {
  address: "Küçükçekmece/İstanbul",
  phoneNo: "+90 534 540 51 27 ",
  email: "akgun1087@gmail.com",
};
