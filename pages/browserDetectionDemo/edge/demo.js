import React from 'react'
import styles from '../../../styles/demo.module.css'

// go back
import GoBack from '../../../components/BackToOtherDemos'


const demo = () => {
  return (
    <div className={styles.full}>
      <GoBack />
      <p className={styles.full_title}> You are using the <span className={styles.full_title_special}>edge</span> browser</p>
    </div>
  )
}

export default demo
