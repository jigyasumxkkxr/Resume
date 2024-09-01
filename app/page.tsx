"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { RevealBento } from "@/components/ui/RevealBento";

export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
 
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Bento",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/jigyasumakkxr/",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/Jigyasu_20",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/jigyasumxkkxr",
    },
  ];
  return (
    <div className="min-h-screen max-h-fit max-w-screen bg-black" suppressHydrationWarning={true}>
      <div className="flex flex-col overflow-hidden w-100">
      <ContainerScroll
        titleComponent={
          <div>
            <h1 className="text-4xl font-semibold text-white">
              Power of building <br />
              <span className="text-6xl md:text-[6rem] font-bold mt-1 leading-none">
                Great Projects
              </span>
            </h1>
          </div>
        }
      >
        <Image
          src={`https://imgtr.ee/images/2024/08/23/df4a1d3268587ae71c3e7c462d0f5005.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    <div className="w-full flex justify-center fixed bottom-2 z-50">
      <FloatingDock 
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
    </div>
    <div id="Bento">
      <RevealBento />
    </div>
    </div>
  );
}
