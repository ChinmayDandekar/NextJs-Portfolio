import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon, InstagramIcon, IndeedIcon } from './Icons';
import { motion } from "framer-motion";
import { SiIndeed } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {

  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
    </Link>
  )
}
const CustomMobileLink = ({ href, title, className = "", toggle }) => {

  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block
       bg-light absolute left-0
       -bottom-0.5 group-hover:w-full transition-[width]
       ease duration-300
       ${router.asPath === href ? "w-full" : "w-0"}
       dark:bg-dark
       `}
      >&nbsp;</span>
    </button>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between  dark:text-light relative z-10 lg:px-12 sm:px-8'>

      <button className={`flex-col justify-center items-center hidden lg:flex `} onClick={handleClick} >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Desktop Nav Menu */}
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav  >
          {/* <CustomLink href='/' title="Home" className='mr-4' /> */}
          <CustomLink href='/about' title="About" className='mr-4' />
          <CustomLink href='/projects' title="Projects" className='mx-4' />
          {/* <CustomLink href='/articles' title="Articles" className='mx-4' /> */}
          <CustomLink href='/certificates' title="Certificates" className='mx-4' />
          <CustomLink href='/contact' title="Contact" className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap '>
          <motion.a href='https://www.instagram.com/shiinmoi/' target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=' mr-3'
          >
            <GrInstagram className='text-2xl' />

          </motion.a>
          <motion.a href='https://github.com/ChinmayDandekar' target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <GithubIcon />
          </motion.a>
          <motion.a href='https://www.linkedin.com/in/chinmayndandekar/' target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a href='https://www.linkedin.com/in/chinmayndandekar/' target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='ml-3 dark:bg-light dark:text-dark p-1 rounded-md'
          >
            <SiIndeed className='text-xl '/>
          </motion.a>
          


          <button
            onClick={() => setMode(mode === 'light' ? "dark" : "light")}
            className={` ml-10 flex items-center justify-center rounded-full p-2 px-4 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            <div className='mr-2 font-semibold'>
              {
                mode === "dark" ?
                  "Dark" :
                  "Light"
              }
            </div>

            {
              mode === "dark" ?
                <SunIcon className="fill-dark" /> :
                <MoonIcon className="fill-dark" />
            }
          </button>
        </nav>
      </div>


      {/* Mobile Nav Menu */}
      {
        isOpen ?
          <motion.div
            className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <nav className='flex items-center flex-col justify-center'>
              <CustomMobileLink href='/' title="Home" className='' toggle={handleClick} />
              <CustomMobileLink href='/about' title="About" className='' toggle={handleClick} />
              <CustomMobileLink href='/projects' title="Projects" className='' toggle={handleClick} />
              <CustomMobileLink href='/certificates' title="Certificates" className='' toggle={handleClick} />
              <CustomMobileLink href='/contact' title="Contact" className='' toggle={handleClick} />
            </nav>

            <nav className='flex items-center justify-center flex-wrap mt-8 '>
              <motion.a href='https://www.instagram.com/shiinmoi/' target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mr-3 sm:mx-1'
              >
                <GrInstagram className=' text-light dark:text-dark text-2xl'/>

              </motion.a>
              <motion.a href='https://github.com/ChinmayDandekar' target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full'
              >
                <GithubIcon />
              </motion.a>
              <motion.a href='https://www.linkedin.com/in/chinmayndandekar/' target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 sm:mx-1'
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a href='https://www.linkedin.com/in/chinmayndandekar/' target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className=' mx-r sm:mx-1 bg-light p-1 rounded-md'
              >
                <SiIndeed className='text-xl  dark:text-dark '/>
              </motion.a>
             


              <button
                onClick={() => setMode(mode === 'light' ? "dark" : "light")}
                className={` ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              >
                {
                  mode === "dark" ?
                    <SunIcon className="fill-dark" /> :
                    <MoonIcon className="fill-dark" />
                }
              </button>
            </nav>
          </motion.div>
          :
          null
      }

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar