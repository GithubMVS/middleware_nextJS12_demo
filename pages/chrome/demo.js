import React from 'react'
import styles from '../../styles/demo.module.css'

const demo = () => {
  return (
    <div className={styles.full}>
      <p className={styles.full_title}>This is page is optimized for the <span className={styles.full_title_special}>chrome</span> browser</p>
    </div>
  )
}

export default demo
