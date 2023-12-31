import React from 'react'
import Head from 'next/head'
import Layout from '@/components/global/Layout'
import AnimatedText from '@/components/global/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/projects/netflix-clone-ss.png'
import article2 from '../../public/images/projects/netflix-clone-ss.png' 
import article3 from '../../public/images/projects/netflix-clone-ss.png' 
import article4 from '../../public/images/projects/netflix-clone-ss.png'  
import article5 from '../../public/images/projects/netflix-clone-ss.png' 
import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react'
import TransitionEffect from '@/components/global/TransitionEffect'

const FramerImage = motion(Image);


const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouse = (event) => {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    const handleMouseLeave = (event) => {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    };



    return (
        <Link href={link} target='_black'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className=' capitalize text-xl font-semibold hover:underline '>
                {title}
            </h2>
            <FramerImage ref={imgRef} src={img} alt={title}
                className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
            />
        </Link>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light rounded-2xl relative'>
            <Link href={link} target="_blank"
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light ' />

                <FramerImage src={img} alt={title}
                    className='w-full h-auto '
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" f
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 '>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            className='relative  w-full p-4 py-6 my-4 rounded-xl flex items-center 
            justify-between bg-light  text-dark first:mt-0 border border-solid 
            border-dark  border-r-4 border-b-4 dark:text-light dark:bg-dark 
            dark:border-light
            sm:flex-col
            '
            initial={{ y: 200 }}
            whileInView={{
                y: 0, transition: {
                    duration: 0.2,
                    ease: "easeInOut"
                }
            }}
            viewport={{ once: true }}
        >

            <MovingImg title={title} img={img} link={link} />
            <span className=' text-primary dark:text-primaryDark font-semibold pl-4  sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title> Chinmay Dandekar | Articles Page


                </title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className="pt-16">
                    <AnimatedText text="Words Can Change The World!" className=' mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className=' grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle
                            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, animi!"
                            summary="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas facilis quis ratione, maiores ab eum nihil minima veritatis optio. Doloremque eum necessitatibus consectetur nostrum esse, quam ipsum in pariatur laudantium."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, animi!"
                            summary="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas facilis quis ratione, maiores ab eum nihil minima veritatis optio. Doloremque eum necessitatibus consectetur nostrum esse, quam ipsum in pariatur laudantium."
                            time="9 min read"
                            link="/"
                            img={article2}
                        />
                    </ul>

                    <h2 className=' font-bold text-4xl w-full text-center my-16 mt-32 '>All Articles</h2>
                    <ul>
                        <Article
                            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, animi!"
                            img={article5}
                            date="Oct 19th, 2023"
                            link="/"
                        />
                        <Article
                            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, animi!"
                            img={article3}
                            date="Oct 19th, 2023"
                            link="/"
                        />
                        <Article
                            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, animi!"
                            img={article4}
                            date="Oct 19th, 2023"
                            link="/"
                        />
                        <Article
                            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, animi!"
                            img={article5}
                            date="Oct 19th, 2023"
                            link="/"
                        />
                        <Article
                            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, animi!"
                            img={article3}
                            date="Oct 19th, 2023"
                            link="/"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles