import { IoMail } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function Hire() {
    return (
        <main className="min-h-screen p-4 md:p-12 lg:p-24">
             

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

                <div>
               <h2 className="text-2xl mb-8 font-mono">
        I appreciate you taking your time to send me an email</h2>     
                    <div className="p-3 m-2">

                        <p className="flex gap-2 items-center p-2"><span><IoMail /></span> Enter your email </p>
                        <input className="p-3 rounded-3xl w-full" placeholder="Enter your email"></input>
                    </div>

                    <div className="p-3 m-2">
                        <p className="flex gap-2 items-center p-2"><span><MdOutlineMessage /></span> Leave any message </p>
                        <textarea className="p-3 rounded-2xl w-full h-32"></textarea>
                    </div>

                    <div className="p-3 m-2">
                        <button className="p-3 rounded-3xl w-full bg-[#3a3c50]">Send Me a mail</button>
                    </div>

                </div>

                <div>
                    <Image className="rounded-2xl" src="https://avatars.githubusercontent.com/u/94454803?v=4"
                     width={500} height={400} alt="my pic"></Image>
                </div>

            </div>
        </main>
    )
}