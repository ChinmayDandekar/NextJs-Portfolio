import React, { useRef } from 'react'
import { useScroll, motion } from "framer-motion"
import LiIcon from './LiIcon'



const Details = ({ degree, institution, time, place, grade }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] pl-20 mx-auto flex flex-col items-start justify-between md:w-[80%] md:pl-10'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className='w-full'
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {degree}
                </h3>
                <h2 className=' capitalize font-bold text-xl text-primary dark:text-primaryDark '>
                    {institution}
                </h2>
                <span className='capitalize font-medium text-dark/70 dark:text-light/75 xs:text-sm'>
                    {time} &nbsp;|&nbsp; {place}
                </span>
                <p className='font-medium w-full xs:text-sm'>
                    {grade}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
            // layoutEffect:false,
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
                Education
            </h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
                <motion.div
                    ref={ref}
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />
                <ul className='w-full flex flex-col items-start justify-between xs:ml-2 ' >
                    <Details degree="Secondary School Certificate Board" institution="National English High School" time="2012 - 2017" place="Virar, Maharashtra" grade="Percentage: 90%" />
                    <Details degree="Higher Secondary School Certificate Board" institution="Utkarsha Vidyalaya Junior College" time="2017 - 2019" place="Virar, Maharashtra" grade="Score: First Class" />
                    <Details degree="Bachelor Of Engineering in Computer Science" institution="Mumbai University" time="2019 - 2023" place="Palghar, Maharashtra" grade="CGPA: 8.6 / 10" />
                </ul>
            </div>
        </div>
    )
}

export default Education