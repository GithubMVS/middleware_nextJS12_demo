import React from 'react'

import styles from "../demo4/demo.module.css"

// go back component
import GoBack from '../../components/BackToOtherDemos'

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function demo({ country, browser }) {
  country = decodeURIComponent(country)
  browser = decodeURIComponent(browser)
  return (
    <div>
      <GoBack />
      <div>
        <p>{country}</p>
        <p>{browser}</p>
      </div>
    </div>
  )
}
