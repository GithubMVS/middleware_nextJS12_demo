import React from 'react'
import styles from '../../styles/demo.module.css'

// go back

const demo = () => {
  return (
    <div className={styles.full}>
      <div>

      </div>
      <p className={styles.full_title}>This is page is optimized for the <span className={styles.full_title_special}>chrome</span> browser</p>
      <p>Please keep in mind that this demo was made in December of 2021 and that the browser problems might already be fixed.</p>
    </div>
  )
}

export default demo
