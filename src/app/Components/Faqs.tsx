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
      viewport={{ once: false, amount: 0.1 }}
      variants={Faqs2}
      className="px-7 py-3 border-2 border-text-orange rounded-[18px]"
    >
      <button
        className="flex justify-between items-center w-full   text-left text-2xl  font-bold text-text-orange"
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
      viewport={{ once: false, amount: 0.1 }}
      variants={Faqs1}
      className="px-7 py-3 border-2 border-text-orange rounded-[18px]"
    >
      <button
        className="flex justify-between w-full items-center   text-left text-2xl  font-bold text-text-orange"
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
      <section className="relative bg-faqs-bg bg-center bg-cover bg-fixed">
        {/* Overlay with brightness filter */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="max-w-7xl mx-5 xl:mx-auto brightness-100 space-y-20 py-32">
          {/* Mini heading */}
          <div className="space-y-7">
            <h2 className="text-text-orange text-start xl:text-center text-5xl xl:text-[70px] font-dragonslapper">
              FAQs
            </h2>
            <p className="text-base xl:text-3xl font-bold text-text-white2 text-start xl:text-center">
              Frequently asked questions and answers.
            </p>
          </div>

          <div className="space-y-7">
            <FaqItem
              question="Lorem ipsum dolor sit amet consectetur?"
              answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem2
              question2="Diam risus nibh parturient?"
              answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem
              question="Ridiculus ultrices fames torquent?"
              answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem2
              question2="Orci eros egestas magna?"
              answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem
              question="Quis dignissim faucibus vestibulum?"
              answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
             <FaqItem2
              question2="Orci eros egestas magna?"
              answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem
              question="Quis dignissim faucibus vestibulum?"
              answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
             <FaqItem2
              question2="Orci eros egestas magna?"
              answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
            <FaqItem
              question="Quis dignissim faucibus vestibulum?"
              answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
             <FaqItem2
              question2="Orci eros egestas magna?"
              answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
