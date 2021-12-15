import React from 'react'
import styles from '../../../styles/demo.module.css'

// go back
import GoBack from '../../../components/BackToOtherDemos'

const demo = () => {
  return (
    <div className={styles.full}>
      <GoBack />
      <p className={styles.demo_title}>fetching your browser with middleware:</p>
      <p className={styles.demo_explenation}>This small demo fetches which browser you are using and automatically redirects to their page, if you are using an older browser you are going to be send to a 'not supported page' (in other words if you are using chrome you are going to be send to the "chrome page", if you are using firefox you are going to be send to the 'firefox page', etc...) for this demo I used `NextResponse.redirect` to redirect every user to the right page.</p>
      <div className={styles.demo_showed_full}>
        <p className={styles.demo_showed_full_title}>We think you are using the:</p>
        <p className={styles.demo_showed_full_text}>Sorry, this browser is not supported.</p>
      </div>

      <div className={styles.ideas_full}>
        <p className={styles.ideas_full_title}>Some ideas you can do with this: </p>
        <ul className={styles.ideas}>
          <li className={styles.idea}>Browser block</li>
          <li className={styles.idea}>Old browser support</li>
          <li className={styles.idea}>Specific browser optimatization</li>
        </ul>
      </div>
    </div>
  )
}

export default demo
