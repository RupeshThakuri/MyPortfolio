import React from 'react';

//importing components
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Project';
import Skills from '@/components/Skills/Skills';
import Contact from "@/components/Contact/Contact"


export default function Home() {
  return (
    <>
      <div className='pages overflow-hidden'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
