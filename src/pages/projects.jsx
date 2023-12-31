import React from 'react'
import Head from 'next/head'
import Layout from '@/components/global/Layout'
import AnimatedText from '@/components/global/AnimatedText'
import { GithubIcon } from '@/components/global/Icons'
import project1 from "../../public/images/projects/netflix-clone-ss.png"
import project2 from "../../public/images/projects/PasswordManager.png"
import project3 from "../../public/images/projects/Portfolio Website SS.png"
import project4 from "../../public/images/projects/Project Encrypt it SS.png"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/global/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid  border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light
                xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
             ' />

            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full  '
            >
                <FramerImage src={img} alt={title} className='w-full h-auto '
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />

            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl text-dark dark:text-light font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className=' my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link className=" w-10 " href={github} target='_blank'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank'
                        className=' ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
                            sm:px-4 sm:text-base
                        '
                    >
                        Visit Project
                    </Link>
                </div>

            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full h-auto flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative
            xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light
                md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]
            ' />

            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto  '
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base '>{type}</span>
                <Link href={link} target="_blank" >
                    <h2 className='my-2 w-full text-left text-3xl text-dark dark:text-light font-bold hover:underline underline-offset-2 lg:text-2xl '>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between '>
                    <Link href={link} target='_blank'
                        className=' text-lg font-semibold underline text-dark dark:text-light md:text-base'
                    >
                        Visit
                    </Link>
                    <Link className=" w-8 md:w-6" href={github} target='_blank'>
                        <GithubIcon className={"fill-dark dark:fill-light"} />
                    </Link>

                </div>

            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title> Chinmay Dandekar | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className=' mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl ' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-24 sm:gap-x-0 '>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Netflix Clone Website"
                                summary="A Netflix Clone App using Next Js, Tailwind CSS, TMDB movies API, TypeScript, Firebase and Stripe API. 
                                        It is a detailed replica of the Netflix site with all its important features like user login system, user subscription system, 
                                        Movie descriptions, Movie previews and fulfledge user subscription."
                                link='https://netflix-clone-yt-chinmaydandekar.vercel.app/'
                                github='https://github.com/ChinmayDandekar/netflix-clone-yt'
                                type="Featured Project"
                                img={project1}

                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="
                                Project Encrypt It"
                                summary="Encrypt it is an file and text encryption software developed using Java. The encrypted files can be decrypted only in the app with the same secret key which was used encrypt the files."
                                link='https://github.com/ChinmayDandekar/Project-ENCRYPT-IT'
                                github='https://github.com/ChinmayDandekar/Project-ENCRYPT-IT'
                                type="Featured Project"
                                img={project4}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="
                                Portfolio Website"
                                summary="This is my personal portfolio website which showcases my skills in Web Development. It is a fully responsive website and also has dark mode."
                                link='/'
                                github='https://github.com/ChinmayDandekar/NextJs-Portfolio'
                                type="Featured Project"
                                img={project3}
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Password Manager Website"
                                summary="Its a Password Manager Web Application built using Python and Django framework. It can securely store users passwords and documents by encrypting them first and storing it systematically in the database.."
                                link='https://github.com/ChinmayDandekar/PasswordManager'
                                github='https://github.com/ChinmayDandekar/PasswordManager'
                                type="Featured Project"
                                img={project2}
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>

    )
}

export default projects