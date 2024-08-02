
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
    title: "Uamuzi Foundation",
    link: "https://uamuzi.org",
    body: "Africa's next generation of innovators with STEAM education",
    image: "https://raw.githubusercontent.com/C-o-m-o-n/image-archive/main/uamuzi.png?token=GHSAT0AAAAAACUCWTTMPRLNYAWSPEBHEZVOZVMS36Q"
  },

  {
    title: "Handz-on Africa",
    link: "https://handzonafrica.org",
    body: "Africa's next generation of innovators with STEAM education",
    image: "https://raw.githubusercontent.com/C-o-m-o-n/image-archive/main/handzonafrica.png?token=GHSAT0AAAAAACUCWTTNOFQMQWYJP5PHI3JWZVMTEDA"
  },
    {
        title: "Imagisha",
        link: "https://imagisha.vercel.app/",
        body: "an AI-powered image generation and and transformation platform",
        image: "https://raw.githubusercontent.com/C-o-m-o-n/image-archive/main/imagisha.png?token=GHSAT0AAAAAACUCWTTMSQESC7JS4UJEB6WIZVMTIYA"
      },
    {
        title: "Jumbo Movies",
        link: "https://jumbo-filmz.vercel.app/",
        body: "Get Unlimited movies, Series and more",
        image: "https://raw.githubusercontent.com/C-o-m-o-n/image-archive/main/jumbo-filmz.png?token=GHSAT0AAAAAACUCWTTMSHKSSWPPCXRB4JZGZVMTIEA"
      },

      {
        title: "Online Blood Bank",
        link: "https://blood-bank-tknp.onrender.com/",
        body: "This is an open-source initiative aimed at promoting blood donation and saving lives through a user-friendly website.",
        image: "https://raw.githubusercontent.com/C-o-m-o-n/image-archive/main/blood-bank.png?token=GHSAT0AAAAAACUCWTTMZVOQK3XJHZ7TRXPYZVMTKDA"
      },
      {
        title: "Friends of the people DAO serer",
        link: "https://github.com/Friendsofthepeople/django-recall-server",
        body: "A Django server for managing the verification of constituents, publishing of representative information, and signing to recall them.",
        image: "https://github.com/Friendsofthepeople/django-recall-server/raw/main/assets/images/Parliament.png"
      },
      {
        title: "Hippo Riders",
        link: "https://hippo-riders.vercel.app",
        body: "Travel, sunset & hippos. Tour guide within the Western Kenyan region, situated along the shores of Lake Victoria.",
        image: "https://raw.githubusercontent.com/C-o-m-o-n/image-archive/main/hippo-riders.png?token=GHSAT0AAAAAACUCWTTMPKI23KU6COJDPEIQZVMTNHQ"
      },
      {
        title: "AIDA Prompt Engeneering Web Client",
        link: "https://aidaweb.jprq.app",
        body: "This is the web interface for the AIDA project. It is a web application that allows users to interact with the AIDA system and engage in awesome conversations with the smart AIDA bot.",
        image: "https://raw.githubusercontent.com/C-o-m-o-n/image-archive/main/aida-web.png?token=GHSAT0AAAAAACUCWTTNHDYLKPX4HG4AEPBAZVMTQGA"
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
                See more  from my <a className="underline" href="https://github.com/C-o-m-o-n/">github</a> account
              </motion.h2>
            </div>
    
            <motion.div initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {options.map((option, index) => (
                <a
                  key={index}
                  href={option.link}
                  target="_blank"
                  className="cursor-pointer border dark:border-[#28084d]
                 bg-[#d8e1ec] dark:bg-[#230842] rounded-lg shadow-md hover:bg-[#4a108b]">
                   <Image src={option.image} alt={option.title} width={400} height={200} className="rounded"/>
                  <h3 className="font-bold text-center underline m-2
                   font-mono text-[green]">{option.title}</h3>
                  <p className="text-center dark:text-[#d8e1ec] hover:text-[#d8e1ec] font-mono">{option.body}</p>
    
                </a>
              ))}
            </motion.div>
    
              <div>
                <div className="hidden md:block"></div>
             
              </div>
    
          </main>
        </>
      );
    }