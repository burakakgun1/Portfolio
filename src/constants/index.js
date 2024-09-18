import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
    description: `Javascript , Github , Veritabanı , Blockchain ve ERP alanlarında bilgi ve deneyim sahibi oldum. Aynı zamanda farklı konularda eğitime tabi tutuldum`,
    technologies: ["Javascript", "Github", "Blockchain"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Küçükçekmece/İstanbul",
  phoneNo: "+90 534 540 51 27 ",
  email: "akgun1087@gmail.com",
};
