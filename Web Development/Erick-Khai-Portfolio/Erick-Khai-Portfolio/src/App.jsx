import React from 'react'
import styles from './style'
import { Navbar, Hero, AboutMe, Projects, Clubs, Footer} from './components'


const App = () =>  

  (
  <div className = "bg-primary w-fill overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar /> 
      </div>

    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutMe />
        <Projects />
        <Clubs />
        <Footer />
      </div>
    </div>  

  </div>
)


export default App;