import React from 'react'

import styles from "../demo2/demo.module.css"

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function demo({ country, latitude, longitude, city, region }) {

  country = decodeURIComponent(country)
  latitude = decodeURIComponent(latitude)
  longitude = decodeURIComponent(longitude)
  city = decodeURIComponent(city)
  region = decodeURIComponent(region)

  return (
    <div className={styles.demo}>
      <p className={styles.demo_title}>This was all fetched before you had access to this page</p>
      <div className={styles.demo_showed_full}>
        <p className={styles.demo_showed_full_text}>You are currently in: {country}</p>
        <p className={styles.demo_showed_full_text}>More specific in: {city}</p>
        <p className={styles.demo_showed_full_text}>And your region is: {region}</p>
        <p className={styles.demo_showed_full_text}>Your latitude is: {latitude}</p>
        <p className={styles.demo_showed_full_text}>Your latitude is: {longitude}</p>
      </div>

      <ul className={styles.ideas_full}>
        <p className={styles.ideas_full_title}>Cool projects you can do with this: </p>
        <ul className={styles.ideas}>
          <li className={styles.idea}></li>
          <li className={styles.idea}></li>
          <li className={styles.idea}></li>
        </ul>
      </ul>
    </div>
  )
}
