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
        I'm a skilled and passionate web developer with a strong foundation 
        in React JS, Redux Toolkit, and Tailwind CSS. I have a keen eye for detail and a strong ability to work with others to create beautiful and functional websites. I'm also a React Native developer with experience in building mobile applications for both iOS and Android. I have a strong understanding of JavaScript and TypeScript, and I'm always looking to learn new technologies and improve my skills. I'm a backend developer with experience in Node.js, Express, and MongoDB. I have a strong understanding of RESTful APIs and database design, and I'm always looking to improve my skills and learn new technologies. I'm also a content creator with experience in writing blog posts, creating videos, and managing social media accounts. I have a strong understanding of SEO and content marketing, and I'm always looking to improve my skills and create engaging content.
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