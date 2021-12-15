import React from 'react'

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
