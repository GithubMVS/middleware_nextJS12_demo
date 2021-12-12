import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// images
import goBack from '../public/arrow_goBack.svg'

const index = () => {
  return (
    <div className={styles.middleware_demo_indexFull}>
      <div className={styles.goBack__full}>
        <Image src={goBack} alt='goBack' />
        <Link href="https://passion-project-2021-2022.vercel.app/"><a className={styles.links_learnMore}>See other demos</a></Link>
      </div>
      <div className={styles.middleware_demo_explenation}>
        <h1 className={styles.middleware_demo_indexFull_title}>Middleware demo</h1>
        <p className={styles.middleware_demo_indexFull_text}>This middleware demo will show you a glimps of what browser optemization could look like. But to put it in a more simple way: this demo will redirect you to a page that is optimized based on which browser you currently using; so you can have the best performance at anytime no matter what browser you are using all while you don't have to do a thing!</p>
        <Link href="/redirect/demo"><a className={styles.middleware_demo_indexFull_button}>go to specialised browser</a></Link>
      </div>
    </div>
  )
}

export default index
