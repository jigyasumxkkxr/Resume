"use client";
import React, { useEffect, useState } from "react";
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
import { Canvas } from "@react-three/fiber"
import Cylinder from "@/components/ui/cylinder"
import { Bloom, EffectComposer } from "@react-three/postprocessing"

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
  const [fov, setFov] = useState(40); // Default fov

  // Update FOV based on screen size
  useEffect(() => {
    const handleResize = () => {
      // If screen width is less than 1024px (Tailwind 'lg'), set fov to 20, otherwise 40
      if (window.innerWidth < 1024) {
        setFov(20);
      } else {
        setFov(40);
      }
    };

    // Call handleResize on component mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="min-h-screen max-h-fit max-w-screen bg-zinc-900" suppressHydrationWarning={true}>
      <div className="flex flex-col overflow-hidden w-full h-3/5 md:h-4/5 lg:h-screen">
      <Canvas flat camera={{fov}}>
        <mesh>
          <ambientLight />
          <Cylinder />
          <EffectComposer>
            <Bloom
              mipmapBlur  
              intensity={2} 
              luminanceThreshold={0.95} 
              luminanceSmoothing={0.1} 
              
            />
          </EffectComposer>
        </mesh>
      </Canvas>
    </div>
    <div className="w-full flex justify-center fixed bottom-2 z-50">
      <FloatingDock 
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
    </div>
    <div id="Bento" className="bg-zinc-900">
      <RevealBento />
    </div>
    </div>
  );
}
