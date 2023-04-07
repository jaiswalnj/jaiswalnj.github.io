import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

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
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    I am a computer science engineering student with a passion for technology, I have dedicated my studies to becoming proficient in web and blockchain development. With a strong foundation in programming languages such as JavaScript, HTML, CSS, and Solidity, I have developed a range of projects that demonstrate my ability to create dynamic, responsive, and secure web applications and blockchain-based solutions.

Throughout my academic journey, I have honed my skills through hands-on experience working on various web development projects, including developing websites from scratch and designing responsive user interfaces. Additionally, I have delved into blockchain development, leveraging smart contracts to create decentralized applications (dApps) that enable secure and transparent transactions.

My ability to stay up-to-date with the latest technologies, coupled with my passion for learning and problem-solving, makes me a highly motivated and creative individual. I am eager to continue expanding my skillset and contributing to the development of innovative solutions in the field of computer science.
    </motion.p>
   
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")