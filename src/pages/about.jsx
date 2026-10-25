import AnimatedText from '@/components/global/AnimatedText'
import Layout from '@/components/global/Layout'
import Skills from '@/components/about/Skills'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ProfilePic from '../../public/images/profile/Chinmay pic.jpg'
import { useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Education from '@/components/about/Education'
import Experience from '@/components/about/Experience'
import TransitionEffect from '@/components/global/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}>{value}</span>
    )



}


const about = () => {
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        const hash = router.asPath.split('#')[1]
        if (!hash) return
        const timeout = setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 600)
        return () => clearTimeout(timeout)
    }, [router.isReady, router.asPath])

    return (
        <>
            <Head>
                <title> Chinmay Dandekar | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className={"pt-16"}>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4  md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>Biography</h2>
                            <p className='font-medium'>
                                Hi, I&apos;m Chinmay Dandekar, a Software Developer with 3+ years of experience building production-grade applications across backend, full-stack, and product engineering.
                            </p>
                            <p className='font-medium my-4'>
                                Currently, I work on a microservices-based cybersecurity product, owning and maintaining the SBOM (Software Bill of Materials) module. My work spans Node.js, Express.js, Docker, Redis, CI/CD integrations, enterprise authentication, vulnerability management, and software supply chain security.
                            </p>
                            <p className='font-medium my-4'>
                                I enjoy solving complex engineering problems around performance, scalability, and reliability. From optimizing large-scale SBOM report generation to building enterprise integrations and security features, I like understanding systems end-to-end and turning challenging requirements into maintainable solutions.
                            </p>
                            <p className='font-medium'>
                                I also work closely with QA, DevOps, clients, and junior developers, giving me experience beyond implementation and across the complete product development lifecycle.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 xl:items-center md:order-1 md:col-span-8' >
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light  ' />
                            <Image src={ProfilePic} alt="Chinmay"
                                className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:tet-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satified clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold  md:text-6xl sm:tet-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold  md:text-6xl sm:tet-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about