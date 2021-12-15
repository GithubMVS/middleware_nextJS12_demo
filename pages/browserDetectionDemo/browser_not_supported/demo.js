import React from 'react'
import styles from '../../../styles/demo.module.css'

// go back
import GoBack from '../../../components/BackToOtherDemos'

const demo = () => {
  return (
    <div className={styles.full}>
      <GoBack />
      <p className={styles.full_title}>this is browser is <span className={styles.full_title_special}>not</span> supported</p>
    </div>
  )
}

export default demo
