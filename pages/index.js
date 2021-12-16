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
        <div>
          <h1 className={styles.middleware_demo_indexFull_title}>Middleware demos</h1>
          <p className={styles.middleware_demo_indexFull_text}>These middleware demos will show you a glimps of what you can do with middleware, In every demo there is also a small explenation and what you can further do on your own with each of these demo's. These are some small projects for more demo’s visit: https://vercel.com/features/edge-functions.</p>
        </div>

        <div className={styles.demos}>
          <div className={styles.demosPartOne}>
            <div className={styles.demo_each}>
              <h1 className={styles.demo_each_title}>Browser detection</h1>
              <p className={styles.demo_each_text}>This demo will automatically redirect you to a page that tells you which browser you are on. Using redirect in middleware</p>
              <Link href="/browserDetectionDemo/redirect/demo">
                <div className={styles.demo_each_link}>
                  <Image src={goBack} />
                  <p className={styles.demo_each_link_text}>Try Demo</p>
                </div>
              </Link>
            </div>

            <div className={styles.demo_each}>
              <h1 className={styles.demo_each_title}>Location detection</h1>
              <p className={styles.demo_each_text}>This middleware demo will show you your: country, city, latitude, longitude and region. Using request in middleware.</p>
              <Link href="/demo2/demo">
                <div className={styles.demo_each_link}>
                  <Image src={goBack} />
                  <p className={styles.demo_each_link_text}>Try Demo</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.demosPartTwo}>
            <div className={styles.demo_each}>
              <h1 className={styles.demo_each_title}>My own small project</h1>
              <p className={styles.demo_each_text}>This is a small countdown that will open a page (could be a shop for example) when the countdown finishes</p>
              <Link href="/demo4/demo">
                <div className={styles.demo_each_link}>
                  <Image src={goBack} />
                  <p className={styles.demo_each_link_text}>Try Demo</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
