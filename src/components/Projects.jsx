import React from 'react'
import { motion } from 'framer-motion'
import sneaksterImg from '../assets/projects/sneakster.png'
import emlakImg from '../assets/projects/emlak-otomasyon.png'
import portfolioImg from '../assets/projects/Portfolio.png'
import caffemoodImg from '../assets/projects/caffemood.jpg'

const PROJECTS = [
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

const Projects = () => {
  return <div className='border-b border-neutral-900 pb-4'>
    <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Projects</motion.h2>
    <div>
        {PROJECTS.map((project, index) => (
            <div key = {index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/4'>
                <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded' />
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                        >
                            {project.title}
                        </a>
                    </h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
    </div>
  </div>
}

export default Projects