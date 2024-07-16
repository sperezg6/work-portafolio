import React from 'react'
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWraper } from '../hoc';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5 * index,0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options ={{
            max: 45,
            scale: 1.05,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5
          px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variance ={textVariant()}>
        <p className ={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className = "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled and passionate Tech Analyst with a strong background in
        data analysis and software development. I have a Bachelor's degree in Mechatronics Engineer and I'm currently working as a Tech Analyst at a fintech company in Mexico City. I'm always looking for new challenges and opportunities to grow and learn. I have a profound interest in data science and machine learning.
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard  key={service.title}
          index={index}{...service}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWraper(About, "about")