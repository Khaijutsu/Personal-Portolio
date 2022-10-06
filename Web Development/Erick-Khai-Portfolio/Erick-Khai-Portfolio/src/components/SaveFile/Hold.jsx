// Navbar.jsx

import {useState} from 'react'
import { admin, close, menu } from '../assets'
import { navLinks } from '../constants'

// All the css is tailwind, so check the documentation for it. For instance, the className for img w-[124px] is tailwind

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center'>
      <img src={admin} alt="profile-pic" className='w-[200px] h-[200px] relative top-2 rounded-full' />
    
      <ul className='list-none sm:flex hidden justify-end items-center m-0 p-0 flex-1 gap-4'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer hover:bg-sky-700 text-[24px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a to={'/AboutMe'}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-6 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}
            >
              <a href={'#${nav.id'}>
                {nav.title}
              </a>

            </li>
            ))}
          </ul>
        </div>
      </div>
    
    </nav>

  )
}

export default Navbar


// App.jsx
import React from 'react'
import styles from './style'
import { Navbar, Hero, AboutMe, Projects, Clubs, Footer} from './components'
import { Route, Routes } from 'react-router-dom'

const App = () =>  

  (
  <div className = "bg-primary w-fill overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <div>
          <Routes>
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Clubs" element={<Clubs />} />
          </Routes>
        </div>
        
      </div>

    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>  

  </div>
)


export default App;