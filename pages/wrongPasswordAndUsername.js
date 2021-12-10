import React from 'react'
import Link from 'next/link'
import style from '../styles/wrongInfo.module.css'

const WrongPasswordAndUsername = () => {
  return (
    <div className={style.fullWrongPage}>
      <p className={style.fullWrongPage_title}>You entered the wrong <span className={style.fullWrongPage_special}>username</span> AND <span className={style.fullWrongPage_special}>password</span></p>

      <div className={style.fullWrongPage_buttonsFull}>
        <div className={style.fullWrongPage_buttons}><Link href="/middleware_/demo">Try again</Link></div>
        <div className={style.fullWrongPage_buttons}><Link href="/">Back to homepage</Link></div>
      </div>
    </div>
  )
}

export default WrongPasswordAndUsername
