"use client"

import { RiUserSearchLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaImages, FaLinkedin, FaGithub, } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";


export default function Home() {

  const [selectedOption, setSelectedOption] = useState<string>();
  const [isDown, setIsDown] = useState<boolean>(false)
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const router = useRouter();

  type optionType = {
    title: string
    page: string
    body: string
    icon: ReactElement
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
    setSelectedOption(option.page);
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
      title: "Hiring?",
      page: "/hire",
      body: "Searching for a potential person to hire?",
      icon: <RiUserSearchLine className="text-center" size={24} />
    },

    {
      title: "Need help with a project?",
      page: "/project",
      body: "I need help with a project you've been working on?",
      icon: <BsPersonWorkspace className="text-center" size={24} />
    },
    {
      title: "Collabotation?",
      page: "https://github.com/c-o-m-o-n",
      body: "Have an open source project that needs collaboration?",
      icon: <LiaPeopleCarrySolid className="text-center" size={24} />
    },
    {
      title: "Buy me a coffee?",
      page: "https://buymeacoffee.com/comon",
      body: "Want to buy me a coffee. That's nice of you 😊😊😊😊",
      icon: <SiBuymeacoffee className="text-center" size={24} />
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
            Hello👋👋, <span className="text-[green] animate-ping">I&apos;m Collins Omondi.</span> I&apos;m a software developer based in Kenya
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl mb-8 font-mono"
          >
            What brings you here?
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
             bg-[#d8e1ec] dark:bg-[#230842] rounded-lg shadow-md hover:bg-[#4a108b]  ${selectedOption === option.page ? 'border-[#28084d] dark:border-white' : ''
                }`}>
              {option.icon}
              <h1 className="font-bold text-2xl text-center underline m-2 font-mono text-[green]">{option.title}</h1>

              <p className="text-center dark:text-[#d8e1ec] hover:text-[#d8e1ec] font-mono">{option.body}</p>

            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }} className="grid grid-cols-2  gap-16 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {/* <div className="md:left-[50%] flex flex-col space-y-2">
              {isDown ? (
                <button
                  onClick={handleScrollUp}
                  className=" p-2 bg-[#230842] text-white rounded-full shadow-lg hover:bg-[#4a108b]">
                  <FaArrowUp />
                </button>
              ) : (
                <button
                  onClick={handleScrollDown}
                  className=" p-2 bg-[#230842] text-white rounded-full shadow-lg hover:bg-[#4a108b] "
                >
                  <FaArrowDown />
                </button>
              )}
            </div> */}
            <a href="/showcase">
            <button
              onClick={handleScrollDown}
              className="flex justify-center items-center gap-2 px-4 py-2 bg-[#230842]
               text-white rounded-full shadow-lg hover:bg-[#4a108b] ">
              <FaImages />
              <span className="hidden md:block">Projects</span>
            </button>
            </a>

            <a href="https://comon.hashnode.dev/">
            <button
              className="flex justify-center items-center gap-2 p-2 bg-[#230842] text-white rounded-full shadow-lg hover:bg-[#4a108b] ">
              <FaHashnode />
              <span className="hidden md:block">Blog</span>
            </button>
            </a>

            <a href="https://github.com/c-o-m-o-n">
            <button
              className="flex justify-center items-center gap-2 p-2 bg-[#230842] text-white rounded-full shadow-lg hover:bg-[#4a108b] ">
              <FaGithub />
              <span className="hidden md:block">Github</span>
            </button>
            </a>

            <a href="https://linkedin.com/in/c-o-m-o-n">
            <button
              className="flex justify-center items-center gap-2 p-2 bg-[#230842] text-white rounded-full shadow-lg hover:bg-[#4a108b] ">
              <FaLinkedin />
              <span className="hidden md:block">LinkedIn</span>
            </button>
            </a>

          </div>

          <div>
            <div className="hidden md:block"></div>
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={handleNextClick}
            disabled={!selectedOption}
            className={`flex items-center gap-4 px-4 py-2 bg-slate-900 float-end text-white rounded-lg opacity-50 ${selectedOption ? 'bg-[purple] hover:bg-[#3f4444] opacity-100 ' : 'cursor-not-allowed'}`}>
            Let&apos;s Go! <FaArrowRight />
          </motion.button>
          </div>
        </motion.div>

      </main>
    </>
  );
}
