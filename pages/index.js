import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <p>test</p>
      <Link href="/redirect">go to redirect</Link>
    </div>
  )
}

export default index
