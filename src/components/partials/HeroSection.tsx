import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/man.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Milad Abdollahi</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm{' '}
          <Typed
            strings={['a Software Engineer', 'a Problem Solver', 'an Automation Expert', 'a Odoo Expert']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://wa.me/989148505263">
            <a
              className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-[#25D366]" size={25} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/miladabdollahi/">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FaLinkedin className="text-[#0A66C2]" size={25} />
            </a>
          </Link>
          <Link href="https://github.com/miladabdollahi">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FaGithub className="text-[#181717]" size={25} />
            </a>
          </Link>
        </div>
        <Button className="mt-5 px-8">Hire Me</Button>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
