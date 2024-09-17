import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

const paymentlogo = "/assets/Hands Give.svg"

export const RevealBento = () => {
  return (
    <div className="h-fit bg-zinc-900 px-4 pt-12 pb-24 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <Footer />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <Image
      src="/logo.jpg"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
      width={600}
      height={400}
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I&apos;m Jigyasu.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href="https://www.linkedin.com/in/jigyasumakkxr/"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 h-full bg-violet-200 md:col-span-3"
    >
      <a
        href="https://blog.jigyasumakkxr.online/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <Image src="/JK.png" alt="" className="h-9 w-fit" width={600} height={400} />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 h-full bg-gray-700 md:col-span-3"
    >
      <a
        href="https://devflex.jigyasumakkxr.online/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 h-full bg-blue-100 md:col-span-3"
    >
        <a
        href="https://payments.jigyasumakkxr.online/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <Image src={paymentlogo} alt="" className="h-12 w-fit" width={600} height={400} />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 flex flex-col justify-center items-center gap-4 h-full md:col-span-3"
    >
      <a
        href="https://drive.google.com/file/d/13C8HxQgcvxSO2WwXWI0NK6FopSmg43A8/view?usp=sharing"
        className="grid h-full place-content-center text-3xl text-black"
      >
          <p className="text-center text-lg text-zinc-400">Resume</p>
        
      </a>
    </Block>
  </>
);

const Footer = () => {
  return (
    <Block
      className="col-span-12 flex flex-col justify-center items-center gap-4 h-full md:col-span-12"
    >
      <p className="text-center text-lg text-zinc-400">Undergrad Mechanical Engineering IIT Jammu</p>
    </Block>
  )
}

