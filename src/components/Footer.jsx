import React from "react";
import { email, link, phone } from "../assets";

export const Footer = () => {
  return (
    <div className='bg-tertiary text-secondary py-[50px] font-[16px] flex justify-center items-center'>
      <div className='flex justify-center items-center md:w-fit w-full md:gap-12 gap-16 flex-wrap p-1 '>
        <div className='h-[130px] flex flex-col md:m-auto'>
          <h3 className='font-bold mb-1'>Links</h3>
          <ul className='flex flex-col'>
            <a href='#about' spy={true}>
              About
            </a>
            <a href='#work' spy={true}>
              Work
            </a>
            <a href='#contact' spy={true}>
              Contact
            </a>
          </ul>
        </div>
        <div className='h-[130px] flex flex-col md:m-auto'>
          <h3 className='font-bold mb-1'>Aziz Zai</h3>
          <p>70599, Stuttgart</p>
          <p>Deutschland</p>
        </div>
        <div className='h-[130px] flex flex-col md:m-auto'>
          <h3 className='font-bold mb-1'>Contact</h3>
          <p className='flex gap-2'>
            <img src={phone} alt='phone' className='w-5 h-5' /> (+49)179 6686832
          </p>
          <p className='flex gap-2'>
            <img src={email} alt='email' className='w-5 h-5' /> info@aziz-zai.de
          </p>
          <p className='flex gap-2'>
            <img src={link} alt='website-link' className='w-5 h-5' /> www.aziz-zai.com
          </p>
        </div>
      </div>
    </div>
  );
};
