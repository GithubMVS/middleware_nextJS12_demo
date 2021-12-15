import React from 'react'

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
    <div>
      <p>{country}</p>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <p>{city}</p>
      <p>{region}</p>
    </div>
  )
}
