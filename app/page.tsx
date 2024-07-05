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
    <main className="min-h-screen p-4 md:p-12 lg:p-24">

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 font-mono"
      >
        Hello, <span className="text-[teal]">I&apos;m Collins</span>. Welcome to my Portfolio
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl mb-8 font-mono"
      >
        What brings you to here?
      </motion.h2>

      <motion.div initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`cursor-pointer p-6 border border-[#28084d]
               bg-[#230842] rounded-lg shadow-md hover:bg-slate-900 ${selectedOption === option.page ? 'border-gray-500' : ''
              }`}
          >
            {option.icon}
            <h1 className="font-bold text-2xl text-center underline m-2 font-mono text-[teal]">{option.title}</h1>

            <p className="text-center font-mono">{option.body}</p>

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
          float-end text-white rounded-lg ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'bg-[#300a5c] hover:bg-slate-900'
          }`}>
        Let&apos;s Go! <FaArrowRight />
      </motion.button>



    </main>
  );
}
