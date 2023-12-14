// "use client"
import React, { useState } from 'react';
import TransitionEffect from '@/components/global/TransitionEffect';
import Layout from '@/components/global/Layout';
import Head from 'next/head';
import AnimatedText from '@/components/global/AnimatedText';
import Link from 'next/link';
import { GithubIcon, LinkedInIcon } from '@/components/global/Icons';
import { SiIndeed } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import Script from 'next/script';





const contact = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState(false)



	async function handleSubmit(event) {

		const formData = new FormData(event.target)
		try {

			const response = await fetch('/api/contact', {
				method: 'post',
				body: formData,
			});

			if (!response.ok) {
				console.log("falling over")
				throw new Error(`response status: ${response.status}`);
			}
			const responseData = await response.json();
			console.log(responseData['message'])

			alert('Message successfully sent');
		} catch (err) {
			console.error(err);
			alert("Error, please try resubmitting the form");
		}
	};





	return (
		<>

			<Head>
				<title>Chinmay Dandekar | Contact Page</title>
				<meta name="description" content="Generated by create next app" />

			</Head>
			<TransitionEffect />
			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className="pt-4">
					<AnimatedText className='text-6xl lg:text-4xl' text={"Get In Touch."} />
					<div className='grid grid-cols-8 w-full  h-auto py-10 '>

						<div
							className='col-span-4 w-[80%]  h-auto  mx-auto p-12 flex flex-col gap-6 items-start justify-center relative rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light lg:col-span-8 lg:w-[50%] md:w-full lg:p-8'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light  ' />

							<form
								action="https://formsubmit.co/8392485cd83b4be29a262fe0d3976c14" method="POST"
								// onSubmit={handleSubmit}
								className=' w-full  h-max mx-auto  flex flex-col gap-6 items-start justify-center  bg-light dark:bg-dark  lg:col-span-8'>

								<div className='  w-full h-auto'>
									<input name="name" onChange={(e) => setName(e.target.value)} value={name}  type="text" placeholder='Name' className=' w-full h-auto py-3 px-5 bg-light border-2 border-solid border-primary placeholder-dark/70 dark:placeholder-light/75 outline-none rounded-md text-dark/75  text-lg lg:text-sm lg:px-3 font-medium dark:text-light dark:border-primaryDark dark:bg-dark' />
								</div>
								<div className='  w-full h-auto'>
									<input name="email" onChange={(e) => setEmail(e.target.value)} value={email}  type="email" placeholder='Email' className=' w-full h-auto py-3 px-5 bg-light border-2 border-solid border-primary placeholder-dark/70 dark:placeholder-light/75 outline-none rounded-md text-dark/75  text-lg lg:text-sm lg:px-3 font-medium dark:text-light dark:border-primaryDark dark:bg-dark' />

								</div>
								<div className='w-full h-auto'>
									<textarea name="message" onChange={(e) => setMessage(e.target.value)} value={message}  type="text" placeholder='Message' className=' w-full h-auto py-3 px-5 bg-light border-2 border-solid border-primary placeholder-dark/70 dark:placeholder-light/75 outline-none rounded-md text-dark/75  text-lg lg:text-sm lg:px-3 font-medium dark:text-light dark:border-primaryDark dark:bg-dark' />

								</div>
								<button type="submit" className=' bg-dark text-light p-2.5 px-6 rounded-lg text-base lg:text-sm font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                 				 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:pd-2 md:px-4 md:text-base'
								>
									Send
								</button>
							</form>


						</div>

						<div className='col-span-4 w-[70%]  h-auto  mx-auto p-8 flex flex-col items-start justify-center relative rounded-2xl  bg-light dark:bg-dark  lg:col-span-8 lg:items-center lg:my-8 lg:w-full'>
							<div className=' text-dark  font-bold text-3xl  mb-6 sm:text-2xl   dark:text-light'>
								Chinmay Dandekar
							</div>
							<div className='font-semibold text-base mb-1 text-dark lg:text-sm dark:text-light '>
								<span className=''>Email</span>: <a href='mailto:chinmay2001.cd@gmail.com' className=' text-primary dark:text-primaryDark underline decoration-[1px] underline-offset-4   '>chinmay2001.cd@gmail.com</a>
							</div>
							<div className='font-semibold text-base my-1  text-dark lg:text-sm dark:text-light '>
								Phone: <span className='' >+91 9673236656</span>
							</div>
							<div className='font-semibold text-base my-1 text-dark lg:text-sm dark:text-light '>
								Pincode: 401303
							</div>
							<div className='font-semibold text-base mt-1 text-dark lg:text-sm dark:text-light '>
								Mumbai <span className='text-primary dark:text-primaryDark font-bold'>|</span> Maharashtra <span className='text-primary dark:text-primaryDark font-bold'>|</span> India
							</div>

							<div className='w-full flex items-center justify-start  mt-6 gap-4 lg:justify-center'>

								<a target='_blank' href="https://github.com/ChinmayDandekar" className='w-10 lg:w-7'>
									<GithubIcon />
								</a>
								<a target='_blank' href="https://www.linkedin.com/in/chinmayndandekar/" >
									<FaLinkedin className='text-4xl lg:text-2xl' />
								</a>

								<a target='_blank' href="https://www.instagram.com/shiinmoi/" className=''>
									<GrInstagram className='text-4xl lg:text-2xl' />
								</a>
								<a target='_blank' href="https://www.linkedin.com/in/chinmayndandekar/" className=' dark:bg-light p-1 rounded-md'>
									<SiIndeed className='text-3xl   dark:text-dark  lg:text-xl' />
								</a>
							</div>

						</div>
					</div>
				</Layout>
			</main>

		</>
	)
}

export default contact