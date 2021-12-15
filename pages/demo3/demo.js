import React from 'react'

import styles from "../../styles/demo.module.css"

// go back component
import GoBack from '../../components/BackToOtherDemos'

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function demo({ country, browser }) {
  country = decodeURIComponent(country)
  browser = decodeURIComponent(browser)
  return (
    <div className={styles.full}>
      <GoBack />
      <div>
        <p>{country}</p>
        <p>{browser}</p>
      </div>
      <ul className={styles.ideas_full}>
        <p className={styles.ideas_full_title}>Some ideas you can do with this: </p>
        <ul className={styles.ideas}>
          <li className={styles.idea}>dfg</li>
          <li className={styles.idea}></li>
          <li className={styles.idea}></li>
        </ul>
      </ul>
    </div>
  )
}
