
"use client"

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { ReactElement, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Showcase() {

  const [selectedOption, setSelectedOption] = useState<string>();
  const [isDown, setIsDown] = useState<boolean>(false)
  // const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const router = useRouter();

  type optionType = {
    title: string
    link: string
    body: string
    image: string
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsDown(currentScrollPos > prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const handleOptionClick = (option: optionType) => {
    setSelectedOption(option.link);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      router.push(selectedOption); // Replace with your next page route
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setIsDown(!isDown)
  };

  const handleScrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setIsDown(!isDown)
  };

let options = [
    {
      title: "Friends of the people DAO serer",
      link: "https://github.com/Friendsofthepeople/django-recall-server",
      body: "A Django server for managing the verification of constituents, publishing of representative information, and signing to recall them.",
      image: "https://github.com/Friendsofthepeople/django-recall-server/raw/main/assets/images/Parliament.png"
    },
    {
        title: "Imagisha",
        link: "https://imagisha.vercel.app/",
        body: "an AI-powered image generation and and transformation platform",
        image: "https://github.com/C-o-m-o-n/imagisha/blob/main/public/imagisha-icon.png?raw=true"
      },
    {
        title: "Jumbo Movies",
        link: "https://jumbo-filmz.vercel.app/",
        body: "Get Unlimited movies, Series and more",
        image: "https://github.com/C-o-m-o-n/jumbo-filmz/blob/main/public/jumbofilmz.jpeg?raw=true"
      },

      {
        title: "Jumbo Movies",
        link: "blood-bank-tknp.onrender.com/",
        body: "This is an open-source initiative aimed at promoting blood donation and saving lives through a user-friendly website.",
        image: "https://github.com/C-o-m-o-n/Blood-bank-tknp/blob/main/static/images/blood-1.jpg?raw=true"
      },
]

    return (
        <>
          <main className="min-h-screen p-4 md:p-12 lg:p-24">
    
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4 font-mono">
                Checkout some of <span className="text-[green]">My projects.</span> </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl mb-8 font-mono"
              >
                See me  from my <a className="underline" href="https://github.com/C-o-m-o-n/">github</a> account
              </motion.h2>
            </div>
    
            <motion.div initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`cursor-pointer p-6 border dark:border-[#28084d]
                 bg-[#d8e1ec] dark:bg-[#230842] rounded-lg shadow-md hover:bg-[#4a108b]
                   ${selectedOption === option.link ? 'border-[#28084d] dark:border-white' : ''
                    }`}>
                   <Image src={option.image} alt={option.title} width={400} height={200} className="rounded"/>
                  <h3 className="font-bold text-center underline m-2
                   font-mono text-[green]">{option.title}</h3>
                  <p className="text-center dark:text-[#d8e1ec] hover:text-[#d8e1ec] font-mono">{option.body}</p>
    
                </div>
              ))}
            </motion.div>
    
    
              <div>
                <div className="hidden md:block"></div>
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={handleNextClick}
                disabled={!selectedOption}
                className={`flex items-center gap-4 px-4 py-2 bg-slate-900
              float-end text-white rounded-lg ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'bg-[#230842] hover:bg-[#3f4444] '
                  }`}>
                Let&apos;s Go! <FaArrowRight />
              </motion.button>
              </div>
    
          </main>
        </>
      );
    }