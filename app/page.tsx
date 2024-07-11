"use client"


import Image from "next/image";
import { RiUserSearchLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { ReactElement, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {

  const [selectedOption, setSelectedOption] = useState<string>();
  const [isDown, setIsDown] = useState(false)
  const router = useRouter();

  type optionType = {
    title: string
    page: string
    body: string
    icon: ReactElement
  }

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
      title: "I'm Hiring",
      page: "/hire",
      body: "I have an open position at my company and I believe that you are the person I have been searching for",
      icon: <RiUserSearchLine className="text-center" size={24} />
    },

    {
      title: "I have a project for you",
      page: "/project",
      body: "I need a website for my busines and I believe that you are the right person to work on it for me",
      icon: <BsPersonWorkspace className="text-center" size={24} />
    },
    {
      title: "Collabotation",
      page: "https://github.com/c-o-m-o-n",
      body: "I have an open source project that I need help with. Do you mind helping me?",
      icon: <LiaPeopleCarrySolid className="text-center" size={24} />
    },
    {
      title: "Buy You a coffee",
      page: "https://buymeacoffee.com/comon",
      body: "I saw your work and boy, you are not that bad :). Let me buy you a coffee!!",
      icon: <SiBuymeacoffee className="text-center" size={24} />
    }
  ]

  return (
    <>
    <main className="min-h-screen p-4 md:p-12 lg:p-24">

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 font-mono"
      >
        Hello, <span className="text-[green]">I&apos;m Collins</span>. Welcome to my Portfolio
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl mb-8 font-mono"
      >
        What brings you here?
      </motion.h2>

      <motion.div initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`cursor-pointer p-6 border dark:border-[#28084d]
             bg-[#d8e1ec] dark:bg-[#230842] rounded-lg shadow-md hover:bg-[#3f4444]  ${selectedOption === option.page ? 'border-[#28084d] dark:border-white' : ''
              }`}
          >
            {option.icon}
            <h1 className="font-bold text-2xl text-center underline m-2 font-mono text-[green]">{option.title}</h1>

            <p className="text-center dark:text-[#d8e1ec] hover:text-[#d8e1ec] font-mono">{option.body}</p>

          </div>
        ))}
      </motion.div>
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

      {/* <div className="fixed bottom-4 left-[50%] flex flex-col space-y-2">
        {isDown ? (
<button
          onClick={handleScrollUp}
          className="px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-700"
        >
          Go Back Up
        </button>
        ) :  (
<button
          onClick={handleScrollDown}
          className="px-4 py-2 bg-[#230842] text-white rounded-full shadow-lg hover:bg-[#3f4444] "
        >
          Explore  me
        </button>
        )}
      </div> */}
    </main>
        </>
  );
}
