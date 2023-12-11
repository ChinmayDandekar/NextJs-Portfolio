import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import certificate1 from "../../public/images/certificates/Programming in JavaScript SS.png"
import certificate2 from "../../public/images/certificates/Version Control SS.png"
import certificate3 from "../../public/images/certificates/Introduction to Frontend Dev SS.png"
import { motion } from 'framer-motion'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'

	
const FramerImage = motion(Image);
const Certifications = () => {

	const Certificate = ({ orgnization, title, date, img, link,   }) => {
		return (
			<article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid  border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative
				lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
			'>
				<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light
					xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
				 ' />
	
				<Link href={link} target="_blank"
					className='w-1/3 cursor-pointer overflow-hidden rounded-lg lg:w-full  '
				>
					<FramerImage src={img} alt={title} className='w-full h-auto '
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
					/>
			   
				</Link>
				<div className='w-2/3 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
					<div className='w-full mt-2 flex items-center justify-between'>
						<span className='text-primary dark:text-primaryDark font-bold text-xl xs:text-base '>{orgnization}</span>
					</div>
					<Link href={link} target="_blank"  className='hover:underline underline-offset-2'>
						<h2 className='my-2 w-full text-left text-4xl text-dark dark:text-light font-bold sm:text-xl'>{title}</h2>
					</Link>
					
					<p className=' my-2 font-medium text-dark dark:text-light sm:text-base'>{"Completed In " + date}</p>

					<div className='w-full mt-2 flex items-center justify-between'>
						<Link href={link} target='_blank'
							className=' rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
								sm:px-4 sm:text-base
							'
						>
							View Certificate
						</Link>
						

					</div>
	
				</div>
			</article>
		)
	}
	return (
		<>
            <Head>
                <title> Chinmay Dandekar | Certificates Page

                  
                </title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className="pt-16">
                    <AnimatedText text="Courses & Certificates" className=' mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
					<div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-24 sm:gap-x-0 '>
					<div className='col-span-12'>
                            <Certificate 
                                title="Version Control"
                                date="December 2023"
                                link="https://www.coursera.org/account/accomplishments/records/PN8RK5R73QAD"
                                orgnization="Meta"
                                img={certificate2}

                            />
						</div>
                        <div className='col-span-12'>
                            <Certificate 
                                title="Programming with JavaScript"
                                date="September 2023"
                                link="https://www.coursera.org/account/accomplishments/certificate/DZQXPFQVYTKB"
                                orgnization="Meta"
                                img={certificate1}

                            />
                        </div>
						
						<div className='col-span-12'>
                            <Certificate 
                                title="Introduction to Front-End Development"
                                date="August 2023"
                                link="https://www.coursera.org/account/accomplishments/certificate/5CHWRWLC6H8L"
                                orgnization="Meta"
                                img={certificate3}

                            />
                        </div>
                       
                       
                       
                       
                    </div>
                </Layout>
            </main>
        </>
	)
}

export default Certifications