import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='border-b border-neutral-800 pb-20 py-16'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.6 }} 
        className='mb-16 text-center text-4xl lg:text-5xl font-light'
      >
        <span className="gradient-text">İletişim</span>
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-8 max-w-2xl mx-auto"
      >
        <div className='text-center space-y-6'>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <FaMapMarkerAlt className="text-purple-400 text-xl" />
            <p className='text-lg'>{CONTACT.address}</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: 100 }} 
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <FaPhone className="text-blue-400 text-xl" />
            <p className='text-lg'>{CONTACT.phoneNo}</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <FaEnvelope className="text-green-400 text-xl" />
            <a 
              href={`mailto:${CONTACT.email}`} 
              className='text-lg gradient-text hover:opacity-80 transition-opacity duration-200'
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact