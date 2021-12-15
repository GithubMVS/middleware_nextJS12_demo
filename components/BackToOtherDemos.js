import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../components/BackToOtherDemos.module.css'

import arrow from '../public/arrow_goBack.svg'

const BackToOtherDemos = () => {
  return (
    <header>
      <Link href="/">
        <div className={styles.goBack_full}>
          <Image src={arrow} />
          <p className={styles.goBack_full_text}>Other demo's</p>
        </div>
      </Link>
    </header>
  )
}

export default BackToOtherDemos
