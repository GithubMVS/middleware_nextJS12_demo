import { NextRequest, NextResponse } from 'next/server'
import moment from 'moment'

export async function middleware(req: NextRequest) {

  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const accessTime = "December 23th 2021, 10:20:00 am"

  const afterDate = currentTime > accessTime

  // if currentTime = accesstime of currenttime = later then accesTime
  if (afterDate === true) {
    // go to demo.js page
    return NextResponse.redirect("/demo4_countdown/secret_page/demo")

  }
  else {
    // go to countDown page
    return NextResponse.redirect("/demo4_countdown/countDown")
  }
}