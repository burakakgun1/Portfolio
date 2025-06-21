import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-8 py-16'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.6 }} 
        className='mb-16 text-center text-4xl lg:text-5xl font-light'
      >
        <span className="gradient-text">Projeler</span>
      </motion.h2>
      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <div className="flex flex-wrap lg:items-start gap-8">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: -100 }} 
                transition={{ duration: 0.6 }} 
                className='w-full lg:w-1/4'
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
                  <img 
                    src={project.image} 
                    width={200} 
                    height={200} 
                    alt={project.title} 
                    className='relative rounded-2xl shadow-lg card-hover' 
                  />
                </div>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: 100 }} 
                transition={{ duration: 0.6 }} 
                className='w-full lg:w-3/4'
              >
                <h6 className='mb-4 text-xl font-semibold'>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='gradient-text hover:opacity-80 transition-opacity duration-200'
                  >
                    {project.title}
                  </a>
                </h6>
                <p className='mb-6 text-neutral-300 leading-relaxed'>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects