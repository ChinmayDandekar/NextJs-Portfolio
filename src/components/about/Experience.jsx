import React, { useRef } from 'react'
import { useScroll, motion } from "framer-motion"
import LiIcon from './LiIcon'



const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] '>
            <LiIcon />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position} &nbsp;-&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/70 dark:text-light/75  xs:text-sm'>
                    {time} | {address}
                </span>
                <ul className='list-disc	'>

                    {work.map((line) => {
                       return  <li className='font-medium w-full xs:text-sm'>
                            {line}
                        </li>
                    })}
                </ul>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
                Experience
            </h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    ref={ref}
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                  md:w-[2px] md:left-[30px] xs:left-[20px]
                  ' />
                <ul className='w-full flex flex-col items-start justify-between xs:ml-2 ' >
                    <Details
                        position='Next Js Developer'
                        company="@Techknit Industries"
                        companyLink=""
                        time="Dec 2023-Present"
                        address=" Mumbai, Maharashtra"
                        work={["Led the development of stock market analysis games, showcasing innovation and technical skills."," Implemented efficient gameloop execution using Next.js serverless functions, cutting costs.", "Developed a real-time dashboard for admins to monitor user activity and adjust game rules instantly.", "Enhanced functionality with data visualization techniques and ensured robust data management using AWS S3."]}


                    />
                    {/* <Details
                        position='Software Engineer'
                        company="@Google"
                        companyLink=""
                        time="2022-Present"
                        address=" Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                      search engine, including improving the accuracy and relevance of search results and 
                      developing new tools for data analysis and visualization."
                    />
                    <Details
                        position='Software Engineer'
                        company="@Google"
                        companyLink=""
                        time="2022-Present"
                        address=" Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                      search engine, including improving the accuracy and relevance of search results and 
                      developing new tools for data analysis and visualization."
                    />
                    <Details
                        position='Software Engineer'
                        company="@Google"
                        companyLink=""
                        time="2022-Present"
                        address=" Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                      search engine, including improving the accuracy and relevance of search results and 
                      developing new tools for data analysis and visualization."
                    /> */}
                </ul>
            </div>
        </div>
    )
}

export default Experience