import React from 'react'

import styles from "../../styles/demo.module.css"

// go back component
import GoBack from '../../components/BackToOtherDemos'

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
    <div className={styles.full}>
      <GoBack />
      <p className={styles.demo_title}>fetching location with middleware:</p>
      <p className={styles.demo_explenation}>This small demo fetches your location details before you could access the page and displays them on the screen. For example: if you are currently in Japan (and don't have a vpn), your country will display "japan", if you move to Belgium a week later it would display belgium. The country is send to the page using `NextResponse.rewrite`</p>
      <div className={styles.demo_showed_full}>
        <p className={styles.demo_showed_full_title}>Your location details:</p>
        <p className={styles.demo_showed_full_text}><span className={styles.demo_showed_full_text_special}>You are currently in: </span>{country}</p>
        <p className={styles.demo_showed_full_text}><span className={styles.demo_showed_full_text_special}>More specific in: </span>{city}</p>
        <p className={styles.demo_showed_full_text}><span className={styles.demo_showed_full_text_special}>And your region is: </span>{region}</p>
        <p className={styles.demo_showed_full_text}><span className={styles.demo_showed_full_text_special}>Your latitude is: </span>{latitude}</p>
        <p className={styles.demo_showed_full_text}><span className={styles.demo_showed_full_text_special}>Your longitude is: </span>{longitude}</p>
      </div>

      <ul className={styles.ideas_full}>
        <p className={styles.ideas_full_title}>Some ideas you can do with this: </p>
        <ul className={styles.ideas}>
          <li className={styles.idea}>Regional discounts.</li>
          <li className={styles.idea}>Country based acces to website.</li>
          <li className={styles.idea}>Auto translate a website based on the country.</li>
        </ul>
      </ul>
    </div>
  )
}
