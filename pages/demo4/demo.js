import React from 'react'

import styles from "../demo4/demo.module.css"

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function demo({ country, browser }) {
  country = decodeURIComponent(country)
  browser = decodeURIComponent(browser)
  return (
    <div>
      <p>{country}</p>
      <p>{browser}</p>
    </div>
  )
}
