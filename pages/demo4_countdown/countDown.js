import styles from "../demo4_countdown/countDown.module.css"

// go back component
import GoBack from '../../components/BackToOtherDemos'

import Link from 'next/link'


const countDown = () => {

  return (
    <div className={styles.countDownFull}>
      <GoBack />
      <div className={styles.countDown}>
        <p className={styles.countDown_title}>This secret page will open on:</p>
        <p className={styles.countDown_text}>December 23th 2021, 10:20:00 am</p>
        <Link href='/demo4/demo'><a className={styles.countDown_link}>Try accessing page again</a></Link>
      </div>
    </div>
  )
}

export default countDown
