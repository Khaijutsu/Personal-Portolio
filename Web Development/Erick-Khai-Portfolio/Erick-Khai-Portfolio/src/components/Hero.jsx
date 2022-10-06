import React from 'react';
import styles from '../style';
import { wave, logo } from '../assets';


const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] '>
          Erick Khai <br className='sm:block hidden' /> {" "}
          Pham
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>CS Major at the University of Houston</p>
    </div>
    
    <div className=''>
      {/*resize image*/}
      <img src={logo} alt="" />

      <div className='absolute z-[] w-[30%] h-[15%] pink__gradient'>

      </div>
    </div>
  </section>
)

export default Hero;