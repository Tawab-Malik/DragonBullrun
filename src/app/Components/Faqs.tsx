// components/Faq.js
"use client"
import { useState } from 'react';
import { motion, Variants } from "framer-motion";
import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing Font Awesome icons

const Faqs2: Variants = {
  offscreen: {
    x: -150,
  },
  onscreen: {
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.0,
    },
  },
};

const Faqs1: Variants = {
  offscreen: {
    x: 150,
  },
  onscreen: {
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.0,
    },
  },
};

const FaqItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={Faqs2}
      className="px-7 py-3 border-2 border-text-orange rounded-[18px] brightness-100"
    >
      <button
        className="flex brightness-100 justify-between items-center w-full   text-left text-base md:text-2xl  font-bold text-text-orange"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <FaChevronUp className=' size-4' /> : <FaChevronDown className=' size-4' />} {/* Conditional rendering of arrow icon */}
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="mt-2 text-base text-text-white2 ">{answer}</p>
      </div>
    </motion.div>
  );
};

const FaqItem2 = ({ question2, answer2 }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={Faqs1}
      className="px-7 py-3 border-2 border-text-orange rounded-[18px] brightness-100"
    >
      <button
        className="flex brightness-100  justify-between w-full items-center   text-left text-base md:text-2xl  font-bold text-text-orange"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question2}
        {isOpen ? <FaChevronUp className=' size-4' /> : <FaChevronDown className=' size-4' />}
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="mt-2 text-base text-text-white2 ">{answer2}</p>
      </div>
    </motion.div>
  );
};

const Faqs = () => {
  return (
    <>
      <section className="relative bg-faqs-bg bg-center bg-cover bg-fixed overflow-hidden">
        {/* Overlay with brightness filter */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="max-w-7xl mx-5 xl:mx-auto brightness-100 space-y-20 py-24 xl:py-32">
          {/* Mini heading */}
          <div className="space-y-7">
            <h2 className="text-text-orange text-start xl:text-center text-3xl md:text-5xl xl:text-[70px] font-dragonslapper">
              FAQs
            </h2>
            <p className="text-base xl:text-3xl font-bold text-text-white2 text-start xl:text-center">
              Frequently asked questions and answers.
            </p>
          </div>

          <div className="space-y-7 brightness-100">
            <FaqItem
              question="What is dragon bull run?"
              answer="Dragon Bull Run offers a thrilling free-to-play experience on the Ethereum blockchain, where adventure awaits at every twist and turn! Dive into an exhilarating journey through the enchanted realm of the dragon’s lair, where the excitement of pursuit intertwines with the joy of earning tangible rewards."
            />
            <FaqItem2
              question2="How do i buy $DBRZ?"
              answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem
              question="What is the $DBRZ token and what are the token details?"
              answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem2
              question2="What makes Dragon Bull Run different from other blockchain games?"
              answer2="Dragon Bull Run presents a distinctive fusion of blockchain technology and captivating gameplay, providing players with the opportunity to earn tangible rewards while engaging in exhilarating adventures within a fantasy realm."
            />
            <FaqItem
              question="How do I play Dragon Bull Run and is it free?"
              answer="Indeed, Dragon Bull Run is free to play. Nonetheless, players have the choice to acquire in-game items or access premium features by utilizing $DBRZ tokens."
            />
             <FaqItem2
              question2="How can players earn rewards while playing Dragon Bull Run?"
              answer2="Players have the opportunity to earn rewards through various means such as collecting dragon eggs, overcoming challenges, and engaging in community events. "
            />
            <FaqItem
              question="Is there a limit to the number of $DBRZ tokens players can earn?"
              answer="Players have the freedom to accumulate $DBRZ tokens without any set limitations. Nevertheless, rewards are contingent upon in-game accomplishments and involvement, guaranteeing equity and equilibrium."
            />
             <FaqItem2
              question2="When can I claim my $DBRZ Tokens?"
              answer2="Once all the stages of our presale have concluded, your tokens will be available for claiming. A specific claim date will be announced in due course."
            />
            <FaqItem
              question="Who do I contact for support?"
              answer="Please feel free to reach out to us through our Telegram or Discord groups. Alternatively, you can contact us via our live chat, where one of our team members will promptly assist you."
            />
             <FaqItem2
              question2="Has the smart contract been audited?"
              answer2="The Dragon Bull Run smart contract underwent a comprehensive audit conducted by the auditing firm, Cyberscope. This meticulous examination ensures the platform’s robust security, reliability, and integrity."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
