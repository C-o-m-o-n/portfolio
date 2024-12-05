"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Showcase() {
  const [selectedOption, setSelectedOption] = useState<string>();
  const [isDown, setIsDown] = useState<boolean>(false);
  // const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const router = useRouter();

  type optionType = {
    title: string;
    link: string;
    body: string;
    image: string;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsDown(currentScrollPos > prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIsDown(!isDown);
  };

  const handleScrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setIsDown(!isDown);
  };

  let options = [
    {
      title: "Uamuzi Foundation",
      link: "https://uamuzi.org",
      body: "A social enterpise advocating for social justice with a specific focus on the youth, women and persons living with disabilities who deserve equal economic, political and social rights, while integrating technology and data.",
      image: "/images/uamuzi.png",
    },

    {
      title: "Handz-on Africa",
      link: "https://handzonafrica.org",
      body: "Empower Africa's next generation of innovators with STEAM education",
      image: "/images/handz-on-africa.png",
    },
    {
      title: "Imagisha",
      link: "https://imagisha.vercel.app/",
      body: "An AI-powered image generation and and transformation platform",
      image: "/images/imagisha.png",
    },
    {
      title: "Jumbo Movies",
      link: "https://jumbo-filmz.vercel.app/",
      body: "Get Unlimited movies, Series and more",
      image: "/images/jumbo-filmz.png",
    },

    {
      title: "Online Blood Bank",
      link: "https://blood-bank-tknp.onrender.com/",
      body: "This is an open-source initiative aimed at promoting blood donation and saving lives through a user-friendly website.",
      image: "/images/blood-bank.png",
    },
    {
      title: "Friends of the people DAO serer",
      link: "https://github.com/Friendsofthepeople/django-recall-server",
      body: "A Django server for managing the verification of constituents, publishing of representative information, and signing to recall them.",
      image:
        "https://github.com/Friendsofthepeople/django-recall-server/raw/main/assets/images/Parliament.png",
    },
    {
      title: "Hippo Riders",
      link: "https://hippo-riders.vercel.app",
      body: "Travel, sunset & hippos. Tour guide within the Western Kenyan region, situated along the shores of Lake Victoria.",
      image: "/images/hippo-riders.png",
    },
    {
      title: "AIDA Prompt Engeneering Web Client",
      link: "https://aidaweb.jprq.app",
      body: "This is the web interface for the AIDA project. It is a web application that allows users to interact with the AIDA system and engage in awesome conversations with the smart AIDA bot.",
      image: "/images/aida-web.png",
    },
    {
      title: "Bonga",
      link: "https://main.d3iyt42krporvv.amplifyapp.com/",
      body: "Make Your Voice Heard In Governance And Decision Making",
      image: "/images/bonga.png",
    },
    {
      title: "Unlokinno",
      link: "https://www.unlokinno.com/",
      body: "looking for academic labs in the Global South to support your Climatetech startup or corporate project?",
      image: "/images/unlokinno.png",
    },
  ];

  return (
    <>
      <main className="min-h-screen p-4 ">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 font-mono"
          >
            Checkout some of <span className="text-[green]">My projects.</span>{" "}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl mb-8 font-mono"
          >
            See more from my{" "}
            <a className="underline text-blue-600" href="https://github.com/C-o-m-o-n/">
              github <FiExternalLink className="inline" />
            </a>{" "}
            account
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {options.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              className="cursor-pointer border dark:border-[#28084d]
                 bg-[#d8e1ec] dark:bg-[#230842] rounded-lg shadow-md hover:bg-[#4a108b]"
            >
              <img
                src={`${option.image}`}
                alt={option.title}
                className="rounded w-full"
              />
              <h3
                className="font-bold text-center underline m-2
                   font-mono text-[green]"
              >
                {option.title}
              </h3>
              <p className="text-center dark:text-[#d8e1ec] hover:text-[#d8e1ec] font-mono">
                {option.body.length <= 60
                  ? option.body
                  : option.body.slice(0, 60) + "..."}
              </p>
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
